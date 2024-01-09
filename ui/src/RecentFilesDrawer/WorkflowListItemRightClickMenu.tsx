import { Box, Menu, MenuList, MenuItem } from "@chakra-ui/react";
import { useContext } from "react";
import { WorkspaceContext } from "../WorkspaceContext";

type Props = {
  menuPosition: { x: number; y: number };
  onClose: () => void;
  workflowID: string;
  handleSetRenameId?: (flowId: string) => void;
};
export default function WorkflowListItemRightClickMenu({
  menuPosition,
  workflowID,
  onClose,
  handleSetRenameId
}: Props) {
  const { onDuplicateWorkflow } = useContext(WorkspaceContext);

  return (
    <>
      <Box position="absolute" top={menuPosition.y} left={menuPosition.x}>
        <Menu isOpen={true} onClose={onClose}>
          <MenuList>
            <MenuItem
              onClick={() =>
                onDuplicateWorkflow && onDuplicateWorkflow(workflowID)
              }
            >
              Duplicate
            </MenuItem>
            <MenuItem
              onClick={() =>handleSetRenameId?.(workflowID)}
            >
              Rename
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
