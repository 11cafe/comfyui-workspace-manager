import {
  Button,
  HStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Link,
  Stack,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { getWorkflow, mediaTable, updateFlow } from "../WorkspaceDB";
import { IconPin, IconPinFilled, IconTrash } from "@tabler/icons-react";
import { WorkspaceContext } from "../WorkspaceContext";
import { formatTimestamp, isImageFormat } from "../utils";
import { useDialog } from "../components/AlertDialogProvider";
import { Media } from "../db-tables/MediaTable";
const IMAGE_SIZE = 200;
export default function GalleryModal({ onclose }: { onclose: () => void }) {
  const { curFlowID, loadNewWorkflow, loadFilePath } =
    useContext(WorkspaceContext);
  const workflow = curFlowID != null ? getWorkflow(curFlowID) : null;

  const [coverPath, setCoverPath] = useState(workflow?.coverMediaPath);
  const [images, setImages] = useState<Media[]>([]);
  const { showDialog } = useDialog();
  const loadData = async () => {
    if (curFlowID == null) return;

    const media = await mediaTable?.listByWorkflowID(curFlowID);
    setImages(media ?? []);
  };
  useEffect(() => {
    loadData();
  }, []);

  if (curFlowID == null) {
    return null;
  }

  const onRefreshImagesList = () => {
    loadData();
  };
  return (
    <Modal isOpen={true} onClose={onclose} blockScrollOnMount={true}>
      <ModalOverlay />
      <ModalContent width={"90%"} maxWidth={"90vw"} height={"90vh"}>
        <ModalHeader>Gallery - {workflow?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY={"auto"}>
          <HStack wrap={"wrap"}>
            {images.map((media) => {
              if (media.localPath == null) {
                return null;
              }
              const mediaPreview = isImageFormat(media.localPath) ? (
                <Link
                  href={`/workspace/view_media?filename=${media.localPath}`}
                  isExternal
                >
                  <Image
                    borderRadius={3}
                    boxSize={IMAGE_SIZE + "px"}
                    objectFit="cover"
                    src={`/workspace/view_media?filename=${media.localPath}`}
                    alt={"workflow image renamed or moved from output folder"}
                  />
                </Link>
              ) : (
                <Link
                  href={`/workspace/view_media?filename=${media.localPath}`}
                  isExternal
                >
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
              const isCover =
                coverPath != null && coverPath === media.localPath;
              return (
                <Stack
                  width={IMAGE_SIZE}
                  justifyContent={"space-between"}
                  mb={2}
                >
                  <Tooltip label={formatTimestamp(media.createTime, true)}>
                    {mediaPreview}
                  </Tooltip>
                  <Tooltip label={media.localPath}>
                    <Text color={"GrayText"} noOfLines={1}>
                      {media.localPath}
                    </Text>
                  </Tooltip>
                  <HStack justifyContent={"space-between"}>
                    <Tooltip label="Set as cover">
                      <IconButton
                        size={"sm"}
                        variant={"ghost"}
                        icon={
                          isCover ? (
                            <IconPinFilled size={19} />
                          ) : (
                            <IconPin size={19} />
                          )
                        }
                        aria-label="set as cover"
                        isActive={isCover}
                        onClick={() => {
                          updateFlow(curFlowID, {
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
                    <Tooltip label="Remove image from gallery">
                      <IconButton
                        size={"sm"}
                        variant={"ghost"}
                        icon={<IconTrash size={19} />}
                        aria-label="remove image from gallery"
                        colorScheme="red"
                        onClick={() => {
                          const res = confirm(
                            "Are you sure to remove this image from gallery? (won't delete image on your disk)"
                          );
                          if (!res) return;
                          mediaTable?.delete(media.id);
                          if (isCover) {
                            updateFlow(curFlowID, {
                              coverMediaPath: undefined,
                            });
                            setCoverPath(undefined);
                          }
                          onRefreshImagesList();
                        }}
                      />
                    </Tooltip>
                  </HStack>
                </Stack>
              );
            })}
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
