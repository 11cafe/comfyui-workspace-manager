import { Checkbox, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export default function AutoSaveSettings() {
  const [checked, setChecked] = useState(false);

  const getAutoSave = () => {
    userSettingsTable?.getSetting("autoSave").then((res) => {
      setChecked(!!res);
    });
  };

  useEffect(() => {
    getAutoSave();
  }, []);

  return (
    <Stack>
      <Checkbox
        isChecked={checked}
        onChange={async (e) => {
          await userSettingsTable?.upsert({ autoSave: e.target.checked });
          getAutoSave();
        }}
      >
        Enable auto save workflow
      </Checkbox>
    </Stack>
  );
}
