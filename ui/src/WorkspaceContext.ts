import { createContext } from "react";
import { Workflow } from "./WorkspaceDB";
import { EWorkspacePosition } from "./RecentFilesDrawer/types";

export const WorkspaceContext = createContext<{
  curFlowID: string | null;
  onDuplicateWorkflow?: (flowID: string) => void;
  onPositionChange?: (position: EWorkspacePosition) => void;
}>({
  curFlowID: null,
});

export const RecentFilesContext = createContext<{
  setRecentFiles?: (flows: Workflow[]) => void;
}>({});
