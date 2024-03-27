import { Checkbox, Stack, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { CommonNumberSetting } from "./CommonNumberSetting";

export default function AutosaveSetting() {
  const [checked, setChecked] = useState(false);
  const toast = useToast();

  const getSetting = () => {
    userSettingsTable?.getSetting("autoSave").then((res) => {
      setChecked(!!res);
    });
  };

  useEffect(() => {
    getSetting();
  }, []);

  return (
    <Stack>
      <Checkbox
        isChecked={checked}
        onChange={async (e) => {
          await userSettingsTable?.upsert({ autoSave: e.target.checked });
          getSetting();
          toast({
            title: "Setting saved",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }}
      >
        Enable auto save workflow
      </Checkbox>
      {checked && (
        <CommonNumberSetting
          label="Auto save duration (auto save workflow every X seconds)"
          settingKey="autoSaveDuration"
        />
      )}
    </Stack>
  );
}
