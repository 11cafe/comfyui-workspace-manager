// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { deleteFile, getDB, saveDB, updateFile } from "./Api";
import { toFileNameFriendly } from "./utils";

export type Table = "workflows" | "tags";

export type Workflow = {
  id: string;
  json: string;
  name: string;
  updateTime: number;
  filePath?: string;
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
  delete(name: string): void;
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
    updateTime: Date.now(),
  };
  localStorage.setItem("workspace", JSON.stringify(workspace));
  saveDB("workflows", JSON.stringify(workspace));
  // save to my_workflows/
  if (input.name != null) {
    // renamed file
    before.filePath && deleteFile(before.filePath);
    saveToMyWorkflowsUpdateJson(id);
    return;
  }
  if (input.json != null) {
    saveToMyWorkflowsUpdateJson(id);
  }
}

function saveToMyWorkflowsUpdateJson(id: string) {
  if (workspace == null) {
    return;
  }
  const workflow = workspace[id];
  if (workflow == null) {
    console.error("saveToMyWorkflowsUpdateJson: workflow not found", id);
    return;
  }
  const file_path = toFileNameFriendly(workflow.name) + ".json";
  workspace[id].filePath = file_path;
  updateFile(file_path, workflow.json);
}

export function createFlow({
  json,
  name,
}: {
  json: string;
  name?: string;
}): Workflow {
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
  localStorage.setItem("workspace", JSON.stringify(workspace));
  saveDB("workflows", JSON.stringify(workspace));
  saveToMyWorkflowsUpdateJson(uuid);
  return workspace[uuid];
}

export function listWorkflows(): Workflow[] {
  if (workspace == null) {
    throw new Error("workspace is not loaded");
  }
  return Object.values(workspace);
}

export function deleteFlow(id: string) {
  if (workspace == null) {
    throw new Error("workspace is not loaded");
  }
  const filePath = workspace[id]?.filePath;
  delete workspace[id];
  localStorage.setItem("workspace", JSON.stringify(workspace));
  saveDB("workflows", JSON.stringify(workspace));
  if (filePath != null) {
    deleteFile(filePath);
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
    delete(name: string) {
      delete tags[name];
      saveDB("tags", JSON.stringify(tags));
    },
  };
}
