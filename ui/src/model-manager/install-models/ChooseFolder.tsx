import { Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Select } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { getAllFoldersList } from "../../Api";

interface ChooseFolderProps {
    isOpen: boolean;
    onClose: () => void;
    selectFolder: (folderPath: string) => void;
}
export default function ChooseFolder({ isOpen, onClose, selectFolder }: ChooseFolderProps) {
    const [folderPath, setFolderPath] = useState("");
    const [foldersList, setFoldersList] = useState<string[]>([]);

    const cancelRef = useRef(null);

    useEffect(() => {
      initData();
    }, []);

    const initData = async () => {
      const folders_list = await getAllFoldersList();
      if (folders_list) setFoldersList(folders_list);
    };

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Choose Folder
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        <Select placeholder='Select option' value={folderPath} onChange={e => setFolderPath(e.target.value)}>
                            {foldersList.map((folderPath) => (
                                <option value={folderPath}>{folderPath}</option>
                            ))}
                        </Select>
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={() => selectFolder(folderPath)} ml={3}>
                            Confirm
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}