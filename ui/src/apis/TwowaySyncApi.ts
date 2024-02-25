import { Workflow } from "../types/dbTypes";
import { showAlert } from "../utils/showAlert";

export namespace TwowaySyncAPI {
  //   export async function creatWorkflow(workflow: Workflow) {
  //     try {
  //       const response = await fetch("/workspace/update_file", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           path: absPath,
  //           id: id,
  //         }),
  //       });
  //       const result: boolean = await response.json();
  //       return result;
  //     } catch (error) {
  //       console.error(`Error creating file <${id}> at "${absPath}"`, error);
  //       showAlert({
  //         message: `Error creating file <${id}> at "${absPath}"`,
  //         level: "error",
  //       });
  //       return {};
  //     }
  //   }
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
