import {
  Button,
  Box,
  ProgressBar,
  Text,
  useTheme,
  //   useToasts,
} from "@primer/react";
import { useState, useEffect } from "react";
import { cancelDownload } from "../../../Api";
import { api } from "../../../utils/comfyapp";

export default function InstallModelProgress() {
  const { theme } = useTheme();
  //   const { addToast } = useToasts();
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    api.addEventListener("download_progress", (e) => {
      setQueue(e.detail);
    });
    api.addEventListener("download_error", (e) => {
      console.log({
        title: "Download Error",
        description: e.detail,
        variant: "danger",
        duration: 4000,
      });
    });
  }, []);

  if (!queue.length) return null;

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      position="absolute"
      bottom="0"
      left="0"
      width="100%"
      zIndex={80}
      backgroundColor={theme === "light" ? "white" : "#242424"}
      paddingX={5}
      paddingY={3}
    >
      {queue.map(({ save_path, progress }) => (
        <Box key={save_path} display="flex" alignItems="center" gap={2}>
          <Text fontSize={16} width="40%">
            {save_path.replace(/^.*[\\/]/, "")}
          </Text>
          <ProgressBar
            progress={progress}
            width="100%"
            bg="gray.200"
            barColor="blue.500"
            sx={{ height: "8px", margin: "0 10px" }}
          />
          <Text fontSize={16} width="10%">
            {progress.toFixed(1)}%
          </Text>
          <Button
            variant="danger"
            size="small"
            sx={{ margin: "0 0 0 8px" }}
            onClick={() => cancelDownload(save_path)}
          >
            Cancel
          </Button>
        </Box>
      ))}
    </Box>
  );
}
