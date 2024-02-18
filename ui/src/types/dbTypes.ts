export interface SortableItem {
  name: string;
  updateTime: number;
}

export interface Workflow extends SortableItem {
  id: string;
  json: string;
  lastSavedJson?: string;
  name: string;
  createTime: number;
  filePath?: string;
  tags?: string[];
  parentFolderID?: string;
  mediaIDs?: string[];
  coverMediaPath?: string;
  cloudID?: string;
  cloudURL?: string;
}

export interface TableBaseModel {
  id?: string;
  name?: string;
  createTime?: number;
}

export type Tags = {
  [name: string]: Tag;
};
export type Tag = {
  name: string;
  workflowIDs: string[];
  updateTime: number;
};
export type CacheKey = string;
export type LocalCache = {
  id: CacheKey;
  value: string;
};

export type Model = {
  id: string;
  fileName: string;
  fileFolder: string;
  fileHash: string;
  civitModelID: string;
  civitModelVersionID: string;
  imageUrl?: string | null;
};

export interface ModelManagerPosition {
  top: number;
  right: number;
}
export type WorkflowVersion = {
  id: string;
  name: string;
  workflowID: string;
  json: string;
  createTime: number;
  cloudID?: string;
  cloudURL?: string;
  nodeDefs?: string; //for cloud workflow version
};

export type UserSettings = {
  id: string;
  myWorkflowsDir: string;
  topBarStyle: PanelPosition;
  modelManagerTopBarStyle: ModelManagerPosition;
  shortcuts: {
    save: string;
  };
  autoSave?: boolean;
  twoWaySync?: boolean;
  foldersOnTop?: boolean;
  showNsfwModelThumbnail?: boolean;
  cloudHost: string;
  createNewFlowWhenDraggingFileToCanvas: boolean;
};

export interface PanelPosition {
  top: number;
  left: number;
}

export interface Folder extends SortableItem {
  id: string;
  name: string;
  parentFolderID: string | null; // if null, it is in the root folder
  createTime: number;
  type: "folder";
  isCollapse?: boolean;
}

export type Changelog = {
  id: string;
  workflowID: string;
  createTime: number;
  json: string;
};

export type Media = {
  id: string;
  workflowID: string;
  createTime: number;
  localPath: string;
  format: string;
};

/**
 * When deleting a folder, how files in the folder and files in nested folders are handled
 */
export enum EFlowOperationType {
  /**
   * Move to root directory
   */
  MOVE_TO_ROOT_FOLDER = "moveToRootFolder",
  /**
   * Delete
   */
  DELETE = "delete",
}

export type WorkflowPrivacy = "PUBLIC" | "PRIVATE" | "UNLISTED";

export const WORKSPACE_INDEXDB_NAME = "comfyui_workspace_db";
