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
import { workflowVersionsTable } from "../db-tables/WorkspaceDB";
import { useState, ChangeEvent } from "react";
// @ts-ignore
import { app } from "/scripts/app.js";

interface Props {
  workflowId: string;
  onClose: () => void;
}
export default function CreateVersionDialog({ workflowId, onClose }: Props) {
  const [newVersionName, setNewVersionName] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewVersionName(event.target.value);
    submitError && setSubmitError("");
  };

  const onSubmit = async () => {
    const trimName = newVersionName.trim();
    setNewVersionName(trimName);
    const versionList =
      (await workflowVersionsTable?.listByWorkflowID(workflowId)) ?? [];
    if (versionList.some((version) => version.name === trimName)) {
      setSubmitError(
        "The name is duplicated, please modify it and submit again.",
      );
    } else {
      const graphJson = JSON.stringify(app.graph.serialize());
      await workflowVersionsTable?.add({
        name: newVersionName,
        workflowID: workflowId,
        createTime: Date.now(),
        json: graphJson,
      });
      onClose();
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Version</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={!!submitError}>
            <FormLabel>Name</FormLabel>
            <Input
              value={newVersionName}
              onChange={handleChange}
              autoFocus
              onKeyUp={(e) => {
                e.code === "Enter" &&
                  !submitError &&
                  newVersionName &&
                  onSubmit();
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
            isDisabled={!newVersionName || !!submitError}
          >
            Create
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
