import { SHORTCUT_TRIGGER_EVENT } from "../const";
import {
  OPEN_TAB_EVENT,
  RE_RENDER_MULTIPLE_TABS_EVENT,
  TabData,
} from "../topbar/multipleTabs/TabDataManager";
import { EOtherKeys, EShortcutKeys } from "./dbTypes";

interface ShortcutTriggerDetail {
  shortcutType: EShortcutKeys | EOtherKeys;
}

interface reRenderTabsDetail {
  tabs: TabData;
  activeIndex: number;
}

interface reRenderTabsDetail {
  tabs: TabData;
  activeIndex: number;
}

declare global {
  interface DocumentEventMap {
    [SHORTCUT_TRIGGER_EVENT]: CustomEvent<ShortcutTriggerDetail>;
    [RE_RENDER_MULTIPLE_TABS_EVENT]: CustomEvent<reRenderTabsDetail>;
    [OPEN_TAB_EVENT]: CustomEvent;
  }
}
