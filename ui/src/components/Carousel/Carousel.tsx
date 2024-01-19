import React, { useEffect, useState } from "react";
import { Button, Flex, IconButton, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { isImageFormat } from "../../utils.tsx";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type Media = {
  id: string;
  imageUrl: string;
};

interface CarouselProps {
  media: Media[];
  currentNum?: number;
  setMediaAct?: (media: Media) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  setMediaAct,
  media,
  currentNum,
}) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (currentNum !== undefined) {
      setCurrent(currentNum);
    }
  }, [currentNum]);

  const paginate = (newDirection: number) => {
    const cur = (current + newDirection + media.length) % media.length;
    setCurrent(cur);
    if (setMediaAct) {
      setMediaAct(media[cur]);
    }
  };

  const imageSize = {
    width: "100%", // Adjust the width as needed
    height: "100%", // Adjust the height as needed
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 1,
    }),
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="relative"
      width={imageSize.width}
      height={imageSize.height}
      overflow="hidden"
    >
      <AnimatePresence custom={current}>
        {media.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index - current}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            style={{
              position: "absolute",
              cursor: "pointer",
              width: "100%",
              height: "100%",
              display: index === current ? "block" : "none",
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
          </motion.div>
        ))}
      </AnimatePresence>
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
