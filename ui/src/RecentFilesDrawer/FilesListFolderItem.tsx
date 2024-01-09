import { HStack, useColorMode, Text, Stack } from "@chakra-ui/react";
import {
  Folder,
  Workflow,
  foldersTable,
  isFolder,
  listFolderContent,
  updateFlow,
} from "../WorkspaceDB";
import { useState, memo, useContext, useEffect, MouseEvent } from "react";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { RecentFilesContext } from "../WorkspaceContext";
import WorkflowListItem from "./WorkflowListItem";
import FilesListFolderItemRightClickMenu from "./FilesListFolderItemRightClickMenu";
import { ESortTypes, sortTypeLocalStorageKey } from "./types";

type Props = {
  folder: Folder;
};
export default memo(function FilesListFolderItem({ folder }: Props) {
  const [isActive, setIsActive] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(folder.isCollapse ?? false);
  const [children, setChildren] = useState<Array<Folder | Workflow>>(() =>
    listFolderContent(folder.id)
  );
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { colorMode } = useColorMode();
  const { draggingFile, refreshFolderStamp, onRefreshFilesList } =
    useContext(RecentFilesContext);

  const activeStyle =
    colorMode === "light"
      ? { backgroundColor: "#E2E8F0" }
      : { backgroundColor: "#4A5568" };

  useEffect(() => {
    setChildren(
      listFolderContent(
        folder.id,
        window.localStorage.getItem(sortTypeLocalStorageKey) as ESortTypes
      )
    );
  }, [folder.id, refreshFolderStamp]);

  const handleContextMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setIsMenuOpen(true);
  };

  useEffect(() => {
    if (folder.isCollapse === isCollapsed) return;
    foldersTable?.update({
      id: folder.id,
      isCollapse: isCollapsed,
    });
  }, [isCollapsed]);

  return (
    <Stack>
      <HStack
        w={"100%"}
        as={"button"}
        py={1}
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
        onContextMenu={handleContextMenu}
        onDragOver={(e) => {
          e.preventDefault();
          setIsActive(true);
        }}
        onDragLeave={() => {
          setIsActive(false);
        }}
        onDrop={() => {
          if (draggingFile && !isFolder(draggingFile)) {
            updateFlow(draggingFile.id, {
              parentFolderID: folder.id,
            });
            onRefreshFilesList && onRefreshFilesList();
          }
          setIsActive(false);
        }}
        _hover={activeStyle}
        style={isActive || isMenuOpen ? activeStyle : undefined}
      >
        <HStack gap={1}>
          {isCollapsed ? (
            <IconChevronRight size={20} />
          ) : (
            <IconChevronDown size={20} />
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#EFC54D"
            style={{ width: "1.2rem", height: "1.2rem" }}
          >
            <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
          </svg>
        </HStack>
        <Text>{folder.name}</Text>

        <FilesListFolderItemRightClickMenu
          isopen={isMenuOpen}
          menuPosition={menuPosition}
          onClose={() => setIsMenuOpen(false)}
          folder={folder}
        />
      </HStack>
      {!isCollapsed && (
        <Stack ml={4} gap={0}>
          {children.map((file) => {
            if (isFolder(file)) {
              return <FilesListFolderItem folder={file} />;
            } else {
              return <WorkflowListItem workflow={file} />;
            }
          })}
        </Stack>
      )}
    </Stack>
  );
});
