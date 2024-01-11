import { Checkbox, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export function AutoSaveSettings() {
  const curSetting = userSettingsTable?.getSetting("autoSave");

  const [checked, setChecked] = useState(curSetting ?? true);
  return (
    <Stack>
      <Checkbox
        isChecked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          userSettingsTable?.upsert({ autoSave: e.target.checked });
        }}
      >
        Enable auto save workflow
      </Checkbox>
    </Stack>
  );
}
