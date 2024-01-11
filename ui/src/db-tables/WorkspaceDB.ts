import { v4 as uuidv4 } from "uuid";
import { getDB, saveDB, updateFile } from "../Api";
import { generateUniqueName, sortFileItem, sortFlows } from "../utils";
import { ESortTypes, ImportWorkflow } from "../RecentFilesDrawer/types";
import { ChangelogsTable } from "./ChangelogsTable";
import { getWorkspaceIndexDB, updateWorkspaceIndexDB } from "./IndexDBUtils";
import { FoldersTable } from "./FoldersTable";
import { MediaTable } from "./MediaTable";
import { COMFYSPACE_TRACKING_FIELD_NAME } from "../const";
import { indexdb } from "./indexdb";
import {
  deleteJsonFileMyWorkflows,
  generateFilePath,
  generateFilePathAbsolute,
} from "./DiskFileUtils";
import { Folder, TagsTable } from "../types/dbTypes";
import { loadTagsTable } from "./tagsTable";
import { UserSettingsTable } from "./UserSettingsTable";

export type Table =
  | "workflows"
  | "tags"
  | "userSettings"
  | "folders"
  | "changelogs"
  | "media";

interface SortableItem {
  name: string;
  updateTime: number;
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
  mediaIDs?: string[];
  coverMediaPath?: string;
}
export function isFolder(n: Folder | Workflow): n is Folder {
  // @ts-ignore
  return n.type === "folder";
}

export type Workflows = {
  [id: string]: Workflow;
};

export let workspace: Workflows | undefined = undefined;
export let tagsTable: TagsTable | null = null;
export let userSettingsTable: UserSettingsTable | null = null;
export let foldersTable: FoldersTable | null = null;
export let changelogsTable: ChangelogsTable | null = null;
export let mediaTable: MediaTable | null = null;

export async function loadDBs() {
  const loadWorkflows = async () => {
    const workflowsStr = await getDB("workflows");
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
  const loadMedia = async () => {
    mediaTable = new MediaTable();
  };
  await Promise.all([
    loadWorkflows(),
    loadTags(),
    loadUserSettings(),
    loadFolders(),
    loadChangelogs(),
    loadMedia(),
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
export function updateFlow(id: string, input: Partial<Workflow>) {
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
  console.log("updateFlow", before, after);
  let newWorkflow: Workflow = after;
  // When modifying the associated tag or modifying the directory, updateTime is not modified.
  const updateKey = Object.keys(input);
  const isModifyingTagOrFolder =
    updateKey.length === 1 && ["tags", "parentFolderID"].includes(updateKey[0]);
  if (!isModifyingTagOrFolder) {
    newWorkflow.updateTime = Date.now();
  }
  // update memory
  workspace[id] = newWorkflow;
  //update indexdb
  // indexdb.workflows.update(id, newWorkflow);
  //update legacy indexdb backup
  updateWorkspaceIndexDB();
  // update disk file db
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
  const json = workflow.json;
  const flow = JSON.parse(json);
  flow.extra[COMFYSPACE_TRACKING_FIELD_NAME] = {
    id: workflow.id,
    name: workflow.name,
  };
  updateFile(file_path, JSON.stringify(flow));
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
  const newWorkflow: Workflow = {
    id: uuid,
    name: newFlowName,
    json,
    parentFolderID: parentFolderID,
    updateTime: time,
    createTime: time,
    tags: tags ?? [],
  };
  //add to cache
  workspace[uuid] = newWorkflow;
  //add to IndexDB
  // indexdb.workflows.add(newWorkflow);
  // add to disk file db
  saveDB("workflows", JSON.stringify(workspace));
  // legacy index cache
  updateWorkspaceIndexDB();
  // add to my_workflows/
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
  return sortFlows(workflows, sortBy);
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
/** End of Class Workflow */

export async function curComfyspaceJson(): Promise<string> {
  const changeLogs = await changelogsTable?.getRecords();
  const media = await mediaTable?.getRecords();
  return JSON.stringify({
    [UserSettingsTable.TABLE_NAME]: userSettingsTable?.records,
    ["tags"]: tagsTable?.tags,
    ["workflows"]: workspace,
    [FoldersTable.TABLE_NAME]: foldersTable?.getRecords(),
    [ChangelogsTable.TABLE_NAME]: changeLogs,
    [MediaTable.TABLE_NAME]: media,
  });
}
