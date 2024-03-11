import { ChangeEvent, useContext, useRef, useState } from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import {
  IconCopy,
  IconDotsVertical,
  IconLock,
  IconLockOpen,
  IconUpload,
} from "@tabler/icons-react";
import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
import { Workflow } from "../types/dbTypes";
import { mediaTable, workflowsTable } from "../db-tables/WorkspaceDB";
import { WorkspaceContext } from "../WorkspaceContext";

type Props = {
  workflow: Workflow;
};
export default function MoreActionMenu({ workflow }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const { onDuplicateWorkflow } = useContext(WorkspaceContext);

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

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const body = new FormData();

    Array.from(files).forEach((file, index) => {
      body.append(`images[${index}]`, file, file.name);
    });
    body.append("subfolder", "workspace_manager");
    await fetch("/workspace/images/save", {
      method: "POST",
      body,
    });
    Array.from(files).forEach((file) => {
      mediaTable?.create({
        workflowID: workflow.id,
        localPath: `workspace_manager/${file.name}`,
      });
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
          <MenuItem
            icon={<IconCopy />}
            onClick={() =>
              onDuplicateWorkflow && onDuplicateWorkflow(workflow.id)
            }
          >
            Duplicate
          </MenuItem>
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
          <MenuItem
            icon={<IconUpload />}
            onClick={() => {
              fileInputRef.current?.click();
            }}
          >
            Upload Thumbnail Image
          </MenuItem>
        </MenuList>
      </Menu>
      <input
        style={{ display: "none" }}
        ref={fileInputRef}
        type="file"
        accept=".json,image/png"
        multiple
        onChange={handleFileChange}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    </>
  );
}
