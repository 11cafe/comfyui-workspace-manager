import { v4 as uuidv4 } from "uuid";
import { Table } from "./WorkspaceDB";
import { Changelog } from "../types/dbTypes";
import { TableBase } from "./TableBase";
import { indexdb } from "./indexdb";

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
    if (objects?.length) return objects;

    const records = await this.getRecords();
    return Object.values(records)
      .filter((c) => c.workflowID === workflowID)
      .sort((a, b) => b.createTime - a.createTime);
  }
  public async getLastestByWorkflowID(workflowID: string): Promise<Changelog> {
    const objects = await this.listByWorkflowID(workflowID);
    if (objects?.length) return objects[0];
    const records = await this.getRecords();
    const all = Object.values(records)
      .filter((c) => c.workflowID === workflowID)
      .sort((a, b) => b.createTime - a.createTime);
    return all[0];
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
}
