import {
  Input,
  Stack,
  HStack,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { EShortcutKeys } from "../types/dbTypes";

export function ShortcutSettings() {
  const toast = useToast();
  const configList = useRef<Array<{ title: string; key: EShortcutKeys }>>([
    {
      title: "Save current workflow",
      key: EShortcutKeys.SAVE,
    },
    {
      title: "Save as current workflow",
      key: EShortcutKeys.SAVE_AS,
    },
    {
      title: "Open spotlight search",
      key: EShortcutKeys.openSpotlightSearch,
    },
  ]);
  const [shortcut, setShortcut] = useState<Record<EShortcutKeys, string>>({
    save: "",
    saveAs: "",
    openSpotlightSearch: "",
  });
  const [focusedKey, setFocusedKey] = useState<EShortcutKeys>();

  const handleKeyDown = async (e: any, updateKey: EShortcutKeys) => {
    e.preventDefault();

    let newShortcut = "";
    if (e.ctrlKey) newShortcut += "Control+";
    if (e.metaKey) newShortcut += "Command+";
    if (e.shiftKey) newShortcut += "Shift+";
    if (e.altKey) newShortcut += "Alt+";
    // Avoid adding modifier keys alone
    if (
      newShortcut.length > 0 &&
      !["Control", "Shift", "Alt", "Meta"].includes(e.key)
    ) {
      newShortcut += e.key.toUpperCase();

      const dopyShortcuts = { ...shortcut };
      delete dopyShortcuts[updateKey];

      if (Object.values(dopyShortcuts).includes(newShortcut)) {
        toast({
          title: "Shortcut key conflict",
          description: `The shortcut key 「${newShortcut}」 is already used, please
          modify it.`,
          status: "info",
          duration: 3000,
          position: "top",
          isClosable: false,
        });
      } else {
        await userSettingsTable?.upsert({
          shortcuts: { ...shortcut, [updateKey]: newShortcut },
        });
        getShortcut();
      }
    }
  };

  const getShortcut = () => {
    userSettingsTable?.getSetting("shortcuts").then((res) => {
      const result = res ?? userSettingsTable?.defaultSettings.shortcuts;
      setShortcut({
        ...shortcut,
        ...result,
      });
    });
  };

  useEffect(() => {
    getShortcut();
  }, []);

  return (
    <Stack>
      <Text>Keyboard Shortcut</Text>
      {configList.current.map((config) => (
        <HStack key={config.key}>
          <Text fontSize="sm" w={170}>
            {config.title}
          </Text>
          <Tooltip
            label="Press shortcut key combinations to setup"
            placement="bottom"
            hasArrow
            isOpen={focusedKey === config.key}
          >
            <Input
              value={shortcut[config.key]}
              onKeyDown={(e) => {
                handleKeyDown(e, config.key);
              }}
              onFocus={() => {
                setFocusedKey(config.key);
              }}
              onBlur={() => {
                setFocusedKey(undefined);
              }}
              placeholder="Press a key combination"
              readOnly
              width="auto"
              flex={1}
            />
          </Tooltip>
        </HStack>
      ))}
    </Stack>
  );
}
