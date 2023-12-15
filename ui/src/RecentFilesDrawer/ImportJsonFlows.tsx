import { Button } from "@chakra-ui/react";
import { IconFileImport } from "@tabler/icons-react";
import { ChangeEvent, useContext, useRef } from "react";
import { batchCreateFlows, listWorkflows } from "../WorkspaceDB";
import { RecentFilesContext } from "../WorkspaceContext";
import { getPngMetadata } from "../utils";
import { ImportWorkflow } from "./types";

export default function ImportJsonFlows() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setRecentFiles } = useContext(RecentFilesContext);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const parsedFileList: ImportWorkflow[] = [];
    let curFileName = "";
    let curJSON = "";
    for (const file of files) {
      if (file.type === "image/png") {
        curFileName = file.name.replace(".png", "");
        const pngInfo = await getPngMetadata(file);
        // @ts-expect-error
        pngInfo?.workflow && (curJSON = pngInfo.workflow);
      } else if (
        file.type === "application/json" ||
        file.name?.endsWith(".json")
      ) {
        await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            try {
              const result = e.target?.result;
              if (typeof result === "string") {
                curFileName = file.name.replace(".json", "");
                curJSON = result;
                resolve("");
              } else {
                reject(new Error("File content is not a string"));
              }
            } catch (error) {
              reject(error);
            }
          };
          reader.onerror = reject;
          reader.readAsText(file);
        });
      }
      if (curJSON) {
        parsedFileList.push({
          json: curJSON,
          name: curFileName,
        });
      }
    }

    if (parsedFileList.length) {
      await batchCreateFlows(parsedFileList);
      setRecentFiles && setRecentFiles(listWorkflows());
    }
  };

  return (
    <Button
      leftIcon={<IconFileImport size={18} />}
      variant="outline"
      iconSpacing={1}
      size={"sm"}
      colorScheme="teal"
      onClick={() => {
        console.log(
          "import butotn clicked, fileinputref",
          fileInputRef.current
        );
        fileInputRef.current?.click();
      }}
    >
      Import
      <input
        style={{ display: "none" }}
        ref={fileInputRef}
        type="file"
        accept=".json,image/png"
        multiple
        onChange={handleFileChange}
      />
    </Button>
  );
}
