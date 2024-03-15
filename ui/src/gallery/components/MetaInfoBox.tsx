import { getMetadataFromUrl, MetaData } from "../utils.ts";
import { Media } from "../../types/dbTypes.ts";
import { useEffect, useState } from "react";
import {
  Checkbox,
  Flex,
  IconButton,
  Link,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { IconDownload } from "@tabler/icons-react";
import { formatTimestamp } from "../../utils.tsx";
import MetaBox from "./MetaBox/MetaBox.tsx";

export const MetaInfoBox = ({ media }: { media?: Media }) => {
  const [showNodeName, setShowNodeName] = useState(true);
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
      <SimpleGrid alignItems={"center"} columns={3} spacing={2}>
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
        <Flex>
          <Checkbox
            isChecked={showNodeName}
            onChange={(e) => setShowNodeName(e.target.checked)}
          >
            show node name
          </Checkbox>
        </Flex>
      </SimpleGrid>
      {media && mediaMetaData && (
        <MetaBox
          showNodeName={showNodeName}
          metaData={mediaMetaData}
          media={media}
        />
      )}
    </Flex>
  );
};
