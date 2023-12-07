// @ts-ignore
import { v4 as uuidv4 } from "uuid";

export type Workflow = {
  id: string;
  json: string;
  name: string;
  img?: string;
  updateTime: number;
  // autoCates?: string[]; // categories that will be auto added to the workflow
  tags?: string[];
};

export type Workflows = {
  [id: string]: Workflow;
};
export type Tags = {
  [id: string]: Tag;
};
type Tag = {
  name: string; //id
  workflowIDs: string[];
  updatedAt: number;
};

const workflowsStr = localStorage.getItem("workspace");
export const workspace: Workflows =
  workflowsStr != null ? JSON.parse(workflowsStr) : {};
export function getFlow(id: string): Workflow {
  return workspace[id];
}
export function updateFlow(
  id: string,
  input: {
    name?: string;
    json?: string;
  }
) {
  workspace[id] = {
    ...workspace[id],
    ...input,
    id,
    updateTime: Date.now(),
  };
  localStorage.setItem("workspace", JSON.stringify(workspace));
}
export function createFlow(json: string, name?: string): Workflow {
  const uuid = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  workspace[uuid] = {
    id: uuid,
    name: name ?? "Untitled Flow",
    json,
    updateTime: Date.now(),
    tags: [],
  };
  localStorage.setItem("workspace", JSON.stringify(workspace));
  return workspace[uuid];
}

export function listWorkflows(): Workflow[] {
  return Object.values(workspace).sort((a, b) => b.updateTime - a.updateTime);
}

export function deleteFlow(id: string) {
  delete workspace[id];
  localStorage.setItem("workspace", JSON.stringify(workspace));
}
