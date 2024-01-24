import { ChangelogsTable } from "./ChangelogsTable";
import { WorkflowsTable } from "./WorkflowsTable";
import { FoldersTable } from "./FoldersTable";
import { MediaTable } from "./MediaTable";
import { UserSettingsTable } from "./UserSettingsTable";
import { TagsTable } from "./tagsTable";
import { indexdb } from "./indexdb";
import { Folder, Workflow } from "../types/dbTypes";
import { v4 as uuidv4 } from "uuid";

export type Table =
  | "workflows"
  | "tags"
  | "userSettings"
  | "folders"
  | "changelogs"
  | "media"
  | "models";

export function isFolder(n: Folder | Workflow): n is Folder {
  // @ts-ignore
  return n.type === "folder";
}

export let workflowsTable: WorkflowsTable | null = null;
export let tagsTable: TagsTable | null = null;
export let userSettingsTable: UserSettingsTable | null = null;
export let foldersTable: FoldersTable | null = null;
export let changelogsTable: ChangelogsTable | null = null;
export let mediaTable: MediaTable | null = null;

export async function loadDBs() {
  const loadWorkflows = async () => {
    workflowsTable = await WorkflowsTable.load();
  };
  const loadTags = async () => {
    tagsTable = await TagsTable.load();
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
  if (localStorage.getItem("WORKSPACE_INDEXDB_BACKFILL") !== "true") {
    await backfillIndexdb();
    localStorage.setItem("WORKSPACE_INDEXDB_BACKFILL", "true");
  }
}

export async function backfillIndexdb() {
  const backfillWorkflows = async () => {
    try {
      const all = await workflowsTable?.getRecords();
      all && (await indexdb.workflows.bulkAdd(Object.values(all)));
    } catch (error) {
      console.error(error);
    }
  };
  const backfillFolders = async () => {
    try {
      const all = await foldersTable?.getRecords();
      all && (await indexdb.folders.bulkAdd(Object.values(all)));
    } catch (error) {
      console.error(error);
    }
  };
  const backfillMedia = async () => {
    try {
      const all = await mediaTable?.getRecords();
      all && (await indexdb.media.bulkAdd(Object.values(all)));
    } catch (error) {
      console.error(error);
    }
  };
  const backfillChangelogs = async () => {
    try {
      const all = await changelogsTable?.getRecords();
      all && (await indexdb.changelogs.bulkAdd(Object.values(all)));
    } catch (error) {
      console.error(error);
    }
  };
  const backfillTags = async () => {
    try {
      const all = await tagsTable?.getRecords();
      const tagList = all ? Object.values(all) : [];
      if (tagList.length > 0 && !tagList[0].id) {
        tagList.forEach((tag) => {
          tag.id = uuidv4();
        });
      }

      tagList.length > 0 && (await indexdb.tags.bulkAdd(tagList));
    } catch (error) {
      console.error(error);
    }
  };
  const backfillUserSettings = async () => {
    try {
      userSettingsTable?.records &&
        (await indexdb.userSettings.put(userSettingsTable?.records));
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
