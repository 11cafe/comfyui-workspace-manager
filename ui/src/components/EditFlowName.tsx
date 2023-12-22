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
  useDisclosure,
  HStack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useContext, ChangeEvent, useState } from "react";
import { listWorkflows, updateFlow } from "../WorkspaceDB";
import { WorkspaceContext } from "../WorkspaceContext";

type Props = {
  displayName: string;
  updateFlowName: (newName: string) => void;
};

export default function EditFlowName(props: Props) {
  const { displayName, updateFlowName } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { curFlowID } = useContext(WorkspaceContext);
  const [editName, setEditName] = useState(displayName);
  const [submitError, setSubmitError] = useState("");

  const startEdit = () => {
    setEditName(displayName);
    onOpen();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditName(event.target.value);
    submitError && setSubmitError("");
  };

  const onSubmit = () => {
    if (curFlowID) {
      const trimEditName = editName.trim();
      setEditName(trimEditName);
      if (displayName === trimEditName) return onCloseModal();
      const flowNameList = listWorkflows()?.map((flow) => flow.name);
      if (flowNameList.includes(trimEditName)) {
        setSubmitError(
          "The name is duplicated, please modify it and submit again."
        );
      } else {
        updateFlow(curFlowID, {
          name: trimEditName,
        });
        updateFlowName(trimEditName);
        onCloseModal();
      }
    }
  };

  const onCloseModal = () => {
    setSubmitError("");
    onClose();
  };

  return (
    <HStack>
      <Tooltip label={displayName} placement="bottom">
        <Text
          color="white"
          onClick={startEdit}
          maxW={220}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {displayName}
        </Text>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onCloseModal}>
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
