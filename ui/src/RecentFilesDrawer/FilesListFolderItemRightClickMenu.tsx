import {
  Box,
  Menu,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
  Button,
  PopoverArrow,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { RecentFilesContext, WorkspaceContext } from "../WorkspaceContext";
import { Folder, foldersTable, listWorkflows } from "../db-tables/WorkspaceDB";
import EditFolderNameModal from "../components/EditFolderName";
import DeleteConfirm from "../components/DeleteConfirm";

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
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { onRefreshFilesList, onDeleteFlow } = useContext(RecentFilesContext);

  const handleDeleteFolderWithItems = () => {
    const flowsInFolder = listWorkflows()
      .filter(flow => flow.parentFolderID === folder.id);

    flowsInFolder.forEach(flow => { onDeleteFlow?.(flow.id) })

    handleDeleteFolderWithoutFiles();
  }

  const handleDeleteFolderWithoutFiles = () => {
    setIsDeleteOpen(false);
    onClose();
    foldersTable?.delete(folder.id);
    onRefreshFilesList && onRefreshFilesList();
  }

  return (
    <>
      <Box position="absolute" top={menuPosition.y} left={menuPosition.x}>
        <Menu isOpen={isopen} onClose={onClose} isLazy>
          <MenuList>
            <MenuItem
              onClick={(e) => {
                console.log("onclick rename");
                e.preventDefault();
                setIsRenameOpen(true);
              }}
            >
              Rename
            </MenuItem>
            <MenuItem onClick={() => setIsDeleteOpen(true)}>Delete</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      {isRenameOpen && (
        <EditFolderNameModal
          folder={folder}
          onclose={() => setIsRenameOpen(false)}
        />
      )}
      {isDeleteOpen && (
        <Popover
          returnFocusOnClose={false}
          isOpen={true}
          onClose={() => setIsDeleteOpen(false)}
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <div></div>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody textAlign={"left"}>
              <Text mb={2}>
                Are you sure you want to delete this folder,
                <b> {folder.name}</b>?
              </Text>
              <Box display="flex" justifyContent="space-between">
                <Button
                  colorScheme="yellow"
                  size={"sm"}
                  whiteSpace="normal"
                  width={140}
                  height={70}
                  onClick={() => handleDeleteFolderWithoutFiles()}
                >
                  Keep subitems and move to root dir
                </Button>

                <Button
                  colorScheme="red"
                  size="sm"
                  whiteSpace="normal"
                  width={140}
                  height={70}
                  onClick={() => handleDeleteFolderWithItems()}
                >
                  Delete all items under folder
                </Button>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
}
