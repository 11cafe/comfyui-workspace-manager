import { SearchHit, SearchModelVersion } from "../../civitSearchTypes";
import { CivitiModel, CivitiModelVersion } from "../../types";

export const ALL_MODEL_TYPES = [
  "Checkpoint",
  "TextualInversion",
  "Hypernetwork",
  "LORA",
  "Controlnet",
  "Upscaler",
  "VAE",
  // "Poses",
  // "MotionModule",
  // "LoCon",
  // "AestheticGradient",
  // "Wildcards",
] as const; // `as const` makes the array readonly and its elements literal types

export const CACHE_EXPIRY_DAYS = 2;

// Infer MODEL_TYPE from the ALL_MODEL_TYPES array
export type MODEL_TYPE = (typeof ALL_MODEL_TYPES)[number];
export const MODEL_TYPE_TO_FOLDER_MAPPING: Record<MODEL_TYPE, string> = {
  Checkpoint: "checkpoints",
  TextualInversion: "embeddings",
  Hypernetwork: "hypernetworks",
  LORA: "loras",
  Controlnet: "controlnet",
  Upscaler: "upscale_models",
  VAE: "vae",
};

export type FileEssential = {
  id: number;
  name?: string;
  SHA256?: string;
  sizeKB?: number;
};

export type apiResponse = CivitiModel | SearchHit;

export function isCivitModel(
  model: CivitiModel | SearchHit,
): model is CivitiModel {
  return (model as CivitiModel).modelVersions !== undefined;
}

export function isCivitVersion(
  version: CivitiModelVersion | SearchModelVersion,
): version is CivitiModelVersion {
  return (version as CivitiModelVersion).files?.[0] !== undefined;
}

export function getFileEssential(
  version: CivitiModelVersion | SearchModelVersion,
  modelName?: string,
): FileEssential;
export function getFileEssential(
  version?: CivitiModelVersion | SearchModelVersion,
  modelName?: string,
): FileEssential | undefined;

export function getFileEssential(
  version?: CivitiModelVersion | SearchModelVersion,
  modelName?: string,
): FileEssential | undefined {
  if (!version) return;
  let fileData: FileEssential;
  if (isCivitVersion(version)) {
    fileData = {
      id: version.id,
      SHA256: version.files?.[0].hashes?.SHA256,
      name: version.files?.[0].name,
      sizeKB: version.files?.[0]?.sizeKB,
    };
  } else {
    fileData = {
      id: version.id,
      SHA256: version.hashes?.[2],
      name: `${modelName} ${version.name}`,
    };
  }

  return fileData;
}
