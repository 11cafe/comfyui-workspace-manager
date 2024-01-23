import { Model } from "../types/dbTypes";
import { Table } from "./WorkspaceDB";
import { TableBase } from "./TableBase";

export class ModelsTable extends TableBase<Model> {
  static readonly TABLE_NAME: Table = "models";
  constructor() {
    super("models");
  }
  static async load(): Promise<ModelsTable> {
    const instance = new ModelsTable();
    return instance;
  }
}
