import { useCallback, useEffect, useRef, useState } from "react";
// @ts-ignore
import { app } from "/scripts/app.js";
// @ts-ignore
import { api } from "/scripts/api.js";
import { ComfyExtension, ComfyObjectInfo } from "./types/comfy";
import { Box, list } from "@chakra-ui/react";
import RecentFilesDrawer from "./RecentFilesDrawer/RecentFilesDrawer";
import {
  createFlow,
  getWorkflow,
  loadDBs,
  updateFlow,
  workspace,
  userSettingsTable,
  PanelPosition,
  changelogsTable,
  mediaTable,
  listWorkflows,
} from "./WorkspaceDB";
import { defaultGraph } from "./defaultGraph";
import { WorkspaceContext } from "./WorkspaceContext";
import {
  Route,
  getFileUrl,
  matchSaveWorkflowShortcut,
  validateOrSaveAllJsonFileMyWorkflows,
} from "./utils";
import GalleryModal from "./gallery/GalleryModal";
import { Topbar } from "./topbar/Topbar";

export default function App() {
  const nodeDefs = useRef<Record<string, ComfyObjectInfo>>({});
  const [curFlowName, setCurFlowName] = useState<string | null>(null);
  const [route, setRoute] = useState<Route>("root");
  const [loadingDB, setLoadingDB] = useState(true);
  const [flowID, setFlowID] = useState<string | null>(null);
  const curFlowID = useRef<string | null>(null);
  const [positionStyle, setPositionStyle] = useState<PanelPosition>();
  const [isDirty, setIsDirty] = useState(false);

  const saveCurWorkflow = useCallback(() => {
    if (curFlowID.current) {
      const graphJson = JSON.stringify(app.graph.serialize());
      updateFlow(curFlowID.current, {
        lastSavedJson: graphJson,
      });

      changelogsTable?.create({
        workflowID: curFlowID.current,
        json: graphJson,
      });
    }
  }, []);
  const discardUnsavedChanges = () => {
    let userInput = confirm(
      "Are you sure you want to discard unsaved changes? This will revert current workflow to your last saved version. You will lose all changes made since your last save."
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
    localStorage.setItem("comfyspace_curFlowID", id);
    console.log("set cur flow id", id);
  };

  const graphAppSetup = async () => {
    const ext: ComfyExtension = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(app) {
        // clean up legacy localStorage
        localStorage.removeItem("workspace");
        localStorage.removeItem("comfyspace");
        // when drop file create new flow with file name
        const originalHandleFileFunc = app.handleFile.bind(app);
        app.handleFile = async function (file: File) {
          console.log("originalHandleFileFunc file", file);

          const flow = createFlow({
            name: file.name,
            json: JSON.stringify(defaultGraph),
          });
          console.log("originalHandleFileFunc flow", flow);
          setCurFlowID(flow.id);
          setCurFlowName(flow.name ?? "Unknown name");
          await originalHandleFileFunc(file);
        };
      },
      async addCustomNodeDefs(defs) {
        nodeDefs.current = defs;
      },
      // async afterConfigureGraph() {
      //   localStorage.setItem("workflow", JSON.stringify(app.graph.serialize()));
      // },
    };
    app.registerExtension(ext);
    try {
      await loadDBs();
      updatePanelPosition(userSettingsTable?.getSetting("topBarStyle"), false);
    } catch (error) {
      console.error("error loading db", error);
    }
    setLoadingDB(false);
    const latest = localStorage.getItem("comfyspace_curFlowID");
    console.log("latest id", latest);

    const latestWf = latest != null ? getWorkflow(latest) : null;
    console.log("lastWf", latestWf);
    if (latestWf) {
      setCurFlowID(latestWf.id);
      setCurFlowName(latestWf.name);
    } else {
      loadNewWorkflow();
      // const flows = listWorkflows();
      // if (flows.length > 0) {
      //   loadWorkflowID(flows[0].id);
      // } else {
      //   loadNewWorkflow();
      // }
    }
    validateOrSaveAllJsonFileMyWorkflows();
  };
  useEffect(() => {
    graphAppSetup();
    setInterval(() => {
      if (curFlowID.current != null) {
        const graphJson = JSON.stringify(app.graph.serialize());
        console.log("set cur flow id", curFlowID.current);
        localStorage.setItem("comfyspace_curFlowID", curFlowID.current);
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
  const loadNewWorkflow = (input?: { json?: string; name?: string }) => {
    let jsonStr = input?.json ?? JSON.stringify(defaultGraph);
    const flow = createFlow({ json: jsonStr, name: input?.name });
    loadWorkflowID(flow.id);
    setRoute("root");
  };

  const loadFilePath = async (
    relativePath: string,
    overwriteCurrent: boolean = false
  ) => {
    const fileName = relativePath.split("/").pop() ?? relativePath;
    if (!overwriteCurrent) {
      loadNewWorkflow({ name: fileName });
    } else {
      saveCurWorkflow();
    }
    const res = await fetch(getFileUrl(relativePath));
    const blob = await res.blob();
    const fileObj = new File([blob], fileName, {
      type: res.headers.get("Content-Type") || "",
    });
    await app.handleFile(fileObj);
    setRoute("root");
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
  const onExecutedCreateMedia = useCallback((image: any) => {
    if (curFlowID.current == null) return;
    let path = image.filename;
    if (image.subfolder != null && image.subfolder !== "") {
      path = image.subfolder + "/" + path;
    }
    mediaTable?.create({
      workflowID: curFlowID.current,
      localPath: path,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", shortcutListener);
    api.addEventListener("executed", (e: any) => {
      e.detail?.output?.images?.forEach(
        (im: { filename: string; subfolder: string; type: string }) => {
          if (im.type === "output") {
            onExecutedCreateMedia(im);
          }
        }
      );
      e.detail?.output?.gifs?.forEach(
        (im: { filename: string; subfolder: string; type: string }) => {
          if (im.type === "output") {
            onExecutedCreateMedia(im);
          }
        }
      );
    });
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
        isDirty: isDirty,
        loadNewWorkflow: loadNewWorkflow,
        loadFilePath: loadFilePath,
        setRoute: setRoute,
      }}
    >
      <Box
        style={{
          width: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        zIndex={1000}
        draggable={false}
      >
        <Topbar
          curFlowName={curFlowName}
          setCurFlowName={setCurFlowName}
          updatePanelPosition={updatePanelPosition}
          positionStyle={positionStyle}
        />
        {route === "recentFlows" && (
          <RecentFilesDrawer
            onclose={() => setRoute("root")}
            onClickNewFlow={() => {
              loadNewWorkflow();
              setRoute("root");
            }}
          />
        )}
        {route === "gallery" && (
          <GalleryModal onclose={() => setRoute("root")} />
        )}
      </Box>
    </WorkspaceContext.Provider>
  );
}
