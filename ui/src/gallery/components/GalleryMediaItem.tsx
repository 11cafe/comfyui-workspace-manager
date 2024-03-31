import React, { useContext } from "react";
import {
  Link,
  Checkbox,
  Stack,
  HStack,
  Tooltip,
  IconButton,
  Text,
  Button,
} from "@chakra-ui/react";
import { formatTimestamp } from "../../utils";
import { Media } from "../../types/dbTypes";
import { IconDownload, IconTrash } from "@tabler/icons-react";
import { mediaTable } from "../../db-tables/WorkspaceDB";
import { WorkspaceContext } from "../../WorkspaceContext";
import { useDialog } from "../../components/AlertDialogProvider";
import MediaPreview from "../../components/MediaPreview";

interface GalleryMediaItemProps {
  media: Media;
  isSelecting: boolean;
  selectedID: string[];
  onClickMedia: (media: Media) => void;
}

const GalleryMediaItem: React.FC<GalleryMediaItemProps> = ({
  media,
  isSelecting,
  selectedID,
  onClickMedia,
}) => {
  const IMAGE_SIZE = 180; // Define your image size
  const { curFlowID, loadFilePath } = useContext(WorkspaceContext);
  const { showDialog } = useDialog();
  if (media.localPath == null) {
    return null;
  }
  if (curFlowID == null) {
    return null;
  }
  const mediaPreview = (
    <Link isExternal onClick={() => onClickMedia(media)} position="relative">
      {isSelecting && (
        <Checkbox
          isChecked={selectedID.includes(media.id)}
          position="absolute"
          top={2}
          left={2}
        />
      )}
      <MediaPreview
        mediaLocalPath={media.localPath}
        size={IMAGE_SIZE}
        onBrokenLink={() => {
          mediaTable?.delete(media.id);
        }}
        hideBrokenImage
        autoPlay={true}
        isPreview
      />
    </Link>
  );

  return (
    <Stack width={IMAGE_SIZE} mb={2}>
      <Tooltip label={formatTimestamp(media.createTime, true)}>
        {mediaPreview}
      </Tooltip>
      <Tooltip label={media.localPath}>
        <Text color={"GrayText"} noOfLines={1}>
          {media.localPath}
        </Text>
      </Tooltip>
      <HStack hidden={isSelecting} gap={0}>
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
            }}
          />
        </Tooltip>
      </HStack>
    </Stack>
  );
};

export default GalleryMediaItem;
