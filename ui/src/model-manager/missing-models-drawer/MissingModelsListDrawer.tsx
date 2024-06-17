import {
  Box,
  Button,
  Card,
  CardHeader,
  Flex,
  Grid,
  Heading,
  Portal,
  useToast,
} from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useState } from "react";
import MissingModelItem from "./MissingModelItem";
import { DRAWER_Z_INDEX } from "../../const";
import type { ModelDep } from "../../spacejson/handleDownloadSpaceJson";
import { getAllFoldersList } from "../../Api";
import { installModelsApi } from "../api/modelsApi";
import { getCivitApiKey } from "../../utils/civitUtils";
import { WorkspaceContext } from "../../WorkspaceContext";
import { app } from "../../utils/comfyapp";

export interface MissingModel {
  class_type: string;
  input_name: string;
  received_value: string;
}

interface Props {
  onClose: () => void;
  missingModels: MissingModel[];
}

export default function MissingModelsListDrawer({
  onClose,
  missingModels,
}: Props) {
  useEffect(() => {
    app.canvasEl.addEventListener("click", onClose);
    return () => {
      app.canvasEl.removeEventListener("click", onClose);
    };
  }, []);
  const [selectedModelDeps, setSelectedModelDeps] = useState<ModelDep[]>([]);
  const [foldersList, setFoldersList] = useState<Record<string, string[]>>({});
  const { setRoute } = useContext(WorkspaceContext);
  const loadData = useCallback(async () => {
    const folders_list = await getAllFoldersList();
    folders_list && setFoldersList(folders_list);
  }, []);
  const toast = useToast();
  useEffect(() => {
    loadData();
  }, []);

  const DRAWER_WIDTH = 480;
  const onClickInstallModels = () => {
    selectedModelDeps.forEach((model) => {
      let url = model.downloadUrl;
      if (!url || !model.fileFolder || !foldersList[model.fileFolder][0]) {
        toast({
          title: "Error",
          description: !url
            ? "Download URL is missing"
            : "Model install folder path is missing",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        return;
      }

      if (url.includes("civitai")) {
        const apiKey = getCivitApiKey();
        if (apiKey) {
          url += `?token=${apiKey}`;
        }
      }
      installModelsApi({
        file_hash: model.fileHash ?? undefined,
        filename: model.name,
        save_path: foldersList[model.fileFolder][0],
        url,
        force_filename: true,
      });
    });
    toast({
      title:
        "Installing...Please open Install Models modal or python terminal to view progress.",
      description: selectedModelDeps.map((model) => model.filename).join(", "),
      status: "info",
      duration: 4000,
      isClosable: true,
    });
    setRoute("installModels");
  };

  return (
    <Portal>
      <Box style={{ width: DRAWER_WIDTH }}>
        <Card
          width={DRAWER_WIDTH}
          height={"100vh"}
          p={4}
          gap={2}
          position={"fixed"}
          top={0}
          left={0}
          shadow={"xl"}
          zIndex={DRAWER_Z_INDEX}
          overflowY={"auto"}
        >
          <CardHeader>
            <Flex justifyContent={"space-between"} alignContent={"center"}>
              <Heading size={"md"} mr={2}>
                Missing Models
              </Heading>
              {/* <InstallModelsButton /> */}
            </Flex>
          </CardHeader>
          {/* <Checkbox
            isChecked={selectedModelDeps.length == missingModels.length}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedModelDeps(
                  missingModels.map((model) => ({
                    filename: model.received_value,
                  })),
                );
              } else {
                setSelectedModelDeps([]);
              }
            }}
          >
            Select All ({missingModels.length})
          </Checkbox> */}
          <Button
            width={"fit-content"}
            colorScheme="teal"
            size={"sm"}
            onClick={onClickInstallModels}
          >
            Install Selected ({selectedModelDeps.length})
          </Button>
          <Grid templateColumns="1" gap={1} marginTop={2} width={"100%"}>
            {missingModels.map((model) => (
              <MissingModelItem
                key={model.received_value}
                model={model}
                setSelectedModelDeps={setSelectedModelDeps}
                selectedModelDeps={selectedModelDeps}
                foldersList={foldersList}
                setFoldersList={setFoldersList}
              />
            ))}
          </Grid>
        </Card>
      </Box>
    </Portal>
  );
}
