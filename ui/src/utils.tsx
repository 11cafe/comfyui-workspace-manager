// @ts-ignore
import { ScanLocalFile, ScanLocalFolder, ScanLocalResult, deleteFile, updateFile } from "./Api";
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
  const res = `${month}-${day}-${year} ${hours}:${minutes}`;
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
      console.log(workflow.filePath, fullPath);
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

export async function generateUniqueName(name?: string) {
  /**
   * Generate a unique name
   * For imported scenes, the default name is the file name.
   * For new scenes, the default name is Untitled Flow.
   * Get the full workflow list. If the default name already exists, search incrementally starting from 2.
   * Looks for a unique name in the format `${default name} ${number}`.
   */
  let newFlowName = name ?? "Untitled Flow";
  const flowList = (await workflowsTable?.listAll()) ?? [];
  const flowNameList = flowList.map((flow) => flow.name);
  if (flowNameList.includes(newFlowName)) {
    let num = 2;
    let flag = true;
    while (flag) {
      if (flowNameList.includes(`${newFlowName} ${num}`)) {
        num++;
      } else {
        newFlowName = `${newFlowName} ${num}`;
        flag = false;
      }
    }
  }
  return newFlowName;
}

export function getPngMetadata(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      // Get the PNG data as a Uint8Array
      // @ts-expect-error
      const pngData = new Uint8Array(event.target.result);
      const dataView = new DataView(pngData.buffer);

      // Check that the PNG signature is present
      if (dataView.getUint32(0) !== 0x89504e47) {
        console.error("Not a valid PNG file");
        reject();
      }

      // Start searching for chunks after the PNG signature
      let offset = 8;
      const txt_chunks: Record<string, string> = {};
      // Loop through the chunks in the PNG file
      while (offset < pngData.length) {
        // Get the length of the chunk
        const length = dataView.getUint32(offset);
        // Get the chunk type
        const type = String.fromCharCode(
          ...pngData.slice(offset + 4, offset + 8),
        );
        if (type === "tEXt" || type == "comf") {
          // Get the keyword
          let keyword_end = offset + 8;
          while (pngData[keyword_end] !== 0) {
            keyword_end++;
          }
          const keyword = String.fromCharCode(
            ...pngData.slice(offset + 8, keyword_end),
          );
          // Get the text
          const contentArraySegment = pngData.slice(
            keyword_end + 1,
            offset + 8 + length,
          );
          const contentJson = Array.from(contentArraySegment)
            .map((s) => String.fromCharCode(s))
            .join("");
          txt_chunks[keyword] = contentJson;
        }

        offset += 12 + length;
      }

      resolve(txt_chunks);
    };

    reader.readAsArrayBuffer(file);
  });
}

function parseExifData(exifData) {
  // Check for the correct TIFF header (0x4949 for little-endian or 0x4D4D for big-endian)
  const isLittleEndian = new Uint16Array(exifData.slice(0, 2))[0] === 0x4949;

  // Function to read 16-bit and 32-bit integers from binary data
  function readInt(offset, isLittleEndian, length) {
    const arr = exifData.slice(offset, offset + length);
    if (length === 2) {
      return new DataView(arr.buffer, arr.byteOffset, arr.byteLength).getUint16(
        0,
        isLittleEndian,
      );
    } else if (length === 4) {
      return new DataView(arr.buffer, arr.byteOffset, arr.byteLength).getUint32(
        0,
        isLittleEndian,
      );
    }
  }

  // Read the offset to the first IFD (Image File Directory)
  const ifdOffset = readInt(4, isLittleEndian, 4);

  function parseIFD(offset) {
    const numEntries = readInt(offset, isLittleEndian, 2);
    const result = {};

    for (let i = 0; i < numEntries; i++) {
      const entryOffset = offset + 2 + i * 12;
      const tag = readInt(entryOffset, isLittleEndian, 2);
      const type = readInt(entryOffset + 2, isLittleEndian, 2);
      const numValues = readInt(entryOffset + 4, isLittleEndian, 4);
      const valueOffset = readInt(entryOffset + 8, isLittleEndian, 4);

      // Read the value(s) based on the data type
      let value;
      if (type === 2) {
        // ASCII string
        value = String.fromCharCode(
          ...exifData.slice(valueOffset, valueOffset + numValues - 1),
        );
      }

      result[tag] = value;
    }

    return result;
  }

  // Parse the first IFD
  const ifdData = parseIFD(ifdOffset);
  return ifdData;
}

