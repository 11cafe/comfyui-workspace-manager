import {
  Box,
  Card,
  CardHeader,
  Flex,
  Heading,
  Input,
  Portal,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ModelsTags } from "./ModelsTags";
import { ModelsList } from "./ModelsList";
import SearchInput from "../../components/SearchInput";
// @ts-ignore
// const app = window.app;
import InstallModelsButton from "../install-models/InstallModelsButton";
interface Props {
  onClose: () => void;
}

const app = window.app;
export default function ModelsListDrawer({ onClose }: Props) {
  const [selectedModel, setSelectedModel] = useState("checkpoints");

  // all model types
  const [modelTypeList, setModelTypeList] = useState<string[]>([
    "checkpoints",
    "clip",
    "clip_vision",
    "configs",
    "controlnet",
    "diffusers",
    "embeddings",
    "gligen",
    "hypernetworks",
    "loras",
  ]);

  // all models
  const [modelList, setModelList] = useState<string[]>([
    "checkpoints",
    "checkpoints2",
    "checkpoints3",
    "checkpoints4",
    "checkpoints5",
    "checkpoints6",
    "checkpoints7",
    "checkpoints8",
    "checkpoints9",
    "checkpoints10",
  ]);

  // current render models
  const [curModelList, setCurModelList] = useState<string[]>([]);

  // search models
  useEffect(() => {
    // filter by model type
  }, [selectedModel]);

  useEffect(() => {
    app.canvasEl.addEventListener("click", onClose);
    return () => {
      app.canvasEl.removeEventListener("click", onClose);
    };
  }, []);

  // input text
  // const [searchValue, setSearchValue] = useState("");

  const DRAWER_WIDTH = 440;
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
          <ModelsTags
            modelTypeList={modelTypeList}
            setSelectedModel={setSelectedModel}
            selectedModel={selectedModel}
          />
          <ModelsList list={curModelList} />
        </Card>
      </Box>
    </Portal>
  );
}
