export function osPathJoin(...args: string[]) {
  return args.filter((segment) => segment !== "").join("/");
}
