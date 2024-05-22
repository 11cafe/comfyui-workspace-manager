import { fetchApi } from "../Api";
import { Folder } from "../types/dbTypes";
import { sanitizeRelPath } from "../utils/OsPathUtils";

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

  export async function createFolder(folder: Folder) {
    await fetchApi("/workspace/folder/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: sanitizeRelPath(folder.id),
      }),
    });
  }
  export async function moveFolder(
    folderToBeMoved: string,
    newParentPath: string,
  ) {
    const resp = await fetchApi("/workspace/folder/move", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        folder: folderToBeMoved,
        newParentPath: newParentPath,
      }),
    });
    const result = await resp.json();
    if (result.error) {
      alert("Failed to move folder: " + result.error);
    }
    return;
  }
  export async function deleteFolder(relPath: string) {
    try {
      const response = await fetchApi("/workspace/folder/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: relPath,
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
    try {
      const response = await fetchApi("/workspace/file/count_files", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: folderRelPath,
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
    try {
      const response = await fetchApi("/workspace/folder/rename", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          absPath: folderRelPath,
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
