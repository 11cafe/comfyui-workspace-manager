import { Input, Stack, useToast, Text, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export default function CloudHostSetting() {
  const toast = useToast();
  const [text, setText] = useState("");

  const getSettings = () => {
    userSettingsTable?.getSetting("cloudHost").then((res) => {
      setText(res ?? "");
    });
  };

  useEffect(() => {
    getSettings();
  }, []);
  const submitChange = async (text: string) => {
    text = text.trim();
    if (text.endsWith("/")) text = text.slice(0, -1);
    await userSettingsTable?.upsert({ cloudHost: text });
    getSettings();
    toast({
      title: "Setting saved. Please refresh to see the changes.",
      status: "success",
      duration: 4000,
    });
  };

  return (
    <Stack>
      <Text>
        For enterprise paid user only. Hosting site of the shared workflow.
      </Text>
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
        <Button
          size={"sm"}
          onClick={() => {
            const cloudHost = userSettingsTable?.defaultSettings.cloudHost!;
            setText(cloudHost);
            submitChange(cloudHost);
          }}
        >
          Reset
        </Button>
      </Flex>
    </Stack>
  );
}
