import { Stack, Text, NumberInput, NumberInputField } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export function MaximumChangelog() {
  const [changelogNumber, setChangelogNumber] = useState<number>(200);

  const onInputChange = (newValue: string) => {
    if (!newValue.length) {
      setChangelogNumber(0);
      return;
    }
    setChangelogNumber(parseInt(newValue));
  };

  const onBlur = async () => {
    if (changelogNumber < 0) {
      setChangelogNumber(0);
    }
    await userSettingsTable?.upsert({
      maximumChangelogNumber: Number(changelogNumber),
    });
  };
  const getMaximumChangelogNumber = () => {
    userSettingsTable?.getSetting("maximumChangelogNumber").then((res) => {
      setChangelogNumber(res);
    });
  };

  useEffect(() => {
    getMaximumChangelogNumber();
  }, []);

  return (
    <Stack>
      <Text>
        Maximum number of save change history to store. This does not include
        versions that you created by "Create Version", which are always stored
        and has no limit.
      </Text>

      <NumberInput
        defaultValue={200}
        min={0}
        keepWithinRange={true}
        placeholder="Enter a number"
        maxWidth={"300px"}
        value={changelogNumber}
        onChange={(e) => onInputChange(e)}
        onBlur={() => {
          onBlur();
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onBlur();
          }
        }}
      >
        <NumberInputField />
      </NumberInput>
    </Stack>
  );
}
