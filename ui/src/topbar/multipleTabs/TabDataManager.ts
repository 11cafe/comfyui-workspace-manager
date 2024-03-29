export const RE_RENDER_MULTIPLE_TABS_EVENT = "RE_RENDER_MULTIPLE_TABS_EVENT";
export const OPEN_TAB_EVENT = "OPEN_TAB_EVENT";

export type TabData = {
  id: string;
  name: string;
  json: string;
  isDirty: boolean;
};
type TabUpdateInput = Partial<Omit<TabData, "id">>;

class TabDataManager {
  tabs: TabData[] = [];
  activeIndex: number = 0;

  setActiveIndex(index: number) {
    this.activeIndex = index;
    this.notifyChanges();
  }

  updateTabData(id: string, updateInput: TabUpdateInput) {
    const tabIndex = this.tabs.findIndex((tab) => tab.id === id);
    if (tabIndex !== -1) {
      this.tabs[tabIndex] = { ...this.tabs[tabIndex], ...updateInput };
      this.notifyChanges();
    }
  }

  addTabData(newTab: TabData) {
    const existingIndex = this.tabs.findIndex((tab) => tab.id === newTab.id);
    if (existingIndex !== -1) {
      this.activeIndex = existingIndex;
    } else {
      const insertIndex = this.activeIndex + 1;
      this.tabs.splice(insertIndex, 0, newTab);
      this.activeIndex = insertIndex;
    }
    this.notifyChanges();
  }

  deleteTabData(index: number) {
    if (index < 0 || index >= this.tabs.length) return;

    if (this.tabs.length === 1) {
      this.tabs = [];
      this.notifyChanges();
      return;
    }

    this.tabs.splice(index, 1);

    if (index === this.activeIndex) {
      this.activeIndex = Math.min(this.tabs.length - 1, this.activeIndex);
    } else if (index < this.activeIndex) {
      this.activeIndex--;
    }

    this.notifyChanges();
  }

  private notifyChanges() {
    console.log("Tab data or active index changed");
    const event = new CustomEvent(RE_RENDER_MULTIPLE_TABS_EVENT, {
      detail: {
        tabs: this.tabs,
        activeIndex: this.activeIndex,
      },
    });
    document.dispatchEvent(event);
  }
}

// Exporting a single instance
export const tabDataManager = new TabDataManager();
