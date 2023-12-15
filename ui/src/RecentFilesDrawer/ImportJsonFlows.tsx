import { Button } from "@chakra-ui/react";
import { IconFileImport } from "@tabler/icons-react";
import { ChangeEvent, useContext, useRef } from "react";
import { Workflow, createFlow, listWorkflows, workspace } from "../WorkspaceDB";
import { RecentFilesContext } from "../WorkspaceContext";

export default function ImportJsonFlows() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setRecentFiles } = useContext(RecentFilesContext);
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const filesArray = Array.from(files);
    console.log("filearr", filesArray);
    const newFlows = await Promise.all(
      filesArray.map((file) => readJsonFile(file))
    );
    // const newFlows = filesArray.map((file) => {
    //   if (file.type === "application/json") {
    //     const reader = new FileReader();
    //     reader.onload = (e: ProgressEvent<FileReader>) => {
    //       // Check if result is not null and is a string
    //       if (e.target?.result && typeof e.target.result === "string") {
    //         console.log("res", e.target.result);
    //         const flow = createFlow({
    //           json: e.target?.result ?? "{}",
    //           name: file.name.replace(".json", ""),
    //         });
    //         return flow;
    //       }
    //     };
    //     reader.readAsText(file);
    //   }
    // });
    setRecentFiles && setRecentFiles(listWorkflows());
  };

  const readJsonFile = async (file: File): Promise<Workflow> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = e.target?.result;
          if (typeof result === "string") {
            resolve(
              createFlow({
                json: result,
                name: file.name.replace(".json", ""),
              })
            );
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
        accept=".json"
        multiple
        onChange={handleFileChange}
      />
    </Button>
  );
}
