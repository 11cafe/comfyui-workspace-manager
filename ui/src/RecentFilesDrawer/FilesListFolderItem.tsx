import {
  Box,
  HStack,
  useColorMode,
  Text,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import { Folder, Workflow } from "../WorkspaceDB";
import { formatTimestamp } from "../utils";
import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
import { useState, memo, ChangeEvent } from "react";
import WorkflowListItemRightClickMenu from "./WorkflowListItemRightClickMenu";
import DeleteConfirm from "../components/DeleteConfirm";
import {
  IconFolderFilled,
  IconTriangleInverted,
  IconTriangleInvertedFilled,
} from "@tabler/icons-react";

type Props = {
  folder: Folder;
};
export default memo(function FilesListFolderItem({ folder }: Props) {
  const [isActive, setIsActive] = useState(false);
  const { colorMode } = useColorMode();
  const activeStyle =
    colorMode === "light"
      ? { backgroundColor: "gray.200" }
      : { backgroundColor: "#4A5568" };

  return (
    <Stack>
      <HStack
        w={"100%"}
        mb={2}
        gap={1}
        onDragOver={() => {
          setIsActive(true);
        }}
        onDragLeave={() => {
          setIsActive(false);
        }}
        onDrop={() => {
          console.log("dropped");
        }}
        style={isActive ? activeStyle : undefined}
      >
        <HStack gap={1}>
          <IconTriangleInvertedFilled size={8} />
          <IconFolderFilled size={19} color="blue" />
        </HStack>
        <Text>{folder.name}</Text>
      </HStack>
    </Stack>
  );
});
