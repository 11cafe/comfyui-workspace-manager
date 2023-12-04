import { useCallback, useEffect, useRef, useState } from "react";
// @ts-ignore
import { app } from "/scripts/app.js";
import { ComfyExtension, ComfyObjectInfo } from "./types/comfy";
// @ts-ignore
import throttle from "lodash.throttle";
import {
  Tabs,
  TabList,
  HStack,
  Input,
  Box,
  Drawer,
  DrawerBody,
  Button,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Text,
  Checkbox,
  Stack,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  IconFolder,
  IconPlus,
  IconTriangleInvertedFilled,
} from "@tabler/icons-react";
import RecentFilesDrawer from "./RecentFilesDrawer";
import { Workflow, createFlow, updateFlow, workspace } from "./WorkspaceDB";
import { findMissingNodes } from "./utils";
import { defaultGraph } from "./defaultGraph";
type Route = "root" | "customNodes" | "recentFlows";

type CustomNode = {
  id: string;
  nodeClassName: string;
  gitHtmlUrl: string;
  fileHtmlUrl: string;
  authorName: string;
  authorAvatarUrl: string;
  description: string;
  totalInstalls: string;
};

export default function App() {
  const [missingNodeTypes, setMissingNodeTypes] = useState<string[]>([]);
  const nodeDefs = useRef<Record<string, ComfyObjectInfo>>({});
  const curFlowID = useRef<string | null>(null);
  const [curFlowName, setCurFlowName] = useState<string | null>(null);
  // const curFlow = curFlowID != null ? workspace[curFlowID] : null;
  const [route, setRoute] = useState<Route>("root");

  const graphAppSetup = () => {
    const ext: ComfyExtension = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(app) {
        // Any setup to run after the app is createdjj
      },
      async addCustomNodeDefs(defs) {
        nodeDefs.current = defs;
      },
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    app.registerExtension(ext);

    const latest = localStorage.getItem("curFlowID");
    if (latest) {
      curFlowID.current = latest;
    } else {
      const graphJson = localStorage.getItem("workflow");
      const flow = createFlow(graphJson ?? "");
      curFlowID.current = flow.id;
    }
    setCurFlowName(workspace[curFlowID.current]?.name ?? "");
    // hacky fetch missing nodes defer until i find a way to get callback when graph fully loaded
    setTimeout(() => {
      const missing = findMissingNodes();
      setMissingNodeTypes(missing);
    }, 1000);
  };
  useEffect(() => {
    graphAppSetup();
    setInterval(() => {
      if (curFlowID.current != null) {
        const graphJson = localStorage.getItem("workflow");
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
    curFlowID.current = id;
    const flow = workspace[id];
    setCurFlowName(flow.name);
    app.loadGraphData(JSON.parse(flow.json));
    setRoute("root");
  };
  const onClickNewFlow = () => {
    const defaultObj = defaultGraph;
    const flow = createFlow(JSON.stringify(defaultObj));
    curFlowID.current = flow.id;
    setCurFlowName(flow.name);
    app.loadGraphData(defaultObj);
  };
  return (
    <Box
      style={{
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Tabs variant="unstyled">
        <TabList
          defaultValue={"ComfyUI"}
          style={{ padding: 8, marginLeft: 16 }}
          justifyContent={"space-between"}
          gap={4}
        >
          <HStack>
            <Button
              size={"sm"}
              aria-label="workspace folder"
              onClick={() => setRoute("recentFlows")}
            >
              <HStack gap={1}>
                <IconFolder size={20} />
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
              <HStack gap={1} px={3}>
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
              onChange={(e) => {
                setCurFlowName(e.target.value);
                throttledOnRenameCurFlow(e.target.value);
              }}
            />
          </HStack>
          <HStack>
            {/* <Tab _selected={selectStyle}>111</Tab> */}
            <Button
              colorScheme="gray"
              onClick={() => {
                setRoute("customNodes");
              }}
            >
              {missingNodeTypes.length === 0
                ? "Custom Nodes"
                : "Install Missing Nodes " + missingNodeTypes.length}
            </Button>
          </HStack>
        </TabList>
      </Tabs>
      {route === "recentFlows" && (
        <RecentFilesDrawer
          onclose={() => setRoute("root")}
          loadWorkflowID={loadWorkflowID}
          onClickNewFlow={onClickNewFlow}
        />
      )}

      <CustomNodesDrawer
        missingNodes={missingNodeTypes}
        isOpen={route === "customNodes"}
        onclose={() => {
          setRoute("root");
        }}
      />
    </Box>
  );
}

type CustomNodesDrawerProps = {
  missingNodes: string[];
  onclose: () => void;
  isOpen: boolean;
};
function CustomNodesDrawer({
  missingNodes,
  isOpen,
  onclose,
}: CustomNodesDrawerProps) {
  const [toInstall, setToInstall] = useState<string[]>(missingNodes);
  const [searchResults, setSearchResults] = useState<CustomNode[]>([]);
  const [installStatus, setInstallStatus] = useState("");
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    setToInstall(missingNodes);
    const nodeIDs = missingNodes.map((n) => n.replace(" ", "_"));
    fetch("/workspace/find_nodes", {
      method: "POST",
      body: JSON.stringify({
        nodes: nodeIDs,
      }),
    })
      .then((res) => res.json())
      .then((res: (CustomNode | null)[]) => {
        setSearchResults(res.filter((r) => r != null) as CustomNode[]);
        setToInstall(res.filter((r) => r != null).map((r) => r!.id));
      });
  }, [missingNodes]);
  const installCustomNodes = async (nodes: CustomNode[]) => {
    setIsInstalling(true);
    setInstallStatus("Starting installation...\n");

    try {
      const response = await fetch("/workspace/install_nodes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes: nodes,
        }),
      });

      const reader = response?.body?.getReader();
      if (reader == null) {
        return;
      }
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        // setInstallStatus((prev) => prev + decoder.decode(value));
      }
    } catch (error) {
      console.error("Failed to install custom nodes", error);
      setInstallStatus((prev) => prev + "\nInstallation failed.");
    } finally {
      setIsInstalling(false);
    }
  };
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => onclose()}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Custom Nodes</DrawerHeader>
          <DrawerBody>
            <HStack mb={3}>
              <Checkbox
                mr={6}
                isChecked={toInstall.length === searchResults.length}
                onChange={(e) => {
                  if (e.target.checked) {
                    setToInstall([...searchResults.map((r) => r!.id)]);
                  } else {
                    setToInstall([]);
                  }
                }}
              >
                Select All
              </Checkbox>
              <Button
                onClick={() => {
                  installCustomNodes(
                    searchResults.filter((r) => toInstall.includes(r.id))
                  );
                }}
              >
                Install Missing Nodes {toInstall.length}
              </Button>
            </HStack>
            <Text mb={3} color={"GrayText"} fontSize={"small"}>
              Unselectable nodes are not found in Github, they may be private
              repos
            </Text>
            {missingNodes.map((n) => {
              const node = searchResults.find((r) => r?.id === n);
              return (
                <Stack gap={0} mb={2}>
                  <HStack>
                    <Checkbox
                      isChecked={toInstall.includes(n)}
                      disabled={node == null}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setToInstall([...toInstall, n]);
                        } else {
                          setToInstall(toInstall.filter((i) => i !== n));
                        }
                      }}
                    ></Checkbox>
                    <span>{n}</span>
                  </HStack>
                  {node != null ? (
                    <Link
                      color="teal.500"
                      href={node.gitHtmlUrl}
                      noOfLines={1}
                      ml={6}
                    >
                      {node.gitHtmlUrl}
                    </Link>
                  ) : (
                    <Text></Text>
                  )}
                </Stack>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
