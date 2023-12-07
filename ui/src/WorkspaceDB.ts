// @ts-ignore
import { v4 as uuidv4 } from "uuid";

type Table = "workflows" | "tags";

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

export let workspace: Workflows = {};
export let tags: Tags = {};

export async function loadDBs() {
  const loadWorkflows = async () => {
    let workflowsStr = await getDB("workflows");
    // if (workflowsStr == null) {
    //   workflowsStr = localStorage.getItem("workspace");
    //   console.log("workflowsStr from local storage", workflowsStr);
    // }
    workspace = JSON.parse(workflowsStr ?? "{}");
  };
  const loadTags = async () => {
    let tagsStr = await getDB("tags");
    tags = JSON.parse(tagsStr ?? "{}");
  };
  await Promise.all([loadWorkflows(), loadTags()]);
}

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
  saveDB("workflows", JSON.stringify(workspace));
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

async function saveDB(table: Table, jsonData: string) {
  try {
    const response = await fetch("/workspace/save_db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ table, json: jsonData }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Error saving workspace:", error);
  }
}

async function getDB(table: Table) {
  try {
    const response = await fetch(`/workspace/get_db?table=${table}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching workspace:", error);
    return null;
  }
}
