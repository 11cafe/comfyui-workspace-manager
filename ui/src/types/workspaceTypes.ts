export interface SortableItem {
  name: string;
  updateTime: number;
}

export interface Workflow {
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

export type Table =
  | "workflows"
  | "tags"
  | "userSettings"
  | "folders"
  | "changelogs"
  | "media";
