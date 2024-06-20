import { fetchApi } from "../Api";
import { COMFYSPACE_TRACKING_FIELD_NAME } from "../const";
import { indexdb } from "../db-tables/indexdb";
import { Workflow } from "../types/dbTypes";
import {
  getWorkflowRelPath,
  joinRelPath,
  sanitizeRelPath,
} from "../utils/OsPathUtils";

export namespace TwowaySyncAPI {
  export async function moveWorkflow(
    workflow: Workflow,
    newParentFolderRelPath: string,
  ) {
    try {
      const response = await fetchApi("/workspace/file/move", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: getWorkflowRelPath(workflow),
          newParentPath: newParentFolderRelPath,
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
    try {
      const response = await fetchApi("/workspace/file/gen_unique_name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: joinRelPath(parentFolderID ?? "", fileName),
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

  export async function renameWorkflow(
    { parentFolderID, name }: Pick<Workflow, "name" | "parentFolderID">,
    newName: string,
  ) {
    try {
      const response = await fetchApi("/workspace/file/rename", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: joinRelPath(parentFolderID ?? "", name + ".json"),
          newName: newName,
        }),
      });
      const result = await response.json();
      if (result.error) {
        alert("Error rename file: " + result.error);
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  }
  export async function saveWorkflow(workflow: Workflow) {
    const json = workflow.json;
    const flow = JSON.parse(json);
    if (flow.extra[COMFYSPACE_TRACKING_FIELD_NAME] == null) {
      flow.extra[COMFYSPACE_TRACKING_FIELD_NAME] = {};
    }
    flow.extra[COMFYSPACE_TRACKING_FIELD_NAME].id = workflow.id;
    flow.extra[COMFYSPACE_TRACKING_FIELD_NAME].saveLock = workflow.saveLock;
    flow.extra[COMFYSPACE_TRACKING_FIELD_NAME].cloudID = workflow.cloudID;
    flow.extra[COMFYSPACE_TRACKING_FIELD_NAME].coverMediaPath =
      workflow.coverMediaPath;

    const response = await fetchApi("/workspace/file/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: getWorkflowRelPath(workflow),
        json: JSON.stringify(flow),
      }),
    });
    const result = await response.json();
    if (result.error) {
      console.error("Error saving file:", result.error);
      alert(`"Error saving file: ${result.error}
      
      👉Please try "Save as" from "Files" dropdown menu
      `);
      throw new Error(result.error);
    }
    return result;
  }
  export async function deleteWorkflow(workflow: Workflow) {
    try {
      const response = await fetchApi("/workspace/delete_file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file_path: getWorkflowRelPath(workflow),
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
  export async function createWorkflow(workflow: Workflow) {
    const { parentFolderID, name, json, id } = workflow;
    let jsonObj: any = JSON.parse(json);
    if (jsonObj.extra == null) {
      jsonObj.extra = {};
    }
    if (jsonObj.extra[COMFYSPACE_TRACKING_FIELD_NAME] == null) {
      jsonObj.extra[COMFYSPACE_TRACKING_FIELD_NAME] = {};
    }
    jsonObj.extra[COMFYSPACE_TRACKING_FIELD_NAME].id = id; // to avoid overwriting deps
    jsonObj.extra[COMFYSPACE_TRACKING_FIELD_NAME].saveLock = workflow.saveLock;
    jsonObj.extra[COMFYSPACE_TRACKING_FIELD_NAME].cloudID = workflow.cloudID;
    jsonObj.extra[COMFYSPACE_TRACKING_FIELD_NAME].coverMediaPath =
      workflow.coverMediaPath;
    const input: { parentFolderPath: string; name: string; json: string } = {
      parentFolderPath: sanitizeRelPath(parentFolderID ?? ""),
      name: name,
      json: JSON.stringify(jsonObj),
    };

    try {
      const response = await fetchApi("/workspace/create_workflow_file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const result: { name?: string } = await response.json();

      result.name &&
        (await indexdb.workflows?.update(id, {
          name: result.name,
        }));
      return result;
    } catch (error) {
      console.error(
        `Error creating file <${id}> at "${parentFolderID}"`,
        error,
      );
      alert(`Error creating file <${id}> at "${parentFolderID}"`);
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
    json?: {
      extra: {
        [COMFYSPACE_TRACKING_FIELD_NAME]: {
          id: string;
          saveLock: boolean;
          cloudID: string | null;
          coverMediaPath: string | null;
        };
      };
    };
    createTime?: number;
    updateTime?: number;
    error?: string;
  }> {
    const relPath = joinRelPath(parentFolderID ?? "", name + ".json");
    try {
      const response = await fetchApi("/workspace/get_workflow_file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          path: relPath,
          id: id,
        }),
      });
      const result = await response.json();
      if (result.error) {
        console.error(
          `Error getting file <${id}> at "${relPath}"`,
          result.error,
        );
        alert({
          message: `Error getting file <${id}> at "${relPath}"`,
          level: "error",
        });
      }
      return result;
    } catch (error) {
      console.error(`Erro finding file <${id}> at "${relPath}"`, error);
      return {};
    }
  }
}

export type ScanLocalFile = {
  type: "workflow";
  name: string;
  id: string;
  path: string;
  json: string;
  saveLock: boolean;
  cloudID: string | null;
  coverMediaPath: string | null;
  createTime: number;
  updateTime: number;
  lastOpenedTime?: number;
};
export type ScanLocalFolder = {
  id: string;
  type: "folder";
  name: string;
  path: string;
  parentFolderID: string;
};
export async function scanLocalFiles(
  path: string,
  recursive = false,
  metaInfoOnly = false,
): Promise<Array<ScanLocalFile | ScanLocalFolder>> {
  try {
    const response = await fetchApi(
      "/workspace/file/scan_my_workflows_folder",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: sanitizeRelPath(path),
          recursive,
          metaInfoOnly,
        }),
      },
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error scan local new files:", error);
    return [];
  }
}
