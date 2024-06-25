import {
  Button,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { userSettingsTable, workflowsTable } from "../db-tables/WorkspaceDB";
import { useState, ChangeEvent, useContext } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import CreateVersionLogin from "../versionHistory/CreateVersionLogin";
import { ShareWorkflowData } from "../types/types";
import { app } from "../utils/comfyapp";
import { EWorkflowPrivacy } from "../types/dbTypes";
import { getNodeDefs } from "../share/shareUtils";

interface Props {
  workflowId: string;
  onClose: () => void;
}
export default function CreateVersionDialog({ onClose }: Props) {
  const [newVersionName, setNewVersionName] = useState("");
  const [submitError, setSubmitError] = useState("");
  const { session } = useContext(WorkspaceContext);
  const toast = useToast();
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewVersionName(event.target.value);
    submitError && setSubmitError("");
  };

  const onSubmit = async () => {
    const trimName = newVersionName.trim();
    setNewVersionName(trimName);
    if (!workflowsTable?.curWorkflow) {
      throw new Error("No workflow selected");
    }
    setSubmitting(true);
    const input: ShareWorkflowData = {
      workflow: {
        name: workflowsTable?.curWorkflow?.name,
        cloudID: workflowsTable?.curWorkflow?.cloudID,
      },
      version: {
        name: trimName,
        json: JSON.stringify(app.graph.serialize()),
      },
      nodeDefs: getNodeDefs(),
      privacy: EWorkflowPrivacy.PRIVATE,
    };
    const data = await fetch(
      userSettingsTable?.settings?.cloudHost + "/api/createCloudflow",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.shareKey}`,
        },
        body: JSON.stringify(input),
      },
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data?.data) {
          toast({
            title: "Version created",
            status: "success",
            duration: 3000,
          });
          onClose();
        } else {
          setSubmitError("Failed to create version. " + (data?.error ?? ""));
        }
      })
      .catch((e) => {
        setSubmitError("Failed to create version");
        return null;
      });
    setSubmitting(false);
  };
  if (!session?.shareKey) {
    return (
      <Modal isOpen={true} onClose={onClose} size={"xl"}>
        <ModalContent width={"90vw"}>
          <ModalBody>
            <CreateVersionLogin />
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
  const domain = new URL(userSettingsTable!.settings!.cloudHost).hostname;
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Stack mb={5}>
            <p style={{ fontSize: 20, fontWeight: "bold" }}>Create Version</p>
            <p style={{ color: "GrayText" }}>
              Saving to{" "}
              <a href={userSettingsTable?.settings?.cloudHost}> {domain}</a>
            </p>
          </Stack>
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
            isDisabled={!newVersionName}
            isLoading={submitting}
          >
            Create
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
