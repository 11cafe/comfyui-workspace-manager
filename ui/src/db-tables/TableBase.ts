import { getDB, saveDB } from "../Api";
import { v4 as uuidv4 } from "uuid";
import { getWorkspaceIndexDB, updateWorkspaceIndexDB } from "./IndexDBUtils";
import { Table, Workflow } from "../types/workspaceTypes";

export class TableBase<T> {
  protected readonly tableName: Table;

  protected constructor(tableName: Table) {
    this.tableName = tableName;
  }

  public async list(): Promise<T[]> {
    const records = await this.getRecords();
    const workflows = Object.values(records);
    return workflows;
  }

  public async getRecords(): Promise<Record<string, T>> {
    let jsonStr = await getDB(this.tableName);
    let json: any;
    try {
      json = jsonStr != null ? JSON.parse(jsonStr) : null;
    } catch (e) {}
    if (json == null) {
      const comfyspace = (await getWorkspaceIndexDB()) ?? "{}";
      const comfyspaceData = JSON.parse(comfyspace);
      json = comfyspaceData[this.tableName];
    }
    return json ?? {};
  }
  public async get(id: string): Promise<T | undefined> {
    const records = await this.getRecords();
    return records[id];
  }

  public async delete(id: string) {
    const records = await this.getRecords();
    delete records[id];
    saveDB(this.tableName, JSON.stringify(records));
    updateWorkspaceIndexDB();
  }
}
