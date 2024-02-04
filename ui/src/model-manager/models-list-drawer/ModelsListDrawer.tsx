import {
  Box,
  Card,
  CardHeader,
  Flex,
  Heading,
  Spinner,
  Text,
  Portal,
  Input,
  Switch,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { ModelsTags } from "./ModelsTags";
import { ModelsList } from "./ModelsList";
// @ts-expect-error ComfyUI imports
import { app } from "/scripts/app.js";
import InstallModelsButton from "../install-models/InstallModelsButton";
import { ModelsListRespItem } from "../types";
import { useUpdateModels } from "../hooks/useUpdateModels";
import { DRAWER_Z_INDEX } from "../../const";
import { userSettingsTable } from "../../db-tables/WorkspaceDB";
interface Props {
  onClose: () => void;
}

export default function ModelsListDrawer({ onClose }: Props) {
  const [selectedModel, setSelectedModel] = useState("checkpoints");
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, modelTypeList, modelsList } = useUpdateModels();

  // current render models
  const [curModelList, setCurModelList] = useState<ModelsListRespItem[]>([]);

  // filter by model type
  useEffect(() => {
    const res = modelsList
      .filter((item) => item.model_type === selectedModel)
      .filter((item) => item.model_name.includes(searchQuery));
    setCurModelList(res);
  }, [selectedModel, modelsList, searchQuery]);

  useEffect(() => {
    app.canvasEl.addEventListener("click", onClose);
    return () => {
      app.canvasEl.removeEventListener("click", onClose);
    };
  }, []);

  const [showThumbnails, setShowThumbnails] = useState(true);
  useEffect(() => {
    userSettingsTable?.getSetting("showModelThumbnail").then((res) => {
      setShowThumbnails(res ?? true);
    });
  }, []);
  const onShowThumbnailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const state = e.target.checked;
    userSettingsTable
      ?.upsert({
        showModelThumbnail: state,
      })
      .then(() => {
        setShowThumbnails(state);
        window.dispatchEvent(new Event("showModelThumbnail"));
      });
  };

  const DRAWER_WIDTH = 440;

  const renderContent = () => {
    return (
      <>
        <Flex gap={4} justifyContent={"center"} alignItems={"center"} mb={2}>
          <Text>Search</Text>
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Flex>
        <ModelsTags
          modelTypeList={modelTypeList}
          setSelectedModel={setSelectedModel}
          selectedModel={selectedModel}
        />
        <ModelsList list={curModelList} />
        {loading && (
          <Flex justifyContent={"center"} alignItems={"center"} height={"100%"}>
            <Spinner />
          </Flex>
        )}
      </>
    );
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
                Models
              </Heading>
              <InstallModelsButton />
            </Flex>
          </CardHeader>
          <Flex gap={2} align="center">
            <Text>Show Thumbnails</Text>
            <Switch
              isChecked={showThumbnails}
              onChange={onShowThumbnailsChange}
            />
          </Flex>
          {renderContent()}
        </Card>
      </Box>
    </Portal>
  );
}
