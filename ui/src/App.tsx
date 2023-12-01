import { Tabs, TabList, HStack, Tab, Input, Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import { app } from "/scripts/app.js";
import { LGraphNode } from "./types/litegraph";
import { ComfyExtension, ComfyObjectInfo } from "./types/comfy";
import {
  Drawer,
  DrawerBody,
  Button,
  DrawerHeader,
  DrawerOverlay,
  Checkbox,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

type Route = "root" | "customNodes" | "recentFlows";
// import app from "app";
// type Workflow = {
//   json: string;
//   name: string;
//   img: string;
// };
// type RecentFlows = {
//   [key: string]: Workflow;
// };
// copied from scripts/app.js
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

function App() {
  const selectStyle = {
    color: "white",
    bg: "#333",
  };
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
    console.log("missing", missing);
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
    setInterval(() => {
      const graphJson = localStorage.getItem("workflow");
      localStorage.setItem("wf-" + flowName, graphJson ?? "");
      localStorage.setItem("latestWorkflow", flowName);
      // console.log("cur app", app);
    }, 3000);
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
        style={{
          backgroundColor: "white",
        }}
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
              value={flowName}
              onChange={(e) => {
                setFlowName(e.target.value);
              }}
            />
          </HStack>
          <HStack>
            {/* <Tab _selected={selectStyle}>Template</Tab>
            <Tab _selected={selectStyle}>Outline</Tab> */}
            <Tab _selected={selectStyle}>111</Tab>
            <Button
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

export default App;
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
  useEffect(() => {
    setToInstall(missingNodes);
  }, [missingNodes]);
  const handleInstall = (toInstall: string[]) => {
    fetch("/workspace/install_nodes", {
      // method: "POST",
      body: JSON.stringify({ nodes: toInstall }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("install res", res);
      });
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
            <HStack mb={6}>
              <Button
                onClick={() => {
                  handleInstall(toInstall);
                }}
              >
                Install Missing Nodes {toInstall.length}
              </Button>
            </HStack>
            {missingNodes.map((n) => {
              return (
                <HStack>
                  <Checkbox
                    isChecked={toInstall.includes(n)}
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
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
