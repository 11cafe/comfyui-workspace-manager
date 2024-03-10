import {
  getPngMetadata,
  getVideoMetadata,
  getWebpMetadata,
  isVideoName,
} from "../utils/mediaMetadataUtils.ts";
import { FC } from "react";
import { Media } from "../types/dbTypes.ts";

export type MetaData<T = any> = { prompt: T; workflow: T };

export type MetaBoxTypeCom = FC<{ metaData: MetaData; media: Media }>;

export function getMetadataFromUrl(url: string) {
  const extension = url.split(".").pop();
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob();
    })
    .then(async (blob) => {
      const fileName = url.split("/").pop() ?? "";
      const fileObj = new File([blob], fileName);
      if (isVideoName(url)) {
        return getVideoMetadata(fileObj) as Promise<MetaData>;
      }
      if (extension === "webp") {
        return getWebpMetadata(fileObj) as Promise<MetaData>;
      }
      const metaData = (await getPngMetadata(fileObj)) as MetaData<string>;
      const prompt = JSON.parse(metaData?.prompt);
      const workflow = JSON.parse(metaData?.workflow);
      return {
        prompt,
        workflow,
      } as MetaData;
    });
}

export const ifString = (t: any) => {
  if (typeof t === "string") {
    return t;
  }
};

export function clipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(function () {})
    .catch(function (err) {
      console.error("Unable to copy to clipboard: ", err);
    });
}

export function getNodesInfo() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return LiteGraph.registered_node_types;
}
