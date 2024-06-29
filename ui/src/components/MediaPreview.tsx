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
  objectFit?: "cover" | "contain";
};
export default function MediaPreview({
  mediaLocalPath,
  size,
  isPreview,
  autoPlay,
  hideBrokenImage,
  objectFit,
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
        if (response.status == 404) {
          setIsVisible(false);
          onBrokenLink?.();
          return;
        }
      } catch (error) {
        console.error("Error checking media exists", error);
      }
    };

    hideBrokenImage && checkMediaExists();
  }, []);

  if (!isVisible) return null;
  return isImageFormat(mediaLocalPath) ? (
    <Image
      borderRadius={3}
      boxSize={`${size}px`}
      objectFit={objectFit ?? "cover"}
      src={`/workspace/view_media?filename=${mediaLocalPath}`}
      alt="workflow image renamed or moved from output folder"
    />
  ) : null;
}
