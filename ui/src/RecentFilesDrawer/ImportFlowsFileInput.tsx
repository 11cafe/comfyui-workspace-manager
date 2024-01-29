import { ChangeEvent, useContext } from "react";
import { workflowsTable } from "../db-tables/WorkspaceDB";
import { RecentFilesContext } from "../WorkspaceContext";
import { getPngMetadata } from "../utils";
import { ImportWorkflow } from "./types";

interface Props {
  fileInputRef: React.RefObject<HTMLInputElement>;
  parentFolderID?: string;
}
export default function ImportFlowsFileInput({
  parentFolderID,
  fileInputRef,
}: Props) {
  const { onRefreshFilesList } = useContext(RecentFilesContext);
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const parsedFileList: ImportWorkflow[] = [];
    for (const file of files) {
      if (file.type === "image/png") {
        const pngInfo = await getPngMetadata(file);
        // @ts-expect-error
        const flowJson = pngInfo?.workflow;
        if (flowJson) {
          parsedFileList.push({
            json: flowJson,
            name: file.name.replace(".png", ""),
          });
        }
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
                parsedFileList.push({
                  json: result,
                  name: file.name.replace(".json", ""),
                });
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
    }

    if (parsedFileList.length) {
      await workflowsTable?.batchCreateFlows(
        parsedFileList,
        undefined,
        parentFolderID,
      );
      onRefreshFilesList && onRefreshFilesList();
    }
  };

  return (
    <input
      style={{ display: "none" }}
      ref={fileInputRef}
      type="file"
      accept=".json,image/png"
      multiple
      onChange={handleFileChange}
      onClick={(e) => {
        e.stopPropagation();
      }}
    />
  );
}
