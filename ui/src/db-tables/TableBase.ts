import { getDB, saveDB } from "../Api";
import { getWorkspaceIndexDB } from "./IndexDBUtils";
import { TableBaseModel } from "../types/dbTypes";
import { Table } from "./WorkspaceDB";
import { indexdb } from "./indexdb";

export class TableBase<T> {
  public readonly tableName: Table;

  protected constructor(tableName: Table) {
    this.tableName = tableName;
  }
  protected async saveDiskDB() {
    const objs = (await indexdb[this.tableName].toArray()) as TableBaseModel[];
    const backup: Record<string, TableBaseModel> = {};
    objs.forEach((f) => {
      // only tags table is using name as primary key, we either give up backup that table to diskDB
      // or add a id as primary key to it
      backup[f.id] = f;
    });
    saveDB(this.tableName, JSON.stringify(backup));
  }

  public async add(newItem: T): Promise<T> {
    await indexdb[this.tableName].add(newItem as any);
    await this.saveDiskDB();
    return newItem;
  }
  public async put(newItem: T): Promise<T> {
    await indexdb[this.tableName].add(newItem as any);
    await this.saveDiskDB();
    return newItem;
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
    console.warn(
      "[DEPRECATED] getRecords() call, should only be used for one-time backfill for indexdb",
      this.tableName,
    );

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
    return obj as T;
  }

  public async delete(id: string) {
    await indexdb[this.tableName].delete(id);
    await this.saveDiskDB();
  }
}
