import type { Workflow } from "../types/dbTypes";

export const serverInfo: {
  os: "Windows" | "Linux" | "Darwin" | "Java" | null;
} = {
  os: null,
};

export function joinRelPath(...segments: string[]) {
  let sep = "/";
  if (serverInfo.os === "Windows") {
    sep = "\\";
  }
  const rel = segments.filter((segment) => segment !== "").join(sep);
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

  return sanitizedPath;
}

export function getWorkflowRelPath(workflow: Workflow) {
  return joinRelPath(workflow.parentFolderID ?? "", workflow.name + ".json");
}

export function getFolderRelPath(folder: { id: string }) {
  return folder.id;
}
