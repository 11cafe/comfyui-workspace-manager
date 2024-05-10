import {
  Input,
  Stack,
  useToast,
  Text,
  HStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export default function CloudHostSetting() {
  const inputRef = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const getSettings = () => {
    userSettingsTable?.getSetting("cloudHost").then((res) => {
      inputRef.current?.setAttribute("value", res ?? "");
    });
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <Stack>
      <Text>
        For enterprise paid user only. Hosting site of the shared workflow.
      </Text>
      <Flex gap={2} alignItems={"center"}>
        <Input
          ref={inputRef}
          onBlur={() => {
            console.log("onBlur", inputRef.current?.value);
            userSettingsTable?.upsert({ cloudHost: inputRef.current?.value });
            getSettings();
            toast({
              title: "Setting saved. Please refresh to see the changes.",
              status: "success",
              duration: 4000,
            });
          }}
        />
        <Button
          size={"sm"}
          onClick={() => {
            inputRef.current?.setAttribute(
              "value",
              userSettingsTable?.defaultSettings.cloudHost!,
            );
            inputRef.current?.blur();
          }}
        >
          Reset
        </Button>
      </Flex>
    </Stack>
  );
}
