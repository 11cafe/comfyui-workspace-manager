import {
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
  Spinner,
  Text,
  useToast,
  useDisclosure,
  Select,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { installModelsApi } from "../api/modelsApi";
import ModelCard from "./ModelCard";
import InstallModelSearchBar from "./InstallModelSearchBar";
import ChooseFolder from "./ChooseFolder";
import InstallProgress from "./InstallProgress";
import AddApiKeyPopover from "./AddApiKeyPopover";
import { getCivitApiKey } from "../../utils/civitUtils";
import { useStateRef } from "../../customHooks/useStateRef";
import {
  ALL_MODEL_TYPES,
  FileEssential,
  MODEL_TYPE,
  MODEL_TYPE_TO_FOLDER_MAPPING,
  apiResponse,
} from "./util/modelTypes";
import { getModelFromCivitAPi } from "./util/getModelFromCivitAPI";
import { getModelFromSearch } from "./util/getModelFromSearch";
import { userSettingsTable } from "../../db-tables/WorkspaceDB";
import { getAllFoldersList } from "../../Api";

interface Props {
  onclose: () => void;
  searchQuery?: string;
  modelType?: MODEL_TYPE;
}
export default function InatallModelsModal({
  onclose: onCloseInstallModelsModal,
  searchQuery: searchQueryProp = "",
  modelType: modelTypeProp,
}: Props) {
  const [models, setModels] = useState<apiResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [modelType, setModelType] = useState(modelTypeProp);
  const toast = useToast();
  const [installing, setInstalling] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState(searchQueryProp);
  const { isOpen, onOpen, onClose: onCloseChooseFolderModal } = useDisclosure();
  const [fileState, setFile, file] = useStateRef<FileEssential>();
  const [foldersList, setFoldersList] = useState<Record<string, string[]>>({});
  const [defaultFolders, setDefaultFolders] = useState<
    Record<MODEL_TYPE, string>
  >(MODEL_TYPE_TO_FOLDER_MAPPING);
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

  const downloadModels = (folderPath: string, downloadUrl?: string) => {
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
    toast({
      title: "Installing...",
      description: version,
      status: "info",
      duration: 4000,
      isClosable: true,
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
    onCloseChooseFolderModal();
  };
  const onClickInstallModel = async (
    _file: FileEssential,
    model: apiResponse,
  ) => {
    const folderPath = defaultFolders[model.type as MODEL_TYPE];
    setFile(_file);
    if (folderPath == null) {
      onOpen();
    } else {
      downloadModels(folderPath);
    }
  };

  const updateDefaultFolders = async (
    modelType: MODEL_TYPE,
    newFolder: string,
  ) => {
    const newFolders = { ...defaultFolders, [modelType]: newFolder };
    await userSettingsTable?.upsert({ defaultFolders: newFolders });
    setDefaultFolders(newFolders);
  };

  useEffect(() => {
    loadData();
  }, [modelType]);
  return (
    <>
      <Modal
        isOpen={true}
        onClose={onCloseInstallModelsModal}
        blockScrollOnMount={true}
      >
        <ModalOverlay />
        <ModalContent width={"90%"} maxWidth={"90vw"} height={"90vh"}>
          <ModalHeader pb={1}>
            <HStack gap={2} mb={2} alignItems={"center"}>
              <Heading size={"md"} mr={2}>
                Models
              </Heading>
              <InstallModelSearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSearch={loadData}
              />
              <Button size={"sm"} py={1} mr={8} onClick={onOpen}>
                Custom URL Install
              </Button>
              <AddApiKeyPopover />
            </HStack>
            <HStack gap={2} wrap={"wrap"}>
              <Button
                size={"sm"}
                py={1}
                onClick={() => {
                  setModelType(undefined);
                }}
                isActive={modelType == null}
              >
                All
              </Button>
              {ALL_MODEL_TYPES.map((type) => {
                return (
                  <Button
                    key={type}
                    size={"sm"}
                    py={1}
                    isActive={modelType === type}
                    onClick={() => {
                      setModelType(type);
                    }}
                  >
                    {type}
                  </Button>
                );
              })}
              {modelType &&
                foldersList[MODEL_TYPE_TO_FOLDER_MAPPING[modelType]] && (
                  <HStack ml="auto">
                    <Text fontSize={17} whiteSpace="nowrap">
                      Default Download Folder:
                    </Text>
                    <Select
                      value={defaultFolders[modelType]}
                      onChange={(e) =>
                        updateDefaultFolders(modelType, e.target.value)
                      }
                    >
                      {foldersList[MODEL_TYPE_TO_FOLDER_MAPPING[modelType]].map(
                        (path) => (
                          <option key={path} value={path}>
                            {path}
                          </option>
                        ),
                      )}
                    </Select>
                  </HStack>
                )}
            </HStack>
            {loading && (
              <Spinner
                thickness="4px"
                emptyColor="gray.200"
                color="pink.500"
                size="lg"
              />
            )}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY={"auto"}>
            <HStack wrap={"wrap"}>
              {models?.map((model) => {
                return (
                  <ModelCard
                    model={model}
                    key={model.id}
                    onClickInstallModel={onClickInstallModel}
                    installing={installing}
                  />
                );
              })}
            </HStack>
            <InstallProgress />
          </ModalBody>
        </ModalContent>
      </Modal>
      <ChooseFolder
        fileSelected={!!fileState}
        isOpen={isOpen}
        onClose={onCloseChooseFolderModal}
        selectFolder={(folderPath: string, customUrl?: string) => {
          downloadModels(folderPath, file.current ? undefined : customUrl);
        }}
      />
    </>
  );
}
