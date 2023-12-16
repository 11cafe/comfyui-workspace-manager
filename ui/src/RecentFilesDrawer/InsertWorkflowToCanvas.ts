// these code are extracted and combined from LGraph.prototype.configure and LGCanvas.pasteFromClipboard
export function insertWorkflowToCanvas2(json: string, insertPos?: number[]) {
  const clipboard_info = JSON.parse(json);
  const nodes = clipboard_info.nodes;
  // LiteGraph.use_uuids = true;

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
    if (!newnode) {
      // missing custom node type
      if (LiteGraph.debug) {
        console.log("Node not found or has errors: " + node_data.type);
      }
      //in case of error we create a replacement node to avoid losing info
      newnode = new LGraphNode();
      newnode.last_serialization = node_data;
      newnode.has_errors = true;
    }
    if (newnode) {
      newnode.configure(node_data);
      //paste in last known mouse position
      let canvasPos = insertPos
        ? [insertPos[0] - 11, insertPos[1] - 11]
        : app.canvas.graph_mouse;
      newnode.pos[0] += canvasPos[0] - posMin[0]; //+= 5;
      newnode.pos[1] += canvasPos[1] - posMin[1]; //+= 5;

      app.graph.add(newnode, { doProcessChange: false });

      copy_nodes[node_data.id] = newnode;
    }
  }
  //create links
  for (var i = 0; i < clipboard_info.links.length; ++i) {
    var link_info = clipboard_info.links[i];
    const origin_node_slot = link_info[2];
    const target_node_slot = link_info[4];
    let target_node = copy_nodes[link_info[3]];
    // this is avoid disconnect in LGraphNode.prototype.connect (line 4295), causing insert same workflow again and it disconnects prior links:
    // if there is something already plugged there, disconnect
    // .... if (target_node.inputs[target_slot] && target_node.inputs[target_slot].link != null) { ....
    target_node.inputs[target_node_slot] &&
      target_node.inputs[target_node_slot].link != null;
    let origin_node = copy_nodes[link_info[1]];
    console.log(
      "origin node",
      origin_node?.serialize(),
      "target node",
      target_node?.serialize()
    );
    if (origin_node && target_node)
      origin_node.connect(origin_node_slot, target_node, target_node_slot);
    else {
      console.error(
        "Nodes missing on pasting",
        "origin node",
        origin_node?.serialize(),
        "target node",
        target_node.serialize()
      );
    }
  }
  // console.log("app.graph1111", app.graph);
}

export function insertWorkflowToCanvas3(json: string, insertPos?: number[]) {
  const clipboard_info = JSON.parse(json);
  const old_nodes = clipboard_info.nodes;
  const old_links = clipboard_info.links;
  const LLink = LiteGraph.LLink;
  // LiteGraph.use_uuids = true;
  console.log("app.graph", app.graph);
  let old_new_node_ids_map: Record<string, string> = {};
  let last_node_id = app.graph.last_node_id;
  for (let i = 0; i < old_nodes.length; i++) {
    last_node_id++;
    old_new_node_ids_map[old_nodes[i].id] = last_node_id;
  }
  console.log("old_new_node_ids_map", old_new_node_ids_map);
  let old_new_link_ids_map: Record<string, string> = {};
  let last_link_id = app.graph.last_link_id;
  for (let i = 0; i < clipboard_info.links.length; i++) {
    last_link_id++;
    old_new_link_ids_map[clipboard_info.links[i][0]] = last_link_id;
  }
  console.log("old_new_link_ids_map", old_new_link_ids_map);
  // decode links
  if (old_links && old_links.constructor === Array) {
    var links = [];
    for (var i = 0; i < old_links.length; ++i) {
      const old_link = old_links[i];
      let new_link = [...old_link];
      new_link[0] = old_new_link_ids_map[old_link[0]];
      new_link[1] = old_new_node_ids_map[old_link[1]];
      new_link[3] = old_new_node_ids_map[old_link[3]];
      //   new_links.push(new_link);
      var llink = new LLink();
      llink.configure(new_link);
      links[llink.id] = llink;
      app.graph.links[llink.id] = llink;
    }
    app.graph.last_link_id = last_link_id;
  }
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
  var newNodes = [];
  var newNodesInfo = {};
  for (var i = 0; i < old_nodes.length; ++i) {
    var node_data = old_nodes[i];
    var new_node_data = { ...node_data };
    new_node_data.id = old_new_node_ids_map[node_data.id];
    new_node_data.inputs?.forEach((input) => {
      input.link = old_new_link_ids_map[input.link];
    });
    new_node_data.outputs?.forEach((output) => {
      output.links = output.links?.map((link) => old_new_link_ids_map[link]);
    });

    //paste in last known mouse position
    let canvasPos = insertPos
      ? [insertPos[0] - 11, insertPos[1] - 11]
      : app.canvas.graph_mouse;
    new_node_data.pos[0] += canvasPos[0] - posMin[0]; //+= 5;
    new_node_data.pos[1] += canvasPos[1] - posMin[1]; //+= 5;

    var newnode = LiteGraph.createNode(new_node_data.type);
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
