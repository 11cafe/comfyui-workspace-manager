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
import TwoWaySyncSettings from "../settings/TwoWaySyncSettings";
import CommonCheckboxSettings from "../settings/CommonCheckboxSettings";
import SelectMyWorkflowsDir from "../settings/SelectMyWorkflowsDir";
import { CommonNumberSetting } from "../settings/CommonNumberSetting";
import CloudHostSetting from "../settings/CloudHostSetting";
import SharekeySetting from "../settings/SharekeySetting";

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
                <TwoWaySyncSettings />
                <SharekeySetting />
                <CommonCheckboxSettings
                  settingKey="foldersOnTop"
                  text={`Folders always on top`}
                />
                <CommonNumberSetting
                  label={`Maximum number of save change history to store. This does not include
        versions that you created by "Create Version", which are always stored
        and has no limit.`}
                  settingKey="maximumChangelogNumber"
                />
                <CommonCheckboxSettings
                  settingKey="disableUnsavedWarning"
                  text={`Disable the "Save or Discard" warning when closing a workflow with unsaved changes. ⛔️Be careful, if you disable this reminder and forget to save your workflow, you will lose your changes.`}
                />

                <CommonCheckboxSettings
                  settingKey="hideCoverImage"
                  text="Hide thumbnail image in workflow list"
                />
                <CloudHostSetting />
              </VStack>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
