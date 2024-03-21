import {
  Box,
  Card,
  Flex,
  Heading,
  Spinner,
  Portal,
  Input,
  Select,
  HStack,
  Button,
} from "@chakra-ui/react";
import Fuse from "fuse.js/min-basic";
import { useEffect, useState } from "react";
import { ModelsTags } from "./ModelsTags";
import { ModelsList } from "./ModelsList";
// @ts-expect-error ComfyUI imports
import { app } from "/scripts/app.js";
import InstallModelsButton from "../install-models/InstallModelsButton";
import { type ModelsListRespItem } from "../types";
import { useUpdateModels } from "../hooks/useUpdateModels";
import { DRAWER_Z_INDEX } from "../../const";
import { indexdb } from "../../db-tables/indexdb";
import { type Model } from "../../types/dbTypes";
import ModelDropEventListener from "../topbar/ModelDropEventListener";
import ModelsListSettingsModal from "./Model-list-settings/ModelsListSettingsModal";
import { IconSettings } from "@tabler/icons-react";
import { useModelListSettings } from "./Model-list-settings/useModelListSettings";
interface Props {
  onClose: () => void;
}

export default function ModelsListDrawer({ onClose }: Props) {
  const [selectedModel, setSelectedModel] = useState("checkpoints");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [threshold] = useModelListSettings("threshold", 0.6);
  const { loading, modelTypeList, modelsList } = useUpdateModels();
  const [modelsListWithDBData, setModelsListWithDBData] = useState<
    Array<{ db?: Model } & ModelsListRespItem>
  >([]);

  // current render models
  const [curModelList, setCurModelList] = useState<ModelsListRespItem[]>([]);
  useEffect(() => {
    getDbModels();
    async function getDbModels() {
      const models = await indexdb.models.toArray();
      setModelsListWithDBData(
        modelsList.map((item) => ({
          ...item,
          db: models.find(
            (model) => model.id === item.model_name + "@" + item.model_type,
          ),
        })),
      );
    }
  }, [modelsList]);

  // filter by model type
  useEffect(() => {
    let res = modelsListWithDBData.filter(
      (item) => item.model_type === selectedModel,
    );
    if (!searchQuery.length) {
      res = res.sort((a, b) => {
        if (sortBy === "name") {
          return a.model_name.localeCompare(b.model_name);
        } else {
          return b.date.getTime() - a.date.getTime();
        }
      });
    } else {
      const fuse = new Fuse(res, {
        // getDbModels() will get the models from the indexdb
        keys: ["model_name", "db.modelName"],
        threshold,
        ignoreLocation: true,
      });
      const results = fuse.search(searchQuery);
      res = results.map((result) => result.item);
    }
    setCurModelList(res);
  }, [
    selectedModel,
    modelsList,
    searchQuery,
    sortBy,
    modelsListWithDBData,
    threshold,
  ]);

  useEffect(() => {
    app.canvasEl.addEventListener("click", onClose);
    return () => {
      app.canvasEl.removeEventListener("click", onClose);
    };
  }, [onClose]);

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
          zIndex={DRAWER_Z_INDEX}
          overflowY={"auto"}
        >
          <Flex justifyContent={"space-between"} alignContent={"center"} py={3}>
            <Heading size={"md"} mr={2}>
              Models
            </Heading>

            <InstallModelsButton />
            <Button onClick={() => setIsSettingsOpen(true)} fontSize={16}>
              <IconSettings size={16} /> Settings
            </Button>
          </Flex>

          <Flex gap={4} justifyContent={"center"} alignItems={"center"} mb={1}>
            <Input
              size={"sm"}
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Flex>
          <Flex
            gap={4}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={1}
          >
            {!searchQuery.length && (
              <HStack>
                <span>Sort By</span>
                <Select
                  value={sortBy}
                  size={"sm"}
                  width={"120px"}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Name</option>
                  <option value="date">Date</option>
                </Select>
              </HStack>
            )}
          </Flex>
          <ModelsTags
            modelTypeList={modelTypeList}
            setSelectedModel={setSelectedModel}
            selectedModel={selectedModel}
          />
          <ModelsList list={curModelList} />
          {loading && (
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
            >
              <Spinner />
            </Flex>
          )}
        </Card>
        <ModelDropEventListener />
      </Box>
      {isSettingsOpen && (
        <ModelsListSettingsModal onClose={() => setIsSettingsOpen(false)} />
      )}
    </Portal>
  );
}
