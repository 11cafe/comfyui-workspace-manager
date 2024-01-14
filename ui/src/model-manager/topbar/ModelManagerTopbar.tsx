import { Box, Button, HStack } from "@chakra-ui/react";
import Draggable from "../components/Draggable";
import { IconGripVertical } from "@tabler/icons-react";
import { useCallback, useContext, useEffect, useState } from "react";
import { ManagerContext } from "../ManagerContext";
import { PanelPosition } from "../types";
import React from "react";
import ModelsListDrawer from "../models-list-drawer/ModelsListDrawer";

const AddMissingModelsButton = React.lazy(
  () => import("./InstallMissingModelsButton")
);
interface Props {}

const WIDTH = 200;
export default function ModelManagerTopbar({}: Props) {
  const [showMyModels, setShowMyModels] = useState(false);
  return (
    <>
      <Button
        size={"sm"}
        variant={"outline"}
        colorScheme="teal"
        aria-label="My models"
        onClick={() => setShowMyModels(true)}
        px={2}
      >
        My models
      </Button>
      {showMyModels && (
        <ModelsListDrawer onClose={() => setShowMyModels(false)} />
      )}
    </>
  );
}
