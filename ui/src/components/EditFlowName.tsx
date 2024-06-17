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
import { workflowsTable } from "../db-tables/WorkspaceDB";
import { WorkspaceContext } from "../WorkspaceContext";

type Props = {
  displayName: string;
  updateFlowName: (newName: string) => void;
  isDirty: boolean;
};

export default function EditFlowName({
  displayName,
  updateFlowName,
  isDirty,
}: Props) {
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

  const onSubmit = async () => {
    if (curFlowID) {
      const trimEditName = editName.trim();
      setEditName(trimEditName);
      if (displayName === trimEditName) return onCloseModal();
      const uniqueName = await workflowsTable?.generateUniqueName(
        trimEditName,
        workflowsTable.curWorkflow?.parentFolderID ?? "",
      );
      if (uniqueName !== trimEditName) {
        setSubmitError(
          "The name is duplicated, please modify it and submit again.",
        );
      } else {
        await workflowsTable?.updateName(curFlowID, {
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
  if (curFlowID == null) return null;
  return (
    <HStack>
      <Tooltip label={displayName} placement="bottom">
        <Text
          as="div"
          color="white"
          onClick={startEdit}
          maxW={160}
          fontWeight={500}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          <div style={{ width: 8, display: "inline-block" }}>
            <Text as="span">{isDirty && "* "}</Text>
          </div>
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
                  e.code === "Enter" && !submitError && editName && onSubmit();
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
