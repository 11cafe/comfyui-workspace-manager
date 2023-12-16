// @ts-ignore
import { ESortTypes } from "./RecentFilesDrawer/types";
import { listWorkflows, Workflow } from "./WorkspaceDB";
// @ts-ignore
import { app, ComfyApp } from "/scripts/app.js";
// copied from app.js
function sanitizeNodeName(string: string): string {
  let entityMap: Record<string, string> = {
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
  for (let n of app.graph._nodes) {
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

export function formatTimestamp(unixTimestamp: number) {
  // Create a new Date object from the UNIX timestamp
  const date = new Date(unixTimestamp);

  // Get the day, month, year, hours, and minutes from the Date object
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Format the date and time string
  return `${month}-${day}-${year} ${hours}:${minutes}`;
}

/**
 * Sort workspace list data
 * @param flows Data that needs to be sorted
 * @param sortType The type of sorting
 * @returns sorted data
 */
export function sortFlows(
  flows: Workflow[] = [],
  sortType: ESortTypes = ESortTypes.RECENTLY_MODIFIED
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

export function insertWorkflowToCanvas(json: string) {
  let graphData = JSON.parse(json);
  if (typeof structuredClone === "undefined") {
    graphData = JSON.parse(JSON.stringify(graphData));
  } else {
    graphData = structuredClone(graphData);
  }
  // @ts-ignore
  var tempGraph = new LGraph();
  tempGraph.configure(graphData);
  const prevClipboard = localStorage.getItem("litegrapheditor_clipboard");

  const tempCanvas = document.createElement("canvas");
  // @ts-ignore
  let canvas = new LGraphCanvas(tempCanvas, tempGraph);
  canvas.selectNodes(tempGraph._nodes);
  canvas.copyToClipboard(tempGraph._nodes);
  app.canvas.pasteFromClipboard();

  if (prevClipboard) {
    localStorage.setItem("litegrapheditor_clipboard", prevClipboard);
  }
  // Nullify the references to help with garbage collection
  tempGraph = null;
  canvas = null;
}

export function generateUniqueName(name?: string) {
  /**
   * Generate a unique name
   * For imported scenes, the default name is the file name.
   * For new scenes, the default name is Untitled Flow.
   * Get the full workflow list. If the default name already exists, search incrementally starting from 2.
   * Looks for a unique name in the format `${default name} ${number}`.
   */
  let newFlowName = name ?? "Untitled Flow";
  const flowNameList = listWorkflows()?.map((flow) => flow.name);
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
          ...pngData.slice(offset + 4, offset + 8)
        );
        if (type === "tEXt" || type == "comf") {
          // Get the keyword
          let keyword_end = offset + 8;
          while (pngData[keyword_end] !== 0) {
            keyword_end++;
          }
          const keyword = String.fromCharCode(
            ...pngData.slice(offset + 8, keyword_end)
          );
          // Get the text
          const contentArraySegment = pngData.slice(
            keyword_end + 1,
            offset + 8 + length
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
