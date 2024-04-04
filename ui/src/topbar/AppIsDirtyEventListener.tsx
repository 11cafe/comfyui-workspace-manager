import { useContext, useEffect, useRef, useState } from "react";
// @ts-expect-error
import { app } from "/scripts/app.js";
import { WorkspaceContext } from "../WorkspaceContext";
import {
  changelogsTable,
  userSettingsTable,
  workflowsTable,
} from "../db-tables/WorkspaceDB";
import { Tag, Tooltip, useToast } from "@chakra-ui/react";
import { matchShortcut } from "../utils";
import { EShortcutKeys } from "../types/dbTypes";
import useDebounceFn from "../customHooks/useDebounceFn";
import { deepJsonDiffCheck } from "../utils/deepJsonDiffCheck";
import { SHORTCUT_TRIGGER_EVENT } from "../const";

export default function AppIsDirtyEventListener() {
  const { isDirty, setIsDirty, setRoute, saveCurWorkflow } =
    useContext(WorkspaceContext);
  const isDirtRef = useRef(isDirty);
  const [isOutdated, setIsOutdated] = useState(false);
  const toast = useToast();
  const autoSaveTimer = useRef<number | null>(null);

  useEffect(() => {
    isDirtRef.current = isDirty;
  }, [isDirty]);

  useEffect(() => {
    const shortcutListener = (event: KeyboardEvent) => {
      if (document.visibilityState === "hidden") return;
      const matchResult = matchShortcut(event);
      if (matchResult) {
        if (matchResult === EShortcutKeys.openSpotlightSearch) {
          event.preventDefault();
        }
        window.dispatchEvent(
          new CustomEvent(SHORTCUT_TRIGGER_EVENT, {
            detail: {
              shortcutType: matchResult,
            },
          }),
        );
        switch (matchResult) {
          case EShortcutKeys.SAVE:
            saveCurWorkflow();
            break;
          case EShortcutKeys.SAVE_AS:
            setRoute("saveAsModal");
            break;
          case EShortcutKeys.openSpotlightSearch:
            setRoute("spotlightSearch");
            break;
        }
      } else if (
        // @ts-expect-error
        event.target?.matches("input, textarea") &&
        Object.keys(app.canvas.selected_nodes ?? {}).length
      ) {
        debounceOnIsDirty();
      }
    };
    const originalOnAfterChange = app.canvas.onAfterChange;
    app.graph.onAfterChange = function () {
      // Call the original onAfterChange method
      originalOnAfterChange?.apply(this, arguments);
      debounceOnIsDirty();
    };

    const originalOnConfigure = app.graph.onConfigure;
    app.graph.onConfigure = function () {
      originalOnConfigure?.apply(this, arguments);
      // delay check diff json cuz it takes time for graph.serialize() to settle up and return the correct json
      setTimeout(() => {
        const deepCheck = deepJsonDiffCheck(
          app.graph.serialize(),
          JSON.parse(workflowsTable?.curWorkflow?.json ?? "{}"),
        );
        if (!deepCheck) {
          debounceOnIsDirty();
        }
      }, 1000);
    };

    document.addEventListener("click", (e) => {
      if (!Object.keys(app.canvas.selected_nodes ?? {}).length) return;
      if (
        app.canvas.node_over != null ||
        app.canvas.node_capturing_input != null ||
        app.canvas.node_widget != null
      ) {
        debounceOnIsDirty();
      }
    });
    document.addEventListener("keydown", shortcutListener);

    if (
      userSettingsTable?.settings?.autoSave &&
      userSettingsTable.settings.autoSaveDuration
    ) {
      autoSaveTimer.current = setInterval(() => {
        // auto save workflow every 5s
        autoSaveWorkflow();
      }, userSettingsTable.settings.autoSaveDuration * 1000);
    }

    return () => {
      document.removeEventListener("keydown", shortcutListener);
      autoSaveTimer.current && clearInterval(autoSaveTimer.current);
    };
  }, []);
  const autoSaveWorkflow = async () => {
    // autosave workflow if enabled
    if (
      workflowsTable?.curWorkflow?.saveLock ||
      !workflowsTable?.curWorkflow?.id ||
      !isDirtRef.current
    ) {
      return;
    }
    const graphJson = JSON.stringify(app.graph.serialize());
    await workflowsTable?.updateFlow(workflowsTable.curWorkflow.id, {
      json: graphJson,
    });
    changelogsTable?.create({
      workflowID: workflowsTable.curWorkflow.id,
      isAutoSave: true,
      json: graphJson,
    });
    setIsDirty(false);
  };

  const onIsDirty = async () => {
    if (workflowsTable?.curWorkflow?.saveLock || isDirtRef.current) return;
    setIsDirty(true);
    if (
      userSettingsTable?.settings?.autoSave &&
      workflowsTable?.curWorkflow?.id &&
      !isOutdated
    ) {
      const isLatest = await workflowsTable?.latestVersionCheck();
      if (!isLatest) {
        setIsOutdated(true);
      }
    }
  };
  const [debounceOnIsDirty, _] = useDebounceFn(onIsDirty, 900);

  return isOutdated ? (
    <Tooltip label="This workflow was changed by another tab, so you are not working on the latest version. Please refresh page to see the latest version of this workflow.">
      <Tag colorScheme="yellow">⚠️Outdated version</Tag>
    </Tooltip>
  ) : null;
}
