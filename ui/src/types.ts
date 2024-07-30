/**
 * The key value of the sort type in the local cache
 */
export const sortTypeLocalStorageKey = "CWM_WORKFLOWS_SORT_TYPE";

export enum ESortTypes {
  /**
   * Sort by last opened time, most recently modified first
   */
  RECENTLY_OPENED = "recentlyOpened",
  /**
   * Sort by update time, most recently modified first
   */
  RECENTLY_MODIFIED = "newest",
  /**
   * Sort by update time, latest modified last
   */
  OLDEST_MODIFIED = "oldest",
  /**
   * Sort alphabetically, from A to Z
   */
  AZ = "name A-Z",
  /**
   * Sort alphabetically, from Z to A
   */
  ZA = "name Z-A",
}

export type ImportWorkflow = {
  json: string;
  name?: string;
};

export const importMenuItemList = [
  {
    title: "Import Workflows",
    type: "file",
  },
  {
    title: "Import Folder",
    type: "folder",
  },
];

// Solve TS errors caused by webkitdirectory
declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitdirectory?: string;
  }
}
