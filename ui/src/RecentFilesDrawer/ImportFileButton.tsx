import { Button } from "@chakra-ui/react";
import { IconFileImport } from "@tabler/icons-react";
import { useRef } from "react";
import ImportFlowsFileInput from "./ImportFlowsFileInput";

interface Props {
  parentFolderID?: string;
}
export default function ImportFileButton({}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <Button
      leftIcon={<IconFileImport size={18} />}
      variant="outline"
      iconSpacing={1}
      size={"sm"}
      colorScheme="teal"
      onClick={() => {
        fileInputRef.current?.click();
      }}
    >
      Import
      <ImportFlowsFileInput fileInputRef={fileInputRef} />
    </Button>
  );
}
