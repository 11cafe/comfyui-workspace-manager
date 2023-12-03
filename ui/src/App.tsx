import { useEffect, useRef, useState } from "react";
// @ts-ignore
import { app } from "/scripts/app.js";
import { ComfyExtension, ComfyObjectInfo } from "./types/comfy";
import {
  Tabs,
  TabList,
  HStack,
  Tab,
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
type Route = "root" | "customNodes" | "recentFlows";
// type Workflow = {
//   json: string;
//   name: string;
//   img: string;
// };
// type RecentFlows = {
//   [key: string]: Workflow;
// };
// copied from scripts/app.js
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
function sanitizeNodeName(string: string): string {
  let entityMap: Record<string, string> = {
    "&": "",
    "<": "",
    ">": "",
    '"': "",
    "'": "",
    "`": "",
    "=": "",
  };
  return String(string).replace(/[&<>"'`=]/g, function fromEntityMap(s) {
    return entityMap[s];
  });
}

export default function App() {
  // const [activeFlows, setActiveFlows] = useState<Workflow[]>([]);
  // const [allFlows, setAllFlows] = useState<Set<string>>();
  const [missingNodeTypes, setMissingNodeTypes] = useState<string[]>([]);
  const nodeDefs = useRef<Record<string, ComfyObjectInfo>>({});
  const [flowName, setFlowName] = useState<string>(
    "workflow-" + new Date().getTime()
  );
  const [route, setRoute] = useState<Route>("root");
  const findMissingNodes = () => {
    const missing = new Set<string>();
    for (let n of app.graph._nodes) {
      // Patch T2IAdapterLoader to ControlNetLoader since they are the same node now
      if (n.type == "T2IAdapterLoader") n.type = "ControlNetLoader";
      if (n.type == "ConditioningAverage ") n.type = "ConditioningAverage"; //typo fix
      if (n.type == "SDV_img2vid_Conditioning")
        n.type = "SVD_img2vid_Conditioning"; //typo fix
      // Find missing node types
      if (!(n.type in nodeDefs.current)) {
        n.type = sanitizeNodeName(n.type);
        missing.add(n.type);
      }
    }
    setMissingNodeTypes(Array.from(missing));
  };
  const graphAppSetup = () => {
    const ext: ComfyExtension = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(app) {
        // Any setup to run after the app is createdjj
        console.log("ext.setup", app);
      },
      async addCustomNodeDefs(defs) {
        console.log("addCustomNodeDefs in workspace manager", defs);
        nodeDefs.current = defs;
      },
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    app.registerExtension(ext);

    // const flow = localStorage.getItem("allFlows") ?? "[]";
    // setAllFlows(new Set(JSON.parse(flow)));
    // hacky fetch missing nodes defer until i find a way to get callback when graph fully loaded
    setTimeout(() => {
      findMissingNodes();
    }, 500);
  };
  useEffect(() => {
    graphAppSetup();
    // setInterval(() => {
    // const graphJson = localStorage.getItem("workflow");
    // localStorage.setItem("wf-" + flowName, graphJson ?? "");
    // localStorage.setItem("latestWorkflow", flowName);
    // console.log("cur app", app);
    // }, 3000);
  }, []);
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
      <Tabs
        variant="unstyled"
        style={
          {
            // backgroundColor: "white",
          }
        }
      >
        <TabList
          defaultValue={"ComfyUI"}
          style={{ padding: 8, marginLeft: 16 }}
          justifyContent={"space-between"}
          gap={4}
        >
          <HStack>
            <Input
              variant="unstyled"
              placeholder="Workflow name"
              color={"white"}
              value={flowName}
              onChange={(e) => {
                setFlowName(e.target.value);
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

      <CustomNodesDrawer
        missingNodes={missingNodeTypes}
        isOpen={route === "customNodes"}
        onclose={() => {
          setRoute("root");
          console.log("close");
        }}
      />

      {/* <CustomNodesDrawer missingNodes={missingNodeTypes} /> */}
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
    console.log("nodeIDs", nodeIDs);
    fetch("/workspace/find_nodes", {
      method: "POST",
      body: JSON.stringify({
        nodes: nodeIDs,
      }),
    })
      .then((res) => res.json())
      .then((res: (CustomNode | null)[]) => {
        console.log("search_nodes res", res);
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
        console.log("reader is null", reader);
        return;
      }
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        console.log("value", decoder.decode(value));
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
                  console.log("onclick install missing nodes", toInstall);
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
