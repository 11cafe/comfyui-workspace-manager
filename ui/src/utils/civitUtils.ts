import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { Model } from "../types/dbTypes";

const CIVIT_API_KEY_STORAGE_KEY = "WORKSPACE_CIVIT_API_KEY_STORAGE_KEY";
export function getCivitApiKey() {
  return localStorage.getItem(CIVIT_API_KEY_STORAGE_KEY);
}

export function setCivitApiKey(apiKey: string) {
  localStorage.setItem(CIVIT_API_KEY_STORAGE_KEY, apiKey);
}

interface ResponsePartial {
  id: number;
  modelId: number;
  name: string;
  model: {
    name: string;
    type: string;
    nsfw: boolean;
  };
  images: {
    url: string;
    nsfw: "None" | "Soft" | "Mature" | "X";
    width: number;
    height: number;
    hash: string;
  }[];
}

export async function fetchCivitModelFromHashKey(filehash: string): Promise<{
  modelName?: string;
  civitModelID?: string;
  civitModelVersionID?: string;
  imageUrl?: string;
}> {
  try {
    const url = `https://civitai.com/api/v1/model-versions/by-hash/${filehash}`;
    const resp = await fetch(url);
    const json: ResponsePartial = await resp.json();
    let image_url: string | undefined;
    const showNsfwThumbnail = await userSettingsTable?.getSetting(
      "showNsfwModelThumbnail",
    );
    if (showNsfwThumbnail === true) {
      image_url = json?.images?.[0]?.url;
    } else if (!json.model.nsfw) {
      const sfwImage = json.images.find((i) => i.nsfw === "None");
      image_url = sfwImage?.url;
    }

    return {
      modelName: json.model.name,
      civitModelID: String(json.modelId),
      civitModelVersionID: String(json.id),
      imageUrl: image_url ?? undefined,
    };
  } catch (e) {
    return {};
  }
}
