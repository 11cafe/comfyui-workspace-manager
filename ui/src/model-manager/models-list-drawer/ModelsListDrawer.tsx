import {
  Box,
  Card,
  CardHeader,
  Flex,
  Heading,
  Spinner,
  Portal,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ModelsTags } from "./ModelsTags";
import { ModelsList } from "./ModelsList";
// @ts-ignore
import { app } from "/scripts/app.js";
import InstallModelsButton from "../install-models/InstallModelsButton";
import { ModelsListRespItem } from "../types";
import { useUpdateModels } from "../hooks/useUpdateModels";
interface Props {
  onClose: () => void;
}

export default function ModelsListDrawer({ onClose }: Props) {
  const [selectedModel, setSelectedModel] = useState("checkpoints");

  const {loading, modelTypeList, modelsList} = useUpdateModels();

  // current render models
  const [curModelList, setCurModelList] = useState<ModelsListRespItem[]>([]);

  // filter by model type
  useEffect(() => {
    const res = modelsList.filter((item) => {
      return item.model_type === selectedModel;
    });
    setCurModelList(res);
  }, [selectedModel, modelsList]);

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
          zIndex={1000}
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
          {renderContent()}
        </Card>
      </Box>
    </Portal>
  );
}
