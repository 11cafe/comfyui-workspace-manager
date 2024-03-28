import { Media } from "../../types/dbTypes.ts";
import { useContext } from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
import Carousel from "../../components/Carousel/Carousel.tsx";
import { GalleryRightCol } from "./GalleryRightCol.tsx";
import MediaPreview from "../../components/MediaPreview.tsx";
import { mediaTable } from "../../db-tables/WorkspaceDB.ts";
import { GalleryContext } from "../GalleryContext.ts";

interface MetaDataInfoProps {
  mediaList: Media[];
}
const GALLERY_IMAGE_SIZE = 120;
export function GalleryCarouselImageViewer({ mediaList }: MetaDataInfoProps) {
  const { curMedia, setCurMedia } = useContext(GalleryContext);

  return (
    <Flex gap={3} h={"100%"}>
      <Grid
        gridTemplateRows={mediaList.length <= 6 ? "1fr 20%" : "1fr"}
        flex={1}
        gap={2}
      >
        <div style={{ height: "56vh" }}>
          <Carousel
            media={mediaList.map((v) => ({
              id: v.id,
              imageUrl: `/workspace/view_media?filename=${v.localPath}`,
            }))}
            currentNum={mediaList?.findIndex((p) => p.id === curMedia?.id) ?? 0}
            setMediaAct={(newMedia) =>
              setCurMedia(mediaList?.find((v) => v.id === newMedia.id) ?? null)
            }
          />
        </div>
        <Flex wrap={"wrap"}>
          {mediaList?.map((media) => (
            <Box
              display={"inline-block"}
              p={1}
              borderRadius={"4px"}
              key={`image-bottom-${media.id}`}
              width={`${GALLERY_IMAGE_SIZE + 3}px`}
              height={`${GALLERY_IMAGE_SIZE + 3}px`}
              cursor={"pointer"}
              border={curMedia?.id === media.id ? "1px solid gray" : ""}
              onClick={() => setCurMedia(media)}
            >
              <MediaPreview
                mediaLocalPath={media.localPath}
                size={GALLERY_IMAGE_SIZE}
                objectFit="contain"
                hideBrokenImage
                onBrokenLink={() => {
                  mediaTable?.delete(media.id);
                }}
              />
            </Box>
          ))}
        </Flex>
      </Grid>
      <GalleryRightCol media={curMedia ?? undefined} />
    </Flex>
  );
}
