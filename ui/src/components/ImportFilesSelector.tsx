import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  HStack,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { listWorkflows, updateFlow } from "../WorkspaceDB";
import { Workflow } from "../types/workspaceTypes";
import { RecentFilesContext } from "../WorkspaceContext";

type Props = {
  folderName: string,
  folderId: string,
  isOpen: boolean,
  handleClose: () => void,
};

export default function ImportFilesSelector({
  folderName,
  folderId,
  isOpen,
  handleClose
}: Props) {
  const { onRefreshFilesList } = useContext(RecentFilesContext);
  const [filesToImport, setFilesToImport] = useState<Set<string>>(new Set());
  const [freeFiles, setFreeFiles] = useState<Workflow[]>([]);

  const onSubmit = () => {
    for (const file of filesToImport.values()) {
      updateFlow(file, {
        parentFolderID: folderId,
      });
    }

    onRefreshFilesList?.();
    setFilesToImport(new Set());
    setFreeFiles([])
    handleClose();
  }

  const onChange = (id: string) => {
    setFilesToImport((prev) => {
      const newFilesToImport = new Set(prev);
      if (prev.has(id)) {
        newFilesToImport.delete(id);
      } else {
        newFilesToImport.add(id);
      }
      return newFilesToImport;
    });
  }

  useEffect(() => {
    const files = listWorkflows().filter(file => !file.parentFolderID)

    setFreeFiles(files)
  }, [isOpen]);

  return (
    <HStack>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add flows to {folderName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Select flows</FormLabel>
              <Stack spacing={5}>
                {freeFiles.map(file => (
                  <Checkbox
                    checked={filesToImport.has(file.id)}
                    onChange={() => onChange(file.id)}
                  >
                    {file.name}
                  </Checkbox>
                ))}
              </Stack>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={onSubmit}
              isDisabled={!filesToImport.size}
            >
              Save
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
}
