import { Table } from "./db-tables/WorkspaceDB";
import type { ModelsListRespItem } from "./model-manager/types";

export async function getDB(table: Table): Promise<string | undefined> {
  console.warn("[workspace deprecated] getDB is deprecated", table);
  try {
    const response = await fetch(`/workspace/get_db?table=${table}`);
    if (!response.ok) {
      return undefined;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching workspace:", error);
    return undefined;
  }
}

export async function saveDB(table: Table, jsonData: string) {
  try {
    const response = await fetch("/workspace/save_db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ table, json: jsonData }),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Error saving workspace:", error);
  }
}

export async function updateFile(file_path: string, jsonData: string) {
  console.log("updateFile", file_path, jsonData);
  try {
    const response = await fetch("/workspace/update_file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file_path: file_path,
        json_str: jsonData,
      }),
    });
    const result = await response.text();
    console.log("updateFile res", result);
    return result;
  } catch (error) {
    alert("Error saving workflow .json file: " + error);
    console.error("Error saving workspace:", error);
  }
}

export async function deleteFile(file_path: string, deleteEmptyFolder = false) {
  console.log("deleteFile", file_path);
  try {
    const response = await fetch("/workspace/delete_file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file_path: file_path,
        deleteEmptyFolder,
      }),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Error deleting file:", error);
  }
}

export async function listBackup(dir: string) {
  try {
    const response = await fetch("/workspace/list_backup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dir: dir,
      }),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Error saving workspace:", error);
  }
}

export async function getSystemDir(root?: string) {
  try {
    const response = await fetch("/workspace/get_system_dir", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        absolute_dir: root ?? "",
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error getting workflows dir:", error);
  }
}

export async function openWorkflowsFolder() {
  try {
    const response = await fetch("/workspace/open_workflow_file_browser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error open workflows folder:", error);
  }
}

export async function getAllModelsList() {
  try {
    const response = await fetch("/model_manager/get_model_list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result as ModelsListRespItem[];
  } catch (error) {
    console.error("Error get all models list:", error);
  }
}

export async function getAllFoldersList() {
  try {
    const response = await fetch("/model_manager/get_folder_list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result as string[];
  } catch (error) {
    console.error("Error get all models list:", error);
  }
}

export async function deleteLocalDiskFolder(folderPath: string) {
  try {
    const response = await fetch("/workspace/delete_folder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        folder_path: folderPath,
      }),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Error move file:", error);
  }
}
