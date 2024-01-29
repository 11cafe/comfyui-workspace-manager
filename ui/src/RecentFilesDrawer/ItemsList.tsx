import { useContext, useState } from "react";
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

export default function ItemsList({
  items,
}: {
  items: Array<Folder | Workflow>;
}) {
  const folders = items
    .filter(isFolder)
    .sort((a, b) => a.name.localeCompare(b.name));
  const workflows = items
    .filter((item): item is Workflow => !isFolder(item))
    .sort((a, b) => a.name.localeCompare(b.name));
  const parentFolderID = workflows[0]?.parentFolderID;

  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const { onRefreshFilesList, draggingFile } = useContext(RecentFilesContext);

  const handleDrop = async () => {
    if (!draggingFile) return setIsDraggingOver(false);
    if (isFolder(draggingFile)) {
      if (draggingFile.id === parentFolderID) return setIsDraggingOver(false);
      await foldersTable?.update({
        id: draggingFile.id,
        parentFolderID: parentFolderID,
      });
    } else {
      await workflowsTable?.updateFlow(draggingFile.id, {
        parentFolderID: parentFolderID,
      });
    }
    await onRefreshFilesList?.();
    setIsDraggingOver(false);
  };

  return (
    <>
      {folders.map((folder) => (
        <FilesListFolderItem key={folder.id} folder={folder} />
      ))}
      <Box
        border={isDraggingOver ? "2px dashed #718096" : undefined}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDraggingOver(true);
        }}
        onDragLeave={() => {
          setIsDraggingOver(false);
        }}
        onDrop={handleDrop}
      >
        {workflows.map((workflow) => (
          <WorkflowListItem key={workflow.id} workflow={workflow} />
        ))}
      </Box>
    </>
  );
}
