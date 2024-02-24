import { ScanLocalFile, ScanLocalFolder, scanLocalFiles } from "../Api";
import {
  foldersTable,
  isFolder,
  userSettingsTable,
  workflowsTable,
} from "../db-tables/WorkspaceDB";
import { indexdb } from "../db-tables/indexdb";
import { Folder, Workflow } from "../types/dbTypes";

function osPathJoin(...args: string[]) {
  return args.filter((segment) => segment !== "").join("/");
}
export async function scanMyWorkflowsDir(
  parentFolderID: string | undefined,
): Promise<(Workflow | Folder)[]> {
  const myWorkflowsDir = await userSettingsTable?.getSetting("myWorkflowsDir");
  if (myWorkflowsDir == null) {
    alert("Please set up the folder for syncing in Settings");
    return [];
  }
  const scanFolderRelativePath = parentFolderID
    ? await foldersTable?.genRelativePath(parentFolderID)
    : "";
  console.log(
    "scanMyWorkflowsDir",
    parentFolderID,
    "scanFolderRelativePath",
    scanFolderRelativePath,
  );
  if (scanFolderRelativePath == null) {
    alert("Unable to find folder for syncing");
    return [];
  }
  const scanDir = osPathJoin(myWorkflowsDir, scanFolderRelativePath);
  const fileList = await scanLocalFiles(scanDir);
  const newWorkflows: Workflow[] = [];
  const allFilesPromises = fileList.map(async (file) => {
    const fileName = file.name;
    const absPath = [scanDir, fileName].join("/");
    const relPath = [scanFolderRelativePath, fileName].join("/");
    if (scanFileIsFolder(file)) {
      // is folder
      const folder = await foldersTable?.putWithRelativePath(relPath);
      return folder;
    } else {
      // is workflow
      console.log("scanMyWorkflowsDir workflow absPath", absPath, relPath);
      const folder = await foldersTable?.putWithRelativePath(relPath);
      const existingWorkflow = (await workflowsTable?.get(file.id)) ?? {
        createTime: Date.now(),
        updateTime: Date.now(),
      };

      const newWorkflow: Workflow = {
        ...existingWorkflow,
        id: file.id,
        filePath: absPath,
        json: file.json ?? "{}",
        name: fileName.replace(".json", ""),
        parentFolderID: folder?.id ?? null,
      };
      return newWorkflow;
    }
  });

  const result = await Promise.all(allFilesPromises);
  workflowsTable?.bulkPut(
    result.filter((item) => item != null && !isFolder(item)) as Workflow[],
  );
  return result.filter((item) => item != null) as (Workflow | Folder)[];
}
function scanFileIsFolder(
  scanFile: ScanLocalFile | ScanLocalFolder,
): scanFile is ScanLocalFolder {
  return "type" in scanFile && scanFile.type === "folder";
}
