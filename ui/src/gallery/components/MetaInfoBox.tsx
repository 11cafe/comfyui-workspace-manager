import { getMetadataFromUrl, MetaData } from "../utils.ts";
import { Media } from "../../types/dbTypes.ts";
import { useEffect, useState } from "react";
import { OneKSampler } from "./MetaBoxByType/OneKSampler/OneKSampler.tsx";
import {
  Flex,
  IconButton,
  Link,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { IconDownload } from "@tabler/icons-react";
import { formatTimestamp } from "../../utils.tsx";
import { MultiKSampler } from "./MetaBoxByType/MultiKSampler/MultiKSampler.tsx";
import { isMultiKSampler } from "./MetaBoxByType/MultiKSampler/multiKSamplerTool.tsx";

export const MetaInfoBox = ({ media }: { media?: Media }) => {
  const [mediaMetaData, setMediaMetaData] = useState<MetaData>();
  const getMetaData = async (curMedia: Media) => {
    try {
      const res = await getMetadataFromUrl(
        `/workspace/view_media?filename=${curMedia.localPath}`,
      );
      setMediaMetaData(res);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    if (media) {
      getMetaData(media);
    }
  }, [media]);

  return (
    <Flex overflowY={"auto"} mb={4} direction={"column"} gap={2} flex={1}>
      <SimpleGrid alignItems={"center"} columns={2} spacing={2}>
        <Flex alignItems={"center"} gap={1}>
          <Text>{media?.localPath}</Text>
          <Tooltip label="Donwload image from gallery">
            <Link
              href={`/workspace/view_media?filename=${media?.localPath}`}
              download={media?.localPath}
            >
              <IconButton
                size={"sm"}
                icon={<IconDownload size={19} />}
                aria-label="donwload image from gallery"
              />
            </Link>
          </Tooltip>
        </Flex>
        <Flex gap={1} alignItems={"center"}>
          <Text>Create Time:</Text>
          <Text>{formatTimestamp(media?.createTime ?? 0, true)}</Text>
        </Flex>
      </SimpleGrid>
      {(() => {
        if (!media || !mediaMetaData) return null;
        const p = { metaData: mediaMetaData, media };
        return (
          (isMultiKSampler(mediaMetaData) && <MultiKSampler {...p} />) || (
            <OneKSampler {...p} />
          )
        );
      })()}
    </Flex>
  );
};
