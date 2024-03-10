import { v4 as uuidv4 } from "uuid";
import { Table, userSettingsTable } from "./WorkspaceDB";
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
    await this.checkAvailableSpace(input.workflowID, input.isAutoSave);
    const change: Changelog = {
      id: uuidv4(),
      json: input.json,
      workflowID: input.workflowID,
      createTime: Date.now(),
      isAutoSave: input.isAutoSave,
    };
    await indexdb.changelogs.add(change);
    await this.saveDiskDB();
    return change;
  }

  async checkAvailableSpace(workflowID: string, isAutoSave: boolean) {
    const all = await indexdb.changelogs
      .where("workflowID")
      .equals(workflowID)
      .reverse()
      .sortBy("createTime");

    const maximumChangelog =
      (await userSettingsTable?.getSetting("maximumChangelogNumber")) ??
      userSettingsTable?.defaultSettings.maximumChangelogNumber;

    const saved = all.filter((c) => !!c.isAutoSave === isAutoSave);
    const limit = isAutoSave
      ? maximumChangelog?.autoSave!
      : maximumChangelog?.manualSave!;
    if (saved.length >= limit) {
      const toDelete = saved.slice(limit - 1);
      await indexdb.changelogs.bulkDelete(toDelete.map((c) => c.id));
      await this.saveDiskDB();
    }
  }
}
