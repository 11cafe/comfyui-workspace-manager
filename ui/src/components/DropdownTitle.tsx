import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Menu,
  MenuList,
  MenuItem,
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
  Tooltip,
  DarkMode,
} from "@chakra-ui/react";
import {
  IconArrowBackUpDouble,
  IconChevronDown,
  IconDeviceFloppy,
  IconDownload,
  IconHistory,
  IconShare2,
  IconVersions,
} from "@tabler/icons-react";
import { workflowsTable, userSettingsTable } from "../db-tables/WorkspaceDB";
import { WorkspaceContext } from "../WorkspaceContext";
import { VersionHistoryDrawer } from "./VersionHistoryDrawer";
import { Workflow } from "../types/dbTypes";
import ShareDialog from "../share/ShareDialog";
import CustomMenu from "./CustomMenu";
import CreateVersionDialog from "./CreateVersionDialog";

export default function DropdownTitle() {
  const {
    curFlowID,
    onDuplicateWorkflow,
    discardUnsavedChanges,
    saveCurWorkflow,
  } = useContext(WorkspaceContext);

  const [isOpenNewVersion, setIsOpenNewVersion] = useState(false);
  const [isOpenNewName, setIsOpenNewName] = useState(false);
  const [isVersionHistoryOpen, setIsVersionHistoryOpen] = useState(false);
  const [newFlowName, setNewFlowName] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [workflow, setWorkflow] = useState<Workflow>();
  const [isOpen, setIsOpen] = useState(false);
  const [saveShortcut, setSaveShortcut] = useState("");
  const [isShareOpen, setIsShareOpen] = useState(false);

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

  const [closeTimeoutId, setCloseTimeoutId] = useState<number>();

  const delayedClose = () => {
    setCloseTimeoutId(setTimeout(() => setIsOpen(false), 400)); // delay of 300ms
  };

  const onOpen = () => {
    setIsOpen(true);
    clearTimeout(closeTimeoutId);
    setCloseTimeoutId(undefined);
    userSettingsTable?.getSetting("shortcuts").then((res) => {
      setSaveShortcut(res?.save);
    });
  };

  return (
    <>
      <CustomMenu
        isOpen={isOpen}
        onClose={delayedClose}
        menuButton={
          <DarkMode>
            <Button
              px={1}
              height={"29px"}
              aria-label="menu"
              size={"sm"}
              colorScheme="teal"
              onClick={onOpen}
              onMouseEnter={onOpen}
              onMouseLeave={delayedClose}
            >
              File
              <IconChevronDown size={20} />
            </Button>
          </DarkMode>
        }
        options={
          <Menu isOpen={true}>
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
              <Tooltip label="Revert workflow to your last saved version. You will lose all changes made since your last save.">
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
                onClick={() => setIsOpenNewVersion(true)}
                icon={<IconVersions size={20} />}
                iconSpacing={1}
              >
                Create Version
              </MenuItem>
              <MenuItem
                onClick={() => setIsVersionHistoryOpen(true)}
                icon={<IconHistory size={20} />}
                iconSpacing={1}
              >
                Versions History
              </MenuItem>
              <MenuItem
                onClick={() => setIsShareOpen(true)}
                icon={<IconShare2 size={20} />}
                iconSpacing={1}
              >
                Share
              </MenuItem>
            </MenuList>
          </Menu>
        }
      />
      {isShareOpen && <ShareDialog onClose={() => setIsShareOpen(false)} />}
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
                    e.code === "Enter" &&
                      !submitError &&
                      newFlowName &&
                      onSubmit();
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
      {isOpenNewVersion && (
        <CreateVersionDialog
          workflowId={curFlowID!}
          onClose={() => setIsOpenNewVersion(false)}
        />
      )}
    </>
  );
}
