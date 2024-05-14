import { useEffect, DragEvent } from "react";
import { app } from "../../utils/comfyapp";

export default function ModelDropEventListener() {
  const handleModelDrop = async (
    e: DragEvent<HTMLCanvasElement> & { canvasX: number; canvasY: number },
  ) => {
    const eventName = e.dataTransfer.getData("eventName");
    if (eventName !== "WorkspaceManagerAddNode") {
      return;
    }
    const modelRelativePath = e.dataTransfer.getData("modelRelativePath");
    const nodeType = e.dataTransfer.getData("nodeType");
    // @ts-ignore
    const node = LiteGraph.createNode(nodeType);
    node.pos = [e.canvasX, e.canvasY];
    node.configure({ widgets_values: [modelRelativePath] });
    app.graph.add(node);
  };

  useEffect(() => {
    app.canvasEl.addEventListener("drop", handleModelDrop);
    return () => {
      app.canvasEl.removeEventListener("drop", handleModelDrop);
    };
  }, []);

  return null;
}
