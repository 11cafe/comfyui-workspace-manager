import { Button, HStack, IconButton, Text, Tooltip } from "@chakra-ui/react";
import Draggable from "../components/Draggable";
import {
  IconDeviceFloppy,
  IconFolder,
  IconGripVertical,
  IconPhoto,
  IconPlus,
  IconTriangleInvertedFilled,
} from "@tabler/icons-react";
import DropdownTitle from "../components/DropdownTitle";
import { useContext } from "react";
import EditFlowName from "../components/EditFlowName";
import { WorkspaceContext } from "../WorkspaceContext";
import { PanelPosition } from "../types/dbTypes";
import "./Topbar.css";

interface Props {
  positionStyle: PanelPosition;
  updatePanelPosition: (
    position?: PanelPosition,
    needUpdateDB?: boolean,
  ) => void;
  curFlowName: string | null;
  setCurFlowName: (newName: string) => void;
}
export function Topbar({
  updatePanelPosition,
  positionStyle,
  curFlowName,
  setCurFlowName,
}: Props) {
  const { isDirty, loadNewWorkflow, saveCurWorkflow, setRoute, curFlowID } =
    useContext(WorkspaceContext);

  return (
    <Draggable
      onDragEnd={(position: { x: number; y: number }) => {
        updatePanelPosition({ top: position.y, left: position.x }, true);
      }}
    >
      <HStack
        style={{
          padding: 2,
          position: "fixed",
          ...positionStyle,
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
        draggable={false}
        id="workspaceManagerPanel"
        className="workspaceManagerPanel"
      >
        <Button
          size={"sm"}
          aria-label="workspace folder"
          onClick={() => setRoute("recentFlows")}
          px={2}
        >
          <HStack gap={1}>
            <IconFolder size={21} />
            <IconTriangleInvertedFilled size={8} />
          </HStack>
        </Button>
        <Tooltip label="New workflow">
          <Button
            size={"sm"}
            variant={"outline"}
            colorScheme="teal"
            aria-label="new workflow"
            onClick={() => loadNewWorkflow()}
            px={2}
            py={2}
          >
            <HStack gap={0}>
              <IconPlus size={16} color={"white"} />
              {/* <Text color={"white"} fontSize={"sm"}>
              New
            </Text> */}
            </HStack>
          </Button>
        </Tooltip>
        <EditFlowName
          isDirty={isDirty}
          displayName={curFlowName ?? ""}
          updateFlowName={(newName) => {
            setCurFlowName(newName);
            requestAnimationFrame(() => {
              updatePanelPosition();
            });
          }}
        />
        {curFlowID && (
          <HStack gap={"1px"}>
            <Tooltip label="Open gallery">
              <IconButton
                onClick={() => setRoute("gallery")}
                icon={<IconPhoto size={20} color="white" />}
                size={"sm"}
                aria-label="open gallery"
                variant={"ghost"}
              />
            </Tooltip>
            <DropdownTitle />
          </HStack>
        )}
        {curFlowID && isDirty ? (
          <Tooltip label="Save workflow">
            <IconButton
              style={{ width: 22 }}
              onClick={saveCurWorkflow}
              icon={<IconDeviceFloppy size={22} color="white" />}
              size={"xs"}
              aria-label="save workspace"
              variant={"ghost"}
            />
          </Tooltip>
        ) : (
          <div style={{ width: 22 }} />
        )}
        <IconGripVertical
          id="dragPanelIcon"
          className="dragPanelIcon"
          cursor="move"
          size={15}
          color="#FFF"
        />
      </HStack>
    </Draggable>
  );
}
