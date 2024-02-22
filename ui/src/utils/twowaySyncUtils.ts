import {
  ScanLocalFile,
  ScanLocalFolder,
  ScanLocalResult,
  scanLocalFiles,
} from "../Api";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { Folder, Workflow } from "../types/dbTypes";

export async function scanMyWorkflowsDir(
  parentFolderID: string | undefined,
): Promise<(Workflow | Folder)[]> {
  const myWorkflowsDir = await userSettingsTable?.getSetting("myWorkflowsDir");
  const scanDir = myWorkflowsDir + (parentFolder ? `/${parentFolder}` : "");
  const fileList = await scanLocalFiles(scanDir);
  for (const file of fileList) {
    if (scanFileIsFolder(file)) {
    } else {
      // is workflow
      const path = file.name;
    }
  }
  await syncNewFlowOfLocalDisk(fileList);
}
function scanFileIsFolder(
  scanFile: ScanLocalFile | ScanLocalFolder,
): scanFile is ScanLocalFolder {
  return "type" in scanFile && scanFile.type === "folder";
}

export async function syncNewFlowOfLocalDisk(
  scanList: ScanLocalResult,
  parentFolderID?: string,
) {
  const fileList = scanList.filter((s): s is ScanLocalFile => "json" in s);
  if (fileList.length) {
    await workflowsTable?.batchCreateFlows(fileList, true, parentFolderID);
  }

  const folderList = scanList.filter((s): s is ScanLocalFolder => "list" in s);
  if (folderList.length) {
    const currentFolderList = await foldersTable?.listAll();

    for (const folder of folderList) {
      const existFolder = currentFolderList?.find(
        (f) => f.name === folder.name,
      );

      let folderId;

      if (existFolder) {
        folderId = existFolder.id;
      } else {
        const newFolder = await foldersTable?.create({
          name: folder.name,
          parentFolderID,
        });
        folderId = newFolder?.id;
      }

      await syncNewFlowOfLocalDisk(folder.list, folderId);
    }
  }
}
