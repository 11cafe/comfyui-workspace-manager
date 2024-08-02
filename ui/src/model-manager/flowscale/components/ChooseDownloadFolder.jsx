import { Button, Dialog, Select, TextInput, Box, Text } from "@primer/react";
import { useEffect, useRef, useState } from "react";
import { getAllFoldersList } from "../../../Api";

export default function ChooseDownloadFolder({
  isOpen,
  fileSelected,
  onClose,
  selectFolder,
}) {
  const [folderPath, setFolderPath] = useState("");
  const [foldersList, setFoldersList] = useState([]);
  const [url, setUrl] = useState("");
  const cancelRef = useRef(null);

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const folders_list = await getAllFoldersList();
    if (folders_list) {
      ["custom_nodes", "config", "saved_prompts"].forEach((folder) => {
        delete folders_list[folder];
      });
      setFoldersList(Object.values(folders_list).flatMap((folder) => folder));
    }
  };

  return (
    <Dialog isOpen={isOpen} onDismiss={onClose} aria-labelledby="header-id">
      <Dialog.Header id="header-id">Choose Folder</Dialog.Header>

      <Box
        display="flex"
        flexDirection="column"
        sx={{
          padding: 3,
          gap: 2,
        }}
      >
        {!fileSelected && (
          <>
            <Text>Model download url</Text>
            <TextInput
              placeholder="https://civitai.com/api/download/models/311399"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
          </>
        )}
        <Text>Choose model install folder</Text>
        <Select
          aria-label="Select option"
          value={folderPath}
          onChange={(e) => setFolderPath(e.target.value)}
        >
          <option value="" disabled>
            Select option
          </option>
          {foldersList.map((folderPath) => (
            <option key={folderPath} value={folderPath}>
              {folderPath}
            </option>
          ))}
        </Select>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 3,
        }}
      >
        <Button ref={cancelRef} onClick={onClose} variant="default">
          Cancel
        </Button>
        <Button
          onClick={() => selectFolder(folderPath, url)}
          variant="primary"
          disabled={url === "" && folderPath === ""}
        >
          Confirm
        </Button>
      </Box>
    </Dialog>
  );
}
