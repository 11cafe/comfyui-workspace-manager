import { v4 as uuidv4 } from "uuid";
import { getDB, saveDB, updateFile } from "../Api";
import { generateUniqueName, sortFileItem, sortFlows } from "../utils";
import { ESortTypes, ImportWorkflow } from "../RecentFilesDrawer/types";
import { ChangelogsTable } from "./ChangelogsTable";
import { getWorkspaceIndexDB, updateWorkspaceIndexDB } from "./IndexDBUtils";
import { FoldersTable } from "./FoldersTable";
import { MediaTable } from "./MediaTable";
import {
  deleteJsonFileMyWorkflows,
  saveJsonFileMyWorkflows,
} from "./DiskFileUtils";
import { Folder, TagsTable } from "../types/dbTypes";
import { loadTagsTable } from "./tagsTable";
import { UserSettingsTable } from "./UserSettingsTable";
import { indexdb } from "./indexdb";

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

export const loadTable = async (name: Table) => {
  let jsonStr = await getDB(name);
  let json: any;
  try {
    json = jsonStr != null ? JSON.parse(jsonStr) : null;
  } catch (e) {}
  if (json == null) {
    const comfyspace = (await getWorkspaceIndexDB()) ?? "{}";
    const comfyspaceData = JSON.parse(comfyspace);
    json = comfyspaceData[name];
  }
  return json ?? {};
};

export async function loadDBs() {
  const loadWorkflows = async () => {
    workspace = await loadTable("workflows");
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
  let newWorkflow: Workflow = after;
  // When modifying the associated tag or modifying the directory, updateTime is not modified.
  const updateKey = Object.keys(input);
  const isModifyingTagOrFolder =
    updateKey.length === 1 && ["tags", "parentFolderID"].includes(updateKey[0]);
  if (!isModifyingTagOrFolder) {
    newWorkflow.updateTime = Date.now();
    // update parent folder updateTime
    if (newWorkflow.parentFolderID != null) {
      foldersTable?.update({
        id: newWorkflow.parentFolderID,
        updateTime: Date.now(),
      });
    }
  }
  // update memory
  workspace[id] = newWorkflow;
  //update indexdb
  indexdb.workflows.update(id, newWorkflow);
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
  indexdb.workflows.add(newWorkflow);
  // add to disk file db
  saveDB("workflows", JSON.stringify(workspace));
  // legacy index cache
  updateWorkspaceIndexDB();
  // add to my_workflows/
  saveJsonFileMyWorkflows(newWorkflow);
  return newWorkflow;
}

/**
 * Add flows in batches
 * @param flowList Need to add a new flow list
 * @param isOverwriteExistingFile By automatically scanning the newly added flow on the local disk,
 *  when synchronizing the DB, the flow on the local disk needs to be rewritten
 * because extra.comfyspace_tracking.id needs to be appended to json.
 * @param parentFolderID If you are adding batches to the specified files, provide the folder id.
 * @returns
 */
export async function batchCreateFlows(
  flowList: ImportWorkflow[] = [],
  isOverwriteExistingFile: boolean = false,
  parentFolderID?: string
): Promise<string | undefined> {
  let newWorkflows: Workflow[] = [];
  flowList.forEach((flow) => {
    if (workspace == null) {
      return;
    }
    const newFlowName =
      flow.name && isOverwriteExistingFile
        ? flow.name
        : generateUniqueName(flow.name);
    const uuid = uuidv4();
    const time = Date.now();
    const newWorkflow: Workflow = {
      id: uuid,
      name: newFlowName,
      json: flow.json,
      parentFolderID: parentFolderID,
      updateTime: time,
      createTime: time,
      tags: [],
    };
    newWorkflows.push(newWorkflow);
    workspace[uuid] = newWorkflow;
    saveJsonFileMyWorkflows(workspace[uuid]);
  });
  await indexdb.workflows.bulkAdd(Object.values(newWorkflows));
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
  //add to IndexDB
  indexdb.workflows.delete(id);
  // add to disk file db
  saveDB("workflows", JSON.stringify(workspace));
  // legacy index cache
  updateWorkspaceIndexDB();
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
  indexdb.workflows.bulkDelete(ids);
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

export async function backfillIndexdb() {
  const backfillWorkflows = async () => {
    try {
      const all = listWorkflows();
      all && (await indexdb.workflows.bulkAdd(all));
    } catch (error) {
      console.error(error);
    }
  };
  const backfillFolders = async () => {
    try {
      const all = foldersTable?.listAll();
      all && (await indexdb.folders.bulkAdd(all));
    } catch (error) {
      console.error(error);
    }
  };
  const backfillMedia = async () => {
    try {
      const all = await mediaTable?.listAll();
      all && (await indexdb.media.bulkAdd(all));
    } catch (error) {
      console.error(error);
    }
  };
  const backfillChangelogs = async () => {
    try {
      const all = await changelogsTable?.listAll();
      all && (await indexdb.changelogs.bulkAdd(all));
    } catch (error) {
      console.error(error);
    }
  };
  const backfillTags = async () => {
    try {
      const all = await tagsTable?.listAll();
      all && (await indexdb.tags.bulkAdd(all));
    } catch (error) {
      console.error(error);
    }
  };
  const backfillUserSettings = async () => {
    try {
      const all = await userSettingsTable?.listSettings();
      all && (await indexdb.userSettings.add(all));
    } catch (error) {
      console.error(error);
    }
  };
  await Promise.all([
    backfillWorkflows(),
    backfillFolders(),
    backfillMedia(),
    backfillChangelogs(),
    backfillTags(),
    backfillUserSettings(),
  ]);
}
