import { Input, Stack, useToast, Text, Flex, Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { WorkspaceContext } from "../WorkspaceContext";
import { saveShareKey } from "../utils/saveShareKey";

export default function SharekeySetting() {
  const toast = useToast();
  const { session, updateSession } = useContext(WorkspaceContext);
  const [text, setText] = useState("");
  const cloudDomain = new URL(userSettingsTable?.settings?.cloudHost!).hostname;

  useEffect(() => {
    setText(session?.shareKey ?? "");
  }, [session]);
  const submitChange = async (text: string) => {
    saveShareKey(text);
    updateSession({ username: session?.username ?? null, shareKey: text });
    toast({
      title: "Setting saved. Please refresh to see the changes.",
      status: "success",
      duration: 4000,
    });
  };

  return (
    <Stack gap={3}>
      <p style={{ fontWeight: "bold" }}>Cloud Backup [Beta]</p>
      <p>
        <a
          href={userSettingsTable?.settings?.cloudHost + "/auth/shareKey"}
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          <Button size={"sm"}>👉Copy your share key from here</Button>
        </a>{" "}
        and paste it below to start saving workflow versions to cloud at{" "}
        <a href={userSettingsTable?.settings?.cloudHost!} target="_blank">
          {cloudDomain}
        </a>
      </p>

      <Flex alignItems={"center"}>
        <Input
          value={text}
          placeholder="Paste your share key here"
          onChange={(e) => setText(e.target.value)}
          onBlur={() => submitChange(text)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitChange(text);
            }
          }}
        />
      </Flex>
    </Stack>
  );
}
