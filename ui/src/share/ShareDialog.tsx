import {
  Button,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";
import { Workflow } from "../types/dbTypes";
import { useState } from "react";
import CustomDropdown, {
  CustomSelectorOption,
} from "../components/CustomSelector";
import {
  IconExternalLink,
  IconLink,
  IconLock,
  IconWorld,
} from "@tabler/icons-react";
import { workflowVersionsTable } from "../db-tables/WorkspaceDB";

interface Props {
  onClose: () => void;
  workflow: Workflow;
}

const privacyOptions: CustomSelectorOption[] = [
  { label: "Private", value: "PRIVATE", icon: <IconLock /> },
  {
    label: "Anyone with the link can access",
    value: "UNLISTED",
    icon: <IconLink />,
  },
  { label: "Public", value: "PUBLIC", icon: <IconWorld /> },
];
export default function ShareDialog({ onClose, workflow }: Props) {
  const [versionName, setVersionName] = useState(
    "version " + getCurDateString(),
  );
  // const onShare = async () => {
  //   const url = await workflowVersionsTable?.add({
  //     workflowID: workflow.id,
  //     name: versionName,
  //     createTime: Date.now(),
  //     privacy: "public",
  //     json: workflow.json,
  //     remoteUrl: "",
  //   });
  //   if (url) {
  //     alert(url);
  //   }
  // };
  return (
    <Modal isOpen={true} onClose={onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent width={["98%", "90%", "50%"]} maxWidth={"600px"}>
        <ModalHeader>Share "{workflow.name}"</ModalHeader>

        <ModalBody pb={10}>
          <Text mb={3}>Version name</Text>
          <HStack>
            <Input
              value={versionName}
              maxWidth={440}
              onChange={(e) => {
                setVersionName(e.target.value);
              }}
            />
          </HStack>
          <Text mt={4} mb={3}></Text>
          <CustomDropdown options={privacyOptions} />
          <HStack justifyContent={"flex-end"} mt={16}>
            <Button colorScheme="teal">Share</Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function getCurDateString() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JS
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
