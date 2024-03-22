import { SHORTCUT_TRIGGER_EVENT } from "../const";
import { EOtherKeys, EShortcutKeys } from "./dbTypes";

interface ShortcutTriggerDetail {
  shortcutType: EShortcutKeys | EOtherKeys;
}

declare global {
  interface WindowEventMap {
    [SHORTCUT_TRIGGER_EVENT]: CustomEvent<ShortcutTriggerDetail>;
  }
}
