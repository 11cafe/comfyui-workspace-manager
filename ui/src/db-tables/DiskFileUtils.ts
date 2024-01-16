import { deleteFile, saveDB, updateFile } from "../Api";
import {
  Workflow,
  foldersTable,
  updateFlow,
  userSettingsTable,
} from "./WorkspaceDB";
import {
  COMFYSPACE_TRACKING_FIELD_NAME,
  LEGACY_COMFYSPACE_TRACKING_FIELD_NAME,
} from "../const";
import { toFileNameFriendly } from "../utils";

export async function saveJsonFileMyWorkflows(workflow: Workflow) {
  const file_path = generateFilePath(workflow);
  if (file_path == null) {
    return;
  }
  const fullPath = generateFilePathAbsolute(workflow);
  updateFlow(workflow.id, {
    filePath: fullPath ?? undefined,
  });
  const json = workflow.json;
  const flow = JSON.parse(json);
  flow.extra[COMFYSPACE_TRACKING_FIELD_NAME] = {
    id: workflow.id,
    name: workflow.name,
  };
  delete flow.extra[LEGACY_COMFYSPACE_TRACKING_FIELD_NAME];

  await updateFile(file_path, JSON.stringify(flow));
}

export function deleteJsonFileMyWorkflows(workflow: Workflow) {
  if (workflow.name == null) {
    return;
  }
  const file_path = generateFilePath(workflow);
  file_path != null && deleteFile(file_path);
}

export function generateFilePath(workflow: Workflow): string | null {
  let filePath = toFileNameFriendly(workflow.name) + ".json";
  let curFolderID = workflow.parentFolderID;
  while (curFolderID != null) {
    const folder = foldersTable?.get(curFolderID);
    if (folder == null) {
      break;
    }
    const folderName = folder.name;
    filePath = `${folderName}/${filePath}`;
    curFolderID = folder.parentFolderID ?? undefined;
  }

  return filePath ?? null;
}

export function generateFilePathAbsolute(workflow: Workflow): string | null {
  const subPath = generateFilePath(workflow);
  let myWorkflowsDir = userSettingsTable?.getSetting("myWorkflowsDir");
  if (myWorkflowsDir == null) {
    console.error("myWorkflowsDir is not set");
    return null;
  }
  if (!myWorkflowsDir.endsWith("/")) {
    myWorkflowsDir = myWorkflowsDir + "/";
  }
  return myWorkflowsDir + subPath;
}
