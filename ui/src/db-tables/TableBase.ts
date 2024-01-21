import { saveDB } from "../Api";
import { updateWorkspaceIndexDB } from "./IndexDBUtils";
import { Table, loadTableFromLocalBackup } from "./WorkspaceDB";
import { indexdb } from "./indexdb";

export class TableBase<T> {
  public readonly tableName: Table;

  protected constructor(tableName: Table) {
    this.tableName = tableName;
  }

  public async listAll(): Promise<T[]> {
    const objs = await indexdb[this.tableName].toArray();
    return objs as T[];
    // TODO 何时回退到旧数据库，应该交给用户来操作，例如用户批量删除了所有的文件夹，此时DB查询结果是空数组，此时不应该回退到旧数据库。暂时注释掉，逻辑确定了再改。（单个操作其实并没有问题，批量操作有问题）
    // if (objs?.length) return objs as T[];
    // console.warn("indexdb not found", this.tableName, "fallback to legacy db");
    // const records = await this.getRecords();
    // return Object.values(records);
  }

  public async getRecords(): Promise<Record<string, T>> {
    console.warn("[DEPRECATED]getRecords() call", this.tableName);

    return await loadTableFromLocalBackup(this.tableName);
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
}
