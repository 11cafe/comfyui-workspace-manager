import { ScanLocalFile, ScanLocalFolder, scanLocalFiles } from "../Api";
import {
  foldersTable,
  isFolder,
  userSettingsTable,
  workflowsTable,
} from "../db-tables/WorkspaceDB";
import { indexdb } from "../db-tables/indexdb";
import { Folder, Workflow } from "../types/dbTypes";
import { osPathJoin } from "./FilesysUtils";

export async function scanMyWorkflowsDir(
  parentFolderID: string | null,
): Promise<(Workflow | Folder)[]> {
  const myWorkflowsDir = await userSettingsTable?.getSetting("myWorkflowsDir");
  if (myWorkflowsDir == null) {
    alert("Please set up the folder for syncing in Settings");
    return [];
  }
  const parentRelPath = parentFolderID ?? "";
  // folderID is the relative path of the folder in two way sync mode
  const scanDir = `${myWorkflowsDir}/${parentRelPath}`;
  const fileList = await scanLocalFiles(scanDir);

  const allFilesPromises = fileList.map(async (file) => {
    const fileName = file.name;
    const absPath = [scanDir, fileName].join("/");
    const relPath = [parentRelPath, fileName].join("/");
    console.log("scanMyWorkflowsDir rel", relPath);

    if (scanFileIsFolder(file)) {
      // is folder
      const folder: Folder = {
        id: file.name,
        name: file.name,
        parentFolderID: relPath,
        type: "folder",
        createTime: Date.now(),
        updateTime: Date.now(),
      };
      return folder;
    } else {
      // is workflow
      const existingWorkflow = (await indexdb.workflows?.get(file.id)) ?? {
        createTime: Date.now(),
        updateTime: Date.now(),
      };

      const newWorkflow: Workflow = {
        ...existingWorkflow,
        id: file.id,
        filePath: absPath,
        json: file.json ?? "{}",
        name: fileName.replace(".json", ""),
        parentFolderID: parentRelPath,
      };
      return newWorkflow;
    }
  });

  const result = await Promise.all(allFilesPromises);

  return result.filter((item) => item != null) as (Workflow | Folder)[];
}
function scanFileIsFolder(
  scanFile: ScanLocalFile | ScanLocalFolder,
): scanFile is ScanLocalFolder {
  return "type" in scanFile && scanFile.type === "folder";
}
