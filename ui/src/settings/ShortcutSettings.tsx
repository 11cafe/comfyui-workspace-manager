import { Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { userSettingsTable } from "../WorkspaceDB";

export function ShortcutSettings() {
  const shortcutSetting = userSettingsTable?.getSetting("shortcuts")?.save;
  const [shortcut, setShortcut] = useState(shortcutSetting ?? "Control+S");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleFocus = () => setIsInputFocused(true);
  const handleBlur = () => setIsInputFocused(false);
  const handleKeyDown = (e: any) => {
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
      setShortcut(newShortcut);
      userSettingsTable?.upsert({ shortcuts: { save: newShortcut } });
    }
  };
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
