import { useContext, useEffect } from "react";
import { useDialog } from "../../components/AlertDialogProvider";
import {
  workflowVersionsTable,
  workflowsTable,
} from "../../db-tables/WorkspaceDB";
import { WorkspaceContext } from "../../WorkspaceContext";

export default function ServerEventListener() {
  const { showDialog } = useDialog();
  const { loadWorkflowID } = useContext(WorkspaceContext);
  const openWorkflow = async (evt: OpenWorkflowEvent, origin: string) => {
    const { workflow, version } = evt.detail;
    if (!workflow.id || !version.id) return;
    const existingWorkflow = (
      await workflowsTable?.listByIndex("cloudID", workflow.id)
    )?.at(0);
    if (existingWorkflow) {
      const existingVersion = (
        await workflowVersionsTable?.listByIndex("cloudID", version.id)
      )?.at(0);
      if (existingVersion) {
        // existing workflow and version
        await loadWorkflowID(existingWorkflow.id, existingVersion.id);
      } else {
        // existing workflow but new version
        const newversion = await workflowVersionsTable?.add({
          id: version.id,
          cloudID: version.id,
          workflowID: existingWorkflow.id,
          cloudOrigin: origin,
          name: version.name,
          authorID: version.authorID,
          json: version.json,
        });
        newversion && loadWorkflowID(existingWorkflow.id, newversion.id);
      }
    } else {
      // new workflow new version
      const newWorkflow = await workflowsTable?.createFlow({
        cloudID: workflow.id,
        cloudOrigin: origin,
        name: workflow.name,
        json: version.json,
        updateTime: Date.now(),
      });
      if (!newWorkflow) {
        alert("Failed to add workflow to local db");
        return;
      }
      const newverison = await workflowVersionsTable?.put({
        id: version.id,
        cloudID: version.id,
        workflowID: newWorkflow.id,
        cloudOrigin: origin,
        name: version.name,
        json: version.json,
        authorID: version.authorID,
        createTime: Date.now(),
      });
      await loadWorkflowID(newWorkflow.id, newverison?.id);
    }
  };
  const cloudEventListener = async (event: MessageEvent) => {
    const evt: CloudMessageEvent = event.data;
    if (isOpenWorkflowEvent(evt)) {
      const origin = event.origin;
      showDialog(
        `Open workflow "${evt.detail.workflow.name}", version "${evt.detail.version.name}" from ${origin}`,
        [
          {
            label: "Open",
            colorScheme: "teal",
            onClick: () => {
              openWorkflow(evt, origin);
            },
          },
        ],
      );
    }
  };
  useEffect(() => {
    if (window.opener) {
      window.opener.postMessage("comfyui_workspace_manager_connected", "*");
    }
    window.addEventListener("message", cloudEventListener);
  }, []);
  return null;
}

interface CloudMessageEvent {
  type: "workspace_check_connection" | "workspace_open_workflow";
  detail: any;
}

interface OpenWorkflowEvent extends CloudMessageEvent {
  type: "workspace_open_workflow";
  detail: {
    workflow: {
      id: string;
      name: string;
    };
    version: {
      id: string;
      name: string;
      json: string;
      authorID: string;
    };
  };
}

function isOpenWorkflowEvent(n: CloudMessageEvent): n is OpenWorkflowEvent {
  return n.type === "workspace_open_workflow";
}
