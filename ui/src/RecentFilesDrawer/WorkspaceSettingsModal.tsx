import {
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { ShortcutSettings } from "../settings/ShortcutSettings";
import FolderOnTopSettings from "../settings/FolderOnTopSettings";
import TwoWaySyncSettings from "../settings/TwoWaySyncSettings";
import CommonCheckboxSettings from "../settings/CommonCheckboxSettings";
import SelectMyWorkflowsDir from "../settings/SelectMyWorkflowsDir";
import { MaximumChangelog } from "../settings/MaximumChangelogSettings";

export default function WorkspaceSettingsModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <>
      <Modal isOpen={true} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={14}>
            <HStack>
              <VStack
                divider={<StackDivider borderColor="gray.500" />}
                spacing={4}
                align="stretch"
                w="100%"
              >
                <SelectMyWorkflowsDir />
                <ShortcutSettings />
                <CommonCheckboxSettings
                  settingKey="autoSave"
                  text="Enable auto save workflow"
                />
                <TwoWaySyncSettings />
                <FolderOnTopSettings />
                <CommonCheckboxSettings
                  settingKey="overwriteCurWorkflowWhenDroppingFileToCanvas"
                  text="Overwrite current workflow when drag and drop workflow file to canvas"
                />
                <MaximumChangelog />
              </VStack>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
