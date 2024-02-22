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
    <video
      width={size}
      height={size}
      src={`/workspace/view_media?filename=${mediaLocalPath}`}
      loop={true}
      autoPlay={autoPlay ?? false}
      muted={true}
    >
      <track kind="captions" />
    </video>
  );
}
