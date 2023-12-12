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
import { getMyWorkflowsDir } from "../Api";

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
            Workspace Save Directory
          </Text>
          <HStack>
            {/* <Input
              value={"C:\\Users\\joshu\\Documents\\ComfyUI"}
              disabled={true}
              color={"gray.500"}
            /> */}
            <Text color={"gray.500"}>{selectedFolder}</Text>

            {/* <Button
              onClick={() => {
                alert("Not implemented yet");
              }}
              paddingLeft={10}
              paddingRight={10}
              leftIcon={<IconFolder />}
              colorScheme={"teal"}
            >
              Choose Folder

            </Button> */}
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
