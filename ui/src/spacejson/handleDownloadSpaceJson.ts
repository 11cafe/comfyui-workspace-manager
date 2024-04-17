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
  fileFolder: string | null;
  fileHash: string | null;
  downloadUrl: string | null;
  // optional info
  infoUrl: string | null;
  nodeType?: string;
  inputName?: string;
};

type ImageFile = {
  filename: string;
  nodeType: string;
  url?: string;
};
type NodeRepo = {
  commitHash: string;
  gitRepo: string;
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
  inputName: string,
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
    inputName: inputName,
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
  const prompt = await app.graphToPrompt();
  const promptNodes = Object.values(prompt.output) as any;
  promptNodes.forEach(
    (node: { class_type: string; inputs?: Record<string, any> }) => {
      if (node.inputs) {
        Object.keys(node.inputs).forEach((inputName) => {
          const value = node.inputs?.[inputName];
          if (typeof value != "string") return;
          // Check if it's a model file
          if (modelFileExtensions.some((ext) => value.endsWith(ext))) {
            if (curDeps?.models?.[value]) {
              modelPromises.push(Promise.resolve(curDeps.models[value]));
            } else {
              modelPromises.push(
                fetchModelData(value, node.class_type, inputName),
              );
            }
          }
          // Check if it's an image file
          if (imageFileExtensions.some((ext) => value.endsWith(ext))) {
            images[value] = curDeps?.images?.[value] ?? {
              filename: value,
              nodeType: node.class_type,
            };
          }
        });
      }
    },
  );
  const reposMapping: Record<string, NodeRepo> = await fetch(
    "workspace/fetch_node_repos",
    {
      method: "POST",
      body: JSON.stringify({ nodes: nodes.map((n) => n.type) }),
    },
  )
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
    // if (model.nodeType) {
    //   model.gitRepo = reposMapping[model.nodeType];
    // }
    modelsMap[model.filename] = model;
  });
  const nodeRepos: Record<string, NodeRepo> = {};
  Object.values(reposMapping).forEach((repo) => {
    nodeRepos[repo.gitRepo] = repo;
  });
  return { models: modelsMap, images, nodeRepos: Object.values(nodeRepos) };
}