export function getWebpMetadata(file: File) {
  return new Promise((r) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const webp = new Uint8Array(event?.target?.result as Iterable<number>);
      const dataView = new DataView(webp.buffer);

      // Check that the WEBP signature is present
      if (
        dataView.getUint32(0) !== 0x52494646 ||
        dataView.getUint32(8) !== 0x57454250
      ) {
        console.error("Not a valid WEBP file");
        r();
        return;
      }

      // Start searching for chunks after the WEBP signature
      let offset = 12;
      const txt_chunks = {};
      // Loop through the chunks in the WEBP file
      while (offset < webp.length) {
        const chunk_length = dataView.getUint32(offset + 4, true);
        const chunk_type = String.fromCharCode(
          ...webp.slice(offset, offset + 4),
        );
        if (chunk_type === "EXIF") {
          if (
            String.fromCharCode(...webp.slice(offset + 8, offset + 8 + 6)) ==
            "Exif\0\0"
          ) {
            offset += 6;
          }
          const data = parseExifData(
            webp.slice(offset + 8, offset + 8 + chunk_length),
          );
          for (const key in data) {
            const value = data[key];
            const index = value.indexOf(":");
            txt_chunks[value.slice(0, index)] = value.slice(index + 1);
          }
        }

        offset += 8 + chunk_length;
      }

      r(txt_chunks);
    };

    reader.readAsArrayBuffer(file);
  });
}

export function isVideoName(name: string) {
  if (name?.endsWith(".webm")) {
    return true;
  }
  if (name?.endsWith(".mp4")) {
    return true;
  }

  return false;
}

export function getVideoMetadata(file) {
  return new Promise((r) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const videoData = new Uint8Array(event.target.result);
      const dataView = new DataView(videoData.buffer);

      const decoder = new TextDecoder();
      // Check for known valid magic strings
      if (dataView.getUint32(0) == 0x1a45dfa3) {
        //webm
        //see http://wiki.webmproject.org/webm-metadata/global-metadata
        //and https://www.matroska.org/technical/elements.html
        //contrary to specs, tag seems consistently at start
        //COMMENT + 0x4487 + packed length?
        //length 0x8d8 becomes 0x48d8
        //
        //description for variable length ints https://github.com/ietf-wg-cellar/ebml-specification/blob/master/specification.markdown
        let offset = 4 + 8; //COMMENT is 7 chars + 1 to realign
        while (offset < videoData.length - 16) {
          //Check for text tags
          if (dataView.getUint16(offset) == 0x4487) {
            //check that name of tag is COMMENT
            const name = String.fromCharCode(
              ...videoData.slice(offset - 7, offset),
            );
            if (name === "COMMENT") {
              const vint = dataView.getUint32(offset + 2);
              const n_octets = Math.clz32(vint) + 1;
              if (n_octets < 4) {
                //250MB sanity cutoff
                const length =
                  (vint >> (8 * (4 - n_octets))) & ~(1 << (7 * n_octets));
                const content = decoder.decode(
                  videoData.slice(
                    offset + 2 + n_octets,
                    offset + 2 + n_octets + length,
                  ),
                );
                const json = JSON.parse(content);
                r(json);
                return;
              }
            }
          }
          offset += 1;
        }
      } else if (
        dataView.getUint32(4) == 0x66747970 &&
        dataView.getUint32(8) == 0x69736f6d
      ) {
        //mp4
        //see https://developer.apple.com/documentation/quicktime-file-format
        //Seems to make no guarantee for alignment
        let offset = videoData.length - 4;
        while (offset > 16) {
          //rough safe guess
          if (dataView.getUint32(offset) == 0x64617461) {
            //any data tag
            if (dataView.getUint32(offset - 8) == 0xa9636d74) {
              //cmt data tag
              const type = dataView.getUint32(offset + 4); //seemingly 1
              const locale = dataView.getUint32(offset + 8); //seemingly 0
              const size = dataView.getUint32(offset - 4) - 4 * 4;
              const content = decoder.decode(
                videoData.slice(offset + 12, offset + 12 + size),
              );
              const json = JSON.parse(content);
              r(json);
              return;
            }
          }

          offset -= 1;
        }
      } else {
        console.error("Unknown magic: " + dataView.getUint32(0));
        r();
        return;
      }
    };

    reader.readAsArrayBuffer(file);
  });
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
