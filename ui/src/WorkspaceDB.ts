import { v4 as uuidv4 } from "uuid";
import { deleteFile, getDB, getSystemDir, saveDB, updateFile } from "./Api";
import {
  generateUniqueName,
  sortFileItem,
  sortFlows,
  toFileNameFriendly,
} from "./utils";
import { ESortTypes, ImportWorkflow } from "./RecentFilesDrawer/types";
import { ChangelogsTable } from "./db-tables/ChangelogsTable";
import {
  getWorkspaceIndexDB,
  updateWorkspaceIndexDB,
} from "./db-tables/IndexDBUtils";
import { FoldersTable } from "./db-tables/FoldersTable";

export type Table =
  | "workflows"
  | "tags"
  | "userSettings"
  | "folders"
  | "changelogs";

interface SortableItem {
  name: string;
  updateTime: number;
}

export interface PanelPosition {
  top: number;
  left: number;
}

export interface Workflow extends SortableItem {
  id: string;
  json: string;
  lastSavedJson?: string;
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
export let changelogsTable: ChangelogsTable | null = null;

export async function loadDBs() {
  const loadWorkflows = async () => {
    let workflowsStr = await getDB("workflows");
    if (workflowsStr == null) {
      const comfyspace = (await getWorkspaceIndexDB()) ?? "{}";
      const comfyspaceData = JSON.parse(comfyspace);
      workspace = comfyspaceData["workflows"] || {};
    } else {
      workspace = JSON.parse(workflowsStr);
    }
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
  const loadChangelogs = async () => {
    changelogsTable = await ChangelogsTable.load();
  };
  await Promise.all([
    loadWorkflows(),
    loadTags(),
    loadUserSettings(),
    loadFolders(),
    loadChangelogs(),
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
    lastSavedJson?: string;
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
  updateWorkspaceIndexDB();
  saveDB("workflows", JSON.stringify(workspace));
  // save to my_workflows/
  if (input.name != null || input.parentFolderID != null) {
    // renamed file or moved file folder
    deleteJsonFileMyWorkflows(before);
    saveJsonFileMyWorkflows(after);
    return;
  }
  if (input.json != null) {
    saveJsonFileMyWorkflows(after);
  }
}

export function saveJsonFileMyWorkflows(workflow: Workflow) {
  const file_path = generateFilePath(workflow);
  if (file_path == null) {
    return;
  }
  if (workspace != null) {
    const fullPath = generateFilePathAbsolute(workflow);
    workspace[workflow.id].filePath = fullPath ?? undefined;
    updateWorkspaceIndexDB();
    saveDB("workflows", JSON.stringify(workspace));
  }
  updateFile(file_path, workflow.json);
}

export function deleteJsonFileMyWorkflows(workflow: Workflow) {
  if (workflow.name == null) {
    return;
  }
  const file_path = generateFilePath(workflow);
  file_path != null && deleteFile(file_path);
}

export function getFlow(id: string): Workflow | undefined {
  if (workspace == null) {
    return undefined;
  }
  return workspace[id];
}

export function createFlow({
  json,
  name,
  parentFolderID,
  tags,
}: {
  json: string;
  name?: string;
  parentFolderID?: string;
  tags?: string[];
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
    parentFolderID: parentFolderID,
    updateTime: time,
    createTime: time,
    tags: tags ?? [],
  };
  updateWorkspaceIndexDB();
  saveDB("workflows", JSON.stringify(workspace));
  saveJsonFileMyWorkflows(workspace[uuid]);
  return workspace[uuid];
}

export async function batchCreateFlows(
  flowList: ImportWorkflow[]
): Promise<string | undefined> {
  flowList.forEach((flow) => {
    if (workspace == null) {
      return;
    }
    const newFlowName = generateUniqueName(flow.name);
    const uuid = uuidv4();
    const time = Date.now();
    workspace[uuid] = {
      id: uuid,
      name: newFlowName,
      json: flow.json,
      updateTime: time,
      createTime: time,
      tags: [],
    };
    saveJsonFileMyWorkflows(workspace[uuid]);
  });

  const stringifyWorkspace = JSON.stringify(workspace);
  updateWorkspaceIndexDB();
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
    return;
  }
  const workflow = workspace[id];
  if (workflow) {
    deleteJsonFileMyWorkflows({ ...workflow });
  }
  delete workspace[id];
  updateWorkspaceIndexDB();
  saveDB("workflows", JSON.stringify(workspace));
}

export function batchDeleteFlow(ids: string[]) {
  ids.forEach((id) => {
    if (workspace == null) {
      return;
    }
    const workflow = workspace[id];
    if (workflow) {
      deleteJsonFileMyWorkflows({ ...workflow });
    }
    workspace && delete workspace[id];
  });

  const stringifyWorkspace = JSON.stringify(workspace);
  updateWorkspaceIndexDB();
  saveDB("workflows", stringifyWorkspace);
}
export function generateFilePathAbsolute(workflow: Workflow): string | null {
  const subPath = generateFilePath(workflow);
  if (workspace == null) {
    console.error("workspace is not loaded");
    return null;
  }
  let myWorkflowsDir = userSettingsTable?.getSetting("myWorkflowsDir");
  if (myWorkflowsDir == null) {
    console.error("myWorkflowsDir is not set");
    return null;
  }
  if (!myWorkflowsDir.endsWith("/")) {
    myWorkflowsDir = myWorkflowsDir + "/";
  }
  return myWorkflowsDir + subPath;
}
export function generateFilePath(workflow: Workflow): string | null {
  let filePath = toFileNameFriendly(workflow.name) + ".json";
  let curFolderID = workflow.parentFolderID;
  while (curFolderID != null) {
    const folder = foldersTable?.get(curFolderID);
    if (folder == null) {
      break;
    }
    const folderName = folder.name;
    filePath = `${folderName}/${filePath}`;
    curFolderID = folder.parentFolderID ?? undefined;
  }

  return filePath ?? null;
}
/** End of Class Workflow */

async function loadTagsTable(): Promise<TagsTable> {
  const tagsStr = await getDB("tags");
  let tags: Tags;
  if (tagsStr == null) {
    const comfyspace = (await getWorkspaceIndexDB()) ?? "{}";
    const comfyspaceData = JSON.parse(comfyspace);
    tags = comfyspaceData["tags"] || {};
  } else {
    tags = JSON.parse(tagsStr ?? "{}") ?? {};
  }
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

export function curComfyspaceJson(): string {
  return JSON.stringify({
    [UserSettingsTable.TABLE_NAME]: userSettingsTable?.records,
    ["tags"]: tagsTable?.tags,
    ["workflows"]: workspace,
    [FoldersTable.TABLE_NAME]: foldersTable?.getRecords(),
  });
}

type UserSettings = {
  myWorkflowsDir: string;
  topBarStyle: PanelPosition;
  shortcuts: {
    save: string;
  };
};
class UserSettingsTable {
  public records: UserSettings;
  static readonly TABLE_NAME = "userSettings";
  private constructor() {
    this.records = {
      topBarStyle: {
        top: 0,
        left: 0,
      },
      myWorkflowsDir: "",
      shortcuts: {
        save: "Shift+S",
      },
    };
  }
  public listSettings() {
    return this.records;
  }
  public getSetting<K extends keyof UserSettings>(key: K): UserSettings[K] {
    return this.records[key];
  }
  public upsert(newPairs: Partial<UserSettings>) {
    this.records = {
      ...this.records,
      ...newPairs,
    };
    saveDB(UserSettingsTable.TABLE_NAME, JSON.stringify(this.records));
    updateWorkspaceIndexDB();
  }

  static async load(): Promise<UserSettingsTable> {
    const instance = new UserSettingsTable();
    const jsonStr = await getDB(UserSettingsTable.TABLE_NAME);
    let json = jsonStr != null ? JSON.parse(jsonStr) : null;
    if (json == null) {
      const comfyspace = (await getWorkspaceIndexDB()) ?? "{}";
      const comfyspaceData = JSON.parse(comfyspace);
      json = comfyspaceData[UserSettingsTable.TABLE_NAME] || {};
    }
    if (!json.myWorkflowsDir) {
      const getDir = await getSystemDir();
      json.myWorkflowsDir = `${getDir.dir_path}/my_workflows`;
    }
    instance.records = json;
    return instance;
  }
}
export interface Folder extends SortableItem {
  id: string;
  name: string;
  parentFolderID: string | null; // if null, it is in the root folder
  createTime: number;
  type: "folder";
  isCollapse?: boolean;
}
