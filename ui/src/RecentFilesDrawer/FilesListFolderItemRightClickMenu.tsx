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
import { RecentFilesContext } from "../WorkspaceContext";
import { Folder, createFlow, foldersTable } from "../db-tables/WorkspaceDB";
import EditFolderNameModal from "../components/EditFolderName";
import { defaultGraph } from "../defaultGraph";
import ImportFilesSelector from "../components/ImportFilesSelector";

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
  const [isOpenImportFiles, setIsOpenImportFiles] = useState(false);
  const { onRefreshFilesList } = useContext(RecentFilesContext);

  const handleCreateNewFlow = () => {
    createFlow({
      parentFolderID: folder.id,
      json: JSON.stringify(defaultGraph),
    });

    onRefreshFilesList?.();
  }

  const handleCloseImportFiles = () => {
    setIsOpenImportFiles(false);
  }

  return (
    <>
      <ImportFilesSelector
        isOpen={isOpenImportFiles}
        handleClose={handleCloseImportFiles}
        folderId={folder.id}
        folderName={folder.name}
      />
      <Box position="absolute" top={menuPosition.y} left={menuPosition.x}>
        <Menu isOpen={isopen} onClose={onClose} isLazy>
          <MenuList>
            <MenuItem
              onClick={(e) => {
                e.preventDefault();
                setIsRenameOpen(true);
              }}
            >
              Rename
            </MenuItem>
            <MenuItem onClick={() => setIsDeleteOpen(true)}>
              Delete
            </MenuItem>
            <MenuItem onClick={() => handleCreateNewFlow()}>
              New File
            </MenuItem>
            <MenuItem onClick={() => setIsOpenImportFiles(true)}>
              Import Flows to Folder
            </MenuItem>
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
          // placement="right"
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
              <Text color={"GrayText"} mb={5}>
                This will NOT delete any files in the folder. The files will be
                moved to the root folder.
              </Text>
              <Button
                colorScheme="red"
                size={"sm"}
                onClick={() => {
                  setIsDeleteOpen(false);
                  onClose();
                  foldersTable?.delete(folder.id);
                  onRefreshFilesList && onRefreshFilesList();
                }}
              >
                Yes, delete
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
}
