import { RECENTLY_OPENED_FILE_LIST } from "../const";
import { indexdb } from "../db-tables/indexdb";
import { RecentlyOpenedFile } from "../types/dbTypes";

export async function getRecentlyOpenedFileList() {
  const fileListCache = await indexdb.cache.get(RECENTLY_OPENED_FILE_LIST);
  let recentlyOpenedFileList: RecentlyOpenedFile[] = [];
  try {
    fileListCache?.value &&
      (recentlyOpenedFileList = JSON.parse(fileListCache?.value));
  } catch (e) {
    console.error("error parsing recently opened file list", e);
  }
  return recentlyOpenedFileList;
}

export async function updateRecentlyOpenedFileList(
  curOpenFile: RecentlyOpenedFile,
) {
  const recentlyOpenedFileList = await getRecentlyOpenedFileList();
  const findIndex = recentlyOpenedFileList.findIndex(
    (file) => file.id === curOpenFile.id,
  );
  if (findIndex >= 0) {
    recentlyOpenedFileList.splice(findIndex, 1);
  }
  recentlyOpenedFileList.unshift(curOpenFile);
  if (recentlyOpenedFileList.length >= 20) {
    recentlyOpenedFileList.length = 20;
  }
  indexdb.cache.put({
    id: RECENTLY_OPENED_FILE_LIST,
    value: JSON.stringify(recentlyOpenedFileList),
  });
}
