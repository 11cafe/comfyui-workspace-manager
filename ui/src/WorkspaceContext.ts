import { createContext } from "react";
import { Folder, Workflow } from "./WorkspaceDB";

export const WorkspaceContext = createContext<{
  curFlowID: string | null;
  onDuplicateWorkflow?: (flowID: string) => void;
}>({
  curFlowID: null,
});

export const RecentFilesContext = createContext<{
  onRefreshFilesList?: () => void;
  draggingFile?: Workflow | Folder;
}>({});
