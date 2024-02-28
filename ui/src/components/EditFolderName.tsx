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
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { useContext, ChangeEvent, useState } from "react";
import { foldersTable } from "../db-tables/WorkspaceDB";
import { RecentFilesContext } from "../WorkspaceContext";
import { Folder } from "../types/dbTypes";

type Props = {
  folder: Folder;
  onclose: () => void;
};

export default function EditFolderNameModal({ folder, onclose }: Props) {
  // const { curFlowID } = useContext(WorkspaceContext);
  const [editName, setEditName] = useState(folder.name);
  const [submitError, setSubmitError] = useState("");
  const { onRefreshFilesList } = useContext(RecentFilesContext);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditName(event.target.value);
    submitError && setSubmitError("");
  };

  const onSubmit = async () => {
    const trimEditName = editName.trim();
    setEditName(trimEditName);
    if (trimEditName === folder.name) return onclose();
    const uniqName = await foldersTable?.generateUniqueName(
      trimEditName,
      folder.parentFolderID ?? "",
    );
    if (uniqName !== trimEditName) {
      setSubmitError(
        "The name is duplicated, please modify it and submit again.",
      );
    } else {
      await foldersTable?.update(folder.id, {
        name: trimEditName,
      });
      onRefreshFilesList && onRefreshFilesList();
      onclose();
    }
  };

  return (
    <Modal isOpen={true} onClose={onclose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit folder name</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={!!submitError}>
            <FormLabel>Folder name</FormLabel>
            <Input
              value={editName}
              onChange={handleChange}
              autoFocus
              onKeyUp={(e) => {
                e.code === "Enter" && !submitError && editName && onSubmit();
              }}
            />
            {submitError && <FormErrorMessage>{submitError}</FormErrorMessage>}
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="teal"
            mr={3}
            onClick={onSubmit}
            isDisabled={!editName || !!submitError}
          >
            Save
          </Button>
          <Button onClick={onclose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
