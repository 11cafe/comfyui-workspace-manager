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
import { Box, Portal, useToast } from "@chakra-ui/react";
import {
  loadDBs,
  workflowsTable,
  userSettingsTable,
  changelogsTable,
  mediaTable,
  workflowVersionsTable,
} from "./db-tables/WorkspaceDB";
import { defaultGraph } from "./defaultGraph";
import { WorkspaceContext } from "./WorkspaceContext";
import {
  getFileUrl,
  getWorkflowIdInUrlHash,
  generateUrlHashWithFlowId,
  openWorkflowInNewTab,
} from "./utils";
import { Topbar } from "./topbar/Topbar";
import { Workflow, WorkflowVersion } from "./types/dbTypes";
import { useDialog } from "./components/AlertDialogProvider";
import React from "react";
const RecentFilesDrawer = React.lazy(
  () => import("./RecentFilesDrawer/RecentFilesDrawer"),
);
const GalleryModal = React.lazy(() => import("./gallery/GalleryModal"));
import { IconExternalLink } from "@tabler/icons-react";
import { DRAWER_Z_INDEX, UPGRADE_TO_2WAY_SYNC_KEY } from "./const";
import ServerEventListener from "./model-manager/hooks/ServerEventListener";
import { nanoid } from "nanoid";
import { WorkspaceRoute } from "./types/types";
import { useStateRef } from "./customHooks/useStateRef";
import { indexdb } from "./db-tables/indexdb";
import EnableTwowaySyncConfirm from "./settings/EnableTwowaySyncConfirm";
import { deepJsonDiffCheck } from "./utils/deepJsonDiffCheck";

