/**
 * The key value of the sort type in the local cache
 */
export const sortTypeLocalStorageKey = "CWM_WORKFLOWS_SORT_TYPE";

export enum ESortTypes {
  /**
   * Sort by update time, most recently modified first
   */
  RECENTLY_MODIFIED = "Recently modified",
  /**
   * Sort by update time, latest modified last
   */
  OLDEST_MODIFIED = "Oldest modified",
  /**
   * Sort alphabetically, from A to Z
   */
  AZ = "Alphabetical A-Z",
  /**
   * Sort alphabetically, from Z to A
   */
  ZA = "Alphabetical Z-A",
}