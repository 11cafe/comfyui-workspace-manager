import { COMFYSPACE_TRACKING_FIELD_NAME } from "../const";
import { indexdb } from "../db-tables/indexdb";
import {
  getCivitModelDownloadUrl,
  getCivitModelPageUrl,
  getHgModelInfoUrlFromDownloadUrl,
} from "../utils/civitUtils";
// @ts-ignore
import { app } from "/scripts/app.js";

type LiteNode = {
  id: number;
  type: string;
  widgets_values?: Array<string | number>;
};

export type ModelFile = {
  filename: string;
  nodeType: string;
  fileHash: string | null;
  fileFolder: string | null;
  downloadUrl: string | null;
  infoUrl: string | null;
};

type ImageFile = {
  filename: string;
  nodeType: string;
  url?: string;
};
type NodeRepo = {
  commitHash: string;
  repoID: string;
};

export type DepsResult = {
  models: Record<string, DepsResultModel>;
  images: Record<string, ImageFile>;
  nodeRepos: NodeRepo[];
};

export type DepsResultModel = ModelFile & {
  length: number;
};

export type WorkspaceInfoDeps = {
  models: Record<string, ModelFile>;
  images: DepsResult["images"];
  nodeRepos: DepsResult["nodeRepos"];
};

async function fetchModelData(
  filename: string,
  nodeType: string,
): Promise<DepsResultModel> {
  const res =
    (await indexdb.models.where("fileName").equals(filename).toArray()) ?? [];
  const first = res.at(0);
  const modelFile: DepsResultModel = {
    filename,
    nodeType,
    fileHash: first?.fileHash ?? null,
    fileFolder: first?.fileFolder ?? null,
    downloadUrl: first?.civitModelVersionID
      ? getCivitModelDownloadUrl(first.civitModelVersionID)
      : first?.downloadUrl ?? null,
    length: res.length,
    infoUrl: first?.civitModelID
      ? getCivitModelPageUrl(first.civitModelID, first.civitModelVersionID)
      : getHgModelInfoUrlFromDownloadUrl(first?.downloadUrl ?? "") ?? null,
  };
  return modelFile;
}

export async function extractAndFetchFileNames(
  nodes: LiteNode[],
): Promise<DepsResult> {
  let modelPromises: Promise<DepsResultModel>[] = [];
  let images: DepsResult["images"] = {};
  const modelFileExtensions = [".ckpt", ".pt", ".bin", ".pth", ".safetensors"];
  const imageFileExtensions = [".jpeg", ".jpg", ".png", ".gif", ".webp"];
  const curDeps: DepsResult | null =
    app.graph.extra?.[COMFYSPACE_TRACKING_FIELD_NAME]?.deps;
  nodes.forEach((node) => {
    if (node.widgets_values && Array.isArray(node.widgets_values)) {
      node.widgets_values.forEach((value) => {
        if (typeof value != "string") return;
        // Check if it's a model file
        if (modelFileExtensions.some((ext) => value.endsWith(ext))) {
          if (curDeps?.models?.[value]) {
            modelPromises.push(Promise.resolve(curDeps.models[value]));
          } else {
            modelPromises.push(fetchModelData(value, node.type));
          }
        }
        // Check if it's an image file
        if (imageFileExtensions.some((ext) => value.endsWith(ext))) {
          images[value] = curDeps?.images?.[value] ?? {
            filename: value,
            nodeType: node.type,
          };
        }
      });
    }
  });
  const resp = await fetch("workspace/fetch_node_repos", {
    method: "POST",
    body: JSON.stringify({ nodes: nodes.map((n) => n.type) }),
  })
    .then((res) => {
      if (!res.ok) {
        return [];
      }
      return res.json();
    })
    .catch((e) => {
      console.error("Error fetching node repos", e);
      return [];
    });

  const models = await Promise.all(modelPromises);
  const modelsMap: Record<string, DepsResultModel> = {};
  models.forEach((model) => {
    modelsMap[model.filename] = model;
  });
  return { models: modelsMap, images, nodeRepos: resp };
}
