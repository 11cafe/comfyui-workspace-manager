import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Workflow } from "../types/dbTypes";
import { workflowVersionsTable } from "../db-tables/WorkspaceDB";
import { useState } from "react";

interface Props {
  onClose: () => void;
  workflow: Workflow;
}
export default function CreateVersionDialog({ onClose, workflow }: Props) {
  const [newVersionName, setNewVersionName] = useState("");
  const onCreateVersion = async () => {
    if (newVersionName.length == 0) return;
    await workflowVersionsTable?.add({
      name: newVersionName,
      workflowID: workflow.id,
      createTime: Date.now(),
      json: workflow.json,
    });
  };
  return (
    <Modal isOpen={true} onClose={onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent width={"50%"} maxWidth={"90vw"}>
        <ModalHeader>Create Version</ModalHeader>

        <ModalBody>
          <Text>Name</Text>
          <Input
            placeholder="Added lora"
            value={newVersionName}
            onChange={(e) => {
              setNewVersionName(e.target.value);
            }}
          />
          <Button
            isDisabled={newVersionName.length == 0}
            mt={4}
            colorScheme="teal"
            onClick={onCreateVersion}
          >
            Create
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
