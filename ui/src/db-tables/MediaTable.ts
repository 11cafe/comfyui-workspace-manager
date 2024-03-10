import { v4 as uuidv4 } from "uuid";
import { Table, workflowsTable } from "./WorkspaceDB";
import { TableBase } from "./TableBase";
import { Media } from "../types/dbTypes";
import { indexdb } from "./indexdb";

export class MediaTable extends TableBase<Media> {
  static readonly TABLE_NAME: Table = "media";
  constructor() {
    super("media");
  }
  public async listByWorkflowID(workflowID: string): Promise<Media[]> {
    const medias = await indexdb["media"]
      .where("workflowID")
      .equals(workflowID)
      .reverse()
      .sortBy("createTime");
    return medias;
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
    const workflow = await workflowsTable?.get(input.workflowID);
    const newMedia = new Set(workflow?.mediaIDs ?? []).add(md.id);
    await workflowsTable?.updateMetaInfo(input.workflowID, {
      mediaIDs: Array.from(newMedia),
      coverMediaPath: md.localPath,
    });
    // save indexdb
    indexdb.media.add(md);
    // save disk file db
    this.saveDiskDB();
    return md;
  }
}
