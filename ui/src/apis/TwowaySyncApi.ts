import { COMFYSPACE_TRACKING_FIELD_NAME } from "../const";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { indexdb } from "../db-tables/indexdb";
import { Workflow } from "../types/dbTypes";
import { sanitizeAbsPath } from "../utils/OsPathUtils";
import { showAlert } from "../utils/showAlert";

export namespace TwowaySyncAPI {
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
      showAlert({
        message: `Error creating file <${id}> at "${absPath}"`,
        level: "error",
      });
      return {};
    }
  }
  export async function getFile({
    absPath,
    id,
  }: {
    absPath: string;
    id: string;
  }): Promise<{
    json?: Object;
    error?: string;
  }> {
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
        showAlert({
          message: `Error getting file <${id}> at "${absPath}"`,
          level: "error",
        });
      }
      return result;
    } catch (error) {
      // alert(
      //   `Error finding workflow <${id}> at "${absPath}". If you moved the file to another location, please refresh browser.`,
      // );
      console.error(`Erro finding file <${id}> at "${absPath}"`, error);
      showAlert({
        message: `Error finding file <${id}> at "${absPath}". If you moved the file to another location, please refresh browser.`,
        level: "error",
      });
      return {};
    }
  }
}

export type ScanLocalFile = {
  type: "workflow";
  name: string;
  id: string;
  json: string;
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
        path,
      }),
    });
    const result = await response.json();
    console.log("scanLocalNewFiles", result);
    return result;
  } catch (error) {
    console.error("Error scan local new files:", error);
    return [];
  }
}
