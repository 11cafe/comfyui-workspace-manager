import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { useContext } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import { saveShareKey } from "../utils/saveShareKey";

export default function CreateVersionLogin({
  onClose,
}: {
  onClose: () => void;
}) {
  const cloudHost = userSettingsTable?.settings?.cloudHost;
  const toast = useToast();
  const { updateSession } = useContext(WorkspaceContext);
  return (
    <Modal isOpen={true} onClose={onClose} size={"xl"}>
      <ModalContent width={"90vw"}>
        <ModalBody>
          <Stack p={"10px 10px"} gap={3}>
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              ✨New Version Control Exprience [beta]
            </h2>
            <p>
              We have a new version control experience. Now your versions will
              be stored <b>privately</b> and securely in cloud at{" "}
              <a href="www.nodecafe.co">www.nodecafe.co</a>
            </p>
            <h3 style={{ fontWeight: "bold" }}>Why cloud?</h3>
            <p>
              Previously workflow versions are stored locally in your browser
              storage. But people reported inconsistent versions when they
              switched browser or device. Therefore we are moving to cloud. So
              you can view your workflow versions from any devices, even your
              phone.
            </p>
            <h3 style={{ fontWeight: "bold" }}>🤩Get Started</h3>
            <Flex alignItems={"center"} gap={2} mb={3}>
              <a href={cloudHost + "/auth/shareKey"} target="_blank">
                <Button colorScheme="blue">Login</Button>
              </a>
              <p> then copy your share key to below</p>
            </Flex>
            <Input
              placeholder="Paste your share key here"
              onChange={(e) => {
                if (
                  !e.target.value ||
                  e.target.value === "" ||
                  e.target.value.length < 20
                ) {
                  return;
                }

                saveShareKey(e.target.value);
                updateSession({
                  shareKey: e.target.value,
                  username: null,
                });
                toast({
                  title: "Share key saved. You can create versions now.",
                  status: "success",
                  duration: 5000,
                });
              }}
            />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
