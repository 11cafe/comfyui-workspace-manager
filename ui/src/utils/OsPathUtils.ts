import type { Workflow } from "../types/dbTypes";

export const serverInfo: {
  os: "Windows" | "Linux" | "Darwin" | "Java" | null;
} = {
  os: null,
};

export const getPathSep = () => (serverInfo.os === "Windows" ? "\\" : "/");

export function joinRelPath(...segments: string[]) {
  const rel = segments.filter((segment) => segment !== "").join("/");
  return sanitizeRelPath(rel);
}

export function sanitizeRelPath(path: string) {
  const segments = path
    .split("/")
    .filter((segment) => segment !== "")
    .join("/");
  // Replace backslashes with forward slashes to handle Windows paths
  let sanitizedPath = segments.replace(/\\/g, "/");
  // Remove leading slashes to ensure the path is treated as relative
  sanitizedPath = sanitizedPath.replace(/^\/+/, "");

  if (serverInfo.os === "Windows") {
    sanitizedPath = segments.replace(/\//g, "\\");
  }

  return sanitizedPath;
}

export function getWorkflowRelPath(workflow: Workflow) {
  return joinRelPath(workflow.parentFolderID ?? "", workflow.name + ".json");
}

export function getFolderRelPath(folder: { id: string }) {
  return folder.id;
}
