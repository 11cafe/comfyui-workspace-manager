import {
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react";
  import { IconDotsVertical, IconLockOpen } from "@tabler/icons-react";
  import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
  import { Workflow } from "../types/dbTypes";
  
  type Props = {
    workflow: Workflow;
  };
  export default function MoreActionMenu({ workflow }: Props) {
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
            <MenuItem icon={<IconLockOpen />}>Lock</MenuItem>
          </MenuList>
        </Menu>
      </>
    );
  }
  