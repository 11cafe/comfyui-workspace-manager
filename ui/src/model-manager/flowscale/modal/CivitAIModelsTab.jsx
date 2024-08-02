import { Box, Button, FormControl, Spinner, TextInput } from "@primer/react";
import { MagnifyingGlass, XCircle } from "phosphor-react";
import React, { useCallback, useEffect, useState } from "react";
import { Card, Dropdown } from "../components";
import CivitaiSchema from "./DUMMY_DATA/civitai-schema.json";
import { useStateRef } from "../../../customHooks/useStateRef";
import {
  MODEL_TYPE_TO_FOLDER_MAPPING,
  ALL_MODEL_TYPES,
} from "../../install-models/util/modelTypes";
import { getModelFromCivitAPi } from "../../install-models/util/getModelFromCivitAPI";
import { getCivitApiKey } from "../../../utils/civitUtils";
import { userSettingsTable } from "../../../db-tables/WorkspaceDB";
import { installModelsApi } from "../../api/modelsApi";
import { getAllFoldersList } from "../../../Api";
import { findSfwImageFromModel } from "../../../utils/findSfwImage";

export const CivitAIModelsTab = ({
  dropdownOptions,
  modelType: modelTypeProp,
}) => {
  const [selectedFolderOption, setSelectedFolderOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [models, setModels] = useState([]);
  const [modelType, setModelType] = useState(modelTypeProp);
  const [searchQuery, setSearchQuery] = useState("");
  const [installing, setInstalling] = useState([]);
  const [fileState, setFile, file] = useStateRef();
  const [foldersList, setFoldersList] = useState({});
  const [folderOptions, setFolderOptions] = useState([]);
  const [defaultFolders, setDefaultFolders] = useState(
    MODEL_TYPE_TO_FOLDER_MAPPING,
  );

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

  const downloadModels = (folderPath, downloadUrl = "") => {
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
    console.log("Installing......");
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
    // onCloseChooseFolderModal();
  };
  const onClickInstallModel = async (_file, model) => {
    const folderPath = defaultFolders[model.type];
    setFile(_file);
    if (folderPath == null) {
      // onOpen();
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
    if (modelType && foldersList[MODEL_TYPE_TO_FOLDER_MAPPING[modelType]]) {
      let folderArr = foldersList[MODEL_TYPE_TO_FOLDER_MAPPING[modelType]];
      setFolderOptions(
        folderArr.map((item) => ({
          name: item.split("/").slice(-2).join("/"),
          value: item,
        })),
      );
    }
  }, [modelType, foldersList]);

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
          justifyContent: "space-between",
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
        {/* 
            TODO: Add something to show the installation progress.
            TODO: Empty state for the modal.
         */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
            width: "50%",
            margin: "8px 0px",
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
                setSelectedFolderOption(folderOptions[index].value);
                updateDefaultFolders(modelType, folderOptions[index].value);
              }}
              label="Folder"
              placeholder="Select download folder"
              labelDirection="horizontal"
              overlayWidth="medium"
            />
          ) : (
            <></>
          )}
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
          {/* <pre>{JSON.stringify(folderOptions, null, 4)}</pre> */}

          {models?.map((model) => (
            <Card
              key={model.id}
              imageSrc={findSfwImageFromModel(model, 280, true)}
              title={model.name}
              label={model.type}
              size="1.2 GB"
              dropdownOptions={dropdownOptions}
              onInstallClick={() => handleInstallClick()}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
