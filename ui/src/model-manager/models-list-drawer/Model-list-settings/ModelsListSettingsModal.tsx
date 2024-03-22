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
import ShowNsfwModelThumbnailSettings from "./ShowNsfwModelThumbnailSettings";
import ShowFileNameSettings from "./ShowFileNameSettings";
import FuzzySearchThresholdSetting from "./FuzzySearchThresholdSetting";

export default function ModelsListSettingsModal({
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
                <ShowNsfwModelThumbnailSettings />
                <ShowFileNameSettings />
                <FuzzySearchThresholdSetting />
              </VStack>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
