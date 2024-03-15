import { useContext, useEffect } from "react";
// @ts-expect-error
import { app } from "/scripts/app.js";
import { WorkspaceContext } from "../WorkspaceContext";
import { userSettingsTable, workflowsTable } from "../db-tables/WorkspaceDB";
import { useToast } from "@chakra-ui/react";
import { matchShortcut } from "../utils";
import { EShortcutKeys } from "../types/dbTypes";
import useDebounceFn from "../customHooks/useDebounceFn";

export default function AppIsDirtyEventListener() {
  const { setIsDirty, setRoute, saveCurWorkflow } =
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

    const originalOnAfterChange = app.graph.onAfterChange;
    app.graph.onAfterChange = function () {
      // Call the original onAfterChange method
      // Use .apply() to correctly set 'this' context and pass all arguments
      originalOnAfterChange?.apply(app.canvas, arguments);
      onIsDirty();
    };

    document.addEventListener("click", (e) => {
      if (
        app.canvas.node_over != null ||
        app.canvas.node_capturing_input != null ||
        app.canvas.node_widget != null
      ) {
        onIsDirty();
      }
    });
    document.addEventListener("keydown", async function (event) {
      if (document.visibilityState === "hidden") return;

      const matchResult = await matchShortcut(event);
      if (matchResult) {
        shortcutListener(matchResult);
        // @ts-expect-error
      } else if (event.target?.matches("input, textarea")) {
        onIsDirty();
      }
    });
  }, []);
  const autoSaveWorkflow = async () => {
    // autosave workflow if enabled
    const graphJson = JSON.stringify(app.graph.serialize());
    graphJson != null &&
      (await workflowsTable?.updateFlow(workflowsTable.curWorkflow!.id, {
        json: graphJson,
      }));
    setIsDirty(false);
  };
  const [debounceAutoSaveWorkflow, _cancelDebounceAutoSaveWorkflow] =
    useDebounceFn(autoSaveWorkflow, 1000);
  const onIsDirty = async () => {
    if (workflowsTable?.curWorkflow?.saveLock) return;
    const autoSaveEnabled = await userSettingsTable?.getSetting("autoSave");
    if (!autoSaveEnabled) {
      setIsDirty(true);
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
  return null;
}
