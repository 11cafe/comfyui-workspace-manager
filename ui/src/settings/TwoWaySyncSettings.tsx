import { Checkbox, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export default function TwoWaySyncSettings() {
  const curSetting = userSettingsTable?.getSetting("twoWaySync");

  const [checked, setChecked] = useState(curSetting ?? false);
  return (
    <Stack>
      <Text color={"GrayText"}>
        If true this will auto detect when you have new .json files added to
        your workspace saving directory in your disk and automatically import
        them into your workspace for you
      </Text>
      <Checkbox
        isChecked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          userSettingsTable?.upsert({ twoWaySync: e.target.checked });
        }}
      >
        Enable two way sync (Experimental)
      </Checkbox>
    </Stack>
  );
}
