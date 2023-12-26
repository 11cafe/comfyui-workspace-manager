import { ChangeEvent, useCallback, useContext, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
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
import { IconArrowDown } from '@tabler/icons-react'
import { workspace } from "../WorkspaceDB";
import { WorkspaceContext } from "../WorkspaceContext";

export default function DropdowmTitle() {
  const { curFlowID, onDuplicateWorkflow } = useContext(WorkspaceContext);
  const [isOpenNewName, setIsOpenNewName] = useState(false);
  const [newFlowName, setNewFlowName] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewFlowName(event.target.value);
    submitError && setSubmitError("");
  };

  const onSubmit = () => {
    if (!curFlowID) {
      alert("Flow ID is required");
      return;
    }

    onDuplicateWorkflow?.(curFlowID, newFlowName);
    handleOnCloseModal();
  }

  const handleOnCloseModal = () => {
    setIsOpenNewName(false);
  }

  const handleDownload = useCallback(() => {
    if (!workspace || !curFlowID) {
      alert("You don't have any workspaces");
      return;
    }

    const json_data = workspace[curFlowID]

    if (!json_data) {
      alert("Workspace does not exist");
      return;
    }

    const blob = new Blob([json_data.json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${json_data.name}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [curFlowID]);

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<IconArrowDown />}
          variant='outline'
          height={6}
          minWidth={3}
          background={"white"}
        />
        <MenuList minWidth={150}>
          <MenuItem
            onClick={handleDownload}
          >
            Download
          </MenuItem>
          <MenuItem
            onClick={() => setIsOpenNewName(true)}
          >
            Create a Copy
          </MenuItem>
        </MenuList>
      </Menu>
      <Modal isOpen={isOpenNewName} onClose={handleOnCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Duplicate workflow</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={!!submitError}>
              <FormLabel>Workflow name</FormLabel>
              <Input
                value={newFlowName}
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
              isDisabled={!newFlowName || !!submitError}
            >
              Save
            </Button>
            <Button onClick={handleOnCloseModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}