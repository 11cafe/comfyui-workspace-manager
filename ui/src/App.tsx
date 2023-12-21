import { useCallback, useEffect, useRef, useState } from "react";
// @ts-ignore
import { app } from "/scripts/app.js";
import { ComfyExtension, ComfyObjectInfo } from "./types/comfy";
import { HStack, Box, Button, Text } from "@chakra-ui/react";
import {
  IconFolder,
  IconPlus,
  IconTriangleInvertedFilled,
  IconGripVertical,
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
type Route = "root" | "customNodes" | "recentFlows";

export default function App() {
  const nodeDefs = useRef<Record<string, ComfyObjectInfo>>({});
  const [curFlowName, setCurFlowName] = useState<string | null>(null);
  const [route, setRoute] = useState<Route>("root");
  const [loadingDB, setLoadingDB] = useState(true);
  const [flowID, setFlowID] = useState<string | null>(null);
  const curFlowID = useRef<string | null>(null);
  const [positionStyle, setPositionStyle] = useState<PanelPosition>();

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
      updatePanelPosition(userSettingsTable.getSetting("topBarStyle"), false);
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
    setCurFlowID(flow.id);
    setCurFlowName(flow.name);
    app.loadGraphData(defaultObj);
  };

  const onDuplicateWorkflow = (workflowID: string) => {
    if (workspace == null) {
      return;
    }
    const workflow = workspace[workflowID];
    if (workflow == null) {
      return;
    }
    const flow = createFlow({
      json: workflow.json,
      name: workflow.name,
      parentFolderID: workflow.parentFolderID,
      tags: workflow.tags,
    });
    setCurFlowID(flow.id);
    setCurFlowName(flow.name);
    app.loadGraphData(JSON.parse(flow.json));
  };

  const updatePanelPosition = useCallback(
    (position: PanelPosition, needUpdateDB: boolean = false) => {
      const { top: curTop = 0, left: curLeft = 0 } = positionStyle || {};
      let { top = 0, left = 0 } = position ?? {};
      top += curTop;
      left += curLeft;
      const clientWidth = document.documentElement.clientWidth;
      const clientHeight = document.documentElement.clientHeight;
      if (top + 48 > clientHeight) top = clientHeight - 48;
      if (left + 312 >= clientWidth) left = clientWidth - 312;

      setPositionStyle({ top: Math.max(0, top), left: Math.max(0, left) });

      needUpdateDB &&
        userSettingsTable?.upsert({
          topBarStyle: { top, left },
        });
    },
    [positionStyle]
  );

  if (loadingDB || !positionStyle) {
    return null;
  }
  return (
    <WorkspaceContext.Provider
      value={{
        curFlowID: flowID,
        onDuplicateWorkflow: onDuplicateWorkflow,
        loadWorkflowID: loadWorkflowID,
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
          onDragEnd={(position) => {
            updatePanelPosition({ top: position.y, left: position.x }, true);
          }}
        >
          <HStack
            style={{
              padding: 8,
              position: "fixed",
              ...positionStyle,
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={4}
            draggable={false}
          >
            <HStack draggable={false}>
              <Button
                size={"sm"}
                aria-label="workspace folder"
                onClick={() => setRoute("recentFlows")}
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
                displayName={curFlowName ?? ""}
                updateFlowName={setCurFlowName}
              />
              <IconGripVertical id="dragPanelIcon" cursor="move" />
            </HStack>
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
