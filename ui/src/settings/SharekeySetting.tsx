import { Input, Stack, useToast, Text, Flex, Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { WorkspaceContext } from "../WorkspaceContext";
import { saveShareKey } from "../utils/saveShareKey";

export default function SharekeySetting() {
  const toast = useToast();
  const { session, updateSession } = useContext(WorkspaceContext);
  const [text, setText] = useState("");

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
    <Stack>
      <a
        href={userSettingsTable?.settings?.cloudHost + "/auth/shareKey"}
        target="_blank"
      >
        Copy your share key here and paste it to below to start sharing
        workflows
      </a>

      <Flex gap={2} alignItems={"center"}>
        <Input
          value={text}
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
