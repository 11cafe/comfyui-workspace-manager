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
import { CommonNumberSetting } from "../settings/CommonNumberSetting";
import AutosaveSetting from "../settings/AutosaveSetting";

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
                <AutosaveSetting />
                <ShortcutSettings />
                <TwoWaySyncSettings />
                <FolderOnTopSettings />
                <CommonCheckboxSettings
                  settingKey="overwriteCurWorkflowWhenDroppingFileToCanvas"
                  text="Overwrite current workflow when drag and drop workflow file to canvas"
                />
                <CommonNumberSetting
                  label={`Maximum number of save change history to store. This does not include
        versions that you created by "Create Version", which are always stored
        and has no limit.`}
                  settingKey="maximumChangelogNumber"
                />
                <CommonCheckboxSettings
                  settingKey="hideCoverImage"
                  text="Hide thumbnail image in workflow list"
                />
              </VStack>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
