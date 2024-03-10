import { Input, Stack, HStack, Text } from "@chakra-ui/react";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { EMaximumChangelogNumberDiffTypes } from "../types/dbTypes";

export function MaximumChangelog() {
  const configList = useRef<
    Array<{ title: string; key: EMaximumChangelogNumberDiffTypes }>
  >([
    {
      title: "Manual save",
      key: EMaximumChangelogNumberDiffTypes.manualSave,
    },
    {
      title: "Auto save",
      key: EMaximumChangelogNumberDiffTypes.autoSave,
    },
  ]);
  const [changelogNumber, setChangelogNumber] = useState<
    Record<EMaximumChangelogNumberDiffTypes, number>
  >({
    manualSave: 0,
    autoSave: 0,
  });

  const [inputError, setInputError] = useState<
    Record<EMaximumChangelogNumberDiffTypes, boolean>
  >({
    manualSave: false,
    autoSave: false,
  });

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    updateKey: EMaximumChangelogNumberDiffTypes,
  ) => {
    const newValue = event.target.value;
    if (/^[1-9][0-9]*$/.test(newValue) || newValue === "") {
      setChangelogNumber({
        ...changelogNumber,
        [updateKey]: newValue,
      });
      if (inputError[updateKey]) {
        setInputError({
          ...inputError,
          [updateKey]: false,
        });
      }
    }
  };

  const onBlur = async (updateKey: EMaximumChangelogNumberDiffTypes) => {
    if (changelogNumber[updateKey]) {
      const oldSetting =
        (await userSettingsTable?.getSetting("maximumChangelogNumber")) ??
        userSettingsTable?.defaultSettings.maximumChangelogNumber;

      await userSettingsTable?.upsert({
        maximumChangelogNumber: {
          ...oldSetting!,
          [updateKey]: Number(changelogNumber[updateKey]),
        },
      });
    } else {
      setInputError({
        ...inputError,
        [updateKey]: true,
      });
    }
  };

  const getMaximumChangelogNumber = () => {
    userSettingsTable?.getSetting("maximumChangelogNumber").then((res) => {
      setChangelogNumber(
        res ?? userSettingsTable?.defaultSettings.maximumChangelogNumber,
      );
    });
  };

  useEffect(() => {
    getMaximumChangelogNumber();
  }, []);

  return (
    <Stack>
      <Text>Maximum Changelog History</Text>
      {configList.current.map((config) => (
        <HStack key={config.key}>
          <Text fontSize="sm" w={170}>
            {config.title}
          </Text>
          <Input
            value={changelogNumber[config.key]}
            onChange={(e) => onInputChange(e, config.key)}
            onBlur={() => {
              onBlur(config.key);
            }}
            type="number"
            width="auto"
            flex={1}
            isInvalid={inputError[config.key]}
            errorBorderColor="crimson"
            placeholder="Please enter"
          />
        </HStack>
      ))}
    </Stack>
  );
}
