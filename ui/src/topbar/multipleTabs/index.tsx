import {
  IconButton,
  Button,
  HStack,
  Text,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import { IconLock, IconX } from "@tabler/icons-react";
import { useState, useEffect, useContext, useReducer } from "react";
import { WorkspaceContext } from "../../WorkspaceContext";
import {
  OPEN_TAB_EVENT,
  RE_RENDER_MULTIPLE_TABS_EVENT,
} from "./TabDataManager";
import { tabDataManager } from "./TabDataManager";

export default function MultipleTabs() {
  const { colorMode } = useColorMode();
  const { curFlowID, isDirty } = useContext(WorkspaceContext);
  const [, reRenderDispatch] = useReducer((state) => state + 1, 0);

  useEffect(() => {
    const reRender = (e: CustomEvent) => {
      const detail = e.detail;
      console.log("Tabs changed:", detail.tabs);
      console.log("Active index:", detail.activeIndex);
      reRenderDispatch();
    };

    const openTab = (e: CustomEvent) => {
      const detail = e.detail;
      tabDataManager.addTabData(detail.tabInfo);
    };

    document.addEventListener(RE_RENDER_MULTIPLE_TABS_EVENT, reRender);
    document.addEventListener(OPEN_TAB_EVENT, openTab);
    return () => {
      document.removeEventListener(RE_RENDER_MULTIPLE_TABS_EVENT, reRender);
      document.removeEventListener(OPEN_TAB_EVENT, reRender);
    };
  }, []);

  return (
    <HStack>
      {tabDataManager.tabs.map((tab, index) => (
        <Box
          key={tab.id}
          border="1px"
          borderColor="gray.200"
          display="flex"
          bg={tabDataManager.activeIndex === index ? "gray.200" : "#4A5568"}
        >
          <Text color="white">{tab.name}</Text>
          <IconButton
            onClick={() => {
              tabDataManager.deleteTabData(index);
            }}
            icon={<IconX color="white" />}
            size={"xs"}
            aria-label="close tab"
            variant={"ghost"}
          />
        </Box>
      ))}
      {/* <EditFlowName
          isDirty={isDirty}
          displayName={curFlowName ?? ""}
          updateFlowName={(newName) => {
            setCurFlowName(newName);
            requestAnimationFrame(() => {
              updatePanelPosition();
            });
          }}
        />
        {workflowsTable?.curWorkflow?.saveLock && (
          <IconLock color="#FFF" size={20} />
        )} */}
    </HStack>
  );
}
