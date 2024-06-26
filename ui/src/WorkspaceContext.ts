import { createContext } from "react";
import { Folder, Workflow, WorkflowVersion } from "./types/dbTypes";
import { Session, WorkspaceRoute } from "./types/types";
export type JsonDiff = {
  old: Object;
  new: Object;
} | null;

export const WorkspaceContext = createContext<{
  curFlowID: string | null;
  onDuplicateWorkflow?: (flowID: string, newFlowName?: string) => void;
  loadWorkflowID: (
    id: string | null,
    versionID?: string | null,
    forceLoad?: boolean,
  ) => void;
  setIsDirty: (dirty: boolean) => void;
  saveCurWorkflow: (force?: boolean) => Promise<void>;
  discardUnsavedChanges: () => Promise<void>;
  isDirty: boolean;
  loadNewWorkflow: (input?: { json: string; name?: string }) => void;
  loadFilePath: (path: string, overwriteCurrent?: boolean) => void;
  setRoute: (route: WorkspaceRoute) => void;
  route: WorkspaceRoute;
  curVersion: WorkflowVersion | null;
  setCurVersion: (version: WorkflowVersion | null) => void;
  setCurFlowIDAndName: (workflow: Workflow | null) => void;
  session: Session | null;
  updateSession: (session: Session) => void;
}>({
  curFlowID: null,
  loadWorkflowID: () => {},
  saveCurWorkflow: async () => {},
  discardUnsavedChanges: async () => {},
  isDirty: false,
  loadNewWorkflow: () => {},
  loadFilePath: () => {},
  setRoute: () => {},
  route: "root",
  curVersion: null,
  setIsDirty: () => {},
  setCurVersion: () => {},
  setCurFlowIDAndName: () => {},
  session: null,
  updateSession: () => {},
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
