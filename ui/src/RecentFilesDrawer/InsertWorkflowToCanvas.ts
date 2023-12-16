// @ts-nocheck
// these code are extracted and combined from LGraph.prototype.configure and LGCanvas.pasteFromClipboard
export function insertWorkflowToCanvas2(json: string) {
  const clipboard_info = JSON.parse(json);
  const nodes = clipboard_info.nodes;

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
      newnode.pos[0] += app.canvas.graph_mouse[0] - posMin[0]; //+= 5;
      newnode.pos[1] += app.canvas.graph_mouse[1] - posMin[1]; //+= 5;

      app.graph.add(newnode, { doProcessChange: false });
      // the id mapping here is not unique, so we need to fix it
      copy_nodes[node_data.id] = newnode;
    }
  }
  //create links
  for (var i = 0; i < clipboard_info.links.length; ++i) {
    var link_info = clipboard_info.links[i];
    const origin_node_slot = link_info[2];
    const target_node_slot = link_info[4];
    // TODO: WE NEED TO FIX HERE BECAUSE link_info[3] is not the unique node id
    let target_node = copy_nodes[link_info[3]];
    let origin_node = copy_nodes[link_info[1]];

    if (origin_node && target_node)
      origin_node.connect(origin_node_slot, target_node, target_node_slot);
    else {
      console.error(
        "cannot find node",
        origin_node?.serialize(),
        target_node?.serialize()
      );
    }
  }
}
