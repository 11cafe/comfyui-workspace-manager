// @ts-ignore
import { api } from "/scripts/api.js";
import { HStack, Progress, Stack, Text, useColorMode, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";

type Queue = { save_path: string, progress: number };

export default function InstallProgress() {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const [queue, setQueue] = useState<Queue[]>([]);

  useEffect(() => {
    api.addEventListener("download_progress", (e: { detail: Queue[] }) => {
      setQueue(e.detail);
    });
    api.addEventListener("download_error", (e: { detail: string }) => {
      toast({
        title:
          "Download Error",
        description: e.detail,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    });
  }, []);

  return (
    <Stack spacing={5} pos="absolute" bottom="0" left="0" width="50%" zIndex={80} backgroundColor={colorMode === "light" ? "white" : '#242424'} paddingX={5}>
      {queue.map(({ save_path, progress }) => (
        <HStack>
          <Text fontSize={16} width="40%">{save_path.replace(/^.*[\\/]/, '')}</Text>
          <Progress isIndeterminate={!progress} hasStripe width="60%" value={progress} />
        </HStack>
      ))}
    </Stack>
  )
}