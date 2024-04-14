import { IconButton, HStack, Box } from "@chakra-ui/react";
import { IconX, IconAsterisk, IconLock } from "@tabler/icons-react";
import { useEffect, useContext, useReducer } from "react";
// @ts-ignore
import { app } from "/scripts/app.js";
import { WorkspaceContext } from "../../WorkspaceContext";
import {
  OPEN_TAB_EVENT,
  RE_RENDER_MULTIPLE_TABS_EVENT,
} from "./TabDataManager";
import { tabDataManager } from "./TabDataManager";
import "./index.css";
import { workflowsTable } from "../../db-tables/WorkspaceDB";
import EditFlowName from "../../components/EditFlowName";
import { useDialog } from "../../components/AlertDialogProvider";

export default function MultipleTabs() {
  const { showDialog } = useDialog();
  const {
    setCurFlowIDAndName,
    isDirty,
    setCurVersion,
    curVersion,
    loadWorkflowID,
    saveCurWorkflow,
  } = useContext(WorkspaceContext);
  const [, reRenderDispatch] = useReducer((state) => state + 1, 0);

  const onClose = (index: number) => {
    const deleteTabInfo = tabDataManager.tabs[index];
    if (deleteTabInfo.isDirty) {
      showDialog(
        `Please save or discard your changes to "${deleteTabInfo.name}" before leaving, or your changes will be lost.`,
        [
          {
            label: "Save",
            colorScheme: "teal",
            onClick: async () => {
              tabDataManager.changeActiveTab(index, false);
              app.loadGraphData(JSON.parse(deleteTabInfo.json));
              setTimeout(async () => {
                await saveCurWorkflow(deleteTabInfo.id);
                tabDataManager.deleteTabData(index);
              }, 10);
            },
          },
          {
            label: "Close",
            colorScheme: "red",
            onClick: async () => {
              tabDataManager.deleteTabData(index);
            },
          },
        ],
      );
    } else {
      tabDataManager.deleteTabData(index);
    }
  };

  useEffect(() => {
    tabDataManager.updateTabData(tabDataManager.activeIndex, { isDirty });
  }, [isDirty]);

  useEffect(() => {
    const reRender = (e: CustomEvent) => {
      const detail = e.detail;
      reRenderDispatch();
      switch (detail.otherAction) {
        case "clearCanvas":
          loadWorkflowID(null);
          break;
        case "loadNewFlow":
          app.loadGraphData(JSON.parse(detail.activeTab.json));
          workflowsTable?.get(detail.activeTab.id).then((flow) => {
            flow &&
              setCurFlowIDAndName({
                ...flow,
                json: detail.activeTab.json,
              });
          });
          curVersion && setCurVersion(null);
          break;
      }
    };

    const openTab = (e: CustomEvent) => {
      const detail = e.detail;
      if (detail.tabInfo.id !== tabDataManager.activeTab?.id) {
        tabDataManager.addTabData(detail.tabInfo);
      }
    };

    document.addEventListener(RE_RENDER_MULTIPLE_TABS_EVENT, reRender);
    document.addEventListener(OPEN_TAB_EVENT, openTab);
    return () => {
      document.removeEventListener(RE_RENDER_MULTIPLE_TABS_EVENT, reRender);
      document.removeEventListener(OPEN_TAB_EVENT, reRender);
    };
  }, []);

  return (
    <HStack
      spacing={0}
      className="workspace-multiple-tabs"
      overflowX="auto"
      maxW="calc(100vw - 380px)"
    >
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
            onClick={() => {
              tabDataManager.activeIndex !== index &&
                tabDataManager.changeActiveTab(index);
            }}
          >
            <EditFlowName isActive={isActive} displayName={name ?? ""} />
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
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose(index);
                  }}
                  icon={<IconX color="white" width={14} height={14} />}
                  size={"xs"}
                  aria-label="close tab"
                  variant={"ghost"}
                  _hover={{ bg: "whiteAlpha.200" }}
                  display="none"
                  className="workspace-multiple-tabs-item-dirty-close"
                />
              </Box>
            ) : (
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  onClose(index);
                }}
                icon={<IconX color="white" width={14} height={14} />}
                size={"xs"}
                aria-label="close tab"
                variant={"ghost"}
                _hover={{ bg: "whiteAlpha.200" }}
                display={isActive ? "flex" : "none"}
                position="absolute"
                right="4px"
                className={isActive ? "" : "workspace-multiple-tabs-item-close"}
              />
            )}
            {isActive && workflowsTable?.curWorkflow?.saveLock && (
              <IconLock color="#FFF" size={20} />
            )}
          </Box>
        );
      })}
    </HStack>
  );
}
