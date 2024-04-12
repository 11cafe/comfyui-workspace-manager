import {
  IconButton,
  Button,
  HStack,
  Text,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import { IconLock, IconX, IconAsterisk } from "@tabler/icons-react";
import { useState, useEffect, useContext, useReducer } from "react";
import { WorkspaceContext } from "../../WorkspaceContext";
import {
  OPEN_TAB_EVENT,
  RE_RENDER_MULTIPLE_TABS_EVENT,
} from "./TabDataManager";
import { tabDataManager } from "./TabDataManager";
import "./index.css";

export default function MultipleTabs() {
  const { colorMode } = useColorMode();
  const { curFlowID, isDirty, loadWorkflowID } = useContext(WorkspaceContext);
  const [, reRenderDispatch] = useReducer((state) => state + 1, 0);

  useEffect(() => {
    tabDataManager.updateTabData(tabDataManager.activeIndex, { isDirty });
  }, [isDirty]);

  useEffect(() => {
    const reRender = (e: CustomEvent) => {
      const detail = e.detail;
      console.log("Tabs changed:", detail.tabs);
      console.log("Active index:", detail.activeIndex);
      reRenderDispatch();
      switch (detail.otherAction) {
        case "clearCanvas":
          loadWorkflowID(null);
          break;
      }
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
    <HStack spacing={0} className="workspace-multiple-tabs">
      {tabDataManager.tabs.map((tab, index) => {
        const isActive = tabDataManager.activeIndex === index;
        const { id, name, isDirty } = tab;
        return (
          <Box
            key={`${id}-${name}`}
            className="workspace-multiple-tabs-item"
            cursor="pointer"
            border="1px"
            borderColor="#64646459"
            borderTopColor={isActive ? "#0078d4" : "#64646459"}
            borderRightWidth={0}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            h="32px"
            lineHeight="32px"
            padding="0 30px 0 10px"
            position="relative"
            bg={isActive ? "#1f1f1f" : "#181818"}
            _hover={{ bg: "#1f1f1f" }}
            _last={{ borderRightWidth: 1 }}
          >
            <Text color={isActive ? "white" : "#9d9d9d"} marginRight="4px">
              {name}
            </Text>
            {isDirty ? (
              <Box
                className="workspace-multiple-tabs-item-action"
                position="absolute"
                right="4px"
              >
                <IconButton
                  icon={<IconAsterisk color="white" width={14} height={14} />}
                  size={"xs"}
                  aria-label="un save flag"
                  variant={"ghost"}
                  display="flex"
                  _hover={{ bg: "whiteAlpha.200" }}
                  className="workspace-multiple-tabs-item-dirty"
                />
                <IconButton
                  onClick={() => {
                    tabDataManager.deleteTabData(index);
                  }}
                  icon={<IconX color="white" width={14} height={14} />}
                  size={"xs"}
                  aria-label="close tab"
                  variant={"ghost"}
                  display="none"
                  _hover={{ bg: "whiteAlpha.200" }}
                  className="workspace-multiple-tabs-item-dirty-close"
                />
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  tabDataManager.deleteTabData(index);
                }}
                icon={<IconX color="white" width={14} height={14} />}
                size={"xs"}
                aria-label="close tab"
                variant={"ghost"}
                display="none"
                position="absolute"
                right="4px"
                _hover={{ bg: "whiteAlpha.200" }}
                className={isActive ? "" : "workspace-multiple-tabs-item-close"}
              />
            )}
          </Box>
        );
      })}
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
