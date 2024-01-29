import { Media } from "../../types/dbTypes.ts";
import { FC, useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
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
      <Flex flex={1}>
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
      </Flex>
      <MetaInfoBox media={mediaAct} />
    </Flex>
  );
};
