import {
  Button,
  Box,
  ProgressBar,
  Text,
  useTheme,
  IconButton,
} from "@primer/react";
import { useState, useEffect } from "react";
import { cancelDownload } from "../../../Api";
import { api } from "../../../utils/comfyapp";
import toast from "react-hot-toast";
import { X } from "phosphor-react";

export default function InstallModelProgress() {
  const { theme } = useTheme();
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    api.addEventListener("download_progress", (e) => {
      setQueue(e.detail);
    });
    api.addEventListener("download_error", (e) => {
      console.log("[DOWNLOAD ERROR]: ", e.detail);
      toast(
        (t) => (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "370px",
            }}
          >
            <span>Download Error: {e.detail.slice(0, 150)}</span>
            <IconButton
              onClick={() => {
                toast.remove(t.id);
                api.removeEventListener("download_error");
              }}
              icon={X}
              style={{ marginLeft: "auto" }}
            ></IconButton>
          </span>
        ),
        {
          duration: 4000,
          position: "bottom-left",
          style: {
            maxWidth: "420px",
          },
        },
      );
      api.removeEventListener("download_error");
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
