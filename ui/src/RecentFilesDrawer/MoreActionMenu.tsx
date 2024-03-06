import { useState } from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import { IconDotsVertical, IconLockOpen, IconLock } from "@tabler/icons-react";
import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
import { Workflow } from "../types/dbTypes";
import { workflowsTable } from "../db-tables/WorkspaceDB";

type Props = {
  workflow: Workflow;
};
export default function MoreActionMenu({ workflow }: Props) {
  const toast = useToast();
  const [isLocked, setIsLocked] = useState(workflow.saveLock ?? false);

  const onLockChange = async () => {
    const newLocked = !isLocked!;
    setIsLocked(newLocked);
    await workflowsTable?.updateMetaInfo(workflow.id, {
      saveLock: newLocked,
    });
    toast({
      title: `${newLocked ? "Locked" : "Unlocked"} successfully`,
      status: "success",
      duration: 2000,
    });
  };

  return (
    <>
      <Menu isLazy closeOnSelect={false}>
        <MenuButton
          border={0}
          as={IconButton}
          aria-label="Options"
          icon={<IconDotsVertical size={20} />}
          size={"sm"}
          variant="outline"
        />
        <MenuList zIndex={101}>
          <AddTagToWorkflowPopover workflow={workflow} />
          <Tooltip
            hasArrow
            label={
              isLocked
                ? "Unlock workflow, allow modifying"
                : "Lock workflow, prevent modifying"
            }
            placement="bottom"
          >
            <MenuItem
              icon={isLocked ? <IconLock /> : <IconLockOpen />}
              onClick={onLockChange}
            >
              {isLocked ? "Unlock" : "Lock"}
            </MenuItem>
          </Tooltip>
        </MenuList>
      </Menu>
    </>
  );
}
