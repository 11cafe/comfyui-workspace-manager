import type { UserSettings } from "../types/dbTypes";
import { TableBase } from "./TableBase";
import { MODEL_TYPE_TO_FOLDER_MAPPING } from "../model-manager/install-models/util/modelTypes";
import { fetchMyWorkflowsDir } from "../Api";

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
  private _settings: UserSettings | undefined = undefined;

  get settings() {
    return this._settings;
  }

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
        saveAs: "Control+Alt+S",
        openSpotlightSearch: "Control+P",
      },
      defaultFolders: MODEL_TYPE_TO_FOLDER_MAPPING,
      autoSave: false,
      autoSaveDuration: 3,
      twoWaySync: false,
      foldersOnTop: false,
      cloudHost: "https://www.nodecafe.org",
      overwriteCurWorkflowWhenDroppingFileToCanvas: false,
      maximumChangelogNumber: 80,
      hideCoverImage: false,
      disableUnsavedWarning: false,
    };
  }

  public async getSetting<K extends keyof UserSettings>(
    key: K,
  ): Promise<UserSettings[K]> {
    const currentUserSettings: UserSettings | undefined = await this.get(
      this.DEFAULT_USER,
    );
    if (key === "shortcuts" && currentUserSettings?.shortcuts) {
      return {
        ...this.defaultSettings.shortcuts,
        ...currentUserSettings.shortcuts,
      } as UserSettings[K];
    }
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
    this._settings = {
      ...this.defaultSettings,
      ...newSettings,
    };
  }

  static async load(): Promise<UserSettingsTable> {
    const instance = new UserSettingsTable();
    const myWorkflowsDir = await fetchMyWorkflowsDir();

    instance.defaultSettings.myWorkflowsDir = myWorkflowsDir.path!;

    await instance.get(instance.DEFAULT_USER).then((res) => {
      instance._autoSave = res?.autoSave ?? false;
      instance._settings = {
        ...instance.defaultSettings,
        ...res,
      };
    });
    // overwrite legacy comfyspace.art
    await instance.upsert({
      cloudHost: instance.defaultSettings.cloudHost,
    });
    return instance;
  }
}
