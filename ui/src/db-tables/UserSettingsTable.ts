import { getDB, getSystemDir, saveDB } from "../Api";
import { UserSettings } from "../types/dbTypes";
import { getWorkspaceIndexDB, updateWorkspaceIndexDB } from "./IndexDBUtils";
import { TableBase } from "./TableBase";
import { indexdb } from "./indexdb";

const DEFAULT_USER = "guest";

export class UserSettingsTable extends TableBase<UserSettings> {
  public records: UserSettings;
  static readonly TABLE_NAME = "userSettings";
  constructor() {
    super("userSettings");
    this.records = {
      userID: DEFAULT_USER,
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

  public getSetting<K extends keyof UserSettings>(key: K): UserSettings[K] {
    return this.records[key];
  }
  public upsert(newPairs: Partial<UserSettings>) {
    this.records = {
      ...this.records,
      ...newPairs,
    };
    indexdb.userSettings.put(this.records);
    saveDB(UserSettingsTable.TABLE_NAME, JSON.stringify(this.records));
    updateWorkspaceIndexDB();
  }

  static async load(): Promise<UserSettingsTable> {
    const instance = new UserSettingsTable();
    let settings = await indexdb.userSettings.get(DEFAULT_USER);
    if (settings == null) {
      // throw new Error("User settings not found");
      const jsonStr = await getDB(UserSettingsTable.TABLE_NAME);
      let settings = jsonStr != null ? JSON.parse(jsonStr) : null;
      if (settings == null) {
        const comfyspace = (await getWorkspaceIndexDB()) ?? "{}";
        const comfyspaceData = JSON.parse(comfyspace);
        settings = comfyspaceData[UserSettingsTable.TABLE_NAME] || {};
      }
    }
    if (settings == null) {
      settings = instance.records;
    }
    if (!settings.myWorkflowsDir) {
      const getDir = await getSystemDir();
      settings.myWorkflowsDir = `${getDir.dir_path}/my_workflows`;
    }
    if (!settings.userID) {
      settings.userID = DEFAULT_USER;
    }
    instance.records = settings;
    return instance;
  }
}
