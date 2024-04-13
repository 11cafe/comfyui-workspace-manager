import { Button, DarkMode, Stack } from "@chakra-ui/react";
import { lazy, useEffect, DragEvent, useContext, Suspense } from "react";
import ModelsListDrawer from "../models-list-drawer/ModelsListDrawer";
// @ts-ignore
import { app } from "/scripts/app.js";
import "./index.css";
import { WorkspaceContext } from "../../WorkspaceContext";
// @ts-ignore
import { api } from "/scripts/api.js";

import { Model } from "../../types/dbTypes";
import { fetchCivitModelFromHashKey } from "../../utils/civitUtils";
import { indexdb } from "../../db-tables/indexdb";
import type { ModelsListRespItemFromApi } from "../types";
import InatallModelsModal from "../install-models/InstallModelsModal";
import { TOPBAR_BUTTON_HEIGHT } from "../../const";

const AddMissingModelsButton = lazy(
  () => import("./InstallMissingModelsButton"),
);

export default function ModelManagerTopbar() {
  const { setRoute, route } = useContext(WorkspaceContext);
  const handleModelDrop = async (
    e: DragEvent<HTMLCanvasElement> & { canvasX: number; canvasY: number },
  ) => {
    const eventName = e.dataTransfer.getData("eventName");
    if (eventName !== "WorkspaceManagerAddNode") {
      return;
    }
    const modelRelativePath = e.dataTransfer.getData("modelRelativePath");
    const nodeType = e.dataTransfer.getData("nodeType");
    // @ts-ignore
    const node = LiteGraph.createNode(nodeType);
    node.pos = [e.canvasX, e.canvasY];
    node.configure({ widgets_values: [modelRelativePath] });
    app.graph.add(node);
  };

  useEffect(() => {
    app.canvasEl.addEventListener("drop", handleModelDrop);
    api.addEventListener(
      "model_list",
      async (e: { detail: ModelsListRespItemFromApi[] }) => {
        const modelsPromises = e.detail?.map(async (item) => {
          const existing = await indexdb.models.get(
            item.model_name + "@" + item.model_type,
          );
          // avoid overwriting existing models cuz it may have downloadUrl info
          if (existing?.fileHash) return existing;
          let newModel: Model = {
            id: item.model_name + "@" + item.model_type,
            modelName: null,
            fileHash: item.file_hash ?? null,
            fileFolder: item.model_type,
            fileName: item.model_name + item.model_extension,
          };
          if (!item.file_hash) return newModel;
          const json = await fetchCivitModelFromHashKey(item.file_hash);
          newModel = {
            ...newModel,
            modelName: json.modelName ?? null,
            civitModelID: json.civitModelID,
            civitModelVersionID: json.civitModelVersionID,
            imageUrl: json.imageUrl ?? null,
          };
          return newModel;
        });
        const models = (await Promise.all(modelsPromises)).filter(
          (model) => model != null,
        );
        // clear first so deleted models can be removed?
        await indexdb.models.clear();
        await indexdb.models.bulkPut(
          models.filter((model) => model != null) as Model[],
        );
        window.dispatchEvent(new CustomEvent("model_list_updated"));
      },
    );
    return () => {
      app.canvasEl.removeEventListener("drop", handleModelDrop);
    };
  }, []);

  return (
    <Stack style={{ position: "relative" }}>
      <Button
        size={"sm"}
        backgroundColor={"#434554"}
        color={"white"}
        colorScheme="blue"
        aria-label="My models"
        onClick={() => setRoute("modelList")}
        px={1}
        height={TOPBAR_BUTTON_HEIGHT + "px"}
      >
        Models
      </Button>
      <div style={{ position: "absolute", top: "38px", left: "0px" }}>
        <Suspense>
          <AddMissingModelsButton />
        </Suspense>
      </div>
      {route === "modelList" && (
        <ModelsListDrawer onClose={() => setRoute("root")} />
      )}
      {route === "installModels" && (
        <InatallModelsModal
          modelType="Checkpoint"
          onclose={() => setRoute("root")}
        />
      )}
    </Stack>
  );
}
