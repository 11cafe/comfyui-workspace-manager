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
import {
  IconDownload,
  IconPin,
  IconPinFilled,
  IconTrash,
} from "@tabler/icons-react";
import { mediaTable, workflowsTable } from "../../db-tables/WorkspaceDB";
import { WorkspaceContext } from "../../WorkspaceContext";
import { useDialog } from "../../components/AlertDialogProvider";
import MediaPreview from "../../components/MediaPreview";

interface GalleryMediaItemProps {
  media: Media;
  isSelecting: boolean;
  selectedID: string[];
  onClickMedia: (media: Media) => void;
  onRefreshImagesList: () => void;
  coverPath: string;
  setCoverPath: (path: string) => void;
}

const GalleryMediaItem: React.FC<GalleryMediaItemProps> = ({
  media,
  isSelecting,
  selectedID,
  onClickMedia,
  onRefreshImagesList,
  coverPath,
  setCoverPath,
}) => {
  const IMAGE_SIZE = 180; // Define your image size
  const { curFlowID, loadFilePath } = useContext(WorkspaceContext);
  const { showDialog } = useDialog();
  if (media.localPath == null) {
    return null;
  }
  const isCover = coverPath != null && coverPath === media.localPath;
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
          // setIsVisible(false);
        }}
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
        <Tooltip label="Set as cover">
          <IconButton
            size={"sm"}
            variant={"ghost"}
            icon={isCover ? <IconPinFilled size={19} /> : <IconPin size={19} />}
            aria-label="set as cover"
            onClick={() => {
              workflowsTable?.updateMetaInfo(curFlowID, {
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
                await workflowsTable?.updateMetaInfo(curFlowID, {
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

export default GalleryMediaItem;
