import { createContext } from "react";

export const WorkspaceContext = createContext<{
  curFlowID: string | null;
}>({
  curFlowID: null,
});
