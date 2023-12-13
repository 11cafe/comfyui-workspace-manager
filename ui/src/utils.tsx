// @ts-ignore
import { ESortTypes } from "./RecentFilesDrawer/types";
import { Workflow } from "./WorkspaceDB";
// @ts-ignore
import { app } from "/scripts/app.js";
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
  console.log("insertWorkflowToCanvas", json);
  const prevClipboard = localStorage.getItem("litegrapheditor_clipboard");
  localStorage.setItem("litegrapheditor_clipboard", json);
  app.canvas.pasteFromClipboard();
  prevClipboard &&
    localStorage.setItem("litegrapheditor_clipboard", prevClipboard);
}
export function insertWorkflowCopyClipboard() {
  // these code are copied from LGraphCanvas.prototype.pasteFromClipboard
  //create nodes
  var clipboard_info = JSON.parse(data);
  // calculate top-left node, could work without this processing but using diff with last node pos :: clipboard_info.nodes[clipboard_info.nodes.length-1].pos
  var posMin = false;
  var posMinIndexes = false;
  for (var i = 0; i < clipboard_info.nodes.length; ++i) {
    if (posMin) {
      if (posMin[0] > clipboard_info.nodes[i].pos[0]) {
        posMin[0] = clipboard_info.nodes[i].pos[0];
        posMinIndexes[0] = i;
      }
      if (posMin[1] > clipboard_info.nodes[i].pos[1]) {
        posMin[1] = clipboard_info.nodes[i].pos[1];
        posMinIndexes[1] = i;
      }
    } else {
      posMin = [clipboard_info.nodes[i].pos[0], clipboard_info.nodes[i].pos[1]];
      posMinIndexes = [i, i];
    }
  }
  var nodes = [];
  for (var i = 0; i < clipboard_info.nodes.length; ++i) {
    var node_data = clipboard_info.nodes[i];
    var node = LiteGraph.createNode(node_data.type);
    if (node) {
      node.configure(node_data);

      //paste in last known mouse position
      node.pos[0] += this.graph_mouse[0] - posMin[0]; //+= 5;
      node.pos[1] += this.graph_mouse[1] - posMin[1]; //+= 5;

      this.graph.add(node, { doProcessChange: false });

      nodes.push(node);
    }
  }

  //create links
  for (var i = 0; i < clipboard_info.links.length; ++i) {
    var link_info = clipboard_info.links[i];
    var origin_node;
    var origin_node_relative_id = link_info[0];
    if (origin_node_relative_id != null) {
      origin_node = nodes[origin_node_relative_id];
    } else if (
      LiteGraph.ctrl_shift_v_paste_connect_unselected_outputs &&
      isConnectUnselected
    ) {
      var origin_node_id = link_info[4];
      if (origin_node_id) {
        origin_node = this.graph.getNodeById(origin_node_id);
      }
    }
    var target_node = nodes[link_info[2]];
    if (origin_node && target_node)
      origin_node.connect(link_info[1], target_node, link_info[3]);
    else console.warn("Warning, nodes missing on pasting");
  }
}
