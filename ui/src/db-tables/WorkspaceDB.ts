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
  return "type" in n && n.type === "folder";
}

export let workflowsTable: WorkflowsTable | null = null;
export let tagsTable: TagsTable | null = null;
export let userSettingsTable: UserSettingsTable | null = null;
export let foldersTable: FoldersTable | null = null;
export let changelogsTable: ChangelogsTable | null = null;
export let mediaTable: MediaTable | null = null;
export let workflowVersionsTable: WorkflowVersionsTable | null = null;

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
  const loadWorkflowVersions = async () => {
    workflowVersionsTable = await WorkflowVersionsTable.load();
  };
  await Promise.all([
    loadWorkflows(),
    loadTags(),
    loadUserSettings(),
    loadFolders(),
    loadChangelogs(),
    loadMedia(),
    loadWorkflowVersions(),
  ]);
}
