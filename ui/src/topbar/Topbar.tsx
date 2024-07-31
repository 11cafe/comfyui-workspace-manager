import { HStack, useDisclosure, useToast } from "@chakra-ui/react";

import { Suspense, lazy, useEffect, useState } from "react";

import "./Topbar.css";
import InatallModelsModal from "../model-manager/install-models/InstallModelsModal";
// import { useStateRef } from "../customHooks/useStateRef";
// import { FileEssential } from "../model-manager/install-models/util/modelTypes";
import { FlowscaleModal } from "../model-manager/flowscale/modal/FlowscaleModal";

// const ModelManagerTopbar = lazy(
//   () => import("../model-manager/topbar/ModelManagerTopbar"),
// );

export function Topbar() {
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    const injectButton = () => {
      const menu = document.querySelector(".comfy-menu");
      const separator = document.createElement("hr");
      if (menu) {
        if (
          !menu.querySelector(".civitai-button") &&
          !menu.querySelector(".custom-models-button")
        ) {
          separator.style.margin = "20px 0";
          separator.style.width = "100%";
          menu.append(separator);
          const civitAiButton = document.createElement("button");
          civitAiButton.textContent = "FlowScale";
          civitAiButton.style.fontSize = "16px";
          civitAiButton.className =
            "comfyui-button comfyui-menu-mobile-collapse civitai-button";
          civitAiButton.style.marginTop = "10px";
          civitAiButton.style.display = "flex";
          civitAiButton.style.justifyContent = "center";
          civitAiButton.style.alignItems = "center";
          civitAiButton.onclick = () => {
            setShowDrawer(true);
          };

          menu.append(civitAiButton);

          // const customModelsButton = document.createElement("button");
          // customModelsButton.textContent = "Custom Models";
          // customModelsButton.className =
          //   "comfyui-button comfyui-menu-mobile-collapse custom-models-button";
          // customModelsButton.style.margin = "10px";
          // customModelsButton.style.display = "flex";
          // customModelsButton.style.justifyContent = "center";
          // customModelsButton.style.alignItems = "center";

          // customModelsButton.onclick = () => {
          //   setShowInstallModal(true);
          // };

          // menu.append(customModelsButton);
        }
      }
    };

    injectButton();
  }, []);

  // const downloadModels = (folderPath: string, downloadUrl?: string) => {
  //   if (!file.current?.id && !downloadUrl) {
  //     console.error("no url to download");
  //     return;
  //   }
  //   let url =
  //     downloadUrl ??
  //     `https://civitai.com/api/download/models/${file.current?.id}`;
  //   let version = file.current?.name;
  //   if (!version) {
  //     version = url.split("/").pop();
  //     if (!version) {
  //       console.error("downloadUrl is malformed");
  //       return;
  //     }
  //   }
  //   toast({
  //     title: "Installing...",
  //     description: version,
  //     status: "info",
  //     duration: 4000,
  //     isClosable: true,
  //   });
  //   version != null && setInstalling((cur) => [...cur, version ?? ""]);
  //   const apiKey = getCivitApiKey();
  //   if (apiKey) {
  //     url += `?token=${apiKey}`;
  //   }
  //   installModelsApi({
  //     file_hash: file.current?.SHA256,
  //     filename: version,
  //     save_path: folderPath,
  //     url,
  //   });
  //   setFile(undefined);
  //   onCloseChooseFolderModal();
  // };

  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={2}
      id="workspaceManagerPanel"
      className="workspaceManagerPanel"
    >
      <Suspense fallback={<div style={{ width: "60px" }} />}>
        {/* {showDrawer && (
          <InatallModelsModal
            modelType="Checkpoint"
            onclose={() => setShowDrawer(false)}
          />
        )} */}
        <FlowscaleModal
          isOpen={showDrawer}
          isClose={() => setShowDrawer(false)}
          modelType="Checkpoint"
        />
        {/* {showInstallModal && (
          <ChooseFolder
            fileSelected={!!fileState}
            isOpen={showInstallModal}
            onClose={() => setShowInstallModal(false)}
            selectFolder={(folderPath: string, customUrl?: string) => {
              downloadModels(folderPath, file.current ? undefined : customUrl);
            }}
          />
        )} */}
      </Suspense>
    </HStack>
  );
}
