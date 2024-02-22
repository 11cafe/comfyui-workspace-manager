import { userSettingsTable } from "../../../db-tables/WorkspaceDB";
import { indexdb } from "../../../db-tables/indexdb";
import { CivitiModel } from "../../types";
import { CACHE_EXPIRY_DAYS, MODEL_TYPE } from "./modelTypes";

type CivitModelQueryParams = {
  types?: MODEL_TYPE;
  query?: string;
  limit?: string;
  nsfw?: boolean;
};

export async function getModelFromCivitAPi(
  types?: MODEL_TYPE,
): Promise<CivitiModel[]> {
  const showNsfwThumbnail = await userSettingsTable?.getSetting(
    "showNsfwModelThumbnail",
  );
  const params: CivitModelQueryParams = {
    limit: "30",
    nsfw: showNsfwThumbnail ?? false,
    types,
  };

  const queryString = new URLSearchParams(params).toString();
  const fullURL = `https://civitai.com/api/v1/models?${queryString}`;

  const cacheEntry = await indexdb.cache?.get(fullURL);
  if (cacheEntry?.value != null) {
    try {
      const { data, timestamp } = JSON.parse(cacheEntry?.value);
      // Check if cached data is still valid
      const ageInDays = (Date.now() - timestamp) / (1000 * 60 * 60 * 24);
      if (ageInDays < CACHE_EXPIRY_DAYS) {
        return data;
      }
    } catch (e) {
      console.error("err fetching cache", e);
    }
  }

  const data = await fetch(fullURL);
  const json = await data.json();
  indexdb.cache.put({
    id: fullURL,
    value: JSON.stringify({
      data: json.items,
      timestamp: Date.now(),
    }),
  });
  return json.items;
}
