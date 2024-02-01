import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Select,
  Text,
  Input,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { getAllFoldersList } from "../../Api";
import { CivitiModelFileVersion } from "../types";

interface ChooseFolderProps {
  isOpen: boolean;
  file?: CivitiModelFileVersion;
  onClose: () => void;
  selectFolder: (folderPath: string, url: string) => void;
}
export default function ChooseFolder({
  isOpen,
  file,
  onClose,
  selectFolder,
}: ChooseFolderProps) {
  const [folderPath, setFolderPath] = useState("");
  const [foldersList, setFoldersList] = useState<string[]>([]);
  const [url, setUrl] = useState<string>("");
  const cancelRef = useRef(null);

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const folders_list = await getAllFoldersList();
    if (folders_list) {
      setFoldersList(
        folders_list.filter(
          (folderPath) =>
            !["custom_nodes", "config", "saved_prompts"].includes(folderPath),
        ),
      );
    }
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Choose Folder
          </AlertDialogHeader>

          <AlertDialogBody>
            {file?.downloadUrl || (
              <>
                <Text>Model download url</Text>
                <Input
                  placeholder="https://civitai.com/api/download/models/311399"
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                />
              </>
            )}
            <Select
              placeholder="Select option"
              value={folderPath}
              onChange={(e) => setFolderPath(e.target.value)}
            >
              {foldersList.map((folderPath) => (
                <option key={folderPath} value={folderPath}>
                  {folderPath}
                </option>
              ))}
            </Select>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={() => selectFolder(folderPath, url)}
              ml={3}
              isDisabled={url.length === 0}
            >
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
