import { UserSettings } from "../types/dbTypes";
import { TableBase } from "./TableBase";
export class UserSettingsTable extends TableBase<UserSettings> {
  public defaultSettings: UserSettings;
  public readonly DEFAULT_USER = "guest";
  static readonly TABLE_NAME = "userSettings";

  constructor() {
    super("userSettings");
    this.defaultSettings = {
      id: this.DEFAULT_USER,
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

  public async getSetting<K extends keyof UserSettings>(
    key: K,
  ): Promise<UserSettings[K]> {
    const currentUserSettings: UserSettings | undefined = await this.get(
      this.DEFAULT_USER,
    );
    return currentUserSettings?.[key] ?? this.defaultSettings[key];
  }

  public async upsert(newPairs: Partial<UserSettings>) {
    const oldSettings =
      (await this.get(this.DEFAULT_USER)) ?? this.defaultSettings;
    const newSettings = {
      ...oldSettings,
      ...newPairs,
    };
    await this.put(newSettings);
  }

  static async load(): Promise<UserSettingsTable> {
    const instance = new UserSettingsTable();
    return instance;
  }
}
