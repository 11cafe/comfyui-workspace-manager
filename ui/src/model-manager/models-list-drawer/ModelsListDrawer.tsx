import {
  Box,
  Card,
  Flex,
  Heading,
  Spinner,
  Portal,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ModelsTags } from "./ModelsTags";
import { ModelsList } from "./ModelsList";
// @ts-expect-error ComfyUI imports
import { app } from "/scripts/app.js";
import InstallModelsButton from "../install-models/InstallModelsButton";
import { ModelsListRespItem } from "../types";
import { useUpdateModels } from "../hooks/useUpdateModels";
import { DRAWER_Z_INDEX } from "../../const";
import ShowNsfwModelThumbnailSettings from "../../settings/ShowNsfwModelThumbnailSettings";
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
    const res = modelsList.filter((item) => {
      if (searchQuery.length) {
        return item.model_name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      }
      return item.model_type === selectedModel;
    });
    setCurModelList(res);
  }, [selectedModel, modelsList, searchQuery]);

  useEffect(() => {
    app.canvasEl.addEventListener("click", onClose);
    return () => {
      app.canvasEl.removeEventListener("click", onClose);
    };
  }, []);

  const DRAWER_WIDTH = 440;

  const renderContent = () => {
    return (
      <>
        <Flex gap={4} justifyContent={"center"} alignItems={"center"} mb={1}>
          <Input
            size={"sm"}
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <ShowNsfwModelThumbnailSettings />
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
          <Flex justifyContent={"space-between"} alignContent={"center"} py={3}>
            <Heading size={"md"} mr={2}>
              Models
            </Heading>

            <InstallModelsButton />
          </Flex>

          {renderContent()}
        </Card>
      </Box>
    </Portal>
  );
}
