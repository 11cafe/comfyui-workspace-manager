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

  updateTabData(index: number, updateInput: TabUpdateInput) {
    if (this.tabs[index]) {
      this.tabs[index] = { ...this.tabs[index], ...updateInput };
      this.notifyChanges();
    }
  }

  addTabData(newTab: TabData) {
    const existingIndex = this.tabs.findIndex((tab) => tab.id === newTab.id);
    // TODO: 新增和替换前，都需要在this.tabs中更新一下当前flow的json和isDirty
    if (existingIndex !== -1) {
      this.activeIndex = existingIndex;
      // TODO: 根据activeIndex更新画布数据
    } else {
      const insertIndex = this.activeIndex + 1;
      this.tabs.splice(insertIndex, 0, newTab);
      this.activeIndex = insertIndex;
      // TODO: 根据activeIndex更新画布数据
    }
    this.notifyChanges();
  }

  deleteTabData(index: number) {
    if (index < 0 || index >= this.tabs.length) return;

    if (this.tabs.length === 1) {
      this.tabs = [];
      this.notifyChanges('clearCanvas');
      return;
    }

    this.tabs.splice(index, 1);

    if (index === this.activeIndex) {
      this.activeIndex = Math.min(this.tabs.length - 1, this.activeIndex);
      // TODO: 根据activeIndex更新画布数据
    } else if (index < this.activeIndex) {
      this.activeIndex--;
    }

    this.notifyChanges();
  }

  private notifyChanges(otherAction?: string) {
    const event = new CustomEvent(RE_RENDER_MULTIPLE_TABS_EVENT, {
      detail: {
        tabs: this.tabs,
        activeIndex: this.activeIndex,
        otherAction
      },
    });
    document.dispatchEvent(event);
  }
}

// Exporting a single instance
export const tabDataManager = new TabDataManager();
