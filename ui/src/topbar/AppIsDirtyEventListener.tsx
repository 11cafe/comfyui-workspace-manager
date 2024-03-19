import { useContext, useEffect } from "react";
// @ts-expect-error
import { app } from "/scripts/app.js";
import { WorkspaceContext } from "../WorkspaceContext";
import {
  changelogsTable,
  userSettingsTable,
  workflowsTable,
} from "../db-tables/WorkspaceDB";
import { Box, useToast } from "@chakra-ui/react";
import { matchShortcut } from "../utils";
import { EShortcutKeys } from "../types/dbTypes";
import useDebounceFn from "../customHooks/useDebounceFn";
import { deepJsonDiffCheck } from "../utils/deepJsonDiffCheck";

export default function AppIsDirtyEventListener() {
  const { isDirty, setIsDirty, setRoute, saveCurWorkflow } =
    useContext(WorkspaceContext);
  const toast = useToast();
  useEffect(() => {
    const shortcutListener = async (matchResult: string) => {
      switch (matchResult) {
        case EShortcutKeys.SAVE:
          saveCurWorkflow();
          break;
        case EShortcutKeys.SAVE_AS:
          setRoute("saveAsModal");
          break;
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
    document.addEventListener("keydown", async function (event) {
      if (document.visibilityState === "hidden") return;
      const matchResult = await matchShortcut(event);
      if (matchResult) {
        shortcutListener(matchResult);
      } else if (
        // @ts-expect-error
        event.target?.matches("input, textarea") &&
        Object.keys(app.canvas.selected_nodes ?? {}).length
      ) {
        debounceOnIsDirty();
      }
    });
  }, []);
  const autoSaveWorkflow = async () => {
    // autosave workflow if enabled
    if (!workflowsTable?.curWorkflow?.id) {
      return;
    }
    const graphJson = JSON.stringify(app.graph.serialize());
    graphJson != null &&
      (await workflowsTable?.updateFlow(workflowsTable.curWorkflow.id, {
        json: graphJson,
      }));
    changelogsTable?.create({
      workflowID: workflowsTable.curWorkflow.id,
      isAutoSave: true,
      json: graphJson,
    });
    setIsDirty(false);
    toast({
      position: "bottom-left",
      duration: 1000,
      render: () => (
        <Box color="white" p={3}>
          Auto saved
        </Box>
      ),
    });
  };
  const [debounceAutoSaveWorkflow, _cancelDebounceAutoSaveWorkflow] =
    useDebounceFn(autoSaveWorkflow, 1000);
  const onIsDirty = async () => {
    if (workflowsTable?.curWorkflow?.saveLock) return;
    const autoSaveEnabled = await userSettingsTable?.getSetting("autoSave");
    if (!autoSaveEnabled) {
      !isDirty && setIsDirty(true);
      return;
    }
    if (workflowsTable?.curWorkflow?.id && autoSaveEnabled) {
      const isLatest = await workflowsTable?.latestVersionCheck();
      // isLast will alwasy be false when click "Load" to load a workflow
      //   const isLatest = true;
      if (!isLatest) {
        toast({
          title: "Your changes cannot be saved!",
          description:
            "You are working on an outdated version. This workflow is changed by another tab. Please refresh to get the latest version.",
          status: "warning",
          isClosable: true,
          duration: null,
        });
      } else {
        debounceAutoSaveWorkflow();
      }
    }
  };
  const [debounceOnIsDirty, _] = useDebounceFn(onIsDirty, 500);

  return null;
}
