import { Media } from "../../types/dbTypes.ts";
import { FC, useEffect, useState } from "react";
import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import Carousel from "../../components/Carousel/Carousel.tsx";
import { MetaInfoBox } from "./MetaInfoBox.tsx";

interface MetaDataInfoProps {
  media: Media;
  mediaList: Media[];
}

export const MetaDataInfo: FC<MetaDataInfoProps> = ({ mediaList, media }) => {
  const [mediaAct, setMediaAct] = useState<Media>();
  useEffect(() => {
    if (media) {
      setMediaAct(media);
    }
  }, [media]);

  return (
    <Flex gap={3} h={"100%"}>
      <Grid
        gridTemplateRows={mediaList.length <= 6 ? "1fr 20%" : "1fr"}
        flex={1}
        gap={2}
      >
        <Carousel
          media={mediaList.map((v) => ({
            id: v.id,
            imageUrl: `/workspace/view_media?filename=${v.localPath}`,
          }))}
          currentNum={mediaList?.findIndex((p) => p.id === mediaAct?.id)}
          setMediaAct={(newMedia) =>
            setMediaAct(mediaList?.find((v) => v.id === newMedia.id))
          }
        />
        {mediaList.length <= 6 && (
          <Flex>
            {mediaList?.map((media) => (
              <Box
                display={"inline-block"}
                p={2}
                borderRadius={"4px"}
                key={`image-bottom-${media.id}`}
                width={"16.6%"}
                cursor={"pointer"}
                border={mediaAct?.id === media.id ? "1px solid gray" : ""}
                onClick={() => setMediaAct(media)}
              >
                <Image
                  src={`/workspace/view_media?filename=${media.localPath}`}
                  alt={`image-bottom-${media.id}`}
                  width={"100%"}
                  height={"100%"}
                  objectFit="contain"
                />
              </Box>
            ))}
          </Flex>
        )}
      </Grid>
      <MetaInfoBox media={mediaAct} />
    </Flex>
  );
};
