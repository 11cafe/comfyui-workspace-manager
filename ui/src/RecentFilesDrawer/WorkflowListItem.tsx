import {
  Box,
  HStack,
  useColorMode,
  Text,
  Checkbox,
  Flex,
  Stack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { IconExternalLink, IconLock } from "@tabler/icons-react";
import { formatTimestamp, openWorkflowInNewTab } from "../utils";
import { memo, ChangeEvent, useContext } from "react";
import DeleteConfirm from "../components/DeleteConfirm";
import { RecentFilesContext, WorkspaceContext } from "../WorkspaceContext";
import { Workflow } from "../types/dbTypes";
import MediaPreview from "../components/MediaPreview";
import MoreActionMenu from "./MoreActionMenu";

type Props = {
  workflow: Workflow;
};
export default memo(function WorkflowListItem({ workflow }: Props) {
  const { colorMode } = useColorMode();
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
  const hoverBgColor = colorMode === "light" ? "gray.200" : "#4A5568";

  const basicInfoComp = (
    <Box
      flexShrink={1}
      flexGrow={1}
      backgroundColor={isSelected ? "teal.200" : undefined}
      color={isSelected && !isMultiSelecting ? "#333" : undefined}
      draggable={!isMultiSelecting}
      onDragStart={() => setDraggingFile?.(workflow)}
      borderRadius={6}
      px={1}
      py={"3px"}
      onClick={() => {
        !isMultiSelecting && loadWorkflowID(workflow.id);
      }}
      _hover={{
        bg: hoverBgColor,
      }}
    >
      <HStack>
        {(workflow.coverMediaPath?.length || workflow.latestImage?.length) && (
          <MediaPreview
            mediaLocalPath={
              workflow.coverMediaPath ?? workflow.latestImage ?? ""
            }
            size={60}
            hideBrokenImage
            isPreview
          />
        )}

        <Stack textAlign={"left"} gap={0}>
          <Flex alignItems={"center"}>
            <Text
              fontWeight={"500"}
              noOfLines={2}
              style={{ display: "inline-block" }}
            >
              {workflow.name ?? "untitled"}
            </Text>
            {workflow.saveLock && (
              <IconLock size={18} style={{ display: "inline-block" }} />
            )}
          </Flex>

          <Text color={"GrayText"} ml={2} fontSize={"sm"}>
            Updated: {formatTimestamp(workflow.updateTime)}
          </Text>
        </Stack>
      </HStack>
    </Box>
  );

  return (
    <HStack w={"100%"} mb={1} justify={"space-between"}>
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
            <MoreActionMenu workflow={workflow} />
          </Flex>
        </>
      )}
    </HStack>
  );
});
