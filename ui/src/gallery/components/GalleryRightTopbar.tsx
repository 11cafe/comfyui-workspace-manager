import { MetaData } from "../utils.ts";
import { Media } from "../../types/dbTypes.ts";
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
import MetaBox from "./MetaBox/GalleryRightMetadataForm.tsx";

export type MediaWithMetaData = Media & {
  metaData?: MetaData;
};
export const MetaInfoBox = ({ media }: { media?: MediaWithMetaData }) => {
  return (
    <Flex overflowY={"auto"} mb={4} direction={"column"} gap={2} flex={1}>
      <SimpleGrid alignItems={"center"} columns={3} spacing={2}>
        <Flex alignItems={"center"} gap={1}>
          {media?.localPath && (
            <>
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
            </>
          )}
        </Flex>
        <Flex gap={1} alignItems={"center"} color={"GrayText"}>
          {!!media?.createTime && (
            <>
              <Text>Created:</Text>
              <Text>{formatTimestamp(media?.createTime ?? 0, true)}</Text>
            </>
          )}
        </Flex>
      </SimpleGrid>
      <MetaBox media={media ?? null} />
    </Flex>
  );
};