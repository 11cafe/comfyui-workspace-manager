import { useContext, useEffect } from "react";
// @ts-expect-error
import { app } from "/scripts/app.js";
import { WorkspaceContext } from "../WorkspaceContext";
import { userSettingsTable, workflowsTable } from "../db-tables/WorkspaceDB";
import { useToast } from "@chakra-ui/react";
import { matchShortcut } from "../utils";
import { EShortcutKeys } from "../types/dbTypes";

export default function AppEventListener() {
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
  const onIsDirty = async () => {
    if (workflowsTable?.curWorkflow?.saveLock) return;
    const autoSaveEnabled = await userSettingsTable?.getSetting("autoSave");
    if (!autoSaveEnabled) {
      setIsDirty(true);
    }
    if (workflowsTable?.curWorkflow?.id && autoSaveEnabled) {
      const isLatest = await workflowsTable?.latestVersionCheck();
      if (!isLatest) {
        toast({
          title: "You are working on an outdated version",
          description:
            "This workflow is changed by another tab. Please close the page and reopen to get the latest version.",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      } else {
        // autosave workflow if enabled
        const graphJson = JSON.stringify(app.graph.serialize());
        graphJson != null &&
          (await workflowsTable?.updateFlow(workflowsTable.curWorkflow.id, {
            json: graphJson,
          }));
        setIsDirty(false);
      }
    }
  };
  return null;
}
