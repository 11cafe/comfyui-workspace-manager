import { useContext, useRef } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import {
  Badge,
  Button,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  Text,
  Tooltip,
} from "@chakra-ui/react";
// @ts-ignore
import { app } from "/scripts/app.js";
import { IconInfoCircle } from "@tabler/icons-react";
import ResourceDepsForm from "./ResourceDepsForm";

export default function DownloadSpaceJsonDialog() {
  const { setRoute } = useContext(WorkspaceContext);
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <Modal isOpen={true} onClose={() => setRoute("root")} size={"xl"}>
      <ModalContent>
        <ModalBody p={5} gap={5}>
          <HStack>
            <Heading size={"md"}>Add Resouce Dependencies</Heading>
            <Tooltip
              label="runnable workflows include all resource dependecy download urls
              (models, cursom nodes, input images) and can be one-click
              installed and run in any ComfyUI with workpace-manager installed."
            >
              <Badge borderRadius={10}>
                <IconInfoCircle size={20} />
              </Badge>
            </Tooltip>
          </HStack>
          <Text color={"GrayText"}>Export runnable workflow</Text>
          <ResourceDepsForm ref={formRef} />
          <HStack justifyContent={"flex-end"}>
            <Button
              colorScheme="teal"
              size="sm"
              onClick={() => formRef.current?.requestSubmit()}
            >
              Next
            </Button>
            <Button size="sm" onClick={() => setRoute("share")}>
              Skip
            </Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
