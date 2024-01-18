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
import SearchInput from "../../components/SearchInput";
import InstallModelsButton from "../install-models/InstallModelsButton";
const app = window.app;
import { getAllModelsList } from "../../Api";
import { ModelsListRespItem } from "../types";
interface Props {
  onClose: () => void;
}

export default function ModelsListDrawer({ onClose }: Props) {
  const [selectedModel, setSelectedModel] = useState("checkpoints");

  // all model types
  const [modelTypeList, setModelTypeList] = useState<string[]>([]);

  // all models
  const [modelsList, setModelsList] = useState<ModelsListRespItem[]>([]);

  // current render models
  const [curModelList, setCurModelList] = useState<ModelsListRespItem[]>([]);

  // loading status
  const [loading, setLoading] = useState(false);

  // filter by model type
  useEffect(() => {
    const res = modelsList.filter((item) => {
      return item.model_type === selectedModel;
    });
    setCurModelList(res);
  }, [selectedModel, modelsList]);

  useEffect(() => {
    initData();
    app.canvasEl.addEventListener("click", onClose);
    return () => {
      app.canvasEl.removeEventListener("click", onClose);
    };
  }, []);

  const initData = async () => {
    setLoading(true);
    const res = (await getAllModelsList()) as Array<ModelsListRespItem>;
    setLoading(false);
    const modelTypeList = Array.from(
      new Set(res.map((item) => item.model_type))
    );
    // checkpoints must be in first
    const index = modelTypeList.indexOf("checkpoints");
    if (index > 0) {
      modelTypeList.splice(index, 1);
      modelTypeList.unshift("checkpoints");
    }
    setModelTypeList(modelTypeList);
    setModelsList(res);
  };

  const DRAWER_WIDTH = 440;

  const renderContent = () => {
    if (loading) {
      return (
        <Flex justifyContent={"center"} alignItems={"center"} height={"100%"}>
          <Spinner />
        </Flex>
      );
    }
    return (
      <>
        <ModelsTags
          modelTypeList={modelTypeList}
          setSelectedModel={setSelectedModel}
          selectedModel={selectedModel}
        />
        <ModelsList list={curModelList} />
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
