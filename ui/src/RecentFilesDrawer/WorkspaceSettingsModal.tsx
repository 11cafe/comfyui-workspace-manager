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
  Text,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IconFolder, IconSettings, IconTrash } from "@tabler/icons-react";
import { getMyWorkflowsDir, getSystemDir } from "../Api";

export default function WorkspaceSettingsModal({
  onclose,
}: {
  onclose: () => void;
}) {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const getDir = async (event: any) => {
    const dir = await getMyWorkflowsDir();
    setSelectedFolder(dir ?? null);
  };
  useEffect(() => {
    getDir(null);
  });
  return (
    <Modal isOpen={true} onClose={onclose} size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight={600} mb={3}>
            Workspace Save Directory (🚧 Under development, not working)
          </Text>
          <HStack>
            {/* <Input
              value={"C:\\Users\\joshu\\Documents\\ComfyUI"}
              disabled={true}
              color={"gray.500"}
            /> */}
            <Text>{selectedFolder}</Text>

            <Button
              onClick={() => {
                getSystemDir();
              }}
              paddingLeft={10}
              paddingRight={10}
              size={"sm"}
              leftIcon={<IconFolder />}
              colorScheme={"teal"}
            >
              Choose Folder
            </Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
