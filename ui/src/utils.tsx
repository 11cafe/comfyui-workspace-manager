// @ts-ignore
import {
  ScanLocalFile,
  ScanLocalFolder,
  ScanLocalResult,
  deleteFile,
  updateFile,
} from "./Api";
import { ESortTypes } from "./RecentFilesDrawer/types";
import {
  workflowsTable,
  foldersTable,
  userSettingsTable,
} from "./db-tables/WorkspaceDB";
import {
  generateFilePathAbsolute,
  saveJsonFileMyWorkflows,
} from "./db-tables/DiskFileUtils";
import { Folder, Workflow } from "./types/dbTypes";
// @ts-ignore
import { app } from "/scripts/app.js";
import {
  COMFYSPACE_TRACKING_FIELD_NAME,
  LEGACY_COMFYSPACE_TRACKING_FIELD_NAME,
} from "./const";

export type Route = "root" | "customNodes" | "recentFlows" | "gallery";

// copied from app.js
function sanitizeNodeName(string: string): string {
  const entityMap: Record<string, string> = {
    "&": "",
    "<": "",
    ">": "",
    '"': "",
    "'": "",
    "`": "",
    "=": "",
  };
  return String(string).replace(/[&<>"'`=]/g, function fromEntityMap(s) {
    return entityMap[s];
  });
}
export function findMissingNodes(): string[] {
  const missingNodeTypes = [];
  for (const n of app.graph._nodes) {
    // Patch T2IAdapterLoader to ControlNetLoader since they are the same node now
    if (n.type == "T2IAdapterLoader") n.type = "ControlNetLoader";
    if (n.type == "ConditioningAverage ") n.type = "ConditioningAverage"; //typo fix
    if (n.type == "SDV_img2vid_Conditioning")
      n.type = "SVD_img2vid_Conditioning"; //typo fix
    // Find missing node types
    // @ts-ignore
    if (!(n.type in LiteGraph.registered_node_types)) {
      n.type = sanitizeNodeName(n.type);
      missingNodeTypes.push(n.type);
    }
  }
  return missingNodeTypes;
}

