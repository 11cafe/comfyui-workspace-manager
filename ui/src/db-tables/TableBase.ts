import { saveDB } from "../Api";
import { updateWorkspaceIndexDB } from "./IndexDBUtils";
import { Table, loadTable } from "./WorkspaceDB";

export class TableBase<T> {
  public readonly tableName: Table;

  protected constructor(tableName: Table) {
    this.tableName = tableName;
  }

  public async listAll(): Promise<T[]> {
    const records = await this.getRecords();
    return Object.values(records);
  }

  public async getRecords(): Promise<Record<string, T>> {
    return await loadTable(this.tableName);
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
