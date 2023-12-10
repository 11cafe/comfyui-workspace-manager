// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { saveDB } from "./Api";

export type Table = "workflows" | "tags";

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

export let workspace: Workflows | undefined = undefined;
export let tagsTable: TagsTable | null = null;

export async function loadDBs() {
  const loadWorkflows = async () => {
    let workflowsStr = await getDB("workflows");
    if (workflowsStr == null) {
      workflowsStr = localStorage.getItem("workspace") ?? "{}";
    }
    workspace = JSON.parse(workflowsStr ?? "{}");
  };
  const loadTags = async () => {
    tagsTable = await loadTagsTable();
  };
  await Promise.all([loadWorkflows(), loadTags()]);
}

export function getFlow(id: string): Workflow | undefined {
  if (workspace == null) {
    return undefined;
  }
  return workspace[id];
}
export function updateFlow(
  id: string,
  input: {
    name?: string;
    json?: string;
    tags?: string[];
  }
) {
  if (workspace == null) {
    return;
  }
  const before = workspace[id];
  if (before == null) {
    console.error("updateFlow: workflow not found", id);
    return;
  }
  const after = {
    ...before,
    ...input,
    id,
  };
  const beforeStr = JSON.stringify(before);
  const afterStr = JSON.stringify(after);
  if (beforeStr === afterStr) {
    // no change detected
    return;
  }
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
  if (workspace == null) {
    throw new Error("workspace is not loaded");
  }
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
  if (workspace == null) {
    throw new Error("workspace is not loaded");
  }
  return Object.values(workspace).sort((a, b) => b.updateTime - a.updateTime);
}

export function deleteFlow(id: string) {
  if (workspace == null) {
    throw new Error("workspace is not loaded");
  }
  delete workspace[id];
  // TODO: delete localStorage.setItem once fully migrate to disk
  localStorage.setItem("workspace", JSON.stringify(workspace));
  saveDB("workflows", JSON.stringify(workspace));
}

async function getDB(table: Table): Promise<string | undefined> {
  try {
    const response = await fetch(`/workspace/get_db?table=${table}`);
    if (!response.ok) {
      return undefined;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching workspace:", error);
    return undefined;
  }
}

async function loadTagsTable(): Promise<TagsTable> {
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
      saveDB("tags", JSON.stringify(tags));
      return tags[name];
    },
    delete(tagId: number) {
      delete tags[tagId];
      saveDB("tags", JSON.stringify(tags));
    },
  };
}
