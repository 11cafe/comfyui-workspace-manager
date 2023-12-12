import { useCallback, useEffect, useRef, useState } from "react";
// @ts-ignore
import { app } from "/scripts/app.js";
import { ComfyExtension, ComfyObjectInfo } from "./types/comfy";
// @ts-ignore
import throttle from "lodash.throttle";
import {
  HStack,
  Input,
  Box,
  Button,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  IconFolder,
  IconMoon,
  IconPlus,
  IconSun,
  IconTriangleInvertedFilled,
} from "@tabler/icons-react";
import RecentFilesDrawer from "./RecentFilesDrawer/RecentFilesDrawer";
import { createFlow, loadDBs, updateFlow, workspace } from "./WorkspaceDB";
import { defaultGraph } from "./defaultGraph";
import { WorkspaceContext } from "./WorkspaceContext";
type Route = "root" | "customNodes" | "recentFlows";

export default function App() {
  const [missingNodeTypes, setMissingNodeTypes] = useState<string[]>([]);
  const nodeDefs = useRef<Record<string, ComfyObjectInfo>>({});
  const [curFlowName, setCurFlowName] = useState<string | null>(null);
  const [route, setRoute] = useState<Route>("root");
  const [loadingDB, setLoadingDB] = useState(true);
  const [flowID, setFlowID] = useState<string | null>(null);
  const curFlowID = useRef<string | null>(null);
  const { colorMode, toggleColorMode } = useColorMode();

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
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    app.registerExtension(ext);
    // app.canvasEl.addEventListener("click", function () {
    //   console.log("canvasEl click");
    // });

    try {
      await loadDBs();
    } catch (error) {
      console.error("error loading db", error);
    }
    setLoadingDB(false);
    const latest = localStorage.getItem("curFlowID");
    if (latest) {
      setCurFlowID(latest);
      workspace && setCurFlowName(workspace[latest]?.name ?? "");
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
  const onRenameCurFlow = (newName: string) => {
    if (curFlowID.current != null) {
      updateFlow(curFlowID.current, {
        name: newName,
      });
    }
  };
  const throttledOnRenameCurFlow: (name: string) => void = useCallback(
    throttle(onRenameCurFlow, 700),
    []
  );
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

  if (loadingDB) {
    return null;
  }
  return (
    <WorkspaceContext.Provider value={{ curFlowID: flowID }}>
      <Box
        style={{
          width: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <HStack
          style={{
            padding: 8,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={4}
        >
          <HStack>
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
            >
              <HStack gap={1}>
                <IconPlus size={16} color={"white"} />
                <Text color={"white"} fontSize={"sm"}>
                  New
                </Text>
              </HStack>
            </Button>
            <Input
              variant="unstyled"
              placeholder="Workflow name"
              color={"white"}
              value={curFlowName ?? ""}
              maxWidth={470}
              onChange={(e) => {
                setCurFlowName(e.target.value);
                throttledOnRenameCurFlow(e.target.value);
              }}
              style={{ width: `${curFlowName?.length ?? 20}ch` }}
            />
          </HStack>
          <HStack>
            <Button onClick={toggleColorMode} variant="link">
              {colorMode === "light" ? (
                <IconMoon size={20} />
              ) : (
                <IconSun size={20} />
              )}
            </Button>
          </HStack>
        </HStack>

        {route === "recentFlows" && (
          <RecentFilesDrawer
            onclose={() => setRoute("root")}
            loadWorkflowID={loadWorkflowID}
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
