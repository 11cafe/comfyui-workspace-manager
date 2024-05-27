import { SearchHit, SearchResponse } from "../../civitSearchTypes";
import { MODEL_TYPE } from "./modelTypes";

export async function getModelFromSearch(
  q: string,
  type?: MODEL_TYPE,
): Promise<SearchHit[]> {
  const params: any = {
    queries: [
      {
        q: q,
        indexUid: "models_v9",
        facets: [
          "category.name",
          "checkpointType",
          "fileFormats",
          "lastVersionAtUnix",
          "tags.name",
          "type",
          "user.username",
          "version.baseModel",
        ],
        attributesToHighlight: ["*"],
        highlightPreTag: "__ais-highlight__",
        highlightPostTag: "__/ais-highlight__",
        limit: 80,
        offset: 0,
      },
    ],
  };
  if (type) {
    params.queries[0].filter = [[`"type"="${type}"`]];
  }
  const data = await fetch(import.meta.env.VITE_CMODEL_SEARCH_URL as string, {
    headers: {
      "Content-Type": "application/json",
      Authorization: import.meta.env.VITE_CMODEL_APP_KEY as string,
    },
    method: "POST",
    body: JSON.stringify(params),
  });
  const json: SearchResponse = (await data.json())?.results?.at(0);
  const hits = json.hits ?? [];
  return hits;
}
