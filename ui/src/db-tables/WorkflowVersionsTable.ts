import { Table } from "./WorkspaceDB";
import { WorkflowVersion } from "../types/dbTypes";
import { TableBase } from "./TableBase";
import { indexdb } from "./indexdb";

export class WorkflowVersionsTable extends TableBase<WorkflowVersion> {
  static readonly TABLE_NAME: Table = "workflowVersions";
  constructor() {
    super("workflowVersions");
  }
  static async load(): Promise<WorkflowVersionsTable> {
    const instance = new WorkflowVersionsTable();
    return instance;
  }

  public async listByWorkflowID(
    workflowID: string,
  ): Promise<WorkflowVersion[]> {
    const objects = (await indexdb[this.tableName]
      .where("workflowID")
      .equals(workflowID)
      .reverse()
      .sortBy("createTime")) as WorkflowVersion[];
    return objects ?? [];
  }

  public async getLatestByWorkflowID(
    workflowID: string,
  ): Promise<WorkflowVersion | null> {
    const objects = await this.listByWorkflowID(workflowID);
    if (objects?.length) return objects[0];

    return null;
  }
}
