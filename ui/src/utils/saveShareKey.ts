import { encodeKey } from "./encryptUtils";

export function saveShareKey(sharekey: string) {
  const key = encodeKey(sharekey);
  localStorage.setItem("workspace_manager_shareKey", key);
}
