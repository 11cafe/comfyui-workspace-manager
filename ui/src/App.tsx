import { Suspense, useCallback, useEffect, useRef, useState } from "react";
// @ts-ignore
import { app } from "/scripts/app.js";
// @ts-ignore
import { api } from "/scripts/api.js";
import { Box, Portal } from "@chakra-ui/react";
import {
  createFlow,
  getWorkflow,
  loadDBs,
  updateFlow,
  workspace,
  userSettingsTable,
  changelogsTable,
  mediaTable,
  listWorkflows,
  backfillIndexdb,
} from "./db-tables/WorkspaceDB";
import { defaultGraph } from "./defaultGraph";
import { WorkspaceContext } from "./WorkspaceContext";
import {
  Route,
  syncNewFlowOfLocalDisk,
  getFileUrl,
  matchSaveWorkflowShortcut,
  validateOrSaveAllJsonFileMyWorkflows,
  getWorkflowIdInUrlHash,
  generateUrlHashWithFlowId,
  rewriteAllLocalFiles,
} from "./utils";
import { Topbar } from "./topbar/Topbar";
// import { authTokenListener, pullAuthTokenCloseIfExist } from "./auth/authUtils";
import { PanelPosition } from "./types/dbTypes";
import { useDialog } from "./components/AlertDialogProvider";
import React from "react";
const RecentFilesDrawer = React.lazy(
  () => import("./RecentFilesDrawer/RecentFilesDrawer"),
);
const GalleryModal = React.lazy(() => import("./gallery/GalleryModal"));
import { scanLocalNewFiles } from "./Api";

