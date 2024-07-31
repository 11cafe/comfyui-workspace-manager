import { Box, Button, FormControl, TextInput } from "@primer/react";
import { MagnifyingGlass, XCircle } from "phosphor-react";
import React, { useCallback, useEffect, useState } from "react";
import { Card, Dropdown } from "../components";
import CivitaiSchema from "./DUMMY_DATA/civitai-schema.json";
import { useStateRef } from "../../../customHooks/useStateRef";
import { MODEL_TYPE_TO_FOLDER_MAPPING } from "../../install-models/util/modelTypes";
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [models, setModels] = useState([]);
  const [modelType, setModelType] = useState(modelTypeProp);
  const [searchQuery, setSearchQuery] = useState("");
  const [installing, setInstalling] = useState([]);
  const [fileState, setFile, file] = useStateRef();
  const [foldersList, setFoldersList] = useState({});
  const [defaultFolders, setDefaultFolders] = useState(
    MODEL_TYPE_TO_FOLDER_MAPPING,
  );

  const loadData = useCallback(async () => {
    setLoading(true);
    const models = await getModelFromCivitAPi(modelType, searchQuery);
    // const models = await getModelFromSearch(searchQuery, modelType);
    setModels(models);
    const folders_list = await getAllFoldersList();
    folders_list && setFoldersList(folders_list);
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

  // useEffect(() => {
  //   setModels(CivitaiSchema?.items);
  // }, []);

  // const handleInstallClick = () => {
  //   alert("Install button clicked");
  // };

  // const onSeachButtonClick = (searchCivitAiProjects) => {
  //   alert(`Search button clicked with value: ${searchCivitAiProjects}`);
  // };

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
          }}
        >
          <FormControl>
            <FormControl.Label visuallyHidden>Default label</FormControl.Label>
            <TextInput
              leadingVisual={MagnifyingGlass}
              placeholder="Search CivitAI models"
              sx={{ width: "320px" }}
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
            TODO: Use the ALL_MODEL_TYPES to list all the model types in the category dropdown.
            TODO: Based on the category, foldersList[MODEL_TYPE_TO_FOLDER_MAPPING[modelType]],
            find the folders for the selected category and apply it.
            TODO: Add a spinner to show loading state of APIs.
            TODO: Add something to show the installation progress.
         */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            width: "40%",
          }}
        >
          <Dropdown
            options={dropdownOptions}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
            label="Category"
            labelDricetion="horizontal"
            overlayWidth="auto"
          />

          <Dropdown
            options={dropdownOptions}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
            label="Path"
            labelDricetion="horizontal"
            overlayWidth="auto"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {models.map((model) => (
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
    </Box>
  );
};
