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
  Tooltip,
} from "@chakra-ui/react";
import {
  IconArrowBackUpDouble,
  IconChevronDown,
  IconDeviceFloppy,
  IconDownload,
  IconHistory,
} from "@tabler/icons-react";
import { workflowsTable, userSettingsTable } from "../db-tables/WorkspaceDB";
import { WorkspaceContext } from "../WorkspaceContext";
import { Overlay } from "./Overlay";
import { VersionHistoryDrawer } from "./VersionHistoryDrawer";
import { Workflow } from "../types/dbTypes";

export default function DropdownTitle({ onClick }: { onClick?: () => void }) {
  const {
    curFlowID,
    onDuplicateWorkflow,
    discardUnsavedChanges,
    saveCurWorkflow,
  } = useContext(WorkspaceContext);

  const [isOpenNewName, setIsOpenNewName] = useState(false);
  const [isVersionHistoryOpen, setIsVersionHistoryOpen] = useState(false);
  const [newFlowName, setNewFlowName] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [workflow, setWorkflow] = useState<Workflow>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (curFlowID) {
      workflowsTable?.get(curFlowID).then((workflow) => {
        setNewFlowName(workflow?.name ?? "");
        setWorkflow(workflow);
      });
    }
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

  const handleDownload = useCallback(async () => {
    const json_data = curFlowID ? await workflowsTable?.get(curFlowID) : null;

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
  const saveShortcut = userSettingsTable?.getSetting("shortcuts")?.save;

  const [closeTimeoutId, setCloseTimeoutId] = useState<number>();

  const delayedClose = () => {
    setCloseTimeoutId(setTimeout(() => setIsOpen(false), 300)); // delay of 300ms
  };

  const onOpen = () => {
    setIsOpen(true);
    clearTimeout(closeTimeoutId);
    setCloseTimeoutId(undefined);
  };

  return (
    <>
      <Menu isLazy={true} isOpen={isOpen} gutter={4}>
        <MenuButton onMouseEnter={onOpen} onMouseLeave={delayedClose}>
          <IconButton
            icon={<IconChevronDown size={20} />}
            aria-label="menu"
            size={"xs"}
            backgroundColor={"#323232"}
            color={"white"}
          />
        </MenuButton>
        <Portal>
          <MenuList
            minWidth={150}
            zIndex={1000}
            onMouseEnter={onOpen}
            onMouseLeave={delayedClose}
          >
            <MenuItem
              onClick={saveCurWorkflow}
              icon={<IconDeviceFloppy size={20} />}
              iconSpacing={1}
              command={saveShortcut}
            >
              Save
            </MenuItem>
            <Tooltip label="This will revert current workflow to your last saved version. You will lose all changes made since your last save.">
              <MenuItem
                onClick={discardUnsavedChanges}
                icon={<IconArrowBackUpDouble size={20} />}
                iconSpacing={1}
                isDisabled={workflow?.lastSavedJson == null}
              >
                Discard unsaved changes
              </MenuItem>
            </Tooltip>
            <MenuItem
              onClick={handleDownload}
              icon={<IconDownload size={20} />}
              iconSpacing={1}
            >
              Download
            </MenuItem>
            <MenuItem
              onClick={() => setIsOpenNewName(true)}
              icon={<IconDeviceFloppy size={20} />}
              iconSpacing={1}
            >
              Save As
            </MenuItem>
            <MenuItem
              onClick={() => setIsVersionHistoryOpen(true)}
              icon={<IconHistory size={20} />}
              iconSpacing={1}
            >
              Versions History
            </MenuItem>
          </MenuList>
          {isOpen && <Overlay backgroundColor={null} />}
        </Portal>
      </Menu>
      {isVersionHistoryOpen && (
        <VersionHistoryDrawer onClose={() => setIsVersionHistoryOpen(false)} />
      )}
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
