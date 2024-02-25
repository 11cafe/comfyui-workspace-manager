export function osPathJoin(...args: string[]) {
  const joined = args.filter((segment) => segment !== "").join("/");
  if (joined.endsWith("/")) {
    return joined.slice(0, -1);
  }
  return sanitizeRelPath(joined);
}

export function sanitizeAbsPath(path: string) {
  const segments = path.split("/").filter((segment) => segment !== "");
  return "/" + segments.join("/");
}
export function sanitizeRelPath(path: string) {
  const segments = path.split("/").filter((segment) => segment !== "");
  return segments.join("/");
}
