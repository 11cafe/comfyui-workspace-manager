// @ts-expect-error ComfyUI import
import { app } from "/scripts/app.js";
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
import { useContext, useEffect, useState } from "react";
import { mediaTable, workflowsTable } from "../db-tables/WorkspaceDB";
import { IconArrowLeft, IconX } from "@tabler/icons-react";
import { WorkspaceContext } from "../WorkspaceContext";
import { Media } from "../types/dbTypes";
import { MetaDataInfo } from "./components/GalleryLeftCarousel.tsx";
import { MediaWithMetaData } from "./components/GalleryRightTopbar.tsx";
import GalleryGridView from "./components/GalleryGridView.tsx";
import { useDebounce } from "../customHooks/useDebounce.ts";
import SearchInput from "../components/SearchInput.tsx";

export default function GalleryModal({ onclose }: { onclose: () => void }) {
  const { curFlowID } = useContext(WorkspaceContext);
  const [workflowName, setWorkflowName] = useState("");
  const [selectedID, setSelectedID] = useState<string[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [coverPath, setCoverPath] = useState("");
  const [images, setImages] = useState<Media[]>([]);
  const [metaData, setMetaData] = useState<MediaWithMetaData>();
  const [searchValue, setSearchValue] = useState("");
  const debounceSearchValue = useDebounce(searchValue, 300);

  const loadData = async () => {
    if (curFlowID == null) return;
    const media = await mediaTable?.listByWorkflowID(curFlowID);
    setImages(media ?? []);
    if (media?.length) {
      setMetaData(media[0]);
    }
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

  if (curFlowID == null) {
    return null;
  }

  const isAllSelected =
    images.length > 0 && selectedID.length === images.length;

  return (
    <Modal isOpen={true} onClose={onclose} blockScrollOnMount={true}>
      <ModalOverlay />
      <ModalContent width={"90%"} maxWidth={"90vw"} height={"90vh"}>
        <ModalHeader>
          <HStack gap={2} mb={2}>
            <Heading size={"md"} mr={2}>
              Gallery - {workflowName}
            </Heading>

            <SearchInput
              searchValue={searchValue}
              onUpdateSearchValue={(val) => setSearchValue(val)}
              placeholder="Search prompt, model name, etc."
              style={{ width: "300px" }}
            />
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
          {debounceSearchValue.length ? (
            <GalleryGridView searchQuery={debounceSearchValue} />
          ) : (
            <MetaDataInfo mediaList={images} media={metaData ?? null} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
