/**
 * The key value of the sort type in the local cache
 */
export const sortTypeLocalStorageKey = "CWM_WORKFLOWS_SORT_TYPE";

export enum ESortTypes {
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
}

export enum EWorkspacePosition {
  TOP_LEFT = "Top-Left",
  TOP_RIGHT = "Top-Right",
  BOTTOM_LEFT = "Bottom-Left",
  BOTTOM_RIGHT = "Bottom-Right",
}

export const positionConfig: Record<EWorkspacePosition, Record<string, number>> = {
  [EWorkspacePosition.TOP_LEFT]: {
    top: 0,
    left: 0
  },
  [EWorkspacePosition.TOP_RIGHT]: {
    top: 0,
    right: 0
    // flexDirection: 2
  },
  [EWorkspacePosition.BOTTOM_LEFT]: {
    bottom: 0,
    left: 0
  },
  [EWorkspacePosition.BOTTOM_RIGHT]: {
    bottom: 0,
    right: 0
  },
}
