import { getDB, saveDB } from "../Api";
import { getWorkspaceIndexDB } from "./IndexDBUtils";
import { TableBaseModel } from "../types/dbTypes";
import { Table, userSettingsTable } from "./WorkspaceDB";
import { indexdb } from "./indexdb";
import { nanoid } from "nanoid";

export class TableBase<T extends TableBaseModel> {
  public readonly tableName: Table;

  protected constructor(tableName: Table) {
    this.tableName = tableName;
  }
  protected async saveDiskDB() {
    // diable save diskdb
    return;
    const objs = (await indexdb[this.tableName].toArray()) as TableBaseModel[];
    const backup: Record<string, TableBaseModel> = {};
    objs.forEach((f) => {
      // only tags table is using name as primary key, we either give up backup that table to diskDB
      // or add a id as primary key to it
      if (f.id) {
        backup[f.id] = f;
      } else if (f.name) {
        backup[f.name] = f;
      } else {
        console.error("TableBaseModel should have id or name");
      }
    });
    try {
      saveDB(this.tableName, JSON.stringify(backup));
    } catch (e) {
      console.error("error saving disk db", e);
    }
  }

  public async add(
    newItem: Omit<T, "id" | "createTime"> &
      Partial<Pick<T, "id" | "createTime">>,
  ): Promise<T> {
    if (!newItem.id) {
      newItem.id = nanoid();
    }
    if (!newItem.createTime) {
      newItem.createTime = Date.now();
    }
    await indexdb[this.tableName].add(newItem as any);
    return newItem as T;
  }

  public async put(newItem: T): Promise<T> {
    await indexdb[this.tableName].put(newItem as any);
    return newItem;
  }
  public async bulkPut(newItems: T[]): Promise<void> {
    // @ts-ignore
    await indexdb[this.tableName].bulkPut(newItems as any);
  }
  public async update(id: string, changes: Partial<T>): Promise<T | null> {
    await indexdb[this.tableName].update(id, changes);
    return (await this.get(id)) ?? null;
  }

  public async listAll(): Promise<T[]> {
    const list = await indexdb[this.tableName].toArray();
    return list as any[];
  }

  async filter(filterFn: (obj: T) => boolean): Promise<T[]> {
    const list = await indexdb[this.tableName]
      .filter(filterFn as any)
      .toArray();
    return list as any[];
  }

  public async batchQuery(ids: string[]): Promise<T[]> {
    const list = await indexdb[this.tableName].bulkGet(ids);
    return list as any[];
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
    return obj as any;
  }

  public async delete(id: string) {
    await indexdb[this.tableName].delete(id);
  }
  public async listByIndex(index: keyof T, value: string): Promise<T[]> {
    const list = await indexdb[this.tableName]
      .where(index as string)
      .equals(value)
      .toArray();
    return list as any[];
  }
}
