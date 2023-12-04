// @ts-ignore
import { v4 as uuidv4 } from "uuid";

export type Workflow = {
  id: string;
  json: string;
  name: string;
  img?: string;
  updateTime: number;
};

export type Worksapce = {
  [id: string]: Workflow;
};
const db = localStorage.getItem("workspace");
export const workspace: Worksapce = db != null ? JSON.parse(db) : {};
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
  };
  localStorage.setItem("workspace", JSON.stringify(workspace));
  return workspace[uuid];
}

export function listWorkflows(): Workflow[] {
  return Object.values(workspace).sort((a, b) => b.updateTime - a.updateTime);
}
