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
  HStack,
} from "@chakra-ui/react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { listWorkflows, updateFlow } from "../WorkspaceDB";
import { RecentFilesContext } from "../WorkspaceContext";

type Props = {
  handleClose: () => void;
};

export default function RenameFlow({
  handleClose,
}: Props) {
  const { renameFlowId, onRefreshFilesList } = useContext(RecentFilesContext);

  const [submitError, setSubmitError] = useState("");
  const [editName, setEditName] = useState("");
  const previousName = listWorkflows().find(workflow => workflow.id === renameFlowId)?.name;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditName(event.target.value);
    submitError && setSubmitError("");
  };

  useEffect(() => {
    const flow = listWorkflows().find(workflow => workflow.id === renameFlowId);

    setEditName(flow?.name || "")
  }, [renameFlowId])

  const onSubmit = () => {
    if (renameFlowId) {
      const trimEditName = editName.trim();
      setEditName(trimEditName);
      if (previousName === trimEditName) return onCloseModal();
      const flowNameList = listWorkflows()?.map((flow) => flow.name);
      if (flowNameList.includes(trimEditName)) {
        setSubmitError(
          "The name is duplicated, please modify it and submit again."
        );
      } else {
        updateFlow(renameFlowId, {
          name: trimEditName,
        });
        onRefreshFilesList?.();
        onCloseModal();
      }
    }
  };

  const onCloseModal = () => {
    setSubmitError("");
    handleClose();
  };

  if (renameFlowId === null) return null;

  return (
    <HStack>
      <Modal isOpen={true} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit workflow name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={!!submitError}>
              <FormLabel>Workflow name</FormLabel>
              <Input
                value={editName}
                onChange={handleChange}
                autoFocus
                onKeyUp={(e) => {
                  e.code === "Enter" && !submitError && onSubmit();
                }}
              />
              {submitError && (
                <FormErrorMessage>{submitError}</FormErrorMessage>
              )}
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
            <Button onClick={onCloseModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
}
