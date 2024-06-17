import { foldersTable, workflowsTable, userSettingsTable } from "./WorkspaceDB";
import { TwowayFolderSyncAPI } from "../apis/TwowaySyncFolderApi";

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
