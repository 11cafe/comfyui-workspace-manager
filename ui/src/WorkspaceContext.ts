import { createContext } from "react";
import { Folder, Workflow, WorkflowVersion } from "./types/dbTypes";
import { WorkspaceRoute } from "./types/types";
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
  saveCurWorkflow: () => void;
  discardUnsavedChanges: () => Promise<void>;
  isDirty: boolean;
  loadNewWorkflow: (input?: { json: string; name?: string }) => void;
  loadFilePath: (path: string, overwriteCurrent?: boolean) => void;
  setRoute: (route: WorkspaceRoute) => void;
  route: WorkspaceRoute;
  jsonDiff: JsonDiff;
  compareJson: (jsonDiff: JsonDiff) => void;
  curVersion: WorkflowVersion | null;
}>({
  curFlowID: null,
  loadWorkflowID: () => {},
  saveCurWorkflow: () => {},
  discardUnsavedChanges: async () => {},
  isDirty: false,
  loadNewWorkflow: () => {},
  loadFilePath: () => {},
  setRoute: () => {},
  route: "root",
  jsonDiff: null,
  compareJson: () => {},
  curVersion: null,
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
