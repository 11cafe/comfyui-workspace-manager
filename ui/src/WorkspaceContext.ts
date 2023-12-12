import { createContext } from "react";
import { Workflow } from "./WorkspaceDB";

export const WorkspaceContext = createContext<{
  curFlowID: string | null;
}>({
  curFlowID: null,
});

export const RecentFilesContext = createContext<{
  setRecentFiles?: (flows: Workflow[]) => void;
}>({});
