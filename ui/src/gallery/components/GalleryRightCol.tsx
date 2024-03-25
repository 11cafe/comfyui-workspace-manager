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
import { IconDownload, IconPin, IconPinFilled } from "@tabler/icons-react";
import { formatTimestamp } from "../../utils.tsx";
import MetadataForm from "./MetaBox/MetadataForm.tsx";

export type MediaWithMetaData = Media & {
  metaData?: MetaData;
};
export const GalleryRightCol = ({ media }: { media?: MediaWithMetaData }) => {
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
        {/* <Tooltip label="Set as cover">
          <IconButton
            size={"sm"}
            variant={"ghost"}
            icon={isCover ? <IconPinFilled size={19} /> : <IconPin size={19} />}
            aria-label="set as cover"
            onClick={() => {
              workflowsTable?.updateMetaInfo(curFlowID, {
                coverMediaPath: media.localPath,
              });
              setCoverPath(media.localPath);
            }}
          />
        </Tooltip> */}
      </SimpleGrid>
      <MetadataForm media={media ?? null} />
    </Flex>
  );
};
