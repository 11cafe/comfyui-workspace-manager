import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
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
  Portal,
} from "@chakra-ui/react";
import { IconChevronDown } from "@tabler/icons-react";
import { getWorkflow, workspace } from "../WorkspaceDB";
import { WorkspaceContext } from "../WorkspaceContext";
import { Overlay } from "./Overlay";

export default function DropdownTitle() {
  const { curFlowID, onDuplicateWorkflow } = useContext(WorkspaceContext);

  const [isOpenNewName, setIsOpenNewName] = useState(false);
  const [newFlowName, setNewFlowName] = useState("");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const workflow = curFlowID ? getWorkflow(curFlowID) : undefined;
    setNewFlowName(workflow?.name ?? "");
  }, [curFlowID]);
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
  };

  const handleOnCloseModal = () => {
    setIsOpenNewName(false);
  };

  const handleDownload = useCallback(() => {
    if (!workspace || !curFlowID) {
      alert("You don't have any workspaces");
      return;
    }

    const json_data = workspace[curFlowID];

    if (!json_data) {
      alert("Workspace does not exist");
      return;
    }

    const blob = new Blob([json_data.json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${json_data.name}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [curFlowID]);

  return (
    <>
      <Menu isLazy={true}>
        {({ isOpen }) => (
          <>
            <MenuButton>
              <IconButton
                icon={<IconChevronDown size={20} />}
                aria-label="menu"
                size={"xs"}
                backgroundColor={"#323232"}
                color={"white"}
                // variant={"outline"}
              />
            </MenuButton>
            <Portal>
              <MenuList minWidth={150}>
                <MenuItem onClick={handleDownload}>Download</MenuItem>
                <MenuItem onClick={() => setIsOpenNewName(true)}>
                  Save As
                </MenuItem>
              </MenuList>
              {isOpen && <Overlay backgroundColor={null} />}
            </Portal>
          </>
        )}
      </Menu>
      {isOpenNewName && (
        <Modal isOpen={true} onClose={handleOnCloseModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Save As</ModalHeader>
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
      )}
    </>
  );
}
