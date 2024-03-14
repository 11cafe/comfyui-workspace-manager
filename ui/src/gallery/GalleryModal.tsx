import {
  Checkbox,
  Flex,
  Heading,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useMemo, useState } from "react";
import { mediaTable, workflowsTable } from "../db-tables/WorkspaceDB";
import { IconArrowLeft, IconX } from "@tabler/icons-react";
import { WorkspaceContext } from "../WorkspaceContext";
import { Media } from "../types/dbTypes";
import { MetaDataInfo } from "./components/MetaDataInfo.tsx";
import GalleryMediaItem from "./components/GalleryMediaItem.tsx";
import SearchInput from "../components/SearchInput.tsx";

export default function GalleryModal({ onclose }: { onclose: () => void }) {
  const { curFlowID } = useContext(WorkspaceContext);
  const [workflowName, setWorkflowName] = useState("");
  const [selectedID, setSelectedID] = useState<string[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [coverPath, setCoverPath] = useState("");
  const [images, setImages] = useState<Media[]>([]);
  const [metaData, setMetaData] = useState<Media>();
  const [searchValue, setSearchValue] = useState("");
  const onUpdateSearchValue = (val: string) => {
    setSearchValue(val);
  };

  const loadData = async () => {
    if (curFlowID == null) return;
    const media = await mediaTable?.listByWorkflowID(curFlowID);
    setImages(media ?? []);
  };

  useEffect(() => {
    loadData();
    curFlowID &&
      workflowsTable?.get(curFlowID).then((flow) => {
        if (flow) {
          setWorkflowName(flow.name);
          flow?.coverMediaPath && setCoverPath(flow?.coverMediaPath);
        }
      });
  }, []);

  const calcImages = searchValue.length
    ? images?.filter((v) =>
        /*!v?.workflowJSON || */ v.workflowJSON?.includes(searchValue ?? ""),
      )
    : images;

  if (curFlowID == null) {
    return null;
  }

  const onClickMedia = (media: Media) => {
    if (isSelecting) {
      if (selectedID.includes(media.id)) {
        setSelectedID(selectedID.filter((id) => id !== media.id));
      } else {
        setSelectedID([...selectedID, media.id]);
      }
      return;
    }
    setMetaData(media);
    // window.open(`/workspace/view_media?filename=${media.localPath}`);
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
              {!!metaData && (
                <IconButton
                  onClick={() => setMetaData(undefined)}
                  variant={"ghost"}
                  mr={1}
                  aria-label={"back"}
                  icon={<IconArrowLeft />}
                />
              )}
              Gallery - {workflowName}
              {!metaData && (
                <Flex gap={2} display={"inline-flex"} ml={2}>
                  <SearchInput
                    searchValue={searchValue}
                    onUpdateSearchValue={onUpdateSearchValue}
                  />
                </Flex>
              )}
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
          {!metaData ? (
            <HStack wrap={"wrap"}>
              {calcImages.map((media) => {
                return (
                  <GalleryMediaItem
                    key={media.id}
                    selectedID={selectedID}
                    media={media}
                    isSelecting={isSelecting}
                    onClickMedia={onClickMedia}
                    onRefreshImagesList={loadData}
                    coverPath={coverPath}
                    setCoverPath={setCoverPath}
                  />
                );
              })}
            </HStack>
          ) : (
            <MetaDataInfo mediaList={images} media={metaData} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
