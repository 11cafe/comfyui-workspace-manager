import { Button, HStack } from "@chakra-ui/react";
import { lazy, useEffect, useState, DragEvent } from "react";
import ModelsListDrawer from "../models-list-drawer/ModelsListDrawer";
import { IconGripVertical } from "@tabler/icons-react";
import Draggable from "../../components/Draggable";

// @ts-ignore
import { app } from "/scripts/app.js";
import "./index.css";
import { userSettingsTable } from "../../db-tables/WorkspaceDB";
import { ModelManagerPosition } from "../../types/dbTypes";

const AddMissingModelsButton = lazy(
  () => import("./InstallMissingModelsButton"),
);

export default function ModelManagerTopbar() {
  const [showMyModels, setShowMyModels] = useState(false);
  const [positionStyle, setPositionStyle] = useState<ModelManagerPosition>();

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
    userSettingsTable?.getSetting("modelManagerTopBarStyle").then((res) => {
      updatePosition(res, false);
    });
    app.canvasEl.addEventListener("drop", handleModelDrop);
    return () => {
      app.canvasEl.removeEventListener("drop", handleModelDrop);
    };
  }, []);

  const updatePosition = (
    position?: ModelManagerPosition,
    needUpdateDB: boolean = false,
  ) => {
    const { top: curTop = 0, right: curRight = 0 } = positionStyle || {};
    const { top = 0, right = 0 } = position ?? {};
    let newTop = curTop + top;
    let newRight = positionStyle === undefined ? right : curRight - right;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    const panelElement = document.getElementById("modelManagerTopBar");
    const offsetWidth = panelElement?.offsetWidth || 224;

    if (newTop + 32 > clientHeight) newTop = clientHeight - 38;
    if (newRight + offsetWidth > clientWidth)
      newRight = clientWidth - offsetWidth - 4;

    setPositionStyle({
      top: Math.max(4, newTop),
      right: Math.max(4, newRight),
    });

    needUpdateDB &&
      userSettingsTable?.upsert({
        modelManagerTopBarStyle: { top: newTop, right: newRight },
      });
  };

  return (
    <Draggable
      onDragEnd={(position: { x: number; y: number }) => {
        updatePosition({ top: position.y, right: position.x }, true);
      }}
      dragIconId="dragModelManagerTopBarIcon"
    >
      {positionStyle ? (
        <HStack
          style={{
            position: "fixed",
            ...positionStyle,
          }}
          gap={2}
          draggable={false}
          id="modelManagerTopBar"
          className="model-manager-top-bar"
        >
          <IconGripVertical
            id="dragModelManagerTopBarIcon"
            className="drag-model-manager-top-bar-icon"
            cursor="move"
            size={15}
            color="#FFF"
          />
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
      ) : (
        ""
      )}
    </Draggable>
  );
}
