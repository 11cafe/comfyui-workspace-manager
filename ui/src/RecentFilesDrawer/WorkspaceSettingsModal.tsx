import {
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  StackDivider,
  VStack,
  Box,
  Tag,
  IconButton,
  Button,
  Flex,
  Input,
  Stack,
  useToast,
  SimpleGrid,
  Tooltip,
} from "@chakra-ui/react";
import { IconEdit } from "@tabler/icons-react";
import { useRef, useState, useEffect } from "react";
import { getSystemDir } from "../Api";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { ShortcutSettings } from "../settings/ShortcutSettings";
import FolderOnTopSettings from "../settings/FolderOnTopSettings";
import TwoWaySyncSettings from "../settings/TwoWaySyncSettings";
import CommonCheckboxSettings from "../settings/CommonCheckboxSettings";
import SelectMyWorkflowsDir from "../settings/SelectMyWorkflowsDir";

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
              </VStack>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
