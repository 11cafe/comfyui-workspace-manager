import { getDB, saveDB } from "../Api";
import { v4 as uuidv4 } from "uuid";
import { getWorkflow, updateFlow } from "../WorkspaceDB";
import { getWorkspaceIndexDB, updateWorkspaceIndexDB } from "./IndexDBUtils";

export type Media = {
  id: string;
  workflowID: string;
  createTime: number;
  localPath: string;
  format: string;
};

type MediaRecords = {
  [id: string]: Media;
};

export class MediaTable {
  static readonly TABLE_NAME = "media";
  private constructor() {}

  static async load(): Promise<MediaTable> {
    return new MediaTable();
  }
  public async listByWorkflowID(workflowID: string): Promise<Media[]> {
    const records = await this.getRecords();
    return Object.values(records)
      .filter((c) => c.workflowID === workflowID)
      .sort((a, b) => b.createTime - a.createTime);
  }
  public async getRecords(): Promise<MediaRecords> {
    let jsonStr = await getDB(MediaTable.TABLE_NAME);
    let json = jsonStr != null ? JSON.parse(jsonStr) : null;
    if (json == null) {
      const comfyspace = (await getWorkspaceIndexDB()) ?? "{}";
      const comfyspaceData = JSON.parse(comfyspace);
      json = comfyspaceData[MediaTable.TABLE_NAME];
    }
    return json ?? {};
  }
  public async get(id: string): Promise<Media | undefined> {
    const records = await this.getRecords();
    return records[id];
  }
  public async getLastestByWorkflowID(workflowID: string): Promise<Media> {
    const records = await this.getRecords();
    const all = Object.values(records)
      .filter((c) => c.workflowID === workflowID)
      .sort((a, b) => b.createTime - a.createTime);
    return all[0];
  }

  public async create(input: {
    localPath: string;
    workflowID: string;
  }): Promise<Media | null> {
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
    const records = await this.getRecords();

    records[md.id] = md;
    saveDB("media", JSON.stringify(records));
    updateWorkspaceIndexDB();
    return md;
  }
  public async delete(id: string) {
    const records = await this.getRecords();
    delete records[id];
    saveDB("media", JSON.stringify(records));
    updateWorkspaceIndexDB();
  }
}
