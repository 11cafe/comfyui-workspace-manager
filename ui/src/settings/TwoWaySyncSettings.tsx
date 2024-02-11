import { Checkbox, Stack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export default function TwoWaySyncSettings() {
  const [checked, setChecked] = useState(false);

  const getTwoWaySync = () => {
    userSettingsTable?.getSetting("twoWaySync").then((res) => {
      setChecked(!!res);
    });
  };

  useEffect(() => {
    getTwoWaySync();
  }, []);

  return (
    <Stack>
      <Text color={"GrayText"}>
        If true this will auto detect when you have new .json files added to
        your workspace saving directory in your disk and automatically import
        them into your workspace for you
      </Text>
      <Checkbox
        isChecked={checked}
        onChange={async (e) => {
          await userSettingsTable?.upsert({ twoWaySync: e.target.checked });
          getTwoWaySync();
        }}
      >
        Enable two way sync (DO NOT USE!! EXPERIMENTAL!)
      </Checkbox>
    </Stack>
  );
}
