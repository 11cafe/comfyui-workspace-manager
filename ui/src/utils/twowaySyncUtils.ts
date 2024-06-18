import { ESortTypes } from "../RecentFilesDrawer/types";
import {
  ScanLocalFile,
  ScanLocalFolder,
  scanLocalFiles,
} from "../apis/TwowaySyncApi";
import { isFolder } from "../db-tables/WorkspaceDB";
import { indexdb } from "../db-tables/indexdb";
import { Folder, Workflow } from "../types/dbTypes";
import { sortFileItem } from "../utils";
import { sanitizeRelPath } from "./OsPathUtils";

export async function scanMyWorkflowsDir(
  parentFolderID: string | null,
  sortBy?: ESortTypes,
): Promise<(Workflow | Folder)[]> {
  const parentRelPath = sanitizeRelPath(parentFolderID ?? "");
  // folderID is the relative path of the folder in two way sync mode
  const fileList = await scanLocalFiles(parentRelPath);

  const allFilesPromises = fileList.map(async (file) => {
    const fileName = file.name;
    const relPath = [parentRelPath, fileName].join("/");
    if (scanFileIsFolder(file)) {
      // is folder
      const folder: Folder = {
        id: sanitizeRelPath(relPath),
        name: file.name,
        parentFolderID: parentRelPath,
        type: "folder",
        createTime: Date.now(),
        updateTime: Date.now(),
      };
      return folder;
    } else {
      // is workflow

      const existingWorkflow = await indexdb.workflows
        ?.get(file.id)
        .catch((err) => {
          console.error(
            "Error getting workflow from indexdb",
            file.id,
            relPath,
            err,
          );
          return null;
        });

      const newWorkflow: Workflow = {
        cloudID: file.cloudID,
        coverMediaPath: file.coverMediaPath,
        saveLock: file.saveLock,
        ...existingWorkflow,
        id: file.id,
        json: file.json ?? "{}",
        name: fileName.replace(/\.json$/, ""),
        parentFolderID: parentRelPath,
        createTime: file.createTime,
        // setting updateTime will result latestVersionChcek() always fail if in
        // workflow.get() not pull updateTime from file
        updateTime: file.updateTime,
      };
      return newWorkflow;
    }
  });

  const result = await Promise.all(allFilesPromises);
  indexdb.workflows.bulkPut(
    result.filter((item) => !isFolder(item)) as Workflow[],
  );
  const all = result.filter((item) => item != null) as (Workflow | Folder)[];
  return sortFileItem(all, sortBy ?? ESortTypes.RECENTLY_MODIFIED);
}
function scanFileIsFolder(
  scanFile: ScanLocalFile | ScanLocalFolder,
): scanFile is ScanLocalFolder {
  return "type" in scanFile && scanFile.type === "folder";
}
