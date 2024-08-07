import { Box, Button, FormControl, Spinner, TextInput } from "@primer/react";
import { File, Key, MagnifyingGlass, XCircle } from "phosphor-react";
import React, { useCallback, useEffect, useState } from "react";
import { CivitCard, Dropdown } from "../components";
import { useStateRef } from "../../../customHooks/useStateRef";
import {
  MODEL_TYPE_TO_FOLDER_MAPPING,
  ALL_MODEL_TYPES,
} from "../../install-models/util/modelTypes";
import { getModelFromCivitAPi } from "../../install-models/util/getModelFromCivitAPI";
import { getCivitApiKey } from "../../../utils/civitUtils";
import { userSettingsTable } from "../../../db-tables/WorkspaceDB";
import { installModelsApi } from "../../api/modelsApi";
import { getAllFoldersList, updateUserModelsJsonGithub } from "../../../Api";
import ChooseDownloadFolder from "../components/ChooseDownloadFolder";
import InstallModelProgress from "./InstallModelProgress";
import toast from "react-hot-toast";
import CivitAIKeyModal from "./CivitAIKeyModal";

export const CivitAIModelsTab = ({ modelType: modelTypeProp }) => {
  const [selectedFolderOption, setSelectedFolderOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [models, setModels] = useState([]);
  const [modelType, setModelType] = useState(modelTypeProp);
  const [searchQuery, setSearchQuery] = useState("");
  const [installing, setInstalling] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [fileState, setFile, file] = useStateRef();
  const [foldersList, setFoldersList] = useState({});
  const [folderOptions, setFolderOptions] = useState([]);
  const [defaultFolders, setDefaultFolders] = useState(
    MODEL_TYPE_TO_FOLDER_MAPPING,
  );
  const [isCivitAIKeyModalOpen, setIsCivitAIKeyModalOpen] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const repoName = urlParams.get("repoName");
  const ghUser = urlParams.get("ghUser");
  const flowscaleToken = urlParams.get("token");

  const loadData = useCallback(async () => {
    setLoading(true);
    const models = await getModelFromCivitAPi(
      modelType === "All" ? null : modelType,
      searchQuery,
    );
    // const models = await getModelFromSearch(searchQuery, modelType);
    setModels(models);
    const folders_list = await getAllFoldersList();
    if (folders_list) {
      setFoldersList(folders_list);
    }
    const defaultFolders =
      await userSettingsTable?.getSetting("defaultFolders");
    defaultFolders && setDefaultFolders(defaultFolders);

    setLoading(false);
  }, [searchQuery, modelType]);

  const downloadModels = (folderPath, downloadUrl = null) => {
    if (!file.current?.id && !downloadUrl) {
      console.error("no url to download");
      return;
    }
    let url =
      downloadUrl ??
      `https://civitai.com/api/download/models/${file.current?.id}`;
    let version = file.current?.name;
    if (!version) {
      version = url.split("/").pop();
      if (!version) {
        console.error("downloadUrl is malformed");
        return;
      }
    }
    toast.loading("Installing...", {
      duration: 4000,
    });
    version != null && setInstalling((cur) => [...cur, version ?? ""]);
    const apiKey = getCivitApiKey();
    if (apiKey) {
      url += `?token=${apiKey}`;
    }
    installModelsApi({
      file_hash: file.current?.SHA256,
      filename: version,
      save_path: folderPath,
      url,
    });
    setFile(undefined);
    setIsOpen(false);
  };
  const onClickInstallModel = async (_file, model) => {
    // if (ghUser && repoName && flowscaleToken) {
    //   updateUserModelsJsonGithub(
    //     ghUser,
    //     repoName,
    //     {
    //       name: _file?.name,
    //       url: `https://civitai.com/api/download/models/${_file?.id}`,
    //       path: selectedFolderOption.split("/").slice(-2).join("/"),
    //       fetch_type: "download",
    //     },
    //     flowscaleToken,
    //   );
    // }
    const folderPath = defaultFolders[model.type];
    setFile(_file);
    if (folderPath == null) {
      setIsOpen(true);
    } else {
      downloadModels(folderPath);
    }
  };

  const updateDefaultFolders = async (modelType, newFolder) => {
    const newFolders = { ...defaultFolders, [modelType]: newFolder };
    await userSettingsTable?.upsert({ defaultFolders: newFolders });
    setDefaultFolders(newFolders);
  };

  useEffect(() => {
    loadData();
  }, [modelType]);

  useEffect(() => {
    if (Object.keys(foldersList).length > 0) updateFolderOptions(modelType);
  }, [modelType, foldersList]);

  useEffect(() => {
    if (modelType && folderOptions.length > 0) {
      setSelectedFolderOption(folderOptions[0]?.value);
      updateDefaultFolders(modelType, folderOptions[0]?.value);
    }
  }, [folderOptions]);

  const updateFolderOptions = (curModelType) => {
    if (
      curModelType &&
      foldersList[MODEL_TYPE_TO_FOLDER_MAPPING[curModelType]]
    ) {
      let folderArr = foldersList[MODEL_TYPE_TO_FOLDER_MAPPING[curModelType]];
      setFolderOptions(
        folderArr.map((item) => ({
          name: item.split("/").slice(-2).join("/"),
          value: item,
        })),
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            margin: "8px 0px",
          }}
        >
          <FormControl>
            <FormControl.Label visuallyHidden>Default label</FormControl.Label>
            <TextInput
              leadingVisual={MagnifyingGlass}
              placeholder="Search CivitAI models"
              sx={{ width: "350px" }}
              size="medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              trailingAction={
                searchQuery.length > 0 ? (
                  <TextInput.Action
                    onClick={(e) => {
                      setSearchQuery("");
                      e.preventDefault();
                    }}
                    icon={XCircle}
                    aria-label="Clear"
                    sx={{
                      color: "fg.subtle",
                    }}
                  />
                ) : undefined
              }
            />
          </FormControl>
          <Button onClick={loadData}>Search</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            margin: "8px 0px 8px auto",
          }}
        >
          <Dropdown
            options={ALL_MODEL_TYPES}
            selectedIndex={ALL_MODEL_TYPES.findIndex(
              (type) => type.name === modelType,
            )}
            onSelect={(index) => {
              setModelType(ALL_MODEL_TYPES[index].name);
            }}
            label="Category"
            labelDirection="horizontal"
            overlayWidth="auto"
          />

          {modelType && foldersList[MODEL_TYPE_TO_FOLDER_MAPPING[modelType]] ? (
            <Dropdown
              options={folderOptions}
              selectedIndex={folderOptions.findIndex(
                (option) => option.value === selectedFolderOption,
              )}
              onSelect={(index) => {
                updateDefaultFolders(modelType, folderOptions[index].value);
                setSelectedFolderOption(folderOptions[index].value);
              }}
              label="Folder"
              placeholder="Select download folder"
              labelDirection="horizontal"
              overlayWidth="medium"
            />
          ) : (
            <></>
          )}

          <Button
            onClick={() => {
              setIsCivitAIKeyModalOpen(true);
            }}
          >
            <span
              style={{
                display: "flex",
                gap: 4,
                alignItems: "center",
              }}
            >
              <Key /> API Key
            </span>
          </Button>
        </Box>
      </Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
            width: "100%",
          }}
        >
          <Spinner size="large" />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <InstallModelProgress />
          {/* <pre>{JSON.stringify(modelType, null, 4)}</pre>
          <pre>{JSON.stringify(defaultFolders, null, 4)}</pre>
          <pre>{JSON.stringify(selectedFolderOption, null, 4)}</pre> */}

          {models.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60vh",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <File size="large" width={50} />
                <h2>No models found</h2>
              </Box>
            </Box>
          ) : (
            <>
              {models?.map((model) => (
                <CivitCard
                  key={model.id}
                  model={model}
                  installing={installing}
                  onClickInstallModel={onClickInstallModel}
                />
              ))}
            </>
          )}
        </Box>
      )}
      <CivitAIKeyModal
        isOpen={isCivitAIKeyModalOpen}
        onClose={() => setIsCivitAIKeyModalOpen(false)}
      />
      <ChooseDownloadFolder
        fileSelected={!!fileState}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectFolder={(folderPath, customUrl) => {
          downloadModels(folderPath, file.current ? undefined : customUrl);
        }}
      />
    </Box>
  );
};
