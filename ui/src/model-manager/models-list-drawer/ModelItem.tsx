import { Box, Image, Text } from "@chakra-ui/react";
import { ModelsListRespItem } from "../types";
import { useEffect, useState } from "react";

interface Props {
  data: ModelsListRespItem;
}

export function ModelItem({ data }: Props) {
  const [url, setUrl] = useState(
    "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/27fd7433-cb0a-4a87-88c1-21ccb2b1a842/width=450/00060-881622046.jpeg"
  );

  useEffect(() => {
    getThumbnail();
  }, []);

  const getThumbnail = async () => {
    // if local storage has the thumbnail, use it
    // else, fetch it from the server
    const key = `thumbnail-${data.model_name}`;
    const thumbnail = localStorage.getItem(key);

    // check is a valid url
    let valid_url = false;
    const reg =
      /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
    if (thumbnail) {
      valid_url = reg.test(thumbnail);
    }

    if (thumbnail && valid_url) {
      setUrl(thumbnail);
    } else {
      const resp = await fetch(
        `https://civitai.com/api/v1/model-versions/by-hash/${data.file_hash}`
      );
      const json = await resp.json();
      console.log(json);
      const image = json?.images[0];
      console.log(image);
      const image_url = image?.url;
      setUrl(image_url || url);
      if (image_url) {
        localStorage.setItem(key, image_url);
      }
    }
  };

  return (
    <Box position="relative" borderRadius={4}>
      <Image src={url} boxSize="100%" height={178} objectFit="cover" borderRadius={4} />
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
