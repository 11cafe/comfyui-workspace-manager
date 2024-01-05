import { getDB, saveDB } from "../Api";
import { v4 as uuidv4 } from "uuid";
import { getWorkspaceIndexDB, updateWorkspaceIndexDB } from "./IndexDBUtils";

type Changelog = {
  id: string;
  workflowID: string;
  createTime: number;
  json: string;
};
export class ChangelogsTable {
  static readonly TABLE_NAME = "changelogs";
  private records: {
    [id: string]: Changelog;
  };
  private constructor() {
    this.records = {};
  }

  static async load(): Promise<ChangelogsTable> {
    const instance = new ChangelogsTable();
    let jsonStr = await getDB(ChangelogsTable.TABLE_NAME);
    let json = jsonStr != null ? JSON.parse(jsonStr) : null;
    if (json == null) {
      const comfyspace = (await getWorkspaceIndexDB()) ?? "{}";
      const comfyspaceData = JSON.parse(comfyspace);
      json = comfyspaceData[ChangelogsTable.TABLE_NAME];
    }
    if (json != null) {
      instance.records = json;
    }
    return instance;
  }
  public listByWorkflowID(workflowID: string): Changelog[] {
    return Object.values(this.records).filter(
      (c) => c.workflowID === workflowID
    );
  }
  public getRecords() {
    return this.records;
  }
  public get(id: string): Changelog | undefined {
    return this.records[id];
  }
  public getLastestByWorkflowID(workflowID: string): Changelog {
    const all = Object.values(this.records)
      .filter((c) => c.workflowID === workflowID)
      .sort((a, b) => b.createTime - a.createTime);
    return all[0];
  }
  public getByWorkflowID(workflowID: string): Changelog[] {
    return Object.values(this.records)
      .filter((c) => c.workflowID === workflowID)
      .sort((a, b) => b.createTime - a.createTime);
  }
  public create(input: { json: string; workflowID: string }): Changelog | null {
    const latest = this.getLastestByWorkflowID(input.workflowID);
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
    this.records[change.id] = change;
    saveDB("changelogs", JSON.stringify(this.records));
    updateWorkspaceIndexDB();
    return change;
  }
}