export function toFileNameFriendly(str: string) {
  // Keep only alphanumeric characters (including characters from other languages), underscores, and hyphens
  // The \w character class in JavaScript's regex includes [A-Za-z0-9_] and Unicode characters (like Chinese, Japanese)
  // str = str.replace(/[^\w-]/g, "");
  str = str.replace(/[\\/:*?"<>|]/g, "_");

  return str.trim();
}

function isValidFileName(fileName: string) {
  // Check for empty string
  if (!fileName || fileName.length === 0) {
    return false;
  }

  // Windows reserved characters
  const windowsInvalidChars = /[<>:"\/\\|?*\x00-\x1F]/;
  if (windowsInvalidChars.test(fileName)) {
    return false;
  }

  // Windows reserved names
  const windowsReservedNames = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
  if (windowsReservedNames.test(fileName)) {
    return false;
  }

  // Check for macOS restricted character (colon)
  if (fileName.includes(":")) {
    return false;
  }

  // Check for trailing periods or spaces (Windows restriction)
  if (/[. ]$/.test(fileName)) {
    return false;
  }

  // Length check (general precaution)
  // if (fileName.length > 255) {
  //   return false;
  // }

  return true;
}

export function formatTimestamp(
  unixTimestamp: number,
  showHourMinue: boolean = true,
  showSec: boolean = false,
) {
  // Create a new Date object from the UNIX timestamp
  const date = new Date(unixTimestamp);

  // Get the day, month, year, hours, and minutes from the Date object
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // Format the date and time string
  const res = `${month}-${day}-${year}`;
  if (showHourMinue) {
    return res + ` ${hours}:${minutes}`;
  }
  if (showSec) {
    return res + `:${seconds}`;
  }
  return res;
}

/**
 * Sort workspace list data
 * @param flows Data that needs to be sorted
 * @param sortType The type of sorting
 * @returns sorted data
 */
export function sortFlows(
  flows: Workflow[] = [],
  sortType: ESortTypes = ESortTypes.RECENTLY_MODIFIED,
) {
  const copyFlows = [...flows];
  if (copyFlows.length) {
    switch (sortType) {
      case ESortTypes.AZ:
        copyFlows.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case ESortTypes.ZA:
        copyFlows.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case ESortTypes.RECENTLY_MODIFIED:
        copyFlows.sort((a, b) => b.updateTime - a.updateTime);
        break;
      case ESortTypes.OLDEST_MODIFIED:
        copyFlows.sort((a, b) => a.updateTime - b.updateTime);
        break;
    }
  }

  return copyFlows;
}
export async function validateOrSaveAllJsonFileMyWorkflows(
  deleteEmptyFolder = false,
) {
  const flowList = (await workflowsTable?.listAll()) ?? [];
  for (const workflow of flowList) {
    const fullPath = await generateFilePathAbsolute(workflow);
    if (workflow.filePath != fullPath) {
      // file path changed
      workflow.filePath != null &&
        (await deleteFile(workflow.filePath, deleteEmptyFolder));
      await saveJsonFileMyWorkflows(workflow);
    }
  }
}

export const sortFileItem = (
  items: Array<Workflow | Folder>,
  sortType: ESortTypes = ESortTypes.RECENTLY_MODIFIED,
) => {
  const copyFlows = [...items];
  switch (sortType) {
    case ESortTypes.AZ:
      copyFlows.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case ESortTypes.ZA:
      copyFlows.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case ESortTypes.RECENTLY_MODIFIED:
      copyFlows.sort((a, b) => b.updateTime - a.updateTime);
      break;
    case ESortTypes.OLDEST_MODIFIED:
      copyFlows.sort((a, b) => a.updateTime - b.updateTime);
      break;
  }
  return copyFlows;
};

export function insertWorkflowToCanvas(json: string, insertPos?: number[]) {
  let graphData = JSON.parse(json);
  if (typeof structuredClone === "undefined") {
    graphData = JSON.parse(JSON.stringify(graphData));
  } else {
    graphData = structuredClone(graphData);
  }
  // @ts-ignore
  let tempGraph = new LGraph();
  tempGraph.configure(graphData);
  const prevClipboard = localStorage.getItem("litegrapheditor_clipboard");

  const tempCanvas = document.createElement("canvas");
  // @ts-ignore
  let canvas = new LGraphCanvas(tempCanvas, tempGraph);
  canvas.selectNodes(tempGraph._nodes);
  canvas.copyToClipboard(tempGraph._nodes);
  const priorPos = app.canvas.graph_mouse;
  if (insertPos) {
    insertPos[0] -= 15;
    insertPos[1] -= 15;
    app.canvas.graph_mouse = insertPos;
  }
  app.canvas.pasteFromClipboard();
  app.canvas.graph_mouse = priorPos;
  if (prevClipboard) {
    localStorage.setItem("litegrapheditor_clipboard", prevClipboard);
  }
  // Nullify the references to help with garbage collection
  tempGraph = null;
  canvas = null;
}

export const matchSaveWorkflowShortcut = async (event: KeyboardEvent) => {
  const short = await userSettingsTable?.getSetting("shortcuts").then((res) => {
    return res?.save;
  });
  if (!short) return false;
  return matchShortcut(event, short);
};

export const matchShortcut = (
  event: KeyboardEvent,
  shortcutString: string,
): boolean => {
  const keys = shortcutString.split("+");
  const keyEvent: Record<string, boolean> = {
    Control: event.ctrlKey,
    Shift: event.shiftKey,
    Alt: event.altKey,
    Command: event.metaKey,
    [event.key.toUpperCase()]: true,
  };

  return keys.every((key) => keyEvent[key]);
};

export function isImageFormat(fileName: string) {
  const imageExtensions = ["png", "jpg", "jpeg", "gif", "bmp", "webp"];
  const extension = fileName.split(".").pop();
  return extension != null && imageExtensions.includes(extension);
}
export function isVideoFormat(fileName: string) {
  const videoExtensions = ["mp4", "webm", "ogg"];
  const extension = fileName.split(".").pop();
  return extension != null && videoExtensions.includes(extension);
}

export function getFileUrl(relativePath: string) {
  return `/workspace/view_media?filename=${relativePath}`;
}

export async function syncNewFlowOfLocalDisk(
  scanList: ScanLocalResult[],
  parentFolderID?: string,
) {
  const fileList = scanList.filter((s): s is ScanLocalFile => "json" in s);
  if (fileList.length) {
    await workflowsTable?.batchCreateFlows(fileList, true, parentFolderID);
  }

  const folderList = scanList.filter((s): s is ScanLocalFolder => "list" in s);
  if (folderList.length) {
    const currentFolderList = await foldersTable?.listAll();

    for (const folder of folderList) {
      const existFolder = currentFolderList?.find(
        (f) => f.name === folder.name,
      );

      let folderId;

      if (existFolder) {
        folderId = existFolder.id;
      } else {
        const newFolder = await foldersTable?.create({
          name: folder.name,
          parentFolderID,
        });
        folderId = newFolder?.id;
      }

      await syncNewFlowOfLocalDisk(folder.list, folderId);
    }
  }
}

export function getWorkflowIdInUrlHash() {
  const hashArr = window.location.hash.slice(1).split("/");
  const workspaceId = hashArr.find((h) => h.includes("workspaceId@"));
  return workspaceId ? workspaceId.split("@")[1] : null;
}

/**
 * Generate url hash containing workflowId;
 * If workspaceId@ exists, replace it, if it does not exist, append it.
 * This operation will not damage the original hash.
 */
export function generateUrlHashWithFlowId(id: string) {
  const hashArr = window.location.hash.slice(1).split("/");
  const workspaceIdIndex = hashArr.findIndex((h) => h.includes("workspaceId@"));
  const newWorkflowId = `workspaceId@${id}`;
  if (workspaceIdIndex >= 0) {
    hashArr[workspaceIdIndex] = newWorkflowId;
  } else {
    hashArr.push(newWorkflowId);
  }
  return `${hashArr.join("/")}`;
}

export const openWorkflowInNewTab = (workflowID: string) => {
  const newHash = generateUrlHashWithFlowId(workflowID);
  window.open(`${window.location.origin}/#${newHash}`);
};

export async function rewriteAllLocalFiles() {
  const flowList = (await workflowsTable?.listAll()) ?? [];
  for (const workflow of flowList) {
    try {
      const fullPath = await generateFilePathAbsolute(workflow);
      const flow = JSON.parse(workflow.json);
      flow.extra[COMFYSPACE_TRACKING_FIELD_NAME] = {
        id: workflow.id,
        name: workflow.name,
      };
      delete flow.extra[LEGACY_COMFYSPACE_TRACKING_FIELD_NAME];
      fullPath && (await updateFile(fullPath, JSON.stringify(flow)));
    } catch (error) {
      console.error(error);
    }
  }
}
