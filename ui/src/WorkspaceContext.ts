import { createContext } from "react";
import { Folder, Workflow } from "./WorkspaceDB";

export const WorkspaceContext = createContext<{
  curFlowID: string | null;
  onDuplicateWorkflow?: (flowID: string, newFlowName?: string) => void;
  loadWorkflowID: (id: string) => void;
  saveCurWorkflow: () => void;
  discardUnsavedChanges: () => void;
}>({
  curFlowID: null,
  loadWorkflowID: () => {},
  saveCurWorkflow: () => {},
  discardUnsavedChanges: () => {},
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
