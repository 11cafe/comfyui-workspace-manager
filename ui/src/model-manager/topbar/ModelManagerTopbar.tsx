import { Box, Button, HStack } from "@chakra-ui/react";
import { useEffect, useState, DragEvent } from "react";
import React from "react";
import ModelsListDrawer from "../models-list-drawer/ModelsListDrawer";
// @ts-ignore
import { app } from "/scripts/app.js";

const AddMissingModelsButton = React.lazy(
  () => import("./InstallMissingModelsButton"),
);
interface Props {}

export default function ModelManagerTopbar({}: Props) {
  const [showMyModels, setShowMyModels] = useState(false);
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
    console.log(e);
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
    <HStack position={"fixed"} top={2} right={2} gap={2}>
      <AddMissingModelsButton />

      <Button
        size={"sm"}
        colorScheme="blue"
        aria-label="My models"
        onClick={() => setShowMyModels(true)}
        px={1}
      >
        Models
      </Button>
      {showMyModels && (
        <ModelsListDrawer onClose={() => setShowMyModels(false)} />
      )}
    </HStack>
  );
}
