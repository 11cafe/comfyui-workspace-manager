import {
  Box,
  HStack,
  useColorMode,
  Text,
  Checkbox,
  Flex,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Workflow, isFolder, updateFlow } from "../WorkspaceDB";
import { formatTimestamp } from "../utils";
import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
import { useState, memo, ChangeEvent, useContext } from "react";
import WorkflowListItemRightClickMenu from "./WorkflowListItemRightClickMenu";
import DeleteConfirm from "../components/DeleteConfirm";
import { RecentFilesContext, WorkspaceContext } from "../WorkspaceContext";

type Props = {
  workflow: Workflow;
};
export default function WorkflowListItem({ workflow }: Props) {
  const { colorMode } = useColorMode();
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    setDraggingFile,
    isMultiSelecting,
    onMultiSelectFlow,
    onDeleteFlow,
    multiSelectedFlowsID,
    onRefreshFilesList,
    draggingFile,
  } = useContext(RecentFilesContext);
  const isChecked =
    multiSelectedFlowsID &&
    multiSelectedFlowsID.length > 0 &&
    multiSelectedFlowsID.includes(workflow.id);
  const { curFlowID, loadWorkflowID } = useContext(WorkspaceContext);
  const isSelected = curFlowID === workflow.id;
  const handleContextMenu = (event: any) => {
    event.preventDefault();
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };
  const hoverBgColor = colorMode === "light" ? "gray.200" : "#4A5568";

  const basicInfoComp = (
    <Box
      flexShrink={1}
      flexGrow={1}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDraggingOver(true);
      }}
      onDragLeave={() => {
        setIsDraggingOver(false);
      }}
      onDrop={() => {
        if (draggingFile && !isFolder(draggingFile)) {
          updateFlow(draggingFile.id, {
            parentFolderID: workflow.parentFolderID,
          });
          onRefreshFilesList && onRefreshFilesList();
        }
        setIsDraggingOver(false);
      }}
      backgroundColor={
        isSelected ? "teal.200" : isMenuOpen ? hoverBgColor : undefined
      }
      color={isSelected && !isMultiSelecting ? "#333" : undefined}
      draggable={!isMultiSelecting}
      onDragStart={(e) => {
        setDraggingFile && setDraggingFile(workflow);
      }}
      borderRadius={6}
      px={1}
      py={1}
      onClick={() => {
        !isMultiSelecting && loadWorkflowID(workflow.id);
      }}
      _hover={{
        bg: hoverBgColor,
      }}
    >
      <HStack>
        {workflow.coverMediaPath && (
          <Image
            boxSize="60px"
            objectFit="cover"
            src={`/workspace/view_media?filename=${workflow.coverMediaPath}`}
            alt={workflow.name ?? "workflow cover image"}
          />
        )}

        <Stack textAlign={"left"} gap={0}>
          <Text fontWeight={"500"}>{workflow.name ?? "untitled"}</Text>
          <Text color={"GrayText"} ml={2} fontSize={"sm"}>
            Updated: {formatTimestamp(workflow.updateTime)}
          </Text>
        </Stack>
      </HStack>
      {isDraggingOver && (
        <Box width={"100%"} mt={2} height={"2px"} backgroundColor={"#4299E1"} />
      )}
    </Box>
  );

  return (
    <HStack
      w={"100%"}
      mb={1}
      justify={"space-between"}
      onContextMenu={handleContextMenu}
    >
      {isMultiSelecting ? (
        <Checkbox
          isChecked={isChecked}
          spacing={4}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onMultiSelectFlow &&
              onMultiSelectFlow(workflow.id, e.target.checked);
          }}
        >
          {basicInfoComp}
        </Checkbox>
      ) : (
        <>
          {basicInfoComp}
          <Flex width={"60px"}>
            <AddTagToWorkflowPopover workflow={workflow} />
            <DeleteConfirm
              promptMessage="Are you sure you want to delete this workflow?"
              onDelete={() => {
                onDeleteFlow && onDeleteFlow(workflow.id);
              }}
            />
          </Flex>
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
}
