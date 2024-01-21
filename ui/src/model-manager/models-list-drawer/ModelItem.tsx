import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { ModelsListRespItem } from "../types";
import { useEffect, useState } from "react";
import { indexdb } from "../../db-tables/indexdb";
import { Model } from "../../types/dbTypes";

interface Props {
  data: ModelsListRespItem;
}

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
        const json = await resp.json();
        const image = json?.images?.at(0);
        const image_url = image?.url;
        image_url && setUrl(image_url);

        indexdb.models.add({
          id: data.model_name + "@" + data.model_type,
          fileHash: data.file_hash,
          fileFolder: data.model_type,
          fileName: data.model_name,
          civitModelID: json.modelId,
          civitModelVersionID: json.id,
          imageUrl: image_url ?? null,
        });
      } catch (e) {}
    }
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
        <Spinner />
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
    <Box position="relative" borderRadius={4}>
      <Image
        src={url}
        boxSize="100%"
        height={178}
        objectFit="cover"
        borderRadius={4}
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
        fontSize={12}
        borderBottomRightRadius={4}
        borderBottomLeftRadius={4}
      >
        {data.model_name}
      </Text>
    </Box>
  );
}