export default function App() {
  const [curFlowName, setCurFlowName] = useState<string | null>(null);
  const [route, setRoute] = useState<Route>("root");
  const [loadingDB, setLoadingDB] = useState(true);
  const [flowID, setFlowID] = useState<string | null>(null);
  const curFlowID = useRef<string | null>(null);
  const [positionStyle, setPositionStyle] = useState<PanelPosition>();
  const [isDirty, setIsDirty] = useState(false);
  const workspaceContainerRef = useRef(null);
  const { showDialog } = useDialog();
  const [loadChild, setLoadChild] = useState(false);
  const developmentEnvLoadFirst = useRef(true);
  const saveCurWorkflow = useCallback(() => {
    if (curFlowID.current) {
      const graphJson = JSON.stringify(app.graph.serialize());
      updateFlow(curFlowID.current, {
        lastSavedJson: graphJson,
        json: graphJson,
      });

      changelogsTable?.create({
        workflowID: curFlowID.current,
        json: graphJson,
      });
    }
  }, []);
  const discardUnsavedChanges = () => {
    const userInput = confirm(
      "Are you sure you want to discard unsaved changes? This will revert current workflow to your last saved version. You will lose all changes made since your last save.",
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

  const setCurFlowIDAndName = (id: string, name: string) => {
    curFlowID.current = id;
    setFlowID(id);
    setCurFlowName(name);
    if (getWorkflowIdInUrlHash()) {
      const newUrlHash = generateUrlHashWithFlowId(id);
      window.location.hash = newUrlHash;
      document.title = name + " - ComfyUI";
    } else {
      localStorage.setItem("curFlowID", id);
      document.title = "ComfyUI - " + name;
    }
  };

  const graphAppSetup = async () => {
    // const ext: ComfyExtension = {
    //   // Unique name for the extension
    //   name: "WorkspaceManager",
    //   async setup(app) {
    //     // clean up legacy localStorage
    //   },
    //   // @ts-ignore
    //   async afterConfigureGraph() {
    //     // to avoid the bug after switching workflow using comfyspace,
    //     // immediately refresh browser, resulting in latest workflow not updated
    //     localStorage.setItem("workflow", JSON.stringify(app.graph.serialize()));
    //   },
    // };
    // app.registerExtension(ext);
    localStorage.removeItem("workspace");
    localStorage.removeItem("comfyspace");
    try {
      await loadDBs();
      updatePanelPosition(userSettingsTable?.getSetting("topBarStyle"), false);
    } catch (error) {
      console.error("error loading db", error);
    }
    setLoadingDB(false);

    let latestWfID = null;
    latestWfID = getWorkflowIdInUrlHash();
    if (latestWfID == null) {
      latestWfID = localStorage.getItem("curFlowID");
    }
    if (latestWfID) {
      // since we changed to lazy load our component, app.configureGraph will come before our app loading,
      // localStorage.setItem("workflow") will not take effect anymore and will result different workflow appearing bug when refreshing
      loadWorkflowIDImpl(latestWfID);
    }

    if (localStorage.getItem("WORKSPACE_INDEXDB_BACKFILL") !== "true") {
      await backfillIndexdb();
      localStorage.setItem("WORKSPACE_INDEXDB_BACKFILL", "true");
    }
    /**
     * For two-way sync, one-time rewrite all /my_workflows files to the database
     */
    if (localStorage.getItem("REWRITTEN_ALL_LOCAL_DISK_FILE") === "true") {
      await validateOrSaveAllJsonFileMyWorkflows();
    } else {
      await rewriteAllLocalFiles();
      localStorage.setItem("REWRITTEN_ALL_LOCAL_DISK_FILE", "true");
    }

    if (userSettingsTable?.getSetting("twoWaySync") === true) {
      // Scan all files and subfolders in the local storage directory, compare and find the data that needs to be added in the DB, and perform the new operation
      const myWorkflowsDir = userSettingsTable?.getSetting("myWorkflowsDir");
      const existFlowIds = listWorkflows().map((flow) => flow.id);
      const { fileList, folderList } = await scanLocalNewFiles(
        myWorkflowsDir!,
        existFlowIds,
      );
      await syncNewFlowOfLocalDisk(fileList, folderList);
    }
  };

  useEffect(() => {
    /**
     * because we have turned on strict mode, useEffect will be executed twice in strict mode in the development environment.
     * and graphAppSetup contains DB related operations, repeated execution will bring some bad results.
     * so in development environment mode, the first execution is skipped.
     */
    if (
      process.env.NODE_ENV === "development" &&
      developmentEnvLoadFirst.current
    ) {
      developmentEnvLoadFirst.current = false;
      return;
    }
    graphAppSetup();
    setLoadChild(true);
    setInterval(() => {
      const autoSaveEnabled = userSettingsTable?.getSetting("autoSave") ?? true;

      if (curFlowID.current != null && autoSaveEnabled) {
        // autosave workflow if enabled
        const graphJson = JSON.stringify(app.graph.serialize());
        graphJson != null &&
          updateFlow(curFlowID.current, {
            json: graphJson,
          });
      }
      setIsDirty(checkIsDirty());
    }, 1000);
    // pullAuthTokenCloseIfExist();
  }, []);

  const checkIsDirty = () => {
    if (curFlowID.current != null) {
      const graphJson = app.graph.serialize() ?? {};
      const curWorkflow = curFlowID.current
        ? getWorkflow(curFlowID.current)
        : null;
      let lastSaved = {};
      try {
        lastSaved = curWorkflow?.lastSavedJson
          ? JSON.parse(curWorkflow?.lastSavedJson)
          : {};
      } catch (e) {
        console.error("error parsing json", e);
      }
      const equal = JSON.stringify(graphJson) === JSON.stringify(lastSaved);
      return !equal;
    }
    return false;
  };
  const loadWorkflowIDImpl = (id: string) => {
    if (app.graph == null) {
      console.error("app.graph is null cannot load workflow");
      return;
    }

    const flow = getWorkflow(id);

    if (flow == null) {
      alert("Error: Workflow not found! id: " + id);
      return;
    }
    setCurFlowIDAndName(id, flow.name);
    app.ui.dialog.close();
    app.loadGraphData(JSON.parse(flow.json));
    setRoute("root");
  };
  const loadWorkflowID = (id: string) => {
    const autoSaveEnabled = userSettingsTable?.getSetting("autoSave") ?? true;
    if (autoSaveEnabled || !isDirty) {
      loadWorkflowIDImpl(id);
      return;
    }
    showDialog(`Do you want to save the current workflow, ${curFlowName}?`, [
      {
        label: "Save",
        colorScheme: "teal",
        onClick: () => {
          saveCurWorkflow();
          loadWorkflowIDImpl(id);
        },
      },
      {
        label: "Discard",
        colorScheme: "red",
        onClick: () => {
          loadWorkflowIDImpl(id);
        },
      },
    ]);
  };
  const loadNewWorkflow = async (input?: { json?: string; name?: string }) => {
    const jsonStr = input?.json ?? JSON.stringify(defaultGraph);
    const flow = await createFlow({ json: jsonStr, name: input?.name });
    loadWorkflowID(flow.id);
    setRoute("root");
  };

  const loadFilePath = async (
    relativePath: string,
    overwriteCurrent: boolean = false,
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

  const onDuplicateWorkflow = async (
    workflowID: string,
    newFlowName?: string,
  ) => {
    if (workspace == null) {
      return;
    }
    const workflow = getWorkflow(workflowID);
    if (workflow == null) {
      return;
    }
    const flow = await createFlow({
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
    [positionStyle],
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

  const onCloseDrawer = useCallback(() => {
    setRoute("root");
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", shortcutListener);
    // window.addEventListener("message", authTokenListener);

    const fileInput = document.getElementById(
      "comfy-file-input",
    ) as HTMLInputElement;
    const fileInputListener = async () => {
      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        const flow = await createFlow({
          // @ts-ignore
          name: fileInput.files[0].name,
          json: JSON.stringify(defaultGraph),
        });

        setCurFlowIDAndName(flow.id, flow.name ?? "Unknown name");
      }
    };
    fileInput?.addEventListener("change", fileInputListener);

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      const autoSaveEnabled = userSettingsTable?.getSetting("autoSave") ?? true;

      if (!autoSaveEnabled && checkIsDirty()) {
        e.preventDefault(); // For modern browsers
        e.returnValue = "You have unsaved changes"; // For older browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    api.addEventListener("executed", (e: any) => {
      e.detail?.output?.images?.forEach(
        (im: { filename: string; subfolder: string; type: string }) => {
          if (im.type === "output") {
            onExecutedCreateMedia(im);
          }
        },
      );
      e.detail?.output?.gifs?.forEach(
        (im: { filename: string; subfolder: string; type: string }) => {
          if (im.type === "output") {
            onExecutedCreateMedia(im);
          }
        },
      );
    });
    return () => {
      // window.removeEventListener("message", authTokenListener);
      window.removeEventListener("keydown", shortcutListener);
      window.removeEventListener("change", fileInputListener);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
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
      <div ref={workspaceContainerRef} className="workspace_manager">
        <Portal containerRef={workspaceContainerRef}>
          <Box
            style={{
              width: "100vh",
              position: "absolute",
              top: 0,
              left: 0,
              lineHeight: "24px",
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
            {loadChild && route === "recentFlows" && (
              <Suspense>
                <RecentFilesDrawer
                  onClose={onCloseDrawer}
                  onClickNewFlow={() => {
                    loadNewWorkflow();
                    setRoute("root");
                  }}
                />
              </Suspense>
            )}
            {route === "gallery" && (
              <GalleryModal onclose={() => setRoute("root")} />
            )}
          </Box>
        </Portal>
      </div>
    </WorkspaceContext.Provider>
  );
}
