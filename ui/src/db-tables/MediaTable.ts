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
      id: input.localPath,
      localPath: input.localPath,
      workflowID: input.workflowID,
      createTime: Date.now(),
    };
    await workflowsTable?.updateMetaInfo(input.workflowID, {
      latestImage: md.localPath,
    });
    // save indexdb
    indexdb.media.put(md);
    return md;
  }

  async delete(id: string): Promise<void> {
    super.delete(id);
    if (workflowsTable?.curWorkflow?.coverMediaPath === id) {
      workflowsTable?.updateMetaInfo(workflowsTable.curWorkflow.id, {
        coverMediaPath: undefined,
      });
    }
    if (workflowsTable?.curWorkflow?.latestImage === id) {
      workflowsTable?.updateMetaInfo(workflowsTable.curWorkflow.id, {
        latestImage: undefined,
      });
    }
  }
}
