import { Image } from "@chakra-ui/react";
import { isImageFormat } from "../utils";
import { useEffect, useState } from "react";

type Props = {
  mediaLocalPath: string;
  size: number;
  autoPlay?: boolean;
  onBrokenLink?: () => void;
  hideBrokenImage?: boolean;
  isPreview?: boolean;
};
export default function MediaPreview({
  mediaLocalPath,
  size,
  isPreview,
  autoPlay,
  hideBrokenImage,
  onBrokenLink,
}: Props) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkMediaExists = async () => {
      try {
        const response = await fetch(
          isPreview
            ? `/workspace/preview_media?filename=${mediaLocalPath}`
            : `/workspace/view_media?filename=${mediaLocalPath}`,
        );
        if (!response.ok) throw new Error("Media not found");
        setIsVisible(true);
      } catch (error) {
        setIsVisible(false);
        onBrokenLink?.();
      }
    };

    hideBrokenImage && checkMediaExists();
  }, []);

  if (!isVisible) return null;
  return isImageFormat(mediaLocalPath) ? (
    <Image
      borderRadius={3}
      boxSize={`${size}px`}
      objectFit="cover"
      src={`/workspace/view_media?filename=${mediaLocalPath}`}
      alt="workflow image renamed or moved from output folder"
    />
  ) : (
    <div
      style={{
        width: size + "px",
        height: size + `px`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <video
        width={size}
        height={size}
        src={`/workspace/view_media?filename=${mediaLocalPath}`}
        loop={true}
        autoPlay={autoPlay ?? false}
        muted={true}
        style={{
          // for video to crop to center
          objectFit: "cover",
          width: "100%",
          height: "100%",
          // position: "absolute",
          // top: "50%", // Align the center of the video with the center of the container vertically
          // left: "50%", // Align the center of the video with the center of the container horizontally
          // transform: "translate(-50%, -50%)", // Offset the video to ensure it is centered
        }}
      >
        <track kind="captions" />
      </video>
    </div>
  );
}
