import { Button, Flex, Input, Stack } from "@chakra-ui/react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { useContext } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import { encodeKey } from "../utils/encryptUtils";

export default function CreateVersionLogin() {
  const cloudHost = userSettingsTable?.settings?.cloudHost;
  const { updateSession } = useContext(WorkspaceContext);
  return (
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
        We have a new version control experience. Now your versions will be
        stored securely in cloud at{" "}
        <a href="www.nodecafe.co">www.nodecafe.co</a>
      </p>
      <h3 style={{ fontWeight: "bold" }}>Why cloud?</h3>
      <p>
        Previously workflow versions are stored locally in your browser storage.
        But people reported inconsistent versions when they switched browser or
        device. Therefore we are moving to cloud. So you can view your workflow
        versions from any devices, even your phone.
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
          if (!e.target.value || e.target.value === "") return;
          const key = encodeKey(e.target.value);
          localStorage.setItem("workspace_manager_shareKey", key);
          updateSession({
            shareKey: e.target.value,
            username: null,
          });
        }}
      />
    </Stack>
  );
}
