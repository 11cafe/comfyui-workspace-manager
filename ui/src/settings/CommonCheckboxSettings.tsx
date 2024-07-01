import { Checkbox, Stack, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { UserSettings } from "../types/dbTypes";

interface Props {
  settingKey: keyof UserSettings;
  text: string;
  defaultChecked?: boolean;
}

export default function CommonCheckboxSettings({
  settingKey,
  text,
  defaultChecked = false,
}: Props) {
  const [checked, setChecked] = useState(defaultChecked);
  const toast = useToast();

  const getSetting = () => {
    userSettingsTable?.getSetting(settingKey).then((res) => {
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
          setChecked(e.target.checked);
          await userSettingsTable?.upsert({ [settingKey]: e.target.checked });
          getSetting();
          toast({
            title: "Setting saved. Please refresh to see the changes.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }}
      >
        {text}
      </Checkbox>
    </Stack>
  );
}
