import { ScanLocalFile, ScanLocalFolder, scanLocalFiles } from "../Api";
import {
  foldersTable,
  userSettingsTable,
  workflowsTable,
} from "../db-tables/WorkspaceDB";
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
  const result: (Workflow | Folder)[] = [];
  for (const file of fileList) {
    const fileName = file.name;
    const absPath = [scanDir, fileName].join("/");
    const relPath = [scanFolderRelativePath, fileName].join("/");
    if (scanFileIsFolder(file)) {
      // is folder
      const folder = await foldersTable?.putWithRelativePath(relPath);
      folder && result.push(folder);
    } else {
      // is workflow
      console.log("scanMyWorkflowsDir workflow absPath", absPath, relPath);
      const folder = await foldersTable?.putWithRelativePath(relPath);
      const existingWorkflow = await workflowsTable?.get(file.id);
      if (existingWorkflow) {
        const newWorkflow: Workflow = {
          ...existingWorkflow,
          filePath: absPath,
          name: fileName.replace(".json", ""),
          parentFolderID: folder?.id ?? null,
        };
        workflowsTable?.put(newWorkflow);
        result.push(newWorkflow);
      } else {
        const flow = await workflowsTable?.add({
          filePath: absPath,
          name: fileName.replace(".json", ""),
          parentFolderID: folder?.id ?? null,
          updateTime: Date.now(),
          json: file.json ?? "{}",
        });
        flow && result.push(flow);
      }
    }
  }
  return result;
}
function scanFileIsFolder(
  scanFile: ScanLocalFile | ScanLocalFolder,
): scanFile is ScanLocalFolder {
  return "type" in scanFile && scanFile.type === "folder";
}
