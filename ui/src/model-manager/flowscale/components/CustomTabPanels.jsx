import { TabPanels } from "@primer/react/drafts";
import React from "react";

export const CustomTabPanels = ({ tabs, panels, defaultTabIndex = 0 }) => {
  return (
    <TabPanels
      aria-label="Select a tab"
      id="tab-panels"
      defaultTabIndex={defaultTabIndex}
    >
      {tabs.map((tab, index) => (
        <TabPanels.Tab key={tab.id} id={tab.id}>
          {tab.content}
        </TabPanels.Tab>
      ))}
      {panels.map((panel, index) => (
        <TabPanels.Panel key={panel.id} id={panel.id}>
          {panel.content}
        </TabPanels.Panel>
      ))}
    </TabPanels>
  );
};
