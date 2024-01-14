import { getDB, getSystemDir, saveDB } from "../Api";
import { UserSettings } from "../types/dbTypes";
import { getWorkspaceIndexDB, updateWorkspaceIndexDB } from "./IndexDBUtils";

export class UserSettingsTable {
  public records: UserSettings;
  static readonly TABLE_NAME = "userSettings";
  private constructor() {
    this.records = {
      topBarStyle: {
        top: 0,
        left: 0,
      },
      myWorkflowsDir: "",
      shortcuts: {
        save: "Shift+S",
      },
      autoSave: true,
      twoWaySync: false,
    };
  }
  public listSettings() {
    return this.records;
  }
  public getSetting<K extends keyof UserSettings>(key: K): UserSettings[K] {
    return this.records[key];
  }
  public upsert(newPairs: Partial<UserSettings>) {
    this.records = {
      ...this.records,
      ...newPairs,
    };
    saveDB(UserSettingsTable.TABLE_NAME, JSON.stringify(this.records));
    updateWorkspaceIndexDB();
  }

  static async load(): Promise<UserSettingsTable> {
    const instance = new UserSettingsTable();
    const jsonStr = await getDB(UserSettingsTable.TABLE_NAME);
    let json = jsonStr != null ? JSON.parse(jsonStr) : null;
    if (json == null) {
      const comfyspace = (await getWorkspaceIndexDB()) ?? "{}";
      const comfyspaceData = JSON.parse(comfyspace);
      json = comfyspaceData[UserSettingsTable.TABLE_NAME] || {};
    }
    if (!json.myWorkflowsDir) {
      const getDir = await getSystemDir();
      json.myWorkflowsDir = `${getDir.dir_path}/my_workflows`;
    }
    instance.records = json;
    return instance;
  }
}
