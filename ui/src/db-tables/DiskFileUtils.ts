import { deleteFile, updateFile } from "../Api";
import { foldersTable, workflowsTable, userSettingsTable } from "./WorkspaceDB";
import {
  COMFYSPACE_TRACKING_FIELD_NAME,
  LEGACY_COMFYSPACE_TRACKING_FIELD_NAME,
} from "../const";
import { toFileNameFriendly } from "../utils";
import { Folder, Workflow } from "../types/dbTypes";
import { TwowayFolderSyncAPI } from "../apis/TwowaySyncFolderApi";

export async function saveJsonFileMyWorkflows(workflow: Workflow) {
  console.warn("saveJsonFileMyWorkflows", workflow);
  const file_path = await generateFilePath(workflow);
  if (file_path == null) {
    return;
  }
  const fullPath = await generateFilePathAbsolute(workflow);
  await workflowsTable?.updateMetaInfo(workflow.id, {
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

export async function deleteJsonFileMyWorkflows(workflow: Workflow) {
  if (workflow.name == null) {
    return;
  }
  const file_path = await generateFilePath(workflow);
  file_path != null && deleteFile(file_path);
}

export async function generateFilePath(
  workflow: Workflow,
): Promise<string | null> {
  let filePath = toFileNameFriendly(workflow.name) + ".json";
  let curFolderID = workflow.parentFolderID;
  while (curFolderID != null) {
    const folder = await foldersTable?.get(curFolderID);
    if (folder == null) {
      break;
    }
    const folderName = folder.name;
    filePath = `${folderName}/${filePath}`;
    curFolderID = folder.parentFolderID ?? undefined;
  }

  return filePath ?? null;
}

export async function genFolderRelPath(
  folderId: string | null,
): Promise<string> {
  let filePath = "";
  let curFolderID = folderId;
  while (curFolderID != null) {
    const folder = await foldersTable?.get(curFolderID);
    if (folder == null) {
      break;
    }
    const folderName = folder.name;
    filePath = `${folderName}/${filePath}`;
    curFolderID = folder.parentFolderID ?? null;
  }

  return filePath;
}
export async function generateFilePathAbsolute(
  workflow: Workflow,
): Promise<string | null> {
  const subPath = await generateFilePath(workflow);
  let myWorkflowsDir = await userSettingsTable?.getSetting("myWorkflowsDir");
  if (!myWorkflowsDir) {
    console.error("myWorkflowsDir is not set");
    return null;
  }
  if (!myWorkflowsDir.endsWith("/")) {
    myWorkflowsDir = myWorkflowsDir + "/";
  }
  return myWorkflowsDir + subPath;
}

export async function generateFolderPath(id: string): Promise<string | null> {
  const folder = await foldersTable?.get(id);
  let parentFolderID = folder?.parentFolderID;
  let folderPath = folder?.name;
  while (parentFolderID) {
    const folder = await foldersTable?.get(parentFolderID);
    if (folder == null) {
      break;
    }
    folderPath = `${folder.name}/${folderPath}`;
    parentFolderID = folder.parentFolderID ?? undefined;
  }

  let myWorkflowsDir = await userSettingsTable?.getSetting("myWorkflowsDir");

  if (!myWorkflowsDir) {
    console.error("myWorkflowsDir is not set");
    return null;
  }

  if (!myWorkflowsDir.endsWith("/")) {
    myWorkflowsDir = myWorkflowsDir + "/";
  }
  return myWorkflowsDir + folderPath;
}

export async function getFileCountInFolder(folderId: string): Promise<number> {
  const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");
  if (twoWaySyncEnabled) {
    return (await TwowayFolderSyncAPI.genFilesCountInFolder(folderId)) ?? 0;
  }
  const allFlows = (await workflowsTable?.listAll()) ?? [];
  const allFolders = (await foldersTable?.listAll()) ?? [];
  const nestedFolderIdStack = [folderId];
  let count = 0;

  while (nestedFolderIdStack.length > 0) {
    const curFolderId = nestedFolderIdStack.shift();

    if (curFolderId) {
      for (const flow of allFlows) {
        if (flow.parentFolderID === curFolderId) {
          count++;
        }
      }

      const curNestedFolderIds = allFolders
        .filter((f) => f.parentFolderID === curFolderId)
        .map((f) => f.id);

      if (curNestedFolderIds.length) {
        nestedFolderIdStack.push(...curNestedFolderIds);
      }
    }
  }

  return count;
}
