import { Box, Menu, MenuList, MenuItem } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import { Folder } from "../WorkspaceDB";
import EditFolderNameModal from "../components/EditFolderName";

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
  return (
    <>
      <Box position="absolute" top={menuPosition.y} left={menuPosition.x}>
        <Menu isOpen={isopen} onClose={onClose}>
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
