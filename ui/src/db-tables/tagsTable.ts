import { Tag } from "../types/dbTypes";
import { Table } from "./WorkspaceDB";
import { TableBase } from "./TableBase";

export class TagsTable extends TableBase<Tag> {
  static readonly TABLE_NAME: Table = "tags";

  constructor() {
    super("tags");
  }

  static async load(): Promise<TagsTable> {
    const instance = new TagsTable();
    return instance;
  }
}
