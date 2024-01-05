import { getDB, saveBackup, saveDB } from "../Api";
import { v4 as uuidv4 } from "uuid";
import { curComfyspaceJson, getWorkflow, updateFlow } from "../WorkspaceDB";
import { getWorkspaceIndexDB, updateWorkspaceIndexDB } from "./IndexDBUtils";

type Media = {
  id: string;
  workflowID: string;
  createTime: number;
  localPath: string;
  format: string;
};
export class MediaTable {
  static readonly TABLE_NAME = "media";
  private records: {
    [id: string]: Media;
  };
  private constructor() {
    this.records = {};
  }

  static async load(): Promise<MediaTable> {
    const instance = new MediaTable();
    let jsonStr = await getDB(MediaTable.TABLE_NAME);
    let json = jsonStr != null ? JSON.parse(jsonStr) : null;
    if (json == null) {
      const comfyspace = (await getWorkspaceIndexDB()) ?? "{}";
      const comfyspaceData = JSON.parse(comfyspace);
      json = comfyspaceData[MediaTable.TABLE_NAME];
    }
    if (json != null) {
      instance.records = json;
    }
    return instance;
  }
  public listByWorkflowID(workflowID: string): Media[] {
    return Object.values(this.records).filter(
      (c) => c.workflowID === workflowID
    );
  }
  public getRecords() {
    return this.records;
  }
  public get(id: string): Media | undefined {
    return this.records[id];
  }
  public getLastestByWorkflowID(workflowID: string): Media {
    const all = Object.values(this.records)
      .filter((c) => c.workflowID === workflowID)
      .sort((a, b) => b.createTime - a.createTime);
    return all[0];
  }
  public getByWorkflowID(workflowID: string): Media[] {
    return Object.values(this.records)
      .filter((c) => c.workflowID === workflowID)
      .sort((a, b) => b.createTime - a.createTime);
  }
  public create(input: {
    localPath: string;
    workflowID: string;
  }): Media | null {
    const format = input.localPath.split(".").pop();
    if (format == null) return null;
    const md: Media = {
      id: uuidv4(),
      localPath: input.localPath,
      workflowID: input.workflowID,
      createTime: Date.now(),
      format: format,
    };
    //link media to workflow
    const curMedia = getWorkflow(input.workflowID)?.mediaIDs ?? [];
    const newMedia = new Set(curMedia).add(md.id);
    updateFlow(input.workflowID, {
      mediaIDs: Array.from(newMedia),
      coverMediaPath: md.localPath,
    });

    this.records[md.id] = md;
    saveDB("media", JSON.stringify(this.records));
    updateWorkspaceIndexDB();
    return md;
  }
  public delete(id: string) {
    delete this.records[id];
    saveDB("media", JSON.stringify(this.records));
    updateWorkspaceIndexDB();
  }
}
