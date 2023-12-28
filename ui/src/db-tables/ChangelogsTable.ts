import { getDB, saveDB } from "../Api";
import { v4 as uuidv4 } from "uuid";
import { curComfyspaceJson } from "../WorkspaceDB";

type Changelog = {
  id: string;
  workflowID: string;
  createTime: number;
  json: string;
};
class ChangelogsTable {
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
      const comfyspace = localStorage.getItem("comfyspace") ?? "{}";
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
  public getDB() {
    return this.records;
  }
  public get(id: string): Changelog | undefined {
    return this.records[id];
  }
  public create(input: { json: string; workflowID: string }): Changelog {
    const change: Changelog = {
      id: uuidv4(),
      json: input.json,
      workflowID: input.workflowID,
      createTime: Date.now(),
    };
    this.records[change.id] = change;
    saveDB("changelogs", JSON.stringify(this.records));
    localStorage.setItem("comfyspace", curComfyspaceJson());
    return change;
  }
  // public delete(id: string) {
  //   delete this.records[id];
  //   const childrenFlows = listWorkflows().filter(
  //     (flow) => flow.parentFolderID == id
  //   );
  //   childrenFlows.forEach((flow) =>
  //     updateFlow(flow.id, { parentFolderID: undefined })
  //   );
  //   saveDB("folders", JSON.stringify(this.records));
  //   localStorage.setItem("comfyspace", curComfyspaceJson());
  // }
}
