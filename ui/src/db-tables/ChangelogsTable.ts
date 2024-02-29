import { v4 as uuidv4 } from "uuid";
import { Table } from "./WorkspaceDB";
import { Changelog } from "../types/dbTypes";
import { TableBase } from "./TableBase";
import { indexdb } from "./indexdb";
const LIMIT = 150;
export class ChangelogsTable extends TableBase<Changelog> {
  static readonly TABLE_NAME: Table = "changelogs";
  constructor() {
    super("changelogs");
  }
  static async load(): Promise<ChangelogsTable> {
    const instance = new ChangelogsTable();
    return instance;
  }

  public async listByWorkflowID(workflowID: string): Promise<Changelog[]> {
    const objects = await indexdb["changelogs"]
      .where("workflowID")
      .equals(workflowID)
      .reverse()
      .sortBy("createTime");
    return objects;
  }
  public async getLastestByWorkflowID(workflowID: string): Promise<Changelog> {
    const objects = await this.listByWorkflowID(workflowID);
    return objects[0];
  }
  public async create(input: {
    json: string;
    workflowID: string;
  }): Promise<Changelog | null> {
    const latest = await this.getLastestByWorkflowID(input.workflowID);
    // only create when there is a change
    if (latest != null && latest.json === input.json) {
      return null;
    }

    const change: Changelog = {
      id: uuidv4(),
      json: input.json,
      workflowID: input.workflowID,
      createTime: Date.now(),
    };
    await indexdb.changelogs.add(change);
    await this.saveDiskDB();
    return change;
  }
  async deleteLogsExceedLimit(workflowID: string, limit: number = LIMIT) {
    const all = await indexdb.changelogs
      .where("workflowID")
      .equals(workflowID)
      .reverse()
      .sortBy("createTime");
    const autoSaved = all.filter((c) => c.isAutoSave === true);
    const manualSaved = all.filter(
      (c) => c.isAutoSave == null || c.isAutoSave == false,
    );

    if (autoSaved.length > limit) {
      const toDelete = autoSaved.slice(limit);
      await indexdb.changelogs.bulkDelete(toDelete.map((c) => c.id));
      await this.saveDiskDB();
    }
    if (manualSaved.length > limit) {
      const toDelete = manualSaved.slice(limit);
      await indexdb.changelogs.bulkDelete(toDelete.map((c) => c.id));
      await this.saveDiskDB();
    }
  }
}
