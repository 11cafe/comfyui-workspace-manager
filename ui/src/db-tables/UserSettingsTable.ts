import type { UserSettings } from "../types/dbTypes";
import { TableBase } from "./TableBase";
import { MODEL_TYPE_TO_FOLDER_MAPPING } from "../model-manager/install-models/util/modelTypes";
import { fetchApi, fetchMyWorkflowsDir } from "../Api";

export class UserSettingsTable extends TableBase<UserSettings> {
  public defaultSettings: UserSettings;
  public readonly DEFAULT_USER = "guest";
  static readonly TABLE_NAME = "userSettings";

  private _settings: UserSettings | undefined = undefined;

  get settings() {
    return this._settings;
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
      cloudHost: "https://www.nodecafe.co",
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
  public async get(_id: string): Promise<UserSettings | undefined> {
    const obj = await fetchApi("/workspace/get_settings", {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    return obj as any;
  }

  public async upsert(newPairs: Partial<UserSettings>) {
    const oldSettings =
      (await this.get(this.DEFAULT_USER)) ?? this.defaultSettings;
    const newSettings = {
      ...oldSettings,
      ...newPairs,
    };
    await fetchApi("/workspace/save_settings", {
      method: "POST",
      body: JSON.stringify(newSettings),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      instance._settings = {
        ...instance.defaultSettings,
        ...res,
      };
    });
    if (
      instance._settings?.cloudHost?.includes("nodecafe.org") ||
      instance._settings?.cloudHost?.includes("comfyspace.art")
    ) {
      // overwrite legacy comfyspace.art
      await instance.upsert({
        cloudHost: instance.defaultSettings.cloudHost,
      });
    }
    return instance;
  }
}
