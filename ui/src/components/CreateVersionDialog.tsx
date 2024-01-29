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
import { v4 } from "uuid";

interface Props {
  onClose: () => void;
  workflow: Workflow;
}
export default function CreateVersionDialog({ onClose, workflow }: Props) {
  const onCreateVersion = async () => {
    const newVersion = await workflowVersionsTable?.add({
      id: v4(),
      name: "Added lora",
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
          <Input placeholder="Added lora" />
          <Button mt={4} colorScheme="teal" onClick={onCreateVersion}>
            Create
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
