import { getDB, saveDB } from "../Api";
import { getWorkspaceIndexDB, updateWorkspaceIndexDB } from "./IndexDBUtils";
import { Table } from "./WorkspaceDB";
import { indexdb } from "./indexdb";

export class TableBase<T> {
  public readonly tableName: Table;

  protected constructor(tableName: Table) {
    this.tableName = tableName;
  }

  public async listAll(): Promise<T[]> {
    const list = await indexdb[this.tableName].toArray();
    return list as T[];
  }

  public async batchQuery(ids: string[]): Promise<T[]> {
    const list = await indexdb[this.tableName].bulkGet(ids);
    return list as T[];
  }

  public async getRecords(): Promise<Record<string, T>> {
    console.warn("[DEPRECATED]getRecords() call", this.tableName);

    const jsonStr = await getDB(this.tableName);
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
    const obj = await indexdb[this.tableName].get(id);
    if (obj) return obj as T;
    console.warn("indexdb not found", this.tableName, "fallback to legacy db");
    const records = await this.getRecords();
    return records[id];
  }

  public async delete(id: string) {
    await indexdb[this.tableName].delete(id);
    const records = await this.getRecords();
    delete records[id];
    saveDB(this.tableName, JSON.stringify(records));
    updateWorkspaceIndexDB();
  }

  // tag、userSettings 主键不是id，需要注意适配；
  public async saveDiskDB() {
    console.log(111);

    const latestFullData = await this.listAll();
    const records: Record<string, T> = {};
    latestFullData.forEach((f: any) => {
      f.id && (records[f.id] = f);
    });
    saveDB(this.tableName, JSON.stringify(records));
  }
}
