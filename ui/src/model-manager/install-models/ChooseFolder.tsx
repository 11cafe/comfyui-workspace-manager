import { Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Select } from "@chakra-ui/react";
import { useRef, useState } from "react";

const allFolderPaths = [
    "checkpoints",
    "configs",
    "loras",
    "vae",
    "clip",
    "unet",
    "clip_vision",
    "style_models",
    "embeddings",
    "diffusers",
    "vae_approx",
    "controlnet",
    "gligen",
    "upscale_models",
    "custom_nodes",
    "hypernetworks",
];
interface ChooseFolderProps {
    isOpen: boolean;
    onClose: () => void;
    selectFolder: (folderPath: string) => void;
}
export default function ChooseFolder({ isOpen, onClose, selectFolder }: ChooseFolderProps) {
    const [folderPath, setFolderPath] = useState("");

    const cancelRef = useRef(null);

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
                            {allFolderPaths.map((folderPath) => (
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