import { indexdb } from "../db-tables/indexdb";
import { Model } from "../types/dbTypes";

type LiteNode = {
  id: number;
  type: string;
  widgets_values?: Array<string | number>;
};

export type ModelFile = {
  filename: string;
  nodeType: string;
  models?: Model[];
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

  const modelFile: ModelFile = { filename, nodeType, models: res };
  return modelFile;
}

export async function extractAndFetchFileNames(
  nodes: LiteNode[],
): Promise<DepsResult> {
  let modelPromises: Promise<ModelFile>[] = [];
  let images: ImageFile[] = [];
  const modelFileExtensions = [".safetensors", ".bin"];
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

  return { models, images };
}
