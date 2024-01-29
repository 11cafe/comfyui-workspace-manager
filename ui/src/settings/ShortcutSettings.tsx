import { Input, Stack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export function ShortcutSettings() {
  const [shortcut, setShortcut] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleFocus = () => setIsInputFocused(true);
  const handleBlur = () => setIsInputFocused(false);

  const handleKeyDown = async (e: any) => {
    e.preventDefault();

    let newShortcut = "";
    if (e.ctrlKey) newShortcut += "Control+";
    if (e.shiftKey) newShortcut += "Shift+";
    if (e.altKey) newShortcut += "Alt+";

    // Avoid adding modifier keys alone
    if (
      newShortcut.length > 0 &&
      !["Control", "Shift", "Alt"].includes(e.key)
    ) {
      newShortcut += e.key.toUpperCase();
      await userSettingsTable?.upsert({ shortcuts: { save: newShortcut } });
      getShortcut();
    }
  };

  const getShortcut = () => {
    userSettingsTable?.getSetting("shortcuts").then((res) => {
      setShortcut(res?.save ?? userSettingsTable?.defaultSettings.shortcuts);
    });
  };

  useEffect(() => {
    getShortcut();
  }, []);

  return (
    <Stack>
      <Text>Keyboard Shortcut - Save current workflow</Text>
      {isInputFocused && (
        <Text color="gray.500">Press shortcut key combinations to setup</Text>
      )}
      <Input
        value={shortcut}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Press a key combination"
        readOnly
      />
    </Stack>
  );
}
