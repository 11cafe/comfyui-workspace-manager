import { indexdb } from "../db-tables/indexdb";
import { Model } from "../types/dbTypes";
import { getCivitModelDownloadUrl } from "../utils/civitUtils";

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
  civitModelID?: string;
  length: number;
};

type ImageFile = {
  filename: string;
  nodeType: string;
};

export type DepsResult = {
  models: ModelFile[];
  images: ImageFile[];
};

async function fetchModelData(
  filename: string,
  nodeType: string,
): Promise<ModelFile> {
  const res =
    (await indexdb.models.where("fileName").equals(filename).toArray()) ?? [];
  const first = res.at(0);
  const modelFile: ModelFile = {
    filename,
    nodeType,
    fileHash: first?.fileHash ?? null,
    fileFolder: first?.fileFolder ?? null,
    downloadUrl: first?.civitModelVersionID
      ? getCivitModelDownloadUrl(first.civitModelVersionID)
      : null,
    length: res.length,
    civitModelID: first?.civitModelID,
  };
  return modelFile;
}

export async function extractAndFetchFileNames(
  nodes: LiteNode[],
): Promise<DepsResult> {
  let modelPromises: Promise<ModelFile>[] = [];
  let images: ImageFile[] = [];
  const modelFileExtensions = [".ckpt", ".pt", ".bin", ".pth", ".safetensors"];
  const imageFileExtensions = [".jpeg", ".jpg", ".png", ".gif"];

  nodes.forEach((node) => {
    if (node.widgets_values) {
      node.widgets_values.forEach((value) => {
        if (typeof value != "string") return;
        // Check if it's a model file
        if (modelFileExtensions.some((ext) => value.endsWith(ext))) {
          modelPromises.push(fetchModelData(value, node.type));
        }
        // Check if it's an image file
        if (imageFileExtensions.some((ext) => value.endsWith(ext))) {
          images.push({ filename: value, nodeType: node.type });
        }
      });
    }
  });

  // Wait for all the model data fetch operations to complete
  const models = await Promise.all(modelPromises);

  return { models: models, images };
}
