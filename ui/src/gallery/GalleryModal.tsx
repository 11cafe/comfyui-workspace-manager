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
import { IconPin, IconPinFilled } from "@tabler/icons-react";
import { WorkspaceContext } from "../WorkspaceContext";
import { formatTimestamp, isImageFormat } from "../utils";
import { useDialog } from "../components/AlertDialogProvider";
const IMAGE_SIZE = 200;
export default function GalleryModal({ onclose }: { onclose: () => void }) {
  const { curFlowID, loadNewWorkflow, loadFilePath } =
    useContext(WorkspaceContext);
  const workflow = curFlowID != null ? getWorkflow(curFlowID) : null;
  const media = mediaTable?.getByWorkflowID(curFlowID ?? "");
  const [coverPath, setCoverPath] = useState(workflow?.coverMediaPath);
  const { showDialog } = useDialog();

  if (curFlowID == null) {
    return null;
  }
  return (
    <Modal isOpen={true} onClose={onclose} blockScrollOnMount={true}>
      <ModalOverlay />
      <ModalContent width={"90%"} maxWidth={"90vw"} height={"90vh"}>
        <ModalHeader>Gallery - {workflow?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY={"auto"}>
          <HStack wrap={"wrap"}>
            {media?.map((media) => {
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
                <video width={IMAGE_SIZE} height={IMAGE_SIZE} controls>
                  <source
                    src={`/workspace/view_media?filename=${media.localPath}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
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
                        icon={
                          isCover ? (
                            <IconPinFilled size={20} />
                          ) : (
                            <IconPin size={20} />
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
