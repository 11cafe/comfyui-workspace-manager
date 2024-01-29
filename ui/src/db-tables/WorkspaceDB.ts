import { ChangelogsTable } from "./ChangelogsTable";
import { WorkflowsTable } from "./WorkflowsTable";
import { FoldersTable } from "./FoldersTable";
import { MediaTable } from "./MediaTable";
import { UserSettingsTable } from "./UserSettingsTable";
import { TagsTable } from "./tagsTable";
import { indexdb } from "./indexdb";
import { Folder, Workflow } from "../types/dbTypes";
import { WorkflowVersionsTable } from "./WorkflowVersionsTable";

export type Table =
  | "workflows"
  | "tags"
  | "userSettings"
  | "folders"
  | "changelogs"
  | "media"
  | "models"
  | "workflowVersions";

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
export let workflowVersionsTable: WorkflowVersionsTable | null = null;

export async function loadDBs() {
  const loadDBs = async () => {
    mediaTable = new MediaTable();
    changelogsTable = await ChangelogsTable.load();
    foldersTable = await FoldersTable.load();
    userSettingsTable = await UserSettingsTable.load();
    tagsTable = await TagsTable.load();
    workflowsTable = await WorkflowsTable.load();
    workflowVersionsTable = await WorkflowVersionsTable.load();
  };
  await loadDBs();
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
      all && (await indexdb.tags.bulkAdd(Object.values(all)));
    } catch (error) {
      console.error(error);
    }
  };
  const backfillUserSettings = async () => {
    try {
      const tableInstance = userSettingsTable!;
      const backupData = await tableInstance.getRecords().then((data) => {
        if (!data[tableInstance.DEFAULT_USER]) {
          // legacy
          return data;
        }
        return data[tableInstance.DEFAULT_USER];
      });
      await indexdb.userSettings.put({
        ...tableInstance.defaultSettings,
        ...backupData,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const backfillWorkflowVersions = async () => {
    try {
      const all = await workflowVersionsTable?.getRecords();
      all && (await indexdb.workflowVersions.bulkAdd(Object.values(all)));
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
    backfillWorkflowVersions(),
  ]);
}
