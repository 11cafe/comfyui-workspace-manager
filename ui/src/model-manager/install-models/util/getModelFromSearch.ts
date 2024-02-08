import {
  SearchHit,
  SearchRequestBody,
  SearchResponse,
} from "../../civitSearchTypes";
import { MODEL_TYPE } from "./modelTypes";

export async function getModelFromSearch(
  q: string,
  type?: MODEL_TYPE,
): Promise<SearchHit[]> {
  const params: SearchRequestBody = {
    limit: 30,
    filter: "nsfw = false AND type != Workflows",
    q,
  };
  if (type) {
    params.filter += `AND type = ${type}`;
  }
  const data = await fetch(import.meta.env.VITE_CMODEL_SEARCH_URL as string, {
    headers: {
      "Content-Type": "application/json",
      Authorization: import.meta.env.VITE_CMODEL_APP_KEY as string,
    },
    method: "POST",
    body: JSON.stringify(params),
  });
  const json: SearchResponse = await data.json();
  return json?.hits ?? [];
}
