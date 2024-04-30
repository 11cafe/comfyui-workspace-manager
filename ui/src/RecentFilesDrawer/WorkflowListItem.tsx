import {
  Box,
  HStack,
  useColorMode,
  Text,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import { IconLock } from "@tabler/icons-react";
import { formatTimestamp } from "../utils";
import { memo, ChangeEvent, useContext, useState } from "react";
import { RecentFilesContext, WorkspaceContext } from "../WorkspaceContext";
import { Workflow } from "../types/dbTypes";
import MediaPreview from "../components/MediaPreview";
import WorkflowListItemActionButtons from "./WorkflowListItemActionButtons";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

type Props = {
  workflow: Workflow;
};
export default memo(function WorkflowListItem({ workflow }: Props) {
  const { colorMode } = useColorMode();
  const {
    setDraggingFile,
    isMultiSelecting,
    onMultiSelectFlow,
    multiSelectedFlowsID,
  } = useContext(RecentFilesContext);
  const isChecked =
    multiSelectedFlowsID &&
    multiSelectedFlowsID.length > 0 &&
    multiSelectedFlowsID.includes(workflow.id);
  const { curFlowID, loadWorkflowID } = useContext(WorkspaceContext);
  const isSelected = curFlowID === workflow.id;
  const hoverBgColor = colorMode === "light" ? "gray.200" : "#4A5568";
  const [isHovering, setIsHovering] = useState(false);
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
      py={"5px"}
      onClick={() => {
        !isMultiSelecting && loadWorkflowID(workflow.id);
      }}
      _hover={{
        bg: hoverBgColor,
      }}
    >
      <HStack flexGrow={1}>
        {!userSettingsTable?.settings?.hideCoverImage &&
          (workflow.coverMediaPath?.length || workflow.latestImage?.length) && (
            <MediaPreview
              mediaLocalPath={
                workflow.coverMediaPath ?? workflow.latestImage ?? ""
              }
              size={60}
              hideBrokenImage
              isPreview
            />
          )}

        <Box
          textAlign={"left"}
          gap={0}
          justifyContent={"space-between"}
          flexGrow={1}
        >
          <Flex alignItems={"center"}>
            <Text fontWeight={"500"} noOfLines={1} wordBreak={"break-all"}>
              {workflow.name ?? "untitled"}
            </Text>
            {workflow.saveLock && (
              <IconLock size={18} style={{ display: "inline-block" }} />
            )}
          </Flex>
        </Box>
      </HStack>
    </Box>
  );

  return (
    <HStack
      w={"100%"}
      justify={"space-between"}
      borderBottom={"1px solid"}
      borderColor={colorMode == "dark" ? "gray.700" : "gray.200"}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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
          <Box width={"fit-content"}>
            {isHovering ? (
              <WorkflowListItemActionButtons workflow={workflow} />
            ) : (
              <Text color={"GrayText"} fontSize={"sm"}>
                {formatTimestamp(workflow.updateTime, false, false, "/")}
              </Text>
            )}
          </Box>
        </>
      )}
    </HStack>
  );
});
