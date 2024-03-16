import { Button, Stack } from "@chakra-ui/react";
import { lazy, useEffect, DragEvent, useContext } from "react";
import ModelsListDrawer from "../models-list-drawer/ModelsListDrawer";

// @ts-ignore
import { app } from "/scripts/app.js";
import "./index.css";
import { WorkspaceContext } from "../../WorkspaceContext";

const AddMissingModelsButton = lazy(
  () => import("./InstallMissingModelsButton"),
);

export default function ModelManagerTopbar() {
  const { setRoute, route } = useContext(WorkspaceContext);
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

  return (
    <Stack style={{ position: "relative" }}>
      <Button
        size={"sm"}
        colorScheme="blue"
        aria-label="My models"
        onClick={() => setRoute("modelList")}
        px={1}
      >
        Models
      </Button>
      <div style={{ position: "absolute", top: "38px", left: "0px" }}>
        <AddMissingModelsButton />
      </div>
      {route === "modelList" && (
        <ModelsListDrawer onClose={() => setRoute("root")} />
      )}
    </Stack>
  );
}
