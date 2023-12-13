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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Workflow } from "../WorkspaceDB";
import { formatTimestamp } from "../utils";
import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
import { IconTrash } from "@tabler/icons-react";
import { useState, MouseEvent, useContext } from "react";
import { WorkspaceContext } from "../WorkspaceContext";

type Props = {
  menuPosition: { x: number; y: number };
  onClose: () => void;
  workflowID: string;
};
export default function WorkflowListItemRightClickMenu({
  menuPosition,
  workflowID,
  onClose,
}: Props) {
  const { onDuplicateWorkflow } = useContext(WorkspaceContext);
  return (
    <>
      <Menu isOpen={true} onClose={onClose}>
        <MenuButton
          position="absolute"
          top={menuPosition.y}
          left={menuPosition.x}
          as={Button}
          hidden
        ></MenuButton>
        <MenuList>
          <MenuItem
            onClick={() =>
              onDuplicateWorkflow && onDuplicateWorkflow(workflowID)
            }
          >
            Duplicate
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
