// @ts-nocheck

export function insertWorkflowToCanvas3(json: string, insertPos?: number[]) {
  const clipboard_info = JSON.parse(json);
  const old_nodes = clipboard_info.nodes;
  const old_links = clipboard_info.links;
  const LLink = LiteGraph.LLink;
  // LiteGraph.use_uuids = true;
  const old_new_node_ids_map: Record<string, string> = {};
  let last_node_id = app.graph.last_node_id;
  for (let i = 0; i < old_nodes.length; i++) {
    last_node_id++;
    old_new_node_ids_map[old_nodes[i].id] = last_node_id;
  }
  const old_new_link_ids_map: Record<string, string> = {};
  let last_link_id = app.graph.last_link_id;
  for (let i = 0; i < clipboard_info.links.length; i++) {
    last_link_id++;
    old_new_link_ids_map[clipboard_info.links[i][0]] = last_link_id;
  }
  // decode links
  if (old_links && old_links.constructor === Array) {
    const links = [];
    for (var i = 0; i < old_links.length; ++i) {
      const old_link = old_links[i];
      const new_link = [...old_link];
      new_link[0] = old_new_link_ids_map[old_link[0]];
      new_link[1] = old_new_node_ids_map[old_link[1]];
      new_link[3] = old_new_node_ids_map[old_link[3]];
      //   new_links.push(new_link);
      const llink = new LLink();
      llink.configure(new_link);
      links[llink.id] = llink;
      app.graph.links[llink.id] = llink;
    }
    app.graph.last_link_id = last_link_id;
  }
  // calculate top-left node, could work without this processing but using diff with last node pos :: clipboard_info.nodes[clipboard_info.nodes.length-1].pos
  let posMin = false;
  let posMinIndexes = false;
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
  const newNodes = [];
  const newNodesInfo = {};
  for (var i = 0; i < old_nodes.length; ++i) {
    const node_data = old_nodes[i];
    const new_node_data = { ...node_data };
    new_node_data.id = old_new_node_ids_map[node_data.id];
    new_node_data.inputs?.forEach((input) => {
      input.link = old_new_link_ids_map[input.link];
    });
    new_node_data.outputs?.forEach((output) => {
      output.links = output.links?.map((link) => old_new_link_ids_map[link]);
    });

    //paste in last known mouse position
    const canvasPos = insertPos
      ? [insertPos[0] - 11, insertPos[1] - 11]
      : app.canvas.graph_mouse;
    new_node_data.pos[0] += canvasPos[0] - posMin[0]; //+= 5;
    new_node_data.pos[1] += canvasPos[1] - posMin[1]; //+= 5;

    let newnode = LiteGraph.createNode(new_node_data.type);
    if (!newnode) {
      // missing custom node type
      if (LiteGraph.debug) {
        console.log("Node not found or has errors: " + new_node_data.type);
      }
      //in case of error we create a replacement node to avoid losing info
      newnode = new LGraphNode();
      newnode.last_serialization = new_node_data;
      newnode.has_errors = true;
    }

    newnode.id = new_node_data.id;
    app.graph.add(newnode, true);
    newNodes.push(newnode);
    newNodesInfo[newnode.id] = new_node_data;
  }

  newNodes.forEach((node) => {
    node.configure(newNodesInfo[node.id]);
  });
}
