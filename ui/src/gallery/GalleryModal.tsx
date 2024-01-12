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
  Heading,
  Checkbox,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { getWorkflow, mediaTable, updateFlow } from "../db-tables/WorkspaceDB";
import {
  IconDownload,
  IconPin,
  IconPinFilled,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import { WorkspaceContext } from "../WorkspaceContext";
import { formatTimestamp, isImageFormat } from "../utils";
import { useDialog } from "../components/AlertDialogProvider";
import { Media } from "../types/dbTypes";
const IMAGE_SIZE = 200;
export default function GalleryModal({ onclose }: { onclose: () => void }) {
  const { curFlowID, loadNewWorkflow, loadFilePath } =
    useContext(WorkspaceContext);
  const workflow = curFlowID != null ? getWorkflow(curFlowID) : null;
  const [selectedID, setSelectedID] = useState<string[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);
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
  const onClickMedia = (media: Media) => {
    if (isSelecting) {
      if (selectedID.includes(media.id)) {
        setSelectedID(selectedID.filter((id) => id !== media.id));
      } else {
        setSelectedID([...selectedID, media.id]);
      }
      return;
    }
    window.open(`/workspace/view_media?filename=${media.localPath}`);
  };
  const isAllSelected =
    images.length > 0 && selectedID.length === images.length;
  return (
    <Modal isOpen={true} onClose={onclose} blockScrollOnMount={true}>
      <ModalOverlay />
      <ModalContent width={"90%"} maxWidth={"90vw"} height={"90vh"}>
        <ModalHeader>
          <HStack gap={2} mb={2}>
            <Heading size={"md"} mr={2}>
              Gallery - {workflow?.name}
            </Heading>
            {/* <Button
              size={"sm"}
              colorScheme="pink"
              onClick={() => {
                setIsSelecting(true);
                setSelectedID(images.map((i) => i.id));
              }}
            >
              Share{" "}
              {isSelecting && selectedID.length > 0 ? selectedID.length : ""}
            </Button> */}
          </HStack>
          {isSelecting && (
            <HStack gap={3}>
              <Checkbox
                isChecked={isAllSelected}
                onChange={() => {
                  if (isAllSelected) {
                    setSelectedID([]);
                  } else {
                    setSelectedID(images.map((i) => i.id));
                  }
                }}
              >
                All
              </Checkbox>
              <Text fontSize={16}>{selectedID.length} Selected</Text>
              <IconButton
                size={"sm"}
                icon={<IconX size={19} />}
                onClick={() => setIsSelecting(false)}
                aria-label="cancel"
              />
            </HStack>
          )}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY={"auto"}>
          <HStack wrap={"wrap"}>
            {images.map((media) => {
              if (media.localPath == null) {
                return null;
              }
              const mediaPreview = isImageFormat(media.localPath) ? (
                <Link
                  isExternal
                  onClick={() => onClickMedia(media)}
                  position={"relative"}
                >
                  {isSelecting && (
                    <Checkbox
                      isChecked={selectedID.includes(media.id)}
                      position={"absolute"}
                      top={2}
                      left={2}
                    />
                  )}
                  <Image
                    borderRadius={3}
                    boxSize={IMAGE_SIZE + "px"}
                    objectFit="cover"
                    src={`/workspace/view_media?filename=${media.localPath}`}
                    alt={"workflow image renamed or moved from output folder"}
                  />
                </Link>
              ) : (
                <Link isExternal onClick={() => onClickMedia(media)}>
                  {isSelecting && (
                    <Checkbox isChecked={selectedID.includes(media.id)} />
                  )}
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
                  <HStack justifyContent={"space-between"} hidden={isSelecting}>
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
                    <Tooltip label="Download image">
                      <Link
                        href={`/workspace/view_media?filename=${media.localPath}`}
                        download={media.localPath}
                      >
                        <IconButton
                          size={"sm"}
                          variant={"ghost"}
                          icon={<IconDownload size={19} />}
                          aria-label="remove image from gallery"
                          colorScheme="red"
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
