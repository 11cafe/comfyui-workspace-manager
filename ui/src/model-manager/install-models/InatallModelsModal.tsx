import {
  Button,
  HStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Heading,
  Checkbox,
  Spinner,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { IconX } from "@tabler/icons-react";
import { CivitiModel, CivitiModelFileVersion } from "../types";
import { installModelsApi } from "../api/modelsApi";
import ModelCard from "./ModelCard";
import InstallModelSearchBar from "./InstallModelSearchBar";
import ChooseFolder from "./ChooseFolder";
import InstallProgress from "./InstallProgress";
import { indexdb } from "../../db-tables/indexdb";

type CivitModelQueryParams = {
  types?: MODEL_TYPE;
  query?: string;
  limit?: string;
  nsfw?: "false";
};
const ALL_MODEL_TYPES = [
  "Checkpoint",
  "TextualInversion",
  "Hypernetwork",
  "LORA",
  "Controlnet",
  "Upscaler",
  "VAE",
  // "Poses",
  // "MotionModule",
  // "LoCon",
  // "AestheticGradient",
  // "Wildcards",
] as const; // `as const` makes the array readonly and its elements literal types

const CACHE_EXPIRY_DAYS = 2;

// Infer MODEL_TYPE from the ALL_MODEL_TYPES array
type MODEL_TYPE = (typeof ALL_MODEL_TYPES)[number];
const MODEL_TYPE_TO_FOLDER_MAPPING: Record<MODEL_TYPE, string> = {
  Checkpoint: "checkpoints",
  TextualInversion: "embeddings",
  Hypernetwork: "hypernetworks",
  LORA: "loras",
  Controlnet: "controlnet",
  Upscaler: "upscale_models",
  VAE: "vae",
};
export default function InatallModelsModal({
  onclose,
}: {
  onclose: () => void;
}) {
  const [models, setModels] = useState<CivitiModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [modelType, setModelType] = useState<MODEL_TYPE | undefined>(
    "Checkpoint",
  );
  const toast = useToast();
  const [installing, setInstalling] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const file = useRef<CivitiModelFileVersion>();
  const loadData = useCallback(async () => {
    setLoading(true);
    const params: CivitModelQueryParams = {
      limit: "30",
      nsfw: "false",
    };
    if (searchQuery !== "") {
      params.query = searchQuery;
    }
    if (modelType != null) {
      params.types = modelType;
    }

    const queryString = new URLSearchParams(params).toString();
    const fullURL = `https://civitai.com/api/v1/models?${queryString}`;

    const cacheEntry = await indexdb.cache?.get(fullURL);
    if (cacheEntry?.value != null) {
      try {
        const { data, timestamp } = JSON.parse(cacheEntry?.value);
        // Check if cached data is still valid
        const ageInDays = (Date.now() - timestamp) / (1000 * 60 * 60 * 24);
        if (ageInDays < CACHE_EXPIRY_DAYS) {
          setModels(data);
          setLoading(false);
          return;
        }
      } catch (e) {
        console.error("err fetching cache", e);
      }
    }

    const data = await fetch(fullURL);
    const json = await data.json();
    setModels(json.items);
    // only cache if there is no search query
    if (searchQuery === "") {
      indexdb.cache.add({
        id: fullURL,
        value: JSON.stringify({
          data: json.items,
          timestamp: Date.now(),
        }),
      });
    }
    setLoading(false);
  }, [searchQuery, modelType]);

  const downloadModels = (folderPath: string) => {
    if (!file.current?.downloadUrl) {
      console.error("file.downloadUrl is null");
      return;
    }
    if (!file.current.name) {
      file.current.name = file.current.downloadUrl.split("/").pop();
      if (!file.current.name) {
        console.error("file.downloadUrl is malformed");
        return;
      }
    }
    toast({
      title: "Installing...",
      description: file.current.name,
      status: "info",
      duration: 4000,
      isClosable: true,
    });
    file.current.name != null &&
      setInstalling((cur) => [...cur, file.current?.name ?? ""]);
    installModelsApi({
      filename: file.current.name,
      name: file.current.name,
      save_path: folderPath,
      url: file.current.downloadUrl,
    });
    onClose();
  };
  const onClickInstallModel = (
    _file: CivitiModelFileVersion,
    model: CivitiModel,
  ) => {
    let folderPath: string | null =
      MODEL_TYPE_TO_FOLDER_MAPPING[model.type as MODEL_TYPE];
    file.current = _file;
    if (folderPath == null) {
      onOpen();
    } else {
      downloadModels(folderPath);
    }
  };
  const customUrlDownload = () => {
    const downloadUrl = prompt("Enter the URL to download");
    if (!downloadUrl) {
      return;
    }
    file.current = { id: 0, downloadUrl };
    onOpen();
  };

  useEffect(() => {
    loadData();
  }, [searchQuery, modelType]);
  return (
    <>
      <Modal isOpen={true} onClose={onclose} blockScrollOnMount={true}>
        <ModalOverlay />
        <ModalContent width={"90%"} maxWidth={"90vw"} height={"90vh"}>
          <ModalHeader>
            <HStack gap={2} mb={2} alignItems={"center"}>
              <Heading size={"md"} mr={2}>
                Models
              </Heading>
              <InstallModelSearchBar setSearchQuery={setSearchQuery} />
              <Button size={"sm"} py={1} mr={8} onClick={customUrlDownload}>
                Custom URL Install
              </Button>
            </HStack>
            <HStack gap={2} mb={2} wrap={"wrap"}>
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
        isOpen={isOpen}
        onClose={onClose}
        selectFolder={downloadModels}
      />
    </>
  );
}
