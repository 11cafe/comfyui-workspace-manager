import {
  ChangeEvent,
  lazy,
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
  Tag,
  HStack,
  useToast,
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
import CreateVersionDialog from "./CreateVersionDialog";
import HoverMenu from "./HoverMenu";
const ShareDialog = lazy(() => import("../share/ShareDialog"));
import { TOPBAR_BUTTON_HEIGHT } from "../const";
import { downloadJsonFile } from "../utils/downloadJsonFile";
import { SharedTopbarButton } from "../share/SharedTopbarButton";
import { app } from "../utils/comfyapp";
import CopyShareLinkMenuItem from "./CopyShareLinkMenuItem";

export default function DropdownTitle() {
  const {
    curFlowID,
    loadWorkflowID,
    discardUnsavedChanges,
    saveCurWorkflow,
    setRoute,
    route,
    session,
  } = useContext(WorkspaceContext);

  const [isOpenNewVersion, setIsOpenNewVersion] = useState(false);
  const [newFlowName, setNewFlowName] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [workflow, setWorkflow] = useState<Workflow>();
  const [saveShortcut, setSaveShortcut] = useState({
    save: "",
    saveAs: "",
  });

  useEffect(() => {
    if (curFlowID) {
      workflowsTable?.get(curFlowID).then((workflow) => {
        setNewFlowName(workflow?.name ?? "");
        setWorkflow(workflow);
      });
    }
    userSettingsTable?.getSetting("shortcuts").then((res) => {
      setSaveShortcut(res);
    });
  }, [curFlowID]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewFlowName(event.target.value);
    submitError && setSubmitError("");
  };
  const toast = useToast();
  const onSubmit = async () => {
    if (!curFlowID) {
      alert("Flow ID is required");
      return;
    }

    const graph = JSON.stringify(app.graph.serialize());
    const flow = await workflowsTable?.createFlow({
      json: graph,
      name: newFlowName,
      parentFolderID: workflow?.parentFolderID,
    });

    flow && (await loadWorkflowID(flow.id, null, true));
    handleOnCloseModal();
  };

  const handleOnCloseModal = () => {
    setRoute("root");
  };

  const handleDownload = useCallback(async () => {
    const curWorkflow = workflowsTable?.curWorkflow;
    if (!curWorkflow) {
      alert("No current workflow!");
      return;
    }
    const graph = app.graph.serialize();
    const json = JSON.stringify(graph, null, 2);

    downloadJsonFile(json, curWorkflow.name);
  }, [curFlowID]);

  return (
    <>
      <HoverMenu
        menuButton={
          <DarkMode>
            <Button
              px={1}
              height={TOPBAR_BUTTON_HEIGHT + "px"}
              aria-label="menu"
              size={"sm"}
              backgroundColor={"#434554"}
            >
              File
              <IconChevronDown size={20} />
            </Button>
          </DarkMode>
        }
        menuContent={
          <Menu isOpen={true}>
            <MenuList minWidth={150} zIndex={1000}>
              <MenuItem
                onClick={() => saveCurWorkflow()}
                icon={<IconDeviceFloppy size={20} />}
                iconSpacing={1}
                command={saveShortcut.save}
              >
                Save
              </MenuItem>
              <Tooltip label="Revert workflow to your last saved version. You will lose all changes made since your last save.">
                <MenuItem
                  onClick={discardUnsavedChanges}
                  icon={<IconArrowBackUpDouble size={20} />}
                  iconSpacing={1}
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
                onClick={() => setRoute("saveAsModal")}
                icon={<IconDeviceFloppy size={20} />}
                iconSpacing={1}
                command={saveShortcut.saveAs}
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
                onClick={() => setRoute("versionHistory")}
                icon={<IconHistory size={20} />}
                iconSpacing={1}
              >
                Versions History
              </MenuItem>
              <MenuItem
                onClick={() => setRoute("share")}
                icon={<IconShare2 size={20} />}
                iconSpacing={1}
                alignItems={"center"}
              >
                <HStack>
                  <p>Share</p> <Tag size={"sm"}>🧪beta</Tag>
                  <SharedTopbarButton />
                </HStack>
              </MenuItem>
              {workflowsTable?.curWorkflow && (
                <CopyShareLinkMenuItem curFlow={workflowsTable?.curWorkflow} />
              )}
            </MenuList>
          </Menu>
        }
      />
      {route === "share" && <ShareDialog onClose={() => setRoute("root")} />}
      {route == "versionHistory" && (
        <VersionHistoryDrawer onClose={() => setRoute("root")} />
      )}
      {route === "saveAsModal" && (
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
