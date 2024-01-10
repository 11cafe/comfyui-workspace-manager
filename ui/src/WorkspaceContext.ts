import { createContext } from "react";
import { Workflow } from "./db-tables/WorkspaceDB";
import { Route } from "./utils";
import { Folder } from "./types/dbTypes";

export const WorkspaceContext = createContext<{
  curFlowID: string | null;
  onDuplicateWorkflow?: (flowID: string, newFlowName?: string) => void;
  loadWorkflowID: (id: string) => void;
  saveCurWorkflow: () => void;
  discardUnsavedChanges: () => void;
  isDirty: boolean;
  loadNewWorkflow: (input?: { json: string; name?: string }) => void;
  loadFilePath: (path: string, overwriteCurrent?: boolean) => void;
  setRoute: (route: Route) => void;
}>({
  curFlowID: null,
  loadWorkflowID: () => {},
  saveCurWorkflow: () => {},
  discardUnsavedChanges: () => {},
  isDirty: false,
  loadNewWorkflow: () => {},
  loadFilePath: () => {},
  setRoute: () => {},
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
