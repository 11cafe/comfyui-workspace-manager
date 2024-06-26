import { useContext, useEffect, useRef } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import { workflowsTable } from "../db-tables/WorkspaceDB";
import { matchShortcut } from "../utils";
import { EShortcutKeys } from "../types/dbTypes";
import useDebounceFn from "../customHooks/useDebounceFn";
import {
  COMFYSPACE_TRACKING_FIELD_NAME,
  SHORTCUT_TRIGGER_EVENT,
} from "../const";
import { app } from "../utils/comfyapp";

export default function AppIsDirtyEventListener() {
  const {
    isDirty,
    setIsDirty,
    setRoute,
    saveCurWorkflow,
    setCurFlowIDAndName,
  } = useContext(WorkspaceContext);
  const isDirtRef = useRef(isDirty);

  useEffect(() => {
    isDirtRef.current = isDirty;
  }, [isDirty]);

  useEffect(() => {
    const keydownListener = (event: KeyboardEvent) => {
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

    const restoreCurWorkflow = async () => {
      if (!app?.graph) {
        console.error(
          "🦄 Error in workspace manager! app.graph is not available in restoreCurWorkflow()",
        );
        return;
      }
      const id = app.graph.extra?.[COMFYSPACE_TRACKING_FIELD_NAME]?.id;
      if (id) {
        const flow = await workflowsTable?.get(id);
        flow && setCurFlowIDAndName(flow);

        if (
          !flow?.saveLock &&
          flow &&
          flow.json !== JSON.stringify(app.graph.serialize())
        ) {
          setIsDirty(true);
        }
      }
    };

    const originalOnConfigure = app.graph.onConfigure;
    app.graph.onConfigure = function () {
      originalOnConfigure?.apply(this, arguments);
      // delay check diff json cuz it takes time for graph.serialize() to settle up and return the correct json
      setTimeout(() => {
        const id = app.graph.extra?.[COMFYSPACE_TRACKING_FIELD_NAME]?.id;
        if (id == null || id != workflowsTable?.curWorkflow?.id) {
          setCurFlowIDAndName(null);
        }
      }, 500);
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
    document.addEventListener("keydown", keydownListener);

    restoreCurWorkflow();
    return () => {
      document.removeEventListener("keydown", keydownListener);
    };
  }, []);

  const onIsDirty = async () => {
    if (workflowsTable?.curWorkflow?.saveLock || isDirtRef.current) return;
    const graph = app.graph.serialize();
    if (JSON.stringify(graph) === workflowsTable?.curWorkflow?.json) {
      return;
    }
    setIsDirty(true);
  };
  const [debounceOnIsDirty, _] = useDebounceFn(onIsDirty, 900);

  return null;
}
