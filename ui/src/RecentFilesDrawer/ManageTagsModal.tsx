import {
  Button,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tag as ChakraTag,
  IconButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Tag, Workflow, tagsTable, updateFlow } from "../WorkspaceDB";
import { IconSettings, IconTrash } from "@tabler/icons-react";

export default function ManageTagsModal({ onclose }: { onclose: () => void }) {
  const [allTags, setAllTags] = useState<Tag[]>(tagsTable?.listAll() ?? []);
  return (
    <Modal isOpen={true} onClose={onclose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>My Tags</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {allTags.map((tag) => (
            <HStack>
              <ChakraTag>{tag.name}</ChakraTag>
              <IconButton
                onClick={() => {
                  tagsTable?.delete(tag.name);
                  setAllTags(tagsTable?.listAll() ?? []);
                }}
                aria-label="delete-tag"
                colorScheme="red"
                variant={"ghost"}
                icon={<IconTrash />}
              />
            </HStack>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
