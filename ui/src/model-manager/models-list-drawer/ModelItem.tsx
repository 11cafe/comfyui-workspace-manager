import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { ModelsListRespItem } from "../types";
import { useEffect, useState } from "react";
import { indexdb } from "../../db-tables/indexdb";
import { Model } from "../../types/dbTypes";
import type { DragEvent } from "react";

import { userSettingsTable } from "../../db-tables/WorkspaceDB";

interface ResponsePartial {
  id: number;
  modelId: number;
  name: string;
  model: {
    name: string;
    type: string;
    nsfw: boolean;
  };
  images: {
    url: string;
    nsfw: "None" | "Soft" | "Mature" | "X";
    width: number;
    height: number;
    hash: string;
  }[];
}

interface Props {
  data: ModelsListRespItem;
}

const MODEL_TYPE_TO_NODE_MAPPING: Record<string, string> = {
  checkpoints: "CheckpointLoaderSimple",
  vae: "VAELoader",
  loras: "LoraLoader",
  controlnet: "ControlNetLoader",
  upscale_models: "UpscaleModelLoader",
};

export function ModelItem({ data }: Props) {
  const [url, setUrl] = useState(
    "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/27fd7433-cb0a-4a87-88c1-21ccb2b1a842/width=450/00060-881622046.jpeg",
  );
  const [hashing, setHashing] = useState(!data.file_hash);
  const [model, setModel] = useState<Model>();

  useEffect(() => {
    setHashing(!data.file_hash);
    getThumbnail();
  }, [data.file_hash]);

  const getThumbnail = async () => {
    const model = await indexdb.models.get(
      data.model_name + "@" + data.model_type,
    );
    if (model != null) {
      setModel(model);
      model.imageUrl?.length && setUrl(model.imageUrl);
    } else if (data.file_hash != null) {
      try {
        const url = `https://civitai.com/api/v1/model-versions/by-hash/${data.file_hash}`;
        const resp = await fetch(url);
        const json: ResponsePartial = await resp.json();
        let image_url: string | undefined;
        const showNsfwThumbnail = await userSettingsTable?.getSetting(
          "showNsfwModelThumbnail",
        );
        if (showNsfwThumbnail === true) {
          image_url = json?.images?.[0]?.url;
        } else if (!json.model.nsfw) {
          const sfwImage = json.images.find((i) => i.nsfw === "None");
          image_url = sfwImage?.url;
        }
        image_url && setUrl(image_url);

        indexdb.models.add({
          id: data.model_name + "@" + data.model_type,
          fileHash: data.file_hash,
          fileFolder: data.model_type,
          fileName: data.model_name + data.model_extension,
          civitModelID: String(json.modelId),
          civitModelVersionID: String(json.id),
          imageUrl: image_url ?? null,
        });
      } catch (e) {}
    }
    if (data.preview) setUrl(data.preview);
  };

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    const nodeType = MODEL_TYPE_TO_NODE_MAPPING[data.model_type];
    if (!nodeType) {
      return;
    }
    e.dataTransfer.setData("eventName", "WorkspaceManagerAddNode");
    e.dataTransfer.setData(
      "modelRelativePath",
      data.model_name + data.model_extension,
    );
    e.dataTransfer.setData("nodeType", nodeType);
  };

  if (hashing) {
    return (
      <Flex
        position="relative"
        borderRadius={4}
        bg="rgba(0, 0, 0, 0.5)"
        height={178}
        justifyContent="center"
        alignItems="center"
      >
        {hashing && <Spinner />}
        <Text
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          textAlign="center"
          p="0"
          fontSize={12}
          borderBottomRightRadius={4}
          borderBottomLeftRadius={4}
        >
          {data.model_name}
        </Text>
      </Flex>
    );
  }

  return (
    <Box
      position="relative"
      borderRadius={4}
      draggable
      onDragStart={handleDragStart}
    >
      <Image
        src={url}
        draggable={false}
        boxSize="100%"
        height={178}
        objectFit="cover"
        borderRadius={4}
        cursor={model?.civitModelID != null ? "pointer" : "auto"}
        onClick={() => {
          if (
            model?.civitModelID == null ||
            model?.civitModelVersionID == null
          ) {
            return;
          }
          window.open(
            `https://civitai.com/models/${model?.civitModelID}?modelVersionId=${model?.civitModelVersionID}`,
          );
        }}
      />
      <Text
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        textAlign="center"
        p="0"
        fontSize={14}
        borderBottomRightRadius={4}
        borderBottomLeftRadius={4}
      >
        {data.model_name}
      </Text>
    </Box>
  );
}
