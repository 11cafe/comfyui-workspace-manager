import { MetaData } from "../utils.ts";
import { Media } from "../../types/dbTypes.ts";
import {
  Button,
  Flex,
  IconButton,
  Link,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  IconDownload,
  IconPin,
  IconPinFilled,
  IconTrash,
} from "@tabler/icons-react";
import { formatTimestamp } from "../../utils.tsx";
import { mediaTable, workflowsTable } from "../../db-tables/WorkspaceDB.ts";
import { useContext, useEffect, useState } from "react";
import { GalleryContext } from "../GalleryContext.ts";
import { WorkspaceContext } from "../../WorkspaceContext.ts";
import { useDialog } from "../../components/AlertDialogProvider.tsx";

export type MediaWithMetaData = Media & {
  metaData?: MetaData;
};
export const GalleryRightColHeaderButtons = ({
  media,
}: {
  media?: MediaWithMetaData;
}) => {
  const [isCover, setIsCover] = useState(false);
  const { setMediaList } = useContext(GalleryContext);
  const { loadFilePath } = useContext(WorkspaceContext);
  const { showDialog } = useDialog();

  useEffect(() => {
    setIsCover(
      media?.localPath != null &&
        workflowsTable?.curWorkflow?.coverMediaPath === media?.localPath,
    );
  }, [media]);
  if (!media) return null;
  return (
    <Flex flexWrap={"wrap"} gap={3}>
      <Flex alignItems={"center"} gap={2}>
        {media.localPath && (
          <>
            <Text>{media?.localPath}</Text>
            <Tooltip label="Donwload image from gallery">
              <Link
                href={`/workspace/view_media?filename=${media?.localPath}`}
                download={media?.localPath}
              >
                <IconButton
                  size={"sm"}
                  icon={<IconDownload size={19} />}
                  aria-label="donwload image from gallery"
                />
              </Link>
            </Tooltip>
          </>
        )}
      </Flex>
      <Flex gap={1} alignItems={"center"} color={"GrayText"}>
        {!!media?.createTime && (
          <Text>{formatTimestamp(media?.createTime ?? 0, true)}</Text>
        )}
      </Flex>

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
            setMediaList((prev) => prev.filter((v) => v.id !== media.id));
          }}
        />
      </Tooltip>
      {workflowsTable?.curWorkflow?.id && (
        <Tooltip label="Set as cover">
          <IconButton
            size={"sm"}
            variant={"ghost"}
            icon={isCover ? <IconPinFilled size={19} /> : <IconPin size={19} />}
            aria-label="set as cover"
            onClick={async () => {
              await workflowsTable?.updateMetaInfo(
                workflowsTable!.curWorkflow!.id,
                {
                  coverMediaPath: isCover ? undefined : media.localPath,
                },
              );
              setIsCover(!isCover);
            }}
          />
        </Tooltip>
      )}
      <Button
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
    </Flex>
  );
};
