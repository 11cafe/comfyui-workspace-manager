import { Button, Dialog, TextInput, Box, Text } from "@primer/react";
import { useState } from "react";
import { getCivitApiKey, setCivitApiKey } from "../../../utils/civitUtils";
import toast from "react-hot-toast";

export default function CivitAIKeyModal({ isOpen, onClose }) {
  const [apiKeyInput, setApiKeyInput] = useState(getCivitApiKey() || "");

  const saveApiKey = () => {
    setCivitApiKey(apiKeyInput);
    onClose();
    toast.success("API Key saved");
  };

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={onClose}
      aria-labelledby="civitai-key-modal"
    >
      <Dialog.Header id="civitai-key-modal">Set Civitai API Key</Dialog.Header>
      <Box p={3} mb={2}>
        <Text fontSize={1}>
          Some Civitai.com models require user login to download, you will need
          a Civitai API key to download in that case
        </Text>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          mt={3}
          sx={{ gap: 2 }}
        >
          <TextInput
            value={apiKeyInput}
            onChange={(e) => setApiKeyInput(e.target.value)}
            placeholder="API Key"
            sx={{ width: "100%" }}
          />
          <Button sx={{ py: 1, mr: 2 }} onClick={saveApiKey}>
            Save
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
