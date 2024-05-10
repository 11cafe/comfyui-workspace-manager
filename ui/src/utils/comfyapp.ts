// @ts-ignore
export const app = window.app;
const api_base = location.pathname.split("/").slice(0, -1).join("/");

export let api: any | null = null;

import(api_base + "/scripts/api.js").then((apiJs) => {
  api = apiJs?.api;
});
