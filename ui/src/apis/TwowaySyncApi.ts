import { updateFile } from "../Api";
import { COMFYSPACE_TRACKING_FIELD_NAME } from "../const";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { indexdb } from "../db-tables/indexdb";
import { Workflow } from "../types/dbTypes";
import { genAbsPathByRelPath, sanitizeAbsPath } from "../utils/OsPathUtils";
import { TwowayFolderSyncAPI } from "./TwowaySyncFolderApi";

export namespace TwowaySyncAPI {
  async function genWorkflowAbsPath({
    parentFolderID,
    name,
  }: Workflow): Promise<string> {
    const myWorkflowsDir =
      await userSettingsTable?.getSetting("myWorkflowsDir");
    const absPath = sanitizeAbsPath(
      `${myWorkflowsDir}/${parentFolderID ?? ""}/${name}.json`,
    );
    return absPath;
  }
  export async function moveWorkflow(
    workflow: Workflow,
    newParentFolderRelPath: string,
  ) {
    const absPath = await genWorkflowAbsPath(workflow);
    const newParentFolderAbs = await genAbsPathByRelPath(
      newParentFolderRelPath,
    );
    console.log("🥳moveWorkflow", absPath, newParentFolderAbs);
    try {
      const response = await fetch("/workspace/file/move", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: absPath,
          newParentPath: newParentFolderAbs,
        }),
      });
      const result = await response.json();
      if (result.error) {
        alert("Error moving file: " + result.error);
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  }

  export async function genFileUniqueName(
    fileName: string,
    parentFolderID: string | null,
  ): Promise<string | null> {
    const absPath = await genAbsPathByRelPath(`${parentFolderID}/${fileName}`);
    try {
      const response = await fetch("/workspace/file/gen_unique_name", {
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
        console.error("Error getting unique name:", result.error);
        return null;
      }
      return result.uniqueName;
    } catch (error) {
      console.error("Error deleting file:", error);
    }
    return null;
  }

  export async function renameWorkflow(workflow: Workflow, newName: string) {
    console.log("🥳renameWorkflow", workflow, newName);
    const absPath = await genWorkflowAbsPath(workflow);
    try {
      const response = await fetch("/workspace/file/rename", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: absPath,
          newName: newName,
        }),
      });
      const result = await response.json();
      if (result.error) {
        alert("Error moving file: " + result.error);
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  }

  interface DuplicatesResponse {
    duplicates: {
      [id: string]: Array<{
        path: string;
        createTime: number;
      }>;
    };
  }
  export async function scanMyWorkflowsDupId() {
    const myWorkflowsDir =
      await userSettingsTable?.getSetting("myWorkflowsDir");
    const absPath = sanitizeAbsPath(myWorkflowsDir!);
    try {
      const response = await fetch("/workspace/file/scan_dup_id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: absPath,
        }),
      });
      const result = (await response.json()) as DuplicatesResponse;
      console.log("scanMyWorkflowsDupId", result);
      return true;
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  }

  export async function saveWorkflow(workflow: Workflow) {
    console.log("🥳saveWorkflow", workflow);
    const absPath = await genWorkflowAbsPath(workflow);
    const json = workflow.json;
    const flow = JSON.parse(json);
    flow.extra[COMFYSPACE_TRACKING_FIELD_NAME] = {
      id: workflow.id,
    };

    const response = await fetch("/workspace/file/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: absPath,
        json: json,
      }),
    });
    const result = await response.json();
    if (result.error) {
      console.error("Error saving file:", result.error);
      alert(`"Error saving file: ${result.error}
      
      👉Please try "Save as" from "Files" dropdown menu
      `);
    }
    return result;
  }
  export async function deleteWorkflow(workflow: Workflow) {
    const absPath = await genWorkflowAbsPath(workflow);
    try {
      const response = await fetch("/workspace/delete_file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file_path: absPath,
          deleteEmptyFolder: false,
        }),
      });
      const result = await response.text();
      return result;
    } catch (error) {
      alert("Error deleting workflow .json file: " + error);
      console.error("Error deleting file:", error);
    }
  }
  export async function creatWorkflow({
    parentFolderID,
    name,
    json,
    id,
  }: Workflow) {
    const myWorkflowsDir =
      await userSettingsTable?.getSetting("myWorkflowsDir");
    const absPath = sanitizeAbsPath(
      `${myWorkflowsDir}/${parentFolderID ?? ""}`,
    );
    let jsonObj: any = JSON.parse(json);

    jsonObj = {
      ...jsonObj,
      extra: {
        [COMFYSPACE_TRACKING_FIELD_NAME]: {
          id: id,
        },
      },
    };
    const input: { parentFolderPath: string; name: string; json: string } = {
      parentFolderPath: absPath,
      name: name,
      json: JSON.stringify(jsonObj),
    };
    console.log("createWorkflowFile input", input);
    try {
      const response = await fetch("/workspace/create_workflow_file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const result: { name?: string } = await response.json();

      result.name &&
        (await indexdb.workflows?.update(id, {
          filePath: `${absPath}/${name}.json`,
          name: result.name,
        }));
      console.log("createWorkflowFile results", result);
      return result;
    } catch (error) {
      console.error(`Error creating file <${id}> at "${absPath}"`, error);
      alert(`Error creating file <${id}> at "${absPath}"`);
      return {};
    }
  }
  export async function getFile({
    parentFolderID,
    name,
    id,
  }: {
    parentFolderID: string | null;
    id: string;
    name: string;
  }): Promise<{
    json?: Object;
    error?: string;
  }> {
    const myWorkflowsDir =
      await userSettingsTable?.getSetting("myWorkflowsDir");
    const absPath = sanitizeAbsPath(
      `${myWorkflowsDir}/${parentFolderID ?? ""}/${name}.json`,
    );
    console.warn("get abs path 🔥 workfoow", absPath);
    try {
      const response = await fetch("/workspace/get_workflow_file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          path: absPath,
          id: id,
        }),
      });
      const result = await response.json();
      if (result.error) {
        console.error(
          `Error getting file <${id}> at "${absPath}"`,
          result.error,
        );
        alert({
          message: `Error getting file <${id}> at "${absPath}"`,
          level: "error",
        });
      }
      return result;
    } catch (error) {
      console.error(`Erro finding file <${id}> at "${absPath}"`, error);
      return {};
    }
  }
}

export type ScanLocalFile = {
  type: "workflow";
  name: string;
  id: string;
  json: string;
  createTime: number;
  updateTime: number;
};
export type ScanLocalFolder = {
  type: "folder";
  name: string;
};
export async function scanLocalFiles(
  path: string,
): Promise<Array<ScanLocalFile | ScanLocalFolder>> {
  console.log("scanLocalFiles api", path);
  try {
    const response = await fetch("/workspace/scan_my_workflows_files", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: sanitizeAbsPath(path),
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error scan local new files:", error);
    return [];
  }
}
