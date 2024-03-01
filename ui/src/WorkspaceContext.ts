import { createContext } from "react";
import { Route } from "./utils";
import { Folder, Workflow } from "./types/dbTypes";
export type JsonDiff = {
  old: Object;
  new: Object;
} | null;

export const WorkspaceContext = createContext<{
  curFlowID: string | null;
  onDuplicateWorkflow?: (flowID: string, newFlowName?: string) => void;
  loadWorkflowID: (id: string | null, forceLoad?: boolean) => void;
  saveCurWorkflow: () => void;
  discardUnsavedChanges: () => Promise<void>;
  isDirty: boolean;
  loadNewWorkflow: (input?: { json: string; name?: string }) => void;
  loadFilePath: (path: string, overwriteCurrent?: boolean) => void;
  setRoute: (route: Route) => void;
  jsonDiff: JsonDiff;
  compareJson: (jsonDiff: JsonDiff) => void;
}>({
  curFlowID: null,
  loadWorkflowID: () => {},
  saveCurWorkflow: () => {},
  discardUnsavedChanges: async () => {},
  isDirty: false,
  loadNewWorkflow: () => {},
  loadFilePath: () => {},
  setRoute: () => {},
  jsonDiff: null,
  compareJson: () => {},
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
