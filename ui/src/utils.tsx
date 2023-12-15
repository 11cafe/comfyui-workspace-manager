// @ts-ignore
import { ESortTypes } from "./RecentFilesDrawer/types";
import { listWorkflows, Workflow } from "./WorkspaceDB";
// import { LGraph } from "./types/litegraph";
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

export function insertWorkflowToCanvas2(json: string) {
  const clipboard_info = JSON.parse(json);
  const nodes = clipboard_info.nodes;
  let pos = [10, 10];
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
  var copy_nodes = {};

  for (var i = 0; i < nodes.length; ++i) {
    var node_data = nodes[i];
    var newnode = LiteGraph.createNode(node_data.type);
    if (newnode) {
      newnode.configure(node_data);

      //paste in last known mouse position
      // newnode.pos[0] += pos[0] + 5;
      // newnode.pos[1] += pos[1] + 5;
      // pos = newnode.pos;

      //paste in last known mouse position
      newnode.pos[0] += app.canvas.graph_mouse[0] - posMin[0]; //+= 5;
      newnode.pos[1] += app.canvas.graph_mouse[1] - posMin[1]; //+= 5;

      app.graph.add(newnode, { doProcessChange: false });

      copy_nodes[node_data.id] = newnode;
    }
  }
  console.log("22222 workflow json", clipboard_info);
  console.log("22222 copied nodes", copy_nodes);
  console.log("app.graph", app.graph);
  //create links
  for (var i = 0; i < clipboard_info.links.length; ++i) {
    var link_info = clipboard_info.links[i];
    const origin_node_slot = link_info[2];
    const target_node_slot = link_info[4];
    let target_node = copy_nodes[link_info[3]];
    let origin_node = copy_nodes[link_info[1]];

    if (origin_node && target_node)
      origin_node.connect(origin_node_slot, target_node, target_node_slot);
    else {
      console.log(
        "origin_node",
        origin_node,
        "origin_node_slot",
        origin_node_slot
      );
      console.log(
        "target_node",
        target_node,
        "target_node_slot",
        target_node_slot
      );
    }
  }
}
