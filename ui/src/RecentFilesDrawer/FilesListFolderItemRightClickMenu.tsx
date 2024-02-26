import { Box, Menu, MenuList, MenuItem } from "@chakra-ui/react";
import { MouseEvent, useContext, useState } from "react";
import { RecentFilesContext } from "../WorkspaceContext";
import { workflowsTable, foldersTable } from "../db-tables/WorkspaceDB";
import EditFolderNameModal from "../components/EditFolderName";
import {
  IconFolderPlus,
  IconPencil,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import { EFlowOperationType, Folder } from "../types/dbTypes";
import ImportFlowsFileInput from "./ImportFlowsFileInput";
import { defaultGraph } from "../defaultGraph";
import { useDialog } from "../components/AlertDialogProvider";
import { getFileCountInFolder } from "../db-tables/DiskFileUtils";

type Props = {
  menuPosition: { x: number; y: number };
  onClose: () => void;
  isopen: boolean;
  folder: Folder;
};
export default function FilesListFolderItemRightClickMenu({
  menuPosition,
  isopen,
  folder,
  onClose,
}: Props) {
  const [isRenameOpen, setIsRenameOpen] = useState(false);
  const { onRefreshFilesList } = useContext(RecentFilesContext);
  const { showDialog } = useDialog();

  const onClickNewFolder = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    await foldersTable?.create({
      name: "New Folder",
      parentFolderID: folder.id,
    });
    onRefreshFilesList && onRefreshFilesList();
  };
  const onClickNewFile = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    await workflowsTable?.createFlow({
      json: JSON.stringify(defaultGraph),
      parentFolderID: folder.id,
    });
    onRefreshFilesList && onRefreshFilesList();
  };

  const openDeleteConfirm = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const fileCount = await getFileCountInFolder(folder.id);
    showDialog(
      `Do you want to delete the ${fileCount} files inside the folder too?`,
      [
        // {
        //   label: "Keep and move to root directory",
        //   colorScheme: "teal",
        //   onClick: () => {
        //     onDelete(EFlowOperationType.MOVE_TO_ROOT_FOLDER);
        //   },
        // },
        {
          label: "Delete all files",
          colorScheme: "red",
          onClick: () => {
            onDelete(EFlowOperationType.DELETE);
          },
        },
      ],
    );
  };

  const onDelete = async (operationType: EFlowOperationType) => {
    await foldersTable?.deleteFolder(folder.id, operationType);
    onClose();
    onRefreshFilesList && onRefreshFilesList();
  };

  return (
    <>
      <Box position="absolute" top={menuPosition.y} left={menuPosition.x}>
        <Menu
          isOpen={isopen}
          onClose={onClose}
          isLazy
          lazyBehavior="keepMounted"
        >
          <MenuList>
            <MenuItem
              icon={<IconPencil size={19} />}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsRenameOpen(true);
              }}
            >
              Rename
            </MenuItem>
            <MenuItem
              icon={<IconTrash size={19} />}
              onClick={openDeleteConfirm}
            >
              Delete
            </MenuItem>
            <MenuItem
              onClick={onClickNewFolder}
              icon={<IconFolderPlus size={19} />}
            >
              New folder
            </MenuItem>
            <MenuItem onClick={onClickNewFile} icon={<IconPlus size={19} />}>
              New file
            </MenuItem>
            <ImportFlowsFileInput
              parentFolderID={folder.id}
              onlyImportFile={true}
            />
          </MenuList>
        </Menu>
      </Box>

      {isRenameOpen && (
        <EditFolderNameModal
          folder={folder}
          onclose={() => setIsRenameOpen(false)}
        />
      )}
    </>
  );
}
