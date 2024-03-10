import { DragEvent, useContext, useEffect, useState } from "react";
import { RecentFilesContext } from "../WorkspaceContext";
import {
  foldersTable,
  isFolder,
  workflowsTable,
} from "../db-tables/WorkspaceDB";
import { Folder, Workflow } from "../types/dbTypes";
import FilesListFolderItem from "./FilesListFolderItem";
import WorkflowListItem from "./WorkflowListItem";
import { Box } from "@chakra-ui/react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export default function ItemsList({
  items,
}: {
  items: Array<Folder | Workflow>;
}) {
  const [folderOnTop, setFolderOnTop] = useState(false);
  const folders = items.filter(isFolder);
  const workflows = items.filter((item): item is Workflow => !isFolder(item));
  const parentFolderID = workflows[0]?.parentFolderID;

  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const { onRefreshFilesList, draggingFile, refreshFolderStamp } =
    useContext(RecentFilesContext);

  const handleDrop = async (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!draggingFile) return setIsDraggingOver(false);
    if (isFolder(draggingFile)) {
      if (draggingFile.id === parentFolderID) return setIsDraggingOver(false);
      await foldersTable?.update(draggingFile.id, {
        parentFolderID: parentFolderID,
      });
    } else {
      await workflowsTable?.updateFolder(draggingFile.id, {
        parentFolderID: parentFolderID,
      });
    }
    await onRefreshFilesList?.();
    setIsDraggingOver(false);
  };

  useEffect(() => {
    userSettingsTable?.getSetting("foldersOnTop").then((res) => {
      setFolderOnTop(res ?? false);
    });
  }, [refreshFolderStamp]);

  return (
    <>
      {folderOnTop &&
        folders.map((folder) => (
          <FilesListFolderItem key={folder.id} folder={folder} />
        ))}
      <Box
        border={
          isDraggingOver ? "2px dashed #718096" : "2px dashed transparent"
        }
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDraggingOver(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDraggingOver(false);
        }}
        onDrop={handleDrop}
        className="droppable"
      >
        {folderOnTop
          ? workflows.map((workflow) => (
              <WorkflowListItem key={workflow.id} workflow={workflow} />
            ))
          : items.map((n) => {
              if (isFolder(n)) {
                return <FilesListFolderItem folder={n} key={n.id} />;
              }
              return <WorkflowListItem key={n.id} workflow={n} />;
            })}
      </Box>
    </>
  );
}
