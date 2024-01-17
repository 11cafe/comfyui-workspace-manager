export interface SortableItem {
  name: string;
  updateTime: number;
}

export type Tags = {
  [name: string]: Tag;
};
export type Tag = {
  name: string;
  workflowIDs: string[];
  updateTime: number;
};

export type UserSettings = {
  userID: string;
  myWorkflowsDir: string;
  topBarStyle: PanelPosition;
  shortcuts: {
    save: string;
  };
  autoSave?: boolean;
  twoWaySync?: boolean;
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