export default function App() {
  const [curFlowName, setCurFlowName] = useState<string | null>(null);
  const [route, setRoute] = useState<WorkspaceRoute>("root");
  const [loadingDB, setLoadingDB] = useState(true);
  const [flowID, setFlowID] = useState<string | null>(null);
  const curFlowID = useRef<string | null>(null);

  const [isDirty, setIsDirty] = useState(false);
  const workspaceContainerRef = useRef(null);
  const { showDialog } = useDialog();
  const [loadChild, setLoadChild] = useState(false);
  const developmentEnvLoadFirst = useRef(false);
  const toast = useToast();
  const [curVersion, setCurVersion] = useStateRef<WorkflowVersion | null>(null);
  const saveCurWorkflow = useCallback(async (force = false) => {
    if (curFlowID.current) {
      if (!force && workflowsTable?.curWorkflow?.saveLock) {
        toast({
          title: "The workflow is locked and cannot be saved",
          status: "warning",
          duration: 3000,
        });
        return;
      }
      const graphJson = JSON.stringify(app.graph.serialize());
      await Promise.all([
        workflowsTable?.updateFlow(curFlowID.current, {
          json: graphJson,
        }),
        changelogsTable?.create({
          workflowID: curFlowID.current,
          json: graphJson,
          isAutoSave: false,
        }),
      ]);
      userSettingsTable?.settings?.autoSave &&
        toast({
          title: "Saved",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      setIsDirty(false);
    }
  }, []);

  const discardUnsavedChanges = async () => {
    if (userSettingsTable?.settings?.autoSave) {
      alert("You cannot discard unsaved changes when auto save is enabled");
      return;
    }
    const userInput = confirm(
      "Are you sure you want to discard unsaved changes? This will revert current workflow to your last saved version. You will lose all changes made since your last save.",
    );

    if (userInput) {
      // User clicked OK
      const curID = workflowsTable?.curWorkflow?.id;
      if (curID == null) return;
      const lastSavedJson = (await workflowsTable?.get(curID))?.json;
      if (lastSavedJson) {
        workflowsTable?.updateCurWorkflow({
          ...workflowsTable.curWorkflow!,
          json: lastSavedJson,
        });
        await app.loadGraphData(JSON.parse(lastSavedJson));
        setIsDirty(false);
      } else {
        alert("Error: No last saved version found");
      }
    }
  };

  const setCurFlowIDAndName = (workflow: Workflow | null) => {
    // curID null is when you deleted current workflow
    const id = workflow?.id ?? null;
    workflowsTable?.updateCurWorkflow(workflow);
    curFlowID.current = id;
    setFlowID(id);
    setCurFlowName(workflow?.name ?? "");
    if (id == null) {
      document.title = "ComfyUI";
      window.location.hash = "";
      localStorage.removeItem("curFlowID");
      return;
    }
    if (getWorkflowIdInUrlHash()) {
      const newUrlHash = generateUrlHashWithFlowId(id);
      window.location.hash = newUrlHash;
      document.title = workflow!.name + " - ComfyUI";
    } else {
      localStorage.setItem("curFlowID", id);
      document.title = "ComfyUI - " + workflow!.name;
    }
    if (workflow) {
      workflowsTable?.updateLastOpenedTime(workflow.id);
    }
  };

  const graphAppSetup = async () => {
    localStorage.removeItem("workspace");
    localStorage.removeItem("comfyspace");
    try {
      await loadDBs();
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
      loadWorkflowIDImpl(latestWfID);
    }
    fetch("/workspace/deduplicate_workflow_ids");
    const twoway = await userSettingsTable?.getSetting("twoWaySync");
    !twoway &&
      indexdb.cache.get(UPGRADE_TO_2WAY_SYNC_KEY).then(async (value) => {
        if (value?.value !== "true") {
          const workflowsCount = await indexdb.workflows.count();
          if (workflowsCount == 0) {
            // empty workflows, enable 2way sync
            await userSettingsTable?.upsert({ twoWaySync: true });
            await indexdb.cache.put({
              id: UPGRADE_TO_2WAY_SYNC_KEY,
              value: "true",
            });
            return;
          }
          const myWorkflowsDir =
            await userSettingsTable?.getSetting("myWorkflowsDir");
          showDialog(
            <EnableTwowaySyncConfirm
              myWorkflowsDir={myWorkflowsDir ?? "undefined"}
            />,
            [
              {
                label: "I have downloaded all my workflows and ready to enable",
                onClick: async () => {
                  await userSettingsTable?.upsert({ twoWaySync: true });
                  if (await userSettingsTable?.getSetting("twoWaySync")) {
                    indexdb.cache.put({
                      id: UPGRADE_TO_2WAY_SYNC_KEY,
                      value: "true",
                    });
                    location.reload();
                  }
                },
                colorScheme: "red",
              },
            ],
            {
              closeOnOverlayClick: false,
            },
          );
        }
      });
  };

  const checkIsDirty = () => {
    if (curFlowID.current == null) return false;
    const curflow = workflowsTable?.curWorkflow;
    if (curflow == null) return false;
    if (curflow.json == null) return true;
    const graphJson = app.graph.serialize() ?? {};
    let lastSaved = {};
    try {
      lastSaved = curflow?.json ? JSON.parse(curflow?.json) : {};
    } catch (e) {
      console.error("error parsing json", e);
    }
    const equal = deepJsonDiffCheck(graphJson, lastSaved);
    return !equal;
  };

  const loadWorkflowIDImpl = async (id: string, versionID?: string | null) => {
    if (app.graph == null) {
      return;
    }
    const flow = await workflowsTable?.get(id);
    // If the currently loaded flow does not exist, you need to clear the URL hash and localStorage to avoid popping up another prompt that the flow does not exist when refreshing the page.
    if (flow == null) {
      alert("Error: Workflow not found! id: " + id);
      setCurFlowIDAndName(null);
      return;
    }
    const version = versionID
      ? await workflowVersionsTable?.get(versionID)
      : null;

    app.ui.dialog.close();
    if (version) {
      setCurVersion(version);
      setCurFlowIDAndName({
        ...flow,
        json: version.json,
      });
      app.loadGraphData(JSON.parse(version.json));
    } else {
      setCurFlowIDAndName(flow);
      setCurVersion(null);
      app.loadGraphData(JSON.parse(flow.json));
    }
    setRoute("root");
    isDirty && setIsDirty(false);
  };

  const loadWorkflowID = async (
    id: string | null,
    versionID?: string | null,
    forceLoad: boolean = false,
  ) => {
    // No current workflow, id is null when you deleted current workflow
    if (id === null) {
      setCurFlowIDAndName(null);
      app.graph.clear();
      return;
    }
    if (
      !isDirty ||
      forceLoad ||
      userSettingsTable?.settings?.autoSave ||
      workflowsTable?.curWorkflow == null
    ) {
      loadWorkflowIDImpl(id, versionID);
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
    buttons.push({
      label: "Discard",
      colorScheme: "red",
      onClick: async () => {
        newIDToLoad && loadWorkflowIDImpl(newIDToLoad);
      },
    });
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
      name: newFlowName || workflow.name,
      parentFolderID: workflow.parentFolderID,
      tags: workflow.tags,
    });
    flow && (await loadWorkflowID(flow.id));
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

    const fileInput = document.getElementById(
      "comfy-file-input",
    ) as HTMLInputElement;
    const fileInputListener = async () => {
      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        const newFlow: Workflow = {
          id: nanoid(),
          name: fileInput.files[0].name,
          json: JSON.stringify(defaultGraph),
          updateTime: Date.now(),
          createTime: Date.now(),
        };
        setCurFlowIDAndName(newFlow);
        await workflowsTable?.createFlow(newFlow);
      }
    };
    fileInput?.addEventListener("change", fileInputListener);

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      const autoSaveEnabled = userSettingsTable?.settings?.autoSave ?? true;
      if (workflowsTable?.curWorkflow?.saveLock) return;
      const isDirty = checkIsDirty();

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
      const n = app.dragOverNode;
      if (n && n.onDragDrop) {
        return;
      }
      const overwriteFlow =
        (await userSettingsTable?.getSetting(
          "overwriteCurWorkflowWhenDroppingFileToCanvas",
        )) ?? false;
      if (!overwriteFlow && fileName) {
        const newFlow: Workflow = {
          id: nanoid(),
          name: fileName,
          json: JSON.stringify(defaultGraph),
          updateTime: Date.now(),
          createTime: Date.now(),
        };
        setCurFlowIDAndName(newFlow);
        await workflowsTable?.createFlow(newFlow);
      }
    };
    app.canvasEl.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("change", fileInputListener);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("executed", handleExecuted);
      app.canvasEl.removeEventListener("drop", handleDrop);
    };
  }, []);

  if (loadingDB) {
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
        setIsDirty: setIsDirty,
        loadNewWorkflow: loadNewWorkflow,
        loadFilePath: loadFilePath,
        setRoute: setRoute,
        route: route,
        curVersion: curVersion,
        setCurVersion: setCurVersion,
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
            <Topbar curFlowName={curFlowName} setCurFlowName={setCurFlowName} />
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
              <Suspense>
                <GalleryModal onclose={() => setRoute("root")} />
              </Suspense>
            )}
          </Box>
          <ServerEventListener />
        </Portal>
      </div>
    </WorkspaceContext.Provider>
  );
}
