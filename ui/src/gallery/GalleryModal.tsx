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
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import {
  Tag,
  Workflow,
  getWorkflow,
  mediaTable,
  tagsTable,
  updateFlow,
} from "../WorkspaceDB";
import { IconPinFilled, IconSettings, IconTrash } from "@tabler/icons-react";
import { WorkspaceContext } from "../WorkspaceContext";
import { formatTimestamp, isImageFormat } from "../utils";
const IMAGE_SIZE = 200;
export default function GalleryModal({ onclose }: { onclose: () => void }) {
  const { curFlowID } = useContext(WorkspaceContext);
  const workflow = curFlowID != null ? getWorkflow(curFlowID) : null;
  const media = mediaTable?.getByWorkflowID(curFlowID ?? "");
  const [coverPath, setCoverPath] = useState(workflow?.coverMediaPath);
  if (curFlowID == null) {
    return null;
  }
  return (
    <Modal isOpen={true} onClose={onclose} blockScrollOnMount={true}>
      <ModalOverlay />
      <ModalContent width={"90%"} maxWidth={"90vw"} height={"90vh"}>
        <ModalHeader>Gallery - {workflow?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
                <Tooltip label={formatTimestamp(media.createTime)}>
                  <Stack width={IMAGE_SIZE}>
                    {mediaPreview}
                    <Text color={"GrayText"}>{media.localPath}</Text>
                    <Button
                      leftIcon={
                        isCover ? <IconPinFilled size={20} /> : undefined
                      }
                      isActive={isCover}
                      onClick={() => {
                        updateFlow(curFlowID, {
                          coverMediaPath: media.localPath,
                        });
                        setCoverPath(media.localPath);
                      }}
                    >
                      {isCover ? "Cover" : "Set as cover"}
                    </Button>
                  </Stack>
                </Tooltip>
              );
            })}
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
