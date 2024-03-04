import type { Workflow } from "../types/dbTypes";

export function joinRelPath(...segments: string[]) {
  const rel = segments.filter((segment) => segment !== "").join("/");
  return sanitizeRelPath(rel);
}
// export function sanitizeRelPath(path: string) {
//   const segments = path.split("/").filter((segment) => segment !== "");
//   if (segments.length === 0) {
//     return "";
//   }
//   return segments.join("/");
// }
export function sanitizeRelPath(path: string) {
  const segments = path
    .split("/")
    .filter((segment) => segment !== "")
    .join("/");
  // Replace backslashes with forward slashes to handle Windows paths
  let sanitizedPath = segments.replace(/\\/g, "/");

  // If the path contains a Windows drive letter, remove it
  sanitizedPath = sanitizedPath.replace(/^[a-zA-Z]:/, "");

  // Remove leading slashes to ensure the path is treated as relative
  sanitizedPath = sanitizedPath.replace(/^\/+/, "");

  return sanitizedPath;
}

export function getWorkflowRelPath(workflow: Workflow) {
  return joinRelPath(workflow.parentFolderID ?? "", workflow.name + ".json");
}

export function getFolderRelPath(folder: { id: string }) {
  return folder.id;
}
