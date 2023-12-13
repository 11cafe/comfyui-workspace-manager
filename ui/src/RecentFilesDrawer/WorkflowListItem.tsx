import {
  Box,
  HStack,
  useColorMode,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  Button,
  PopoverBody,
} from "@chakra-ui/react";
import { Workflow } from "../WorkspaceDB";
import { formatTimestamp } from "../utils";
import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
import { IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import WorkflowListItemRightClickMenu from "./WorkflowListItemRightClickMenu";

type Props = {
  isSelected: boolean;
  workflow: Workflow;
  loadWorkflowID: (id: string) => void;
  onDelete: (id: string) => void;
  onDraggingWorkflowID: (id: string) => void;
};
export default function WorkflowListItem({
  isSelected,
  workflow,
  loadWorkflowID,
  onDelete,
  onDraggingWorkflowID,
}: Props) {
  const { colorMode } = useColorMode();

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContextMenu = (event: any) => {
    event.preventDefault();
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setIsMenuOpen(true);
  };
  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <HStack
      w={"100%"}
      justify={"space-between"}
      onContextMenu={handleContextMenu}
    >
      <Box
        as="button"
        textAlign={"left"}
        backgroundColor={isSelected ? "teal.200" : undefined}
        color={isSelected ? "#333" : undefined}
        w={"90%"}
        draggable
        onDragStart={(e) => {
          console.log("dragging", workflow.name);
          console.log("dragging id", workflow.id);
          workflow.id && onDraggingWorkflowID(workflow.id);
        }}
        borderRadius={6}
        p={2}
        mb={2}
        onClick={() => {
          loadWorkflowID(workflow.id);
        }}
        _hover={{
          bg: colorMode === "light" ? "gray.200" : "#4A5568",
        }}
        _active={{
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
      >
        <Text fontWeight={"500"}>{workflow.name ?? "untitled"}</Text>
        <Text color={"GrayText"} ml={2} fontSize={"sm"}>
          Updated: {formatTimestamp(workflow.updateTime)}
        </Text>
      </Box>
      {isMenuOpen && (
        <WorkflowListItemRightClickMenu
          menuPosition={menuPosition}
          onClose={handleClose}
          workflowID={workflow.id}
        />
      )}
      <AddTagToWorkflowPopover workflow={workflow} />
      <Popover isLazy={true}>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <IconTrash color="#F56565" cursor={"pointer"} />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
              <PopoverBody>
                <Text mb={4} fontWeight={600}>
                  Are you sure you want to delete this workflow?
                </Text>
                <Button
                  colorScheme="red"
                  size={"sm"}
                  onClick={() => {
                    onDelete(workflow.id);
                    onClose();
                  }}
                >
                  Yes, delete
                </Button>
              </PopoverBody>
            </PopoverContent>
          </>
        )}
      </Popover>
    </HStack>
  );
}
