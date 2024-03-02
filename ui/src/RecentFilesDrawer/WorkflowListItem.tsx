import {
  Box,
  HStack,
  useColorMode,
  Text,
  Checkbox,
  Flex,
  Image,
  Stack,
  IconButton,
  Tooltip,
  Divider,
} from "@chakra-ui/react";
import { IconExternalLink } from "@tabler/icons-react";
import { formatTimestamp, openWorkflowInNewTab, isImageFormat } from "../utils";
import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
import { MouseEvent, useState, memo, ChangeEvent, useContext } from "react";
import WorkflowListItemRightClickMenu from "./WorkflowListItemRightClickMenu";
import DeleteConfirm from "../components/DeleteConfirm";
import { RecentFilesContext, WorkspaceContext } from "../WorkspaceContext";
import { Workflow } from "../types/dbTypes";
import MediaPreview from "../components/MediaPreview";

type Props = {
  workflow: Workflow;
  index: number;
};
export default memo(function WorkflowListItem({ workflow, index }: Props) {
  const { colorMode } = useColorMode();
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    setDraggingFile,
    isMultiSelecting,
    onMultiSelectFlow,
    onDeleteFlow,
    multiSelectedFlowsID,
  } = useContext(RecentFilesContext);
  const isChecked =
    multiSelectedFlowsID &&
    multiSelectedFlowsID.length > 0 &&
    multiSelectedFlowsID.includes(workflow.id);
  const { curFlowID, loadWorkflowID } = useContext(WorkspaceContext);
  const isSelected = curFlowID === workflow.id;
  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setIsMenuOpen(true);
  };
  const [isHovered, setIsHovered] = useState(false);
  const handleClose = () => {
    setIsMenuOpen(false);
  };
  const hoverBgColor = colorMode === "light" ? "gray.200" : "#4A5568";

  const basicInfoComp = (
    <Box
      flexShrink={1}
      flexGrow={1}
      backgroundColor={
        isSelected ? "teal.200" : isMenuOpen ? hoverBgColor : undefined
      }
      width={"500px"}
      color={isSelected && !isMultiSelecting ? "#333" : undefined}
      draggable={!isMultiSelecting}
      onDragStart={() => setDraggingFile?.(workflow)}
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
      <HStack flexGrow={1}>
        {workflow.coverMediaPath != null && (
          <MediaPreview
            mediaLocalPath={workflow.coverMediaPath}
            size={60}
            hideBrokenImage
            isPreview
          />
        )}
        <HStack
          textAlign={"left"}
          gap={0}
          justifyContent={"space-between"}
          flexGrow={1}
        >
          <Text fontWeight={"500"} width={"70%"} noOfLines={2}>
            {workflow.name ?? "untitled"}
          </Text>
          <Text color={"GrayText"} ml={"2px"} fontSize={"sm"}>
            {formatTimestamp(workflow.updateTime, false, false, "/")}
          </Text>
        </HStack>
      </HStack>
    </Box>
  );

  return (
    <HStack
      w={"100%"}
      mb={1}
      // background={index % 2 == 0 ? "rgba(256, 256, 256,0.022)" : undefined}
      borderBottom={"1px solid"}
      borderColor={"gray.800"}
      justify={"space-between"}
      onContextMenu={handleContextMenu}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
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
          <Flex width={"90px"} justifyContent={"flex-end"}>
            {/* {isHovered && <AddTagToWorkflowPopover workflow={workflow} />} */}

            <Tooltip label="Open in new tab">
              <IconButton
                aria-label="Open in new tab"
                size={"sm"}
                variant="ghost"
                onClick={() => openWorkflowInNewTab(workflow.id)}
                icon={<IconExternalLink color={"#718096"} size={23} />}
              />
            </Tooltip>

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
});
