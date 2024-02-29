import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { Folder } from "../types/dbTypes";
import {
  genAbsPathByRelPath,
  sanitizeAbsPath,
  sanitizeRelPath,
} from "../utils/OsPathUtils";

export namespace TwowayFolderSyncAPI {
  export async function genFolderRelPath({
    parentFolderID,
    name,
  }: {
    parentFolderID: string | null;
    name: string;
  }): Promise<string> {
    return sanitizeRelPath(`${parentFolderID ?? ""}/${name}`);
  }
  export async function genFolderAbsPath({
    parentFolderID,
    name,
  }: Pick<Folder, "name" | "parentFolderID">): Promise<string> {
    const myWorkflowsDir =
      await userSettingsTable?.getSetting("myWorkflowsDir");
    const absPath = sanitizeAbsPath(
      `${myWorkflowsDir}/${parentFolderID ?? ""}/${name}`,
    );
    return absPath;
  }
  export async function createFolder(folder: Folder) {
    const abs = await genFolderAbsPath(folder);
    await fetch("/workspace/folder/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: abs,
      }),
    });
  }
  export async function moveFolder(
    folderToBeMoved: string,
    newParentPath: string,
  ) {
    const absPath = await genAbsPathByRelPath(folderToBeMoved);
    const absNewParentPath = await genAbsPathByRelPath(newParentPath);
    const resp = await fetch("/workspace/folder/move", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        folder: absPath,
        newParentPath: absNewParentPath,
      }),
    });
    const result = await resp.json();
    if (result.error) {
      alert("Failed to move folder: " + result.error);
    }
    return;
  }
  export async function deleteFolder(relPath: string) {
    const absPath = await genAbsPathByRelPath(relPath);
    try {
      const response = await fetch("/workspace/folder/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: absPath,
        }),
      });
      const result = await response.text();
      return result;
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  }

  export async function genFilesCountInFolder(
    folderRelPath: string,
  ): Promise<number | null> {
    const absPath = await genAbsPathByRelPath(folderRelPath);
    try {
      const response = await fetch("/workspace/file/count_files", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: absPath,
        }),
      });
      const result = await response.json();
      if (result.error) {
        console.error("Error counting files:", result.error);
      }
      return result.count;
    } catch (error) {
      console.error("Error renaming file:", error);
    }
    return null;
  }

  export async function renameFolder(
    folderRelPath: string,
    newName: string,
  ): Promise<void> {
    const oldAbsPath = await genAbsPathByRelPath(folderRelPath);
    try {
      const response = await fetch("/workspace/folder/rename", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          absPath: oldAbsPath,
          newName: newName,
        }),
      });
      const result = await response.json();
      if (result.error) {
        alert("Failed to rename folder: " + result.error);
      }
    } catch (error) {
      console.error("Error renaming file:", error);
    }
  }
}
