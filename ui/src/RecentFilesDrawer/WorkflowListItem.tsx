import { Box, HStack, useColorMode, Text, Checkbox } from "@chakra-ui/react";
import { Workflow } from "../WorkspaceDB";
import { formatTimestamp } from "../utils";
import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
import { useState, memo, ChangeEvent } from "react";
import WorkflowListItemRightClickMenu from "./WorkflowListItemRightClickMenu";
import DeleteConfirm from "../components/DeleteConfirm";

type Props = {
  isSelected: boolean;
  workflow: Workflow;
  multipleState: boolean;
  isChecked: boolean;
  loadWorkflowID: (id: string) => void;
  onDelete: (id: string) => void;
  onDraggingWorkflowID: (id: string) => void;
  onSelect: (id: string, selected: boolean) => void;
};
export default memo(function WorkflowListItem({
  isSelected,
  workflow,
  multipleState,
  isChecked,
  loadWorkflowID,
  onDelete,
  onDraggingWorkflowID,
  onSelect,
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

  const basicInfoComp = (
    <Box
      textAlign={"left"}
      backgroundColor={isSelected ? "teal.200" : undefined}
      color={isSelected && !multipleState ? "#333" : undefined}
      w={"90%"}
      draggable
      onDragStart={(e) => {
        !multipleState && workflow.id && onDraggingWorkflowID(workflow.id);
      }}
      borderRadius={6}
      p={2}
      minW={320}
      onClick={() => {
        !multipleState && loadWorkflowID(workflow.id);
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
  );

  return (
    <HStack
      w={"100%"}
      mb={2}
      justify={"space-between"}
      onContextMenu={handleContextMenu}
    >
      {multipleState ? (
        <Checkbox
          isChecked={isChecked}
          spacing={4}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onSelect(workflow.id, e.target.checked);
          }}
        >
          {basicInfoComp}
        </Checkbox>
      ) : (
        <>
          {basicInfoComp}
          <AddTagToWorkflowPopover workflow={workflow} />
          <DeleteConfirm
            promptMessage="Are you sure you want to delete this workflow?"
            onDelete={() => {
              onDelete(workflow.id);
            }}
          />
        </>
      )}
      {isMenuOpen && (
        <WorkflowListItemRightClickMenu
          menuPosition={menuPosition}
          onClose={handleClose}
          workflowID={workflow.id}
        />
      )}
    </HStack>
  );
});
