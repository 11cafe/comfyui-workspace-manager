import {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  DragEvent,
} from "react";
// @ts-ignore
import { app } from "/scripts/app.js";
// @ts-ignore
import { api } from "/scripts/api.js";
import { Box, Portal } from "@chakra-ui/react";
import {
  loadDBs,
  workflowsTable,
  userSettingsTable,
  changelogsTable,
  mediaTable,
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
  openWorkflowInNewTab,
} from "./utils";
import { Topbar } from "./topbar/Topbar";
// import { authTokenListener, pullAuthTokenCloseIfExist } from "./auth/authUtils";
import { PanelPosition, Workflow } from "./types/dbTypes";
import { useDialog } from "./components/AlertDialogProvider";
import React from "react";
const RecentFilesDrawer = React.lazy(
  () => import("./RecentFilesDrawer/RecentFilesDrawer"),
);
const GalleryModal = React.lazy(() => import("./gallery/GalleryModal"));
import { scanLocalNewFiles } from "./Api";
import { IconExternalLink } from "@tabler/icons-react";
import { DRAWER_Z_INDEX } from "./const";

const ModelManagerTopbar = React.lazy(
  () => import("./model-manager/topbar/ModelManagerTopbar"),
);
const usedWsEvents = [
  // InstallProgress.tsx
  "download_progress",
  "download_error",
  // useUpdateModels.ts
  "model_list",
];

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
  const developmentEnvLoadFirst = useRef(false);
  const autoSaveTimer = useRef(0);
  const workflowOverwriteNoticeStateRef = useRef("hide"); // disabled/hide/show;

  const saveCurWorkflow = useCallback(async () => {
    if (curFlowID.current) {
      const graphJson = JSON.stringify(app.graph.serialize());
      await Promise.all([
        workflowsTable?.updateFlow(curFlowID.current, {
          lastSavedJson: graphJson,
          json: graphJson,
        }),
        changelogsTable?.create({
          workflowID: curFlowID.current,
          json: graphJson,
        }),
      ]);
    }
  }, []);
  const deleteCurWorkflow = async () => {
    if (curFlowID.current) {
      const userInput = confirm(
        "Are you sure you want to delete this workflow?",
      );
      if (userInput) {
        // User clicked OK
        await workflowsTable?.delete(curFlowID.current);
        setCurFlowIDAndName(null, "");
      }
    }
  };

  const discardUnsavedChanges = async () => {
    const userInput = confirm(
      "Are you sure you want to discard unsaved changes? This will revert current workflow to your last saved version. You will lose all changes made since your last save.",
    );

    if (userInput) {
      // User clicked OK
      if (curFlowID.current) {
        const flow = await workflowsTable?.get(curFlowID.current);
        if (flow) {
          if (flow.lastSavedJson) {
            await app.loadGraphData(JSON.parse(flow.lastSavedJson));
          }
        }
      }
    }
  };

  const setCurFlowIDAndName = (id: string | null, name: string) => {
    // curID null is when you deleted current workflow
    curFlowID.current = id;
    setFlowID(id);
    setCurFlowName(name);
    workflowsTable?.updateCurWorkflowID(id);
    if (id == null) {
      document.title = "ComfyUI";
      window.location.hash = "";
      localStorage.removeItem("curFlowID");
      return;
    }
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
    subsribeToWsToStopWarning();
    localStorage.removeItem("workspace");
    localStorage.removeItem("comfyspace");
    try {
      await loadDBs();
      await userSettingsTable?.getSetting("topBarStyle").then((res) => {
        updatePanelPosition(res, false);
      });
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

    /**
     * For two-way sync, one-time rewrite all /my_workflows files to the database
     */
    if (localStorage.getItem("REWRITTEN_ALL_LOCAL_DISK_FILE") === "true") {
      await validateOrSaveAllJsonFileMyWorkflows();
    } else {
      await rewriteAllLocalFiles();
      localStorage.setItem("REWRITTEN_ALL_LOCAL_DISK_FILE", "true");
    }

    const towWaySyncSwitch = await userSettingsTable?.getSetting("twoWaySync");
    if (towWaySyncSwitch) {
      // Scan all files and subfolders in the local storage directory, compare and find the data that needs to be added in the DB, and perform the new operation
      const myWorkflowsDir =
        await userSettingsTable?.getSetting("myWorkflowsDir");
      const allFlows = await workflowsTable?.listAll();
      const existFlowIds = (allFlows && allFlows.map((flow) => flow.id)) || [];
      const fileList = await scanLocalNewFiles(myWorkflowsDir!, existFlowIds);
      if (!fileList || fileList.length === 0) return;
      await syncNewFlowOfLocalDisk(fileList);
    }
  };

  const subsribeToWsToStopWarning = () => {
    usedWsEvents.forEach((event) => {
      api.addEventListener(event, () => null);
    });
  };

  const checkIsDirty = async () => {
    if (curFlowID.current != null) {
      const curWorkflow = await workflowsTable?.get(curFlowID.current);
      return !!curWorkflow && checkIsDirtyImpl(curWorkflow);
    }
    return false;
  };
  const checkIsDirtyImpl = (curflow: Workflow) => {
    if (curflow.lastSavedJson == null) return true;
    const graphJson = app.graph.serialize() ?? {};
    let lastSaved = {};
    try {
      lastSaved = curflow?.lastSavedJson
        ? JSON.parse(curflow?.lastSavedJson)
        : {};
    } catch (e) {
      console.error("error parsing json", e);
    }
    const equal = JSON.stringify(graphJson) === JSON.stringify(lastSaved);
    return !equal;
  };

  const loadWorkflowIDImpl = async (id: string) => {
    if (app.graph == null) {
      console.error("app.graph is null cannot load workflow");
      return;
    }

    const flow = await workflowsTable?.get(id);

    // If the currently loaded flow does not exist, you need to clear the URL hash and localStorage to avoid popping up another prompt that the flow does not exist when refreshing the page.
    if (flow == null) {
      alert("Error: Workflow not found! id: " + id);
      setCurFlowIDAndName(null, "");
      return;
    }
    setCurFlowIDAndName(id, flow.name);
    app.ui.dialog.close();
    app.loadGraphData(JSON.parse(flow.json));
    setRoute("root");
  };

  const loadWorkflowID = async (id: string | null) => {
    // No current workflow, id is null when you deleted current workflow
    if (id === null) {
      setCurFlowIDAndName(null, "");
      app.graph.clear();
      return;
    }
    // auto save enabled
    const autoSaveEnabled =
      (await userSettingsTable?.getSetting("autoSave")) ?? true;
    if (autoSaveEnabled || !isDirty) {
      loadWorkflowIDImpl(id);
      return;
    }
    // prompt when auto save disabled and dirty
    showSaveOrDiscardCurWorkflowDialog(id);
  };
  const showSaveOrDiscardCurWorkflowDialog = async (newIDToLoad?: string) => {
    const buttons = [
      newIDToLoad
        ? {
            label: "Open in new tab",
            icon: <IconExternalLink />,
            onClick: () => {
              openWorkflowInNewTab(newIDToLoad);
            },
          }
        : null,
      {
        label: "Save",
        colorScheme: "teal",
        onClick: async () => {
          await saveCurWorkflow();
          newIDToLoad && loadWorkflowIDImpl(newIDToLoad);
        },
      },
    ];
    if (workflowsTable?.curWorkflow?.lastSavedJson != null) {
      buttons.push({
        label: "Discard",
        colorScheme: "red",
        onClick: async () => {
          await discardUnsavedChanges();
          newIDToLoad && loadWorkflowIDImpl(newIDToLoad);
        },
      });
    } else {
      buttons.push({
        label: "Delete",
        colorScheme: "red",
        onClick: async () => {
          await deleteCurWorkflow();
          newIDToLoad && loadWorkflowIDImpl(newIDToLoad);
        },
      });
    }
    showDialog(
      `Please save or discard your changes to "${workflowsTable?.curWorkflow?.name}" before leaving, or your changes will be lost.`,
      buttons,
    );
  };

  const loadNewWorkflow = async (input?: { json?: string; name?: string }) => {
    const jsonStr = input?.json ?? JSON.stringify(defaultGraph);
    const flow = await workflowsTable?.createFlow({
      json: jsonStr,
      name: input?.name,
    });
    flow && (await loadWorkflowID(flow.id));
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
    const workflow = await workflowsTable?.get(workflowID);
    if (workflow == null) {
      return;
    }
    const flow = await workflowsTable?.createFlow({
      json: workflow.json,
      lastSavedJson: workflow.lastSavedJson,
      name: newFlowName || workflow.name,
      parentFolderID: workflow.parentFolderID,
      tags: workflow.tags,
    });
    flow && (await loadWorkflowID(flow.id));
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

  const shortcutListener = async (event: KeyboardEvent) => {
    const needSave = await matchSaveWorkflowShortcut(event);
    if (needSave) {
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
    /**
     * because we have turned on strict mode, useEffect will be executed twice in strict mode in the development environment.
     * and graphAppSetup contains DB related operations, repeated execution will bring some bad results.
     * so in development environment mode, the first execution is skipped.
     */
    if (
      // @ts-ignore
      process.env.NODE_ENV === "development" &&
      !developmentEnvLoadFirst.current
    ) {
      developmentEnvLoadFirst.current = true;
      return;
    }
    graphAppSetup();
    setLoadChild(true);
    autoSaveTimer.current = setInterval(async () => {
      const autoSaveEnabled =
        (await userSettingsTable?.getSetting("autoSave")) ?? true;

      if (curFlowID.current != null && autoSaveEnabled) {
        const isLatest = await workflowsTable?.latestVersionCheck();
        if (
          workflowOverwriteNoticeStateRef.current !== "disabled" &&
          !isLatest
        ) {
          workflowOverwriteNoticeStateRef.current = "show";
          showDialog(
            `This notification is to inform you that it appears you've opened the same workflow in multiple tabs. If all tabs are set to auto-save, this may lead to conflicts and potential data loss.\n\nYou might want to consider disabling auto-save to prevent this. We will remind you to save changes if you leave a page with unsaved work.`,
            [
              {
                label: "Do Not Remind Again",
                onClick: () => {
                  workflowOverwriteNoticeStateRef.current = "disabled";
                },
              },
              {
                label: "Disable Auto-Save",
                colorScheme: "teal",
                onClick: () => {
                  userSettingsTable?.upsert({ autoSave: false });
                },
              },
            ],
            true,
          );
        } else {
          // autosave workflow if enabled
          const graphJson = JSON.stringify(app.graph.serialize());
          graphJson != null &&
            (await workflowsTable?.updateFlow(curFlowID.current, {
              json: graphJson,
            }));
        }
      }

      checkIsDirty().then((res) => {
        setIsDirty(res);
      });
    }, 1000);
    // pullAuthTokenCloseIfExist();

    window.addEventListener("keydown", shortcutListener);
    // window.addEventListener("message", authTokenListener);

    const fileInput = document.getElementById(
      "comfy-file-input",
    ) as HTMLInputElement;
    const fileInputListener = async () => {
      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        const flow = await workflowsTable?.createFlow({
          name: fileInput.files[0].name,
          json: JSON.stringify(defaultGraph),
        });

        flow && setCurFlowIDAndName(flow.id, flow.name ?? "Unknown name");
      }
    };
    fileInput?.addEventListener("change", fileInputListener);

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      const autoSaveEnabled = userSettingsTable?.autoSave ?? true;
      const isDirty =
        !!workflowsTable?.curWorkflow &&
        checkIsDirtyImpl(workflowsTable?.curWorkflow);

      if (!autoSaveEnabled && isDirty) {
        e.preventDefault(); // For modern browsers
        e.returnValue = "You have unsaved changes!"; // For older browsers
        showSaveOrDiscardCurWorkflowDialog();
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    const handleExecuted = (e: any) => {
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
    };
    api.addEventListener("executed", handleExecuted);

    const handleDrop = async (event: DragEvent) => {
      const fileName = event.dataTransfer?.files[0]?.name;
      const overwriteFlow =
        (await userSettingsTable?.getSetting(
          "overwriteCurWorkflowWhenDroppingFileToCanvas",
        )) ?? false;
      if (!overwriteFlow && fileName) {
        const flow = await workflowsTable?.createFlow({
          name: fileName,
        });

        flow && setCurFlowIDAndName(flow.id, flow.name);
      }
    };
    app.canvasEl.addEventListener("drop", handleDrop);

    return () => {
      // window.removeEventListener("message", authTokenListener);
      window.removeEventListener("keydown", shortcutListener);
      window.removeEventListener("change", fileInputListener);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("executed", handleExecuted);
      app.canvasEl.removeEventListener("drop", handleDrop);

      clearInterval(autoSaveTimer.current);
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
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
            }}
            zIndex={DRAWER_Z_INDEX}
            draggable={false}
          >
            <Topbar
              curFlowName={curFlowName}
              setCurFlowName={setCurFlowName}
              updatePanelPosition={updatePanelPosition}
              positionStyle={positionStyle}
            />
            {loadChild && (
              <Suspense>
                <ModelManagerTopbar />
              </Suspense>
            )}
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
