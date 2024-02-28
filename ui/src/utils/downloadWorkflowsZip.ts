import { Workflow } from "../types/dbTypes";
import { formatTimestamp } from "../utils";
import JSZip from "JSZip";
import { genFolderRelPath } from "../db-tables/DiskFileUtils";
import { sanitizeRelPath } from "../utils/OsPathUtils";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export const downloadWorkflowsZip = async (selectedList: Array<Workflow>) => {
  const exportName = `ComfyUI workspace workflows ${formatTimestamp(Date.now())}`;
  const zip = new JSZip();
  const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");
  for (const workflow of selectedList) {
    let folderPath;
    if (twoWaySyncEnabled) {
      folderPath = workflow.parentFolderID ?? "";
    } else {
      folderPath = await genFolderRelPath(workflow.parentFolderID ?? null).then(
        async (path) => {
          return sanitizeRelPath(path ?? "");
        },
      );
    }
    // Ensure the folder path exists in the zip
    const folder = zip.folder(folderPath);
    // Adding the JSON file to the corresponding folder
    folder?.file(`${workflow.name}.json`, workflow.json);
  }

  zip.generateAsync({ type: "blob" }).then(function (content) {
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(content);
    a.download = `${exportName}.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
};
