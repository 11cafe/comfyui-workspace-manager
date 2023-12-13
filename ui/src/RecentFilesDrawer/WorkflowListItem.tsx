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
  Portal,
} from "@chakra-ui/react";
import { Workflow } from "../WorkspaceDB";
import { formatTimestamp } from "../utils";
import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
import { IconTrash } from "@tabler/icons-react";
import { useState, MouseEvent } from "react";
import WorkflowListItemRightClickMenu from "./WorkflowListItemRightClickMenu";

type Props = {
  isSelected: boolean;
  workflow: Workflow;
  loadWorkflowID: (id: string) => void;
  onDelete: (id: string) => void;
  setActiveContextMenu: (name: string | null) => void;
  activeContextMenu: string | null;
};
export default function WorkflowListItem({
  isSelected,
  workflow,
  loadWorkflowID,
  onDelete,
  setActiveContextMenu,
  activeContextMenu,
}: Props) {
  const { colorMode } = useColorMode();
  // const [contextMenuPosition, setContextMenuPosition] = useState({
  //   top: 0,
  //   left: 0,
  // });

  // const handleContextMenu = (event: MouseEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  //   setContextMenuPosition({ top: event.clientY, left: event.clientX });
  //   setActiveContextMenu(workflow.id);
  // };

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContextMenu = (event) => {
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
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
      >
        {/* <Stack gap={0} cursor={"pointer"}> */}
        <Text fontWeight={"500"}>{workflow.name ?? "untitled"}</Text>
        <Text color={"GrayText"} ml={2} fontSize={"sm"}>
          Updated: {formatTimestamp(workflow.updateTime)}
        </Text>
        {/* </Stack> */}
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
