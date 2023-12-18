// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { deleteFile, getDB, saveDB, updateFile } from "./Api";
import {
  generateUniqueName,
  sortFileItem,
  sortFlows,
  toFileNameFriendly,
} from "./utils";
import { ESortTypes, ImportWorkflow } from "./RecentFilesDrawer/types";

export type Table = "workflows" | "tags" | "userSettings" | "folders";

interface SortableItem {
  name: string;
  updateTime: number;
}

export interface Workflow extends SortableItem {
  id: string;
  json: string;
  name: string;
  updateTime: number;
  createTime: number;
  filePath?: string;
  tags?: string[];
  parentFolderID?: string;
}
export function isFolder(n: Folder | Workflow): n is Folder {
  // @ts-ignore
  return n.type === "folder";
}

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
export let userSettingsTable: UserSettingsTable | null = null;
export let foldersTable: FoldersTable | null = null;

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
  const loadUserSettings = async () => {
    userSettingsTable = await UserSettingsTable.load();
  };
  const loadFolders = async () => {
    foldersTable = await FoldersTable.load();
  };
  await Promise.all([
    loadWorkflows(),
    loadTags(),
    loadUserSettings(),
    loadFolders(),
  ]);
}

export function listFolderContent(
  folderID?: string, // undefined if root folder
  sortBy?: ESortTypes
): Array<Workflow | Folder> {
  if (workspace == null) {
    return [];
  }
  const workflows = Object.values(workspace).filter(
    (w) => w.parentFolderID == folderID
  );
  const folders =
    foldersTable?.listAll()?.filter((f) => f.parentFolderID == folderID) ?? [];

  const all = [...workflows, ...folders];

  return sortFileItem(all, sortBy ?? ESortTypes.RECENTLY_MODIFIED);
}

