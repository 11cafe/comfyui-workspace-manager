import { useState, useEffect } from "react";
import { userSettingsTable } from "../../../db-tables/WorkspaceDB";
import { UserSettings } from "../../../types/dbTypes";

export function useModelListSettings<K extends keyof UserSettings>(
  name: K,
  defaultValue: NonNullable<UserSettings[K]>,
) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    getSettings();
    window.addEventListener("settingsChange", getSettings);
    return () => {
      window.removeEventListener("settingsChange", getSettings);
    };
  }, []);

  const getSettings = () => {
    userSettingsTable?.getSetting(name).then((res) => {
      res !== undefined && setValue(res);
    });
  };
  const onChange = (val: UserSettings[K]) => {
    userSettingsTable
      ?.upsert({
        [name]: val,
      })
      .then(() => {
        getSettings();
        window.dispatchEvent(new Event("settingsChange"));
      });
  };
  return [value, onChange] as const;
}
