import {
  ScanLocalFile,
  ScanLocalFolder,
  scanLocalFiles,
} from "../apis/TwowaySyncApi";
import { isFolder, userSettingsTable } from "../db-tables/WorkspaceDB";
import { indexdb } from "../db-tables/indexdb";
import { Folder, Workflow } from "../types/dbTypes";
import { sanitizeAbsPath } from "./OsPathUtils";

export async function scanMyWorkflowsDir(
  parentFolderID: string | null,
): Promise<(Workflow | Folder)[]> {
  const myWorkflowsDir = await userSettingsTable?.getSetting("myWorkflowsDir");
  if (myWorkflowsDir == null || myWorkflowsDir === "") {
    alert("No Workspace saving directory found, please go to Settings.");
    return [];
  }
  const parentRelPath = parentFolderID ?? "";
  // folderID is the relative path of the folder in two way sync mode
  const scanDir = `${myWorkflowsDir}/${parentRelPath}`;
  const fileList = await scanLocalFiles(scanDir);

  const allFilesPromises = fileList.map(async (file) => {
    const fileName = file.name;
    const absPath = sanitizeAbsPath([scanDir, fileName].join("/"));
    // const absPath = osPathJoin(scanDir, fileName);
    const relPath = [parentRelPath, fileName].join("/");

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
        json: "{}", //we don't need to load json data for file list display
        name: fileName.replace(".json", ""),
        parentFolderID: parentRelPath,
      };
      return newWorkflow;
    }
  });

  const result = await Promise.all(allFilesPromises);
  indexdb.workflows.bulkPut(
    result.filter((item) => !isFolder(item)) as Workflow[],
  );
  return result.filter((item) => item != null) as (Workflow | Folder)[];
}
function scanFileIsFolder(
  scanFile: ScanLocalFile | ScanLocalFolder,
): scanFile is ScanLocalFolder {
  return "type" in scanFile && scanFile.type === "folder";
}