/** Class Workflow: below will be migrated to a class */
export function updateFlow(
  id: string,
  input: {
    name?: string;
    json?: string;
    tags?: string[];
    parentFolderID?: string;
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

  const newFlowName = generateUniqueName(name);
  const uuid = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  const time = Date.now();
  workspace[uuid] = {
    id: uuid,
    name: newFlowName,
    json,
    updateTime: time,
    createTime: time,
    tags: [],
  };
  localStorage.setItem("workspace", JSON.stringify(workspace));
  saveDB("workflows", JSON.stringify(workspace));
  saveToMyWorkflowsUpdateJson(uuid);
  return workspace[uuid];
}

export async function batchCreateFlows(
  flowList: ImportWorkflow[]
): Promise<string | undefined> {
  if (workspace == null) {
    throw new Error("workspace is not loaded");
  }

  const uuidList: string[] = [];

  flowList.forEach((flow) => {
    const newFlowName = generateUniqueName(flow.name);
    const uuid = uuidv4();
    const time = Date.now();
    workspace &&
      (workspace[uuid] = {
        id: uuid,
        name: newFlowName,
        json: flow.json,
        updateTime: time,
        createTime: time,
        tags: [],
      });
    uuidList.push(uuid);
  });

  uuidList.forEach((uuid) => {
    saveToMyWorkflowsUpdateJson(uuid);
  });
  const stringifyWorkspace = JSON.stringify(workspace);
  localStorage.setItem("workspace", stringifyWorkspace);
  return await saveDB("workflows", stringifyWorkspace);
}

export function listWorkflows(sortBy?: ESortTypes): Workflow[] {
  if (workspace == null) {
    throw new Error("workspace is not loaded");
  }
  const workflows = Object.values(workspace);
  return sortBy
    ? sortFlows(workflows, sortBy)
    : workflows.sort((a, b) => b.updateTime - a.updateTime);
}
export function getWorkflow(id: string): Workflow | undefined {
  if (workspace == null) {
    console.error("workspace is not loaded");
    return;
  }
  return workspace[id];
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

export function batchDeleteFlow(ids: string[]) {
  if (workspace == null) {
    throw new Error("workspace is not loaded");
  }
  const filePathList = ids.map((id) => {
    const filePath = workspace?.[id]?.filePath;
    workspace && delete workspace[id];
    return filePath;
  });

  const stringifyWorkspace = JSON.stringify(workspace);
  localStorage.setItem("workspace", stringifyWorkspace);
  saveDB("workflows", stringifyWorkspace);

  if (filePathList.length) {
    filePathList.forEach((filePath) => {
      filePath && deleteFile(filePath);
    });
  }
}
/** End of Class Workflow */

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

function curComfyspaceJson(): string {
  return JSON.stringify({
    [UserSettingsTable.TABLE_NAME]: userSettingsTable?.records,
    ["tags"]: tagsTable?.tags,
    ["workflows"]: workspace,
    [FoldersTable.TABLE_NAME]: foldersTable?.getDB(),
  });
}

type UserSettings = {
  myWorkflowsDir?: string;
  topbarLocation?: {
    top: number;
    left: number;
    right: number;
  };
};
class UserSettingsTable {
  public records: UserSettings;
  static readonly TABLE_NAME = "userSettings";
  private constructor() {
    this.records = {};
  }
  public listSettings() {
    return this.records;
  }
  public getSetting(key: keyof UserSettings) {
    return this.records[key];
  }
  public upsert(newPairs: UserSettings) {
    this.records = {
      ...this.records,
      ...newPairs,
    };
    saveDB(UserSettingsTable.TABLE_NAME, JSON.stringify(this.records));
    localStorage.setItem("comfyspace", curComfyspaceJson());
  }

  static async load(): Promise<UserSettingsTable> {
    const instance = new UserSettingsTable();
    let jsonStr = await getDB(UserSettingsTable.TABLE_NAME);
    let json = jsonStr != null ? JSON.parse(jsonStr) : null;
    if (json == null) {
      const comfyspace = localStorage.getItem("comfyspace") ?? "{}";
      const comfyspaceData = JSON.parse(comfyspace);
      json = comfyspaceData[UserSettingsTable.TABLE_NAME];
    }
    if (json != null) {
      instance.records = json;
    }
    return instance;
  }
}

export interface Folder extends SortableItem {
  id: string;
  name: string;
  parentFolderID: string | null; // if null, it is in the root folder
  createTime: number;
  type: "folder";
}

class FoldersTable {
  static readonly TABLE_NAME = "folders";
  private records: {
    [id: string]: Folder;
  };
  private constructor() {
    this.records = {};
  }

  static async load(): Promise<FoldersTable> {
    const instance = new FoldersTable();
    let jsonStr = await getDB(FoldersTable.TABLE_NAME);
    let json = jsonStr != null ? JSON.parse(jsonStr) : null;
    if (json == null) {
      const comfyspace = localStorage.getItem("comfyspace") ?? "{}";
      const comfyspaceData = JSON.parse(comfyspace);
      json = comfyspaceData[FoldersTable.TABLE_NAME];
    }
    if (json != null) {
      instance.records = json;
    }
    return instance;
  }
  public listAll(): Folder[] {
    return Object.values(this.records);
  }
  public getDB() {
    return this.records;
  }
  public get(id: string): Folder | undefined {
    return this.records[id];
  }
  public create(input: { name: string; parentFolderID?: string }): Folder {
    const folder: Folder = {
      id: uuidv4(),
      name: input.name,
      parentFolderID: input.parentFolderID ?? null,
      updateTime: Date.now(),
      createTime: Date.now(),
      type: "folder",
    };
    this.records[folder.id] = folder;
    saveDB("folders", JSON.stringify(this.records));
    localStorage.setItem("comfyspace", curComfyspaceJson());

    return folder;
  }
  public update(input: { id: string; name?: string; parentFolderID?: string }) {
    const folder = this.records[input.id];
    if (folder == null) {
      return;
    }
    const newRecord = {
      ...folder,
      ...input,
      updateTime: Date.now(),
    };
    this.records[input.id] = newRecord;
    saveDB("folders", JSON.stringify(this.records));
    localStorage.setItem("comfyspace", curComfyspaceJson());
  }
  public delete(id: string) {
    delete this.records[id];
    saveDB("folders", JSON.stringify(this.records));
    localStorage.setItem("comfyspace", curComfyspaceJson());
  }
}
