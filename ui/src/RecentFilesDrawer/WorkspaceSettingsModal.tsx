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

export default function WorkspaceSettingsModal({
  onclose,
}: {
  onclose: () => void;
}) {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleFolderChange = (event) => {
    if (event.target.files.length) {
      const folderPath = event.target.files[0].webkitRelativePath.split("/")[0];
      setSelectedFolder(folderPath);
    }
  };
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
