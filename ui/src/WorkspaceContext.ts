import { createContext } from "react";
import { Folder, Workflow } from "./WorkspaceDB";
import { EWorkspacePosition } from "./RecentFilesDrawer/types";

export const WorkspaceContext = createContext<{
  curFlowID: string | null;
  onDuplicateWorkflow?: (flowID: string) => void;
  onPositionChange?: (position: EWorkspacePosition) => void;
  loadWorkflowID: (id: string) => void;
}>({
  curFlowID: null,
  loadWorkflowID: () => {},
});

export const RecentFilesContext = createContext<{
  onRefreshFilesList?: () => void;
  draggingFile?: Workflow | Folder;
  setDraggingFile?: (file: Workflow | Folder) => void;
  isMultiSelecting?: boolean;
  multiSelectedFlowsID?: string[];
  onMultiSelectFlow?: (flowId: string, selected: boolean) => void;
  onDeleteFlow?: (flowId: string) => void;
  refreshFolderStamp: number;
  setRefreshFolderStamp: (stamp: number) => void;
}>({
  refreshFolderStamp: 0,
  setRefreshFolderStamp: () => {},
});
