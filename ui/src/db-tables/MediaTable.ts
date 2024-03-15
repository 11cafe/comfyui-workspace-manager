import { v4 as uuidv4 } from "uuid";
import { Table, workflowsTable } from "./WorkspaceDB";
import { TableBase } from "./TableBase";
import { Media } from "../types/dbTypes";
import { indexdb } from "./indexdb";
import { getMetadataFromUrl } from "../gallery/utils.ts";

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

    const res = await getMetadataFromUrl(
      `/workspace/view_media?filename=${input.localPath}`,
    ).catch((e) => {
      console.error("get meta error:", e);
      return { prompt: "" };
    });

    const md: Media = {
      id: uuidv4(),
      localPath: input.localPath,
      workflowID: input.workflowID,
      createTime: Date.now(),
      workflowJSON: JSON.stringify(res?.prompt),
      format: format,
    };
    await workflowsTable?.updateMetaInfo(input.workflowID, {
      latestImage: md.localPath,
    });
    // save indexdb
    indexdb.media.add(md);
    // save disk file db
    this.saveDiskDB();
    return md;
  }
}
