import {
  workflowVersionsTable,
  workflowsTable,
} from "../../db-tables/WorkspaceDB";

export function useCloudEventListener() {
  const cloudEventListener = async (event: MessageEvent) => {
    const evt: CloudMessageEvent = event.data;
    if (isCheckConnectionEvent(evt)) {
      console.log(evt.detail.workflowID, evt.detail.versionID);
      return;
    }
    if (isOpenWorkflowEvent(evt)) {
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
          console.log("existingVersion", existingVersion);
          return;
        } else {
          console.log("newVersion", version);
        }
        return;
      } else {
        console.log("newWorkflow", workflow);
      }
    }
  };

  window.addEventListener("message", cloudEventListener);
}

interface CloudMessageEvent {
  type: "check_connection" | "open_workflow";
  detail: any;
}

interface OpenWorkflowEvent extends CloudMessageEvent {
  type: "open_workflow";
  detail: {
    workflow: {
      id: string;
      name: string;
    };
    version: {
      id: string;
      name: string;
      json: string;
    };
  };
}

interface CheckConnectionEvent extends CloudMessageEvent {
  type: "open_workflow";
  detail: {
    workflowID: string;
    versionID: string;
  };
}

function isCheckConnectionEvent(
  n: CloudMessageEvent,
): n is CheckConnectionEvent {
  return n.type === "check_connection";
}

function isOpenWorkflowEvent(n: CloudMessageEvent): n is OpenWorkflowEvent {
  return n.type === "open_workflow";
}
