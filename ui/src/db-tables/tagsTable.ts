import { saveDB } from "../Api";
import { Tag } from "../types/dbTypes";
import { Table } from "./WorkspaceDB";
import { TableBase } from "./TableBase";
import { indexdb } from "./indexdb";

export class TagsTable extends TableBase<Tag> {
  static readonly TABLE_NAME: Table = "tags";
  constructor() {
    super("tags");
  }
  static async load(): Promise<TagsTable> {
    const instance = new TagsTable();
    return instance;
  }

  public async upsert(name: string) {
    const newTag = {
      name,
      workflowIDs: [],
      updateTime: Date.now(),
    };
    indexdb.tags.put(newTag);
    const tags = await this.getRecords();
    if (tags[name] == null) {
      tags[name] = newTag;
    }
    tags[name].updateTime = Date.now();
    saveDB("tags", JSON.stringify(tags));
    return tags[name];
  }
}

// export async function loadTagsTable(): Promise<TagsTable> {
//   const tagsStr = await getDB("tags");
//   let tags: Tags;
//   if (tagsStr == null) {
//     const comfyspace = (await getWorkspaceIndexDB()) ?? "{}";
//     const comfyspaceData = JSON.parse(comfyspace);
//     tags = comfyspaceData["tags"] || {};
//   } else {
//     tags = JSON.parse(tagsStr ?? "{}") ?? {};
//   }
//   return {
//     tags, // Expose the tags array publicly
//     listAll() {
//       return Object.values(tags).sort((a, b) => b.updateTime - a.updateTime);
//     },
//     upsert(name: string) {
//       if (tags[name] == null) {
//         tags[name] = {
//           name,
//           workflowIDs: [],
//           updateTime: Date.now(),
//         };
//       }
//       tags[name].updateTime = Date.now();
//       saveDB("tags", JSON.stringify(tags));
//       return tags[name];
//     },
//     delete(name: string) {
//       delete tags[name];
//       saveDB("tags", JSON.stringify(tags));
//     },
//   };
// }
