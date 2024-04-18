// @ts-ignore
export const app = window.app;
const api_base = location.pathname.split("/").slice(0, -1).join("/");

export const api = import(api_base + "/scripts/app.js").then((api) => {
  return api;
});
