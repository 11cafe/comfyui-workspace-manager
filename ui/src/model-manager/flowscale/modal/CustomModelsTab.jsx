import {
  Box,
  Button,
  FormControl,
  Select,
  Text,
  TextInput,
} from "@primer/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getCivitApiKey } from "../../../utils/civitUtils";
import { installModelsApi } from "../../api/modelsApi";
import { useStateRef } from "../../../customHooks/useStateRef";
import { updateUserModelsJsonGithub, getAllFoldersList } from "../../../Api";
import ChooseDownloadFolder from "../components/ChooseDownloadFolder";
import { DownloadSimple } from "phosphor-react";
import InstallModelProgress from "./InstallModelProgress";

export const CustomModelsTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modelDownloadUrl, setModelDownloadUrl] = useState("");
  const [modelFilename, setModelFilename] = useState("");
  const [folderPath, setFolderPath] = useState("");
  const [foldersList, setFoldersList] = useState([]);
  const [installing, setInstalling] = useState([]);
  const [fileState, setFile, file] = useStateRef();

  const urlParams = new URLSearchParams(window.location.search);
  const repoName = urlParams.get("repoName");
  const ghUser = urlParams.get("ghUser");
  const flowscaleToken = urlParams.get("token");

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const folders_list = await getAllFoldersList();
    if (folders_list) {
      ["custom_nodes", "config", "saved_prompts"].forEach((folder) => {
        delete folders_list[folder];
      });
      setFoldersList(Object.values(folders_list).flatMap((folder) => folder));
    }
  };

  const downloadModels = (folderPath, downloadUrl = null) => {
    if (!downloadUrl) {
      console.error("no url to download");
      return;
    }
    // let version = file.current?.name;
    // if (!version) {
    //   version = downloadUrl.split("/").pop();
    //   if (!version) {
    //     console.error("downloadUrl is malformed");
    //     return;
    //   }
    // }
    toast.loading("Installing...", {
      duration: 4000,
    });
    modelFilename != null &&
      setInstalling((cur) => [...cur, modelFilename ?? ""]);
    const apiKey = getCivitApiKey();
    if (apiKey) {
      downloadUrl += `?token=${apiKey}`;
    }
    installModelsApi({
      file_hash: file.current?.SHA256,
      filename: modelFilename,
      save_path: folderPath,
      url: downloadUrl,
    });
    setFile(undefined);
  };

  const onClickInstallModel = async () => {
    // This should be the output, _file = { id: "", name: "", sizeKB: "" };
    const _file = {
      name: modelFilename,
      url: modelDownloadUrl,
      path: folderPath.split("/").slice(-2).join("/"),
      fetch_type: "download",
    };
    // if (ghUser && repoName && flowscaleToken) {
    //   updateUserModelsJsonGithub(ghUser, repoName, _file, flowscaleToken);
    // }
    // const folderPath = defaultFolders[model.type];
    setFile(_file);
    if (folderPath == null) {
      setIsOpen(true);
    } else {
      downloadModels(folderPath, modelDownloadUrl);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "60%",
        padding: "16px",
      }}
    >
      <FormControl>
        <FormControl.Label>Model Filename</FormControl.Label>
        <TextInput
          placeholder="sd_xl_base_1.0.safetensors"
          value={modelFilename}
          onChange={(e) => setModelFilename(e.target.value)}
          sx={{
            backgroundColor: "transparent",
            border: "1px solid #636C76",
            width: "100%",
          }}
        />
      </FormControl>
      <FormControl>
        <FormControl.Label>Model Download Link</FormControl.Label>
        <TextInput
          placeholder="https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors"
          value={modelDownloadUrl}
          onChange={(e) => {
            setModelDownloadUrl(e.target.value);
            if (!modelFilename)
              setModelFilename(e.target.value.split("/").pop());
          }}
          sx={{
            backgroundColor: "transparent",
            border: "1px solid #636C76",
            width: "100%",
          }}
        />
      </FormControl>
      <FormControl>
        <FormControl.Label>Choose Model Install Folder</FormControl.Label>
        <Select
          aria-label="Select option"
          value={folderPath}
          onChange={(e) => setFolderPath(e.target.value)}
          sx={{ width: "100%" }}
        >
          <option value="" disabled>
            Select option
          </option>
          {foldersList.map((folderPath) => (
            <option key={folderPath} value={folderPath}>
              {folderPath}
            </option>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="primary"
        onClick={() => onClickInstallModel()}
        disabled={Boolean(
          !modelDownloadUrl ||
            !modelFilename ||
            !folderPath ||
            installing.includes(modelFilename),
        )}
        leadingVisual={DownloadSimple}
        sx={{
          color: "#fff",
          fontSize: "16px",
          textAlign: "center",
        }}
        block
      >
        Install Model
      </Button>
      <ChooseDownloadFolder
        fileSelected={!!fileState}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectFolder={(folderPath, customUrl) => {
          downloadModels(folderPath, file.current ? undefined : customUrl);
        }}
      />
      <InstallModelProgress />
    </Box>
  );
};
