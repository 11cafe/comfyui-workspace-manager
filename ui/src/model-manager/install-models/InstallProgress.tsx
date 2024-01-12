import { useEffect, useState } from "react";
import { Button, HStack, Text } from "@chakra-ui/react";
import { setCancelInstall } from "../api/modelsApi";

export default function InstallProgress() {
  const [progress, setProgress] = useState("");
  const handleModelInstallMessage = (event: Event) => {
    const text = (event as CustomEvent).detail;
    const lines = text.split("\n");
    const lastLine = lines.reverse().find((line: string) => line.trim() !== "");
    setProgress(lastLine ?? "");
  };

  useEffect(() => {
    // Attach the event listener
    window.addEventListener("model_install_message", handleModelInstallMessage);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener(
        "model_install_message",
        handleModelInstallMessage
      );
    };
  }, []);

  return (
    <HStack>
      <Text fontWeight={"500"} fontSize={18} py={2}>
        {progress}
      </Text>
      {/* {progress !== "" && (
        <Button onClick={() => setCancelInstall(true)}>Cancel</Button>
      )} */}
    </HStack>
  );
}
