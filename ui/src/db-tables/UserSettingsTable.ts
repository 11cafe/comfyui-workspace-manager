import { UserSettings } from "../types/dbTypes";
import { TableBase } from "./TableBase";
import { getSystemDir } from "../Api";

export class UserSettingsTable extends TableBase<UserSettings> {
  public defaultSettings: UserSettings;
  public readonly DEFAULT_USER = "guest";
  static readonly TABLE_NAME = "userSettings";

  /**
   * Because in App.js we will use window.addEventListener("beforeunload", handleBeforeUnload); to remind the user to save the workflow when the user leaves the page.
   * The autoSave needs to be obtained in the handleBeforeUnload function. If it is obtained through getSetting, the handleBeforeUnload function will become an async function, which will cause the "beforeunload" event to fail.
   * So we maintain an autoSave here that is always up to date.
   */
  private _autoSave: boolean = false;

  get autoSave() {
    return this._autoSave;
  }

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
    if (
      Object.prototype.hasOwnProperty.call(newPairs, "autoSave") &&
      newPairs.autoSave !== undefined
    ) {
      this._autoSave = newPairs.autoSave;
    }
  }

  static async load(): Promise<UserSettingsTable> {
    const instance = new UserSettingsTable();
    const getDir = await getSystemDir();
    instance.defaultSettings.myWorkflowsDir = `${getDir.dir_path}/my_workflows`;

    await instance.getSetting("autoSave").then((res) => {
      instance._autoSave = res ?? true;
    });
    return instance;
  }
}
