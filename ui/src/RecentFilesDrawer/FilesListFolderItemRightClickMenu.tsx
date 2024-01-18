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
import { MouseEvent, useContext, useRef, useState } from "react";
import { RecentFilesContext } from "../WorkspaceContext";
import { createFlow, foldersTable } from "../db-tables/WorkspaceDB";
import EditFolderNameModal from "../components/EditFolderName";
import {
  IconFileImport,
  IconFilePlus,
  IconFolderPlus,
  IconPencil,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import { Folder } from "../types/dbTypes";
import ImportFlowsFileInput from "./ImportFlowsFileInput";
import { defaultGraph } from "../defaultGraph";

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
  const { onRefreshFilesList } = useContext(RecentFilesContext);
  const onClickNewFolder = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    foldersTable?.create({
      name: "New folder",
      parentFolderID: folder.id,
    });
    onRefreshFilesList && onRefreshFilesList();
  };
  const onClickNewFile = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    await createFlow({
      json: JSON.stringify(defaultGraph),
      parentFolderID: folder.id,
    });
    onRefreshFilesList && onRefreshFilesList();
  };
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Box position="absolute" top={menuPosition.y} left={menuPosition.x}>
        <Menu isOpen={isopen} onClose={onClose} isLazy>
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
              onClick={() => setIsDeleteOpen(true)}
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
            <MenuItem
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              icon={<IconFileImport size={19} />}
            >
              Import workflows
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <ImportFlowsFileInput
        parentFolderID={folder.id}
        fileInputRef={fileInputRef}
      />
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
