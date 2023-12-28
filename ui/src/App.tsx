import { useCallback, useEffect, useRef, useState } from "react";
// @ts-ignore
import { app } from "/scripts/app.js";
import { ComfyExtension, ComfyObjectInfo } from "./types/comfy";
import {
  HStack,
  Box,
  Button,
  Text,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import {
  IconFolder,
  IconPlus,
  IconTriangleInvertedFilled,
  IconGripVertical,
  IconDeviceFloppy,
} from "@tabler/icons-react";
import RecentFilesDrawer from "./RecentFilesDrawer/RecentFilesDrawer";
import Draggable from "./components/Draggable";
import {
  createFlow,
  getWorkflow,
  loadDBs,
  updateFlow,
  workspace,
  userSettingsTable,
  PanelPosition,
} from "./WorkspaceDB";
import { defaultGraph } from "./defaultGraph";
import { WorkspaceContext } from "./WorkspaceContext";
import EditFlowName from "./components/EditFlowName";
import DropdownTitle from "./components/DropdownTitle";
import { matchSaveWorkflowShortcut } from "./utils";

type Route = "root" | "customNodes" | "recentFlows";

export default function App() {
  const nodeDefs = useRef<Record<string, ComfyObjectInfo>>({});
  const [curFlowName, setCurFlowName] = useState<string | null>(null);
  const [route, setRoute] = useState<Route>("root");
  const [loadingDB, setLoadingDB] = useState(true);
  const [flowID, setFlowID] = useState<string | null>(null);
  const curFlowID = useRef<string | null>(null);
  const [positionStyle, setPositionStyle] = useState<PanelPosition>();
  const [isDirty, setIsDirty] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const saveCurWorkflow = useCallback(() => {
    if (curFlowID.current) {
      const graphJson = JSON.stringify(app.graph.serialize());
      updateFlow(curFlowID.current, {
        lastSavedJson: graphJson,
      });
    }
  }, []);
  const discardUnsavedChanges = () => {
    let userInput = confirm(
      "Are you sure you want to discard unsaved changes?"
    );

    if (userInput) {
      // User clicked OK
      if (curFlowID.current) {
        const flow = getWorkflow(curFlowID.current);
        if (flow && flow.lastSavedJson) {
          app.loadGraphData(JSON.parse(flow.lastSavedJson));
        }
      }
    }
  };

  const setCurFlowID = (id: string) => {
    curFlowID.current = id;
    setFlowID(id);
  };

  const graphAppSetup = async () => {
    const ext: ComfyExtension = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(app) {
        // Any setup to run after the app is created
      },
      async addCustomNodeDefs(defs) {
        nodeDefs.current = defs;
      },
    };
    app.registerExtension(ext);
    try {
      await loadDBs();
      updatePanelPosition(userSettingsTable?.getSetting("topBarStyle"), false);
    } catch (error) {
      console.error("error loading db", error);
    }
    setLoadingDB(false);
    const latest = localStorage.getItem("curFlowID");
    const latestWf = latest != null ? getWorkflow(latest) : null;
    if (latestWf) {
      setCurFlowID(latestWf.id);
      setCurFlowName(latestWf.name);
    } else {
      const graphJson = localStorage.getItem("workflow");
      const flow = createFlow({ json: graphJson ?? "" });
      setCurFlowID(flow.id);
      setCurFlowName(flow.name ?? "");
    }
  };
  useEffect(() => {
    graphAppSetup();
    setInterval(() => {
      if (curFlowID.current != null) {
        const graphJson = JSON.stringify(app.graph.serialize());
        localStorage.setItem("curFlowID", curFlowID.current);
        graphJson != null &&
          updateFlow(curFlowID.current, {
            json: graphJson,
          });

        const curWorkflow = curFlowID.current
          ? getWorkflow(curFlowID.current)
          : undefined;
        if (curWorkflow == null || graphJson === curWorkflow?.lastSavedJson) {
          setIsDirty(false);
        } else {
          setIsDirty(true);
        }
      }
    }, 1000);
  }, []);
  const loadWorkflowID = (id: string) => {
    if (workspace == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    setCurFlowID(id);
    const flow = workspace[id];
    if (flow == null) {
      alert("Error: Workflow not found! id: " + id);
      return;
    }
    app.loadGraphData(JSON.parse(flow.json));
    setCurFlowName(flow.name);
    setRoute("root");
  };
  const onClickNewFlow = () => {
    const defaultObj = defaultGraph;
    const flow = createFlow({ json: JSON.stringify(defaultObj) });
    loadWorkflowID(flow.id);
  };

  const onDuplicateWorkflow = (workflowID: string, newFlowName?: string) => {
    if (workspace == null) {
      return;
    }
    const workflow = workspace[workflowID];
    if (workflow == null) {
      return;
    }
    const flow = createFlow({
      json: workflow.json,
      name: newFlowName || workflow.name,
      parentFolderID: workflow.parentFolderID,
      tags: workflow.tags,
    });
    loadWorkflowID(flow.id);
  };

  const updatePanelPosition = useCallback(
    (position?: PanelPosition, needUpdateDB: boolean = false) => {
      const { top: curTop = 0, left: curLeft = 0 } = positionStyle || {};
      let { top = 0, left = 0 } = position ?? {};
      top += curTop;
      left += curLeft;
      const clientWidth = document.documentElement.clientWidth;
      const clientHeight = document.documentElement.clientHeight;
      const panelElement = document.getElementById("workspaceManagerPanel");
      const offsetWidth = panelElement?.offsetWidth || 392;

      if (top + 36 > clientHeight) top = clientHeight - 36;
      if (left + offsetWidth >= clientWidth) left = clientWidth - offsetWidth;

      setPositionStyle({ top: Math.max(0, top), left: Math.max(0, left) });

      needUpdateDB &&
        userSettingsTable?.upsert({
          topBarStyle: { top, left },
        });
    },
    [positionStyle]
  );

  const shortcutListener = (event: KeyboardEvent) => {
    if (matchSaveWorkflowShortcut(event)) {
      saveCurWorkflow();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", shortcutListener);
    return () => window.removeEventListener("keydown", shortcutListener);
  }, []);

  if (loadingDB || !positionStyle) {
    return null;
  }
  return (
    <WorkspaceContext.Provider
      value={{
        curFlowID: flowID,
        onDuplicateWorkflow: onDuplicateWorkflow,
        loadWorkflowID: loadWorkflowID,
        discardUnsavedChanges: discardUnsavedChanges,
        saveCurWorkflow: saveCurWorkflow,
      }}
    >
      <Box
        style={{
          width: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        draggable={false}
      >
        <Draggable
          onDragEnd={(position: { x: number; y: number }) => {
            updatePanelPosition({ top: position.y, left: position.x }, true);
          }}
        >
          <HStack
            style={{
              padding: 2,
              position: "fixed",
              ...positionStyle,
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
            draggable={false}
            id="workspaceManagerPanel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Button
              size={"sm"}
              aria-label="workspace folder"
              onClick={() => setRoute("recentFlows")}
              px={2}
            >
              <HStack gap={1}>
                <IconFolder size={21} />
                <IconTriangleInvertedFilled size={8} />
              </HStack>
            </Button>
            <Button
              size={"sm"}
              variant={"outline"}
              colorScheme="teal"
              aria-label="workspace folder"
              onClick={() => onClickNewFlow()}
              px={2.5}
            >
              <HStack gap={1}>
                <IconPlus size={16} color={"white"} />
                <Text color={"white"} fontSize={"sm"}>
                  New
                </Text>
              </HStack>
            </Button>
            <EditFlowName
              isDirty={isDirty}
              displayName={curFlowName ?? ""}
              updateFlowName={(newName) => {
                setCurFlowName(newName);
                requestAnimationFrame(() => {
                  updatePanelPosition();
                });
              }}
            />
            {isDirty && (
              <Tooltip label="Save workflow">
                <IconButton
                  onClick={saveCurWorkflow}
                  icon={<IconDeviceFloppy size={20} color="white" />}
                  size={"sm"}
                  aria-label="save workspace"
                  variant={"ghost"}
                />
              </Tooltip>
            )}
            <DropdownTitle />
            {isHovered && (
              <IconGripVertical
                id="dragPanelIcon"
                cursor="move"
                size={15}
                color="#FFF"
              />
            )}
          </HStack>
        </Draggable>
        {route === "recentFlows" && (
          <RecentFilesDrawer
            onclose={() => setRoute("root")}
            onClickNewFlow={() => {
              onClickNewFlow();
              setRoute("root");
            }}
          />
        )}
      </Box>
    </WorkspaceContext.Provider>
  );
}
