import { getDB, saveDB } from "../Api";
import { Tags, TagsTable } from "../types/dbTypes";
import { getWorkspaceIndexDB } from "./IndexDBUtils";

export async function loadTagsTable(): Promise<TagsTable> {
  const tagsStr = await getDB("tags");
  let tags: Tags;
  if (tagsStr == null) {
    const comfyspace = (await getWorkspaceIndexDB()) ?? "{}";
    const comfyspaceData = JSON.parse(comfyspace);
    tags = comfyspaceData["tags"] || {};
  } else {
    tags = JSON.parse(tagsStr ?? "{}") ?? {};
  }
  return {
    tags, // Expose the tags array publicly
    listAll() {
      return Object.values(tags).sort((a, b) => b.updateTime - a.updateTime);
    },
    upsert(name: string) {
      if (tags[name] == null) {
        tags[name] = {
          name,
          workflowIDs: [],
          updateTime: Date.now(),
        };
      }
      tags[name].updateTime = Date.now();
      saveDB("tags", JSON.stringify(tags));
      return tags[name];
    },
    delete(name: string) {
      delete tags[name];
      saveDB("tags", JSON.stringify(tags));
    },
  };
}
