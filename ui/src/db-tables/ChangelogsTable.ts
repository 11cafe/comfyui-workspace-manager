import { nanoid } from "nanoid";
import { Table, userSettingsTable } from "./WorkspaceDB";
import { Changelog } from "../types/dbTypes";
import { TableBase } from "./TableBase";
import { indexdb } from "./indexdb";
const LIMIT = 80;
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
    isAutoSave: boolean;
  }): Promise<Changelog | null> {
    const latest = await this.getLastestByWorkflowID(input.workflowID);
    // only create when there is a change
    if (latest != null && latest.json === input.json) {
      return null;
    }

    const change: Changelog = {
      id: nanoid(),
      json: input.json,
      workflowID: input.workflowID,
      createTime: Date.now(),
      isAutoSave: input.isAutoSave,
    };
    await indexdb.changelogs.add(change);
    await this.deleteLogsExceedLimit(input.workflowID);
    return change;
  }
  async deleteLogsExceedLimit(workflowID: string) {
    const all = await indexdb.changelogs
      .where("workflowID")
      .equals(workflowID)
      .reverse()
      .sortBy("createTime");
    const limit = userSettingsTable?.settings?.maximumChangelogNumber ?? LIMIT;
    if (all.length > limit) {
      const toDelete = all.slice(limit);
      await indexdb.changelogs.bulkDelete(toDelete.map((c) => c.id));
    }
  }
}
