import { Media } from "../../types/dbTypes.ts";
import { FC, useEffect, useState } from "react";
import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import Carousel from "../../components/Carousel/Carousel.tsx";
import { MetaInfoBox } from "./GalleryRightTopbar.tsx";
import MediaPreview from "../../components/MediaPreview.tsx";

interface MetaDataInfoProps {
  media: Media | null;
  mediaList: Media[];
}
const GALLERY_IMAGE_SIZE = 120;
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
          currentNum={mediaList?.findIndex((p) => p.id === mediaAct?.id) ?? 0}
          setMediaAct={(newMedia) =>
            setMediaAct(mediaList?.find((v) => v.id === newMedia.id))
          }
        />

        <Flex wrap={"wrap"}>
          {mediaList?.map((media) => (
            <Box
              display={"inline-block"}
              p={2}
              borderRadius={"4px"}
              key={`image-bottom-${media.id}`}
              width={`${GALLERY_IMAGE_SIZE + 3}px`}
              height={`${GALLERY_IMAGE_SIZE + 3}px`}
              cursor={"pointer"}
              border={mediaAct?.id === media.id ? "1px solid gray" : ""}
              onClick={() => setMediaAct(media)}
            >
              <MediaPreview
                mediaLocalPath={media.localPath}
                size={GALLERY_IMAGE_SIZE}
                objectFit="contain"
              />
            </Box>
          ))}
        </Flex>
      </Grid>
      <MetaInfoBox media={mediaAct} />
    </Flex>
  );
};
