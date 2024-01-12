// @ts-ignore
import { api } from "/scripts/api.js";

export type InstallModelsApiInput = {
  save_path: string;
  url: string;
  filename: string;
  name: string;
};
let cancelInstall = false;

export const setCancelInstall = (value: boolean) => {
  cancelInstall = value;
};
export const installModelsApi = async (target: InstallModelsApiInput) => {
  try {
    const response = await api.fetchApi("/model_manager/install_model", {
      method: "POST",
      //   headers: { "Content-Type": "application/json" },
      body: JSON.stringify(target),
    });
    console.log("install model response", response);
    window.dispatchEvent(
      new CustomEvent("model_install_message", {
        detail: "Please check the server for progress logs",
      })
    );
    // const reader = response.body.getReader();
    // while (true) {
    //   if (cancelInstall) {
    //     break;
    //   }
    //   const { done, value } = await reader.read();
    //   if (done) break;
    //   const text = new TextDecoder().decode(value);
    //   window.dispatchEvent(
    //     new CustomEvent("model_install_message", {
    //       detail: text,
    //     })
    //   );
    // }
  } catch (error) {
    console.error("Failed to connect to the server:", error);
  }
};
