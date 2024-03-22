import React from "react";
import { Flex, IconButton, Image } from "@chakra-ui/react";
import { isImageFormat } from "../../utils.tsx";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type Media = {
  id: string;
  imageUrl: string;
};

interface CarouselProps {
  media: Media[];
  currentNum: number;
  setMediaAct: (media: Media) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  setMediaAct,
  media,
  currentNum,
}) => {
  const paginate = (newDirection: number) => {
    const cur = (currentNum + newDirection + media.length) % media.length;
    if (setMediaAct) {
      setMediaAct(media[cur]);
    }
  };

  const imageSize = {
    width: "100%", // Adjust the width as needed
    height: "100%", // Adjust the height as needed
  };

  if (media.length === 0)
    return <p>No images found, let's start generating 🪄</p>;
  const item = media.at(currentNum);
  if (!item) return null;
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="relative"
      width={imageSize.width}
      height={imageSize.height}
      overflow="hidden"
    >
      <div
        key={item.id}
        style={{
          position: "absolute",
          cursor: "pointer",
          width: "100%",
          height: "100%",
        }}
        onClick={() => {
          window.open(item.imageUrl);
        }}
      >
        {isImageFormat(item.imageUrl) ? (
          <Image
            src={item.imageUrl}
            alt={`image-${item.id}`}
            width={"100%"}
            height={"100%"}
            objectFit="contain"
          />
        ) : (
          <video
            style={{ objectFit: "contain" }}
            width={"100%"}
            height={"100%"}
            src={item.imageUrl}
            loop={true}
            autoPlay={true}
            muted={true}
          >
            <track kind="captions" />
          </video>
        )}
      </div>

      <IconButton
        size={"sm"}
        color={"white"}
        bgColor="whiteAlpha.400"
        aria-label="Previous image"
        icon={<IconChevronLeft />}
        onClick={() => paginate(-1)}
        position="absolute"
        left="0"
        zIndex="2"
      />
      <IconButton
        size={"sm"}
        color={"white"}
        bgColor="whiteAlpha.400"
        aria-label="Next image"
        icon={<IconChevronRight />}
        onClick={() => paginate(1)}
        position="absolute"
        right="0"
        zIndex="2"
      />
    </Flex>
  );
};

export default Carousel;
