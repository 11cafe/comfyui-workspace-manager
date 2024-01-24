import { Tag } from "../types/dbTypes";
import { Table } from "./WorkspaceDB";
import { TableBase } from "./TableBase";
import { v4 as uuidv4 } from "uuid";

export class TagsTable extends TableBase<Tag> {
  static readonly TABLE_NAME: Table = "tags";

  constructor() {
    super("tags");
  }

  static async load(): Promise<TagsTable> {
    const instance = new TagsTable();
    return instance;
  }

  public async create(name: string) {
    const newTag = {
      id: uuidv4(),
      name,
      workflowIDs: [],
      updateTime: Date.now(),
    };
    await this.add(newTag);
  }
}
