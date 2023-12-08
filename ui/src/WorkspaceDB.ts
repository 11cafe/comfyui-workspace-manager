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
  [name: string]: Tag;
};
export type Tag = {
  name: string;
  workflowIDs: string[];
  updateTime: number;
};
type TagsTable = {
  tags: Tags;
  listAll(): Tag[];
  upsert(name: string): Tag;
  delete(tagId: number): void;
};

export let workspace: Workflows = {};
export let tagsTable: TagsTable | null = null;

export async function loadDBs() {
  const loadWorkflows = async () => {
    let workflowsStr = await getDB("workflows");
    if (workflowsStr == null) {
      workflowsStr = localStorage.getItem("workspace");
    }
    workspace = JSON.parse(workflowsStr ?? "{}");
  };
  const loadTags = async () => {
    tagsTable = await loadTagsTable();
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
  // TODO: delete localStorage.setItem once fully migrate to disk
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
  // TODO: delete localStorage.setItem once fully migrate to disk
  localStorage.setItem("workspace", JSON.stringify(workspace));
  saveDB("workflows", JSON.stringify(workspace));
  return workspace[uuid];
}

export function listWorkflows(): Workflow[] {
  return Object.values(workspace).sort((a, b) => b.updateTime - a.updateTime);
}

export function deleteFlow(id: string) {
  delete workspace[id];
  // TODO: delete localStorage.setItem once fully migrate to disk
  localStorage.setItem("workspace", JSON.stringify(workspace));
  saveDB("workflows", JSON.stringify(workspace));
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

async function loadTagsTable() {
  let tagsStr = await getDB("tags");
  let tags: Tags = JSON.parse(tagsStr ?? "{}") ?? {};
  return {
    tags, // Expose the tags array publicly
    listAll() {
      return Object.values(tags).sort((a, b) => b.updateTime - a.updateTime);
    },
    upsert(name: string) {
      if (tags[name] == null) {
        tags[name] = {
          name,
          workflowIDs: [],
          updateTime: Date.now(),
        };
      }
      tags[name].updateTime = Date.now();
      return tags[name];
    },
    delete(tagId: number) {
      delete tags[tagId];
    },
  };
}
