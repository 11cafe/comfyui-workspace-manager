import React, { useState, useEffect, useContext } from "react";
import {
  Link,
  Checkbox,
  Image,
  Stack,
  HStack,
  Tooltip,
  IconButton,
  Text,
  Button,
} from "@chakra-ui/react";
import { formatTimestamp, isImageFormat } from "../../utils";
import { Media } from "../../types/dbTypes";
import {
  IconDownload,
  IconPin,
  IconPinFilled,
  IconTrash,
} from "@tabler/icons-react";
import { mediaTable, workflowsTable } from "../../db-tables/WorkspaceDB";
import { WorkspaceContext } from "../../WorkspaceContext";
import { useDialog } from "../../components/AlertDialogProvider";

interface MediaPreviewProps {
  media: Media;
  isSelecting: boolean;
  selectedID: string[];
  onClickMedia: (media: Media) => void;
  onRefreshImagesList: () => void;
  coverPath: string;
  setCoverPath: (path: string) => void;
}

const MediaPreview: React.FC<MediaPreviewProps> = ({
  media,
  isSelecting,
  selectedID,
  onClickMedia,
  onRefreshImagesList,
  coverPath,
  setCoverPath,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const IMAGE_SIZE = 150; // Define your image size
  const { curFlowID, loadFilePath } = useContext(WorkspaceContext);
  const { showDialog } = useDialog();

  useEffect(() => {
    const checkMediaExists = async () => {
      try {
        const response = await fetch(
          `/workspace/view_media?filename=${media.localPath}`,
        );
        if (!response.ok) throw new Error("Media not found");
        setIsVisible(true);
      } catch (error) {
        setIsVisible(false);
      }
    };

    checkMediaExists();
  }, [media.localPath]);

  if (!isVisible) return null;
  if (media.localPath == null) {
    return null;
  }
  const isCover = coverPath != null && coverPath === media.localPath;
  if (curFlowID == null) {
    return null;
  }
  const mediaPreview = isImageFormat(media.localPath) ? (
    <Link isExternal onClick={() => onClickMedia(media)} position="relative">
      {isSelecting && (
        <Checkbox
          isChecked={selectedID.includes(media.id)}
          position="absolute"
          top={2}
          left={2}
        />
      )}
      <Image
        borderRadius={3}
        boxSize={`${IMAGE_SIZE}px`}
        objectFit="cover"
        src={`/workspace/view_media?filename=${media.localPath}`}
        alt="workflow image renamed or moved from output folder"
      />
    </Link>
  ) : (
    <Link isExternal onClick={() => onClickMedia(media)}>
      {isSelecting && <Checkbox isChecked={selectedID.includes(media.id)} />}
      <video
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        src={`/workspace/view_media?filename=${media.localPath}`}
        loop={true}
        autoPlay={true}
        muted={true}
      >
        <track kind="captions" />
      </video>
    </Link>
  );

  return (
    <Stack width={IMAGE_SIZE} justifyContent={"space-between"} mb={2}>
      <Tooltip label={formatTimestamp(media.createTime, true)}>
        {mediaPreview}
      </Tooltip>
      <Tooltip label={media.localPath}>
        <Text color={"GrayText"} noOfLines={1}>
          {media.localPath}
        </Text>
      </Tooltip>
      <HStack justifyContent={"space-between"} hidden={isSelecting}>
        <Tooltip label="Set as cover">
          <IconButton
            size={"sm"}
            variant={"ghost"}
            icon={isCover ? <IconPinFilled size={19} /> : <IconPin size={19} />}
            aria-label="set as cover"
            isActive={isCover}
            onClick={() => {
              workflowsTable?.updateFlow(curFlowID, {
                coverMediaPath: media.localPath,
              });
              setCoverPath(media.localPath);
            }}
          />
        </Tooltip>
        <Button
          flexGrow={1}
          onClick={() =>
            showDialog("How do you want to load this workflow?", [
              {
                label: "Load in new workflow",
                onClick: () => {
                  loadFilePath(media.localPath);
                },
                colorScheme: "teal",
              },
              {
                label: "Overwrite current workflow",
                onClick: () => loadFilePath(media.localPath, true),
                colorScheme: "red",
              },
            ])
          }
          size={"sm"}
        >
          Load
        </Button>
        <Tooltip label="Donwload image from gallery">
          <Link
            href={`/workspace/view_media?filename=${media.localPath}`}
            download={media.localPath}
          >
            <IconButton
              size={"sm"}
              variant={"ghost"}
              icon={<IconDownload size={19} />}
              aria-label="donwload image from gallery"
            />
          </Link>
        </Tooltip>
        <Tooltip label="Remove image from gallery">
          <IconButton
            size={"sm"}
            variant={"ghost"}
            icon={<IconTrash size={19} />}
            aria-label="remove image from gallery"
            colorScheme="red"
            onClick={async () => {
              const res = confirm(
                "Are you sure to remove this image from gallery? (won't delete image on your disk)",
              );
              if (!res) return;
              await mediaTable?.delete(media.id);
              if (isCover) {
                await workflowsTable?.updateFlow(curFlowID, {
                  coverMediaPath: undefined,
                });
                setCoverPath("");
              }
              onRefreshImagesList();
            }}
          />
        </Tooltip>
      </HStack>
    </Stack>
  );
};

export default MediaPreview;
