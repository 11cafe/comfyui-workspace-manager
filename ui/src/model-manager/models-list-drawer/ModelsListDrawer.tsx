import { Box, Card, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ModelsTags } from "./ModelsTags";
import { ModelsList } from "./ModelsList";
import SearchInput from "../../components/SearchInput";
// @ts-ignore
import { app } from "/scripts/app.js";
interface Props {
  onClose: () => void;
}

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
    <Box style={{ width: DRAWER_WIDTH }}>
      <Card
        width={DRAWER_WIDTH}
        height={"100vh"}
        pl={4}
        pr={5}
        pt={4}
        gap={4}
        position={"absolute"}
        top={0}
        left={0}
        shadow={"xl"}
        zIndex={1000}
        overflow="auto"
      >
        {/* <SearchInput
          searchValue={searchValue}
          onUpdateSearchValue={setSearchValue}
        /> */}
        <ModelsTags
          modelTypeList={modelTypeList}
          setSelectedModel={setSelectedModel}
          selectedModel={selectedModel}
        />
        <ModelsList list={curModelList} />
      </Card>
    </Box>
  );
}
