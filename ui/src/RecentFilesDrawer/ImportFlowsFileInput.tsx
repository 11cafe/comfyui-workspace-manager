import { ChangeEvent, useContext, useRef, useState } from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IconFile, IconFileImport, IconFolder } from "@tabler/icons-react";
import { workflowsTable, foldersTable } from "../db-tables/WorkspaceDB";
import { RecentFilesContext } from "../WorkspaceContext";
import { getPngMetadata } from "../utils/mediaMetadataUtils";
import { ImportWorkflow, importMenuItemList } from "./types";

interface WorkflowFile {
  name: string;
  json: string;
}

interface TreeNode {
  name: string;
  isFile: boolean;
  file?: WorkflowFile;
  children?: TreeNode[];
  parentFolderID?: string;
}

interface HTMLInputDirectoryElement extends HTMLInputElement {
  webkitdirectory: boolean;
}
interface Props {
  onlyImportFile?: boolean;
  parentFolderID?: string;
}
export default function ImportFlowsFileInput({
  parentFolderID,
  onlyImportFile = false,
}: Props) {
  const { onRefreshFilesList } = useContext(RecentFilesContext);
  const [importType, setImportType] = useState("file"); // file/folder
  const fileInputRef = useRef<HTMLInputDirectoryElement>(null);

  const onClick = (type: string) => {
    setImportType(type);
    if (type === "folder") {
      fileInputRef.current!.setAttribute("webkitdirectory", "");
    } else {
      fileInputRef.current!.removeAttribute("webkitdirectory");
    }
    fileInputRef.current?.click();
  };

  const parseFile = async (file: File): Promise<WorkflowFile | null> => {
    if (file.type === "image/png") {
      const pngInfo = await getPngMetadata(file);
      // @ts-expect-error
      const flowJson = pngInfo?.workflow;
      if (flowJson) {
        return {
          json: flowJson,
          name: file.name.replace(".png", ""),
        };
      }
    } else if (
      file.type === "application/json" ||
      file.name?.endsWith(".json")
    ) {
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const result = e.target?.result;
            if (typeof result === "string") {
              resolve({
                json: result,
                name: file.name.replace(".json", ""),
              });
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
    return null;
  };

  const createFileAndFolderFormTree = async (treeNode: TreeNode) => {
    // Traverse the folders in the tree through queue breadth first, creating folders and files under the current folder in sequence;
    const queue = [treeNode];
    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (currentNode && !currentNode.isFile) {
        const folder = await foldersTable?.create({
          name: currentNode.name,
          parentFolderID: currentNode.parentFolderID,
        });
        if (currentNode.children && currentNode.children.length) {
          const fileList: WorkflowFile[] = [];
          currentNode.children.forEach((child) => {
            if (child.isFile && child.file) {
              fileList.push(child.file);
            } else {
              child.parentFolderID = folder?.id;
              queue.push(child);
            }
          });
          if (fileList.length) {
            await workflowsTable?.batchCreateFlows(
              fileList,
              undefined,
              folder?.id,
            );
          }
        }
      }
    }
    onRefreshFilesList?.();
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    if (importType === "folder") {
      // Create a root node based on the selected directory
      const rootNode: TreeNode = {
        name: files[0].webkitRelativePath.split("/")[0],
        isFile: false,
        children: [],
      };

      // Create nested tree file structure from file path
      for (const file of files) {
        if (file.name !== ".DS_Store") {
          const splitPath = file.webkitRelativePath.split("/");
          let currentLevel = rootNode.children ?? [];

          // Start traversing the second part of the path
          for (let index = 1; index < splitPath.length; index++) {
            const part = splitPath[index];
            let existingNode = currentLevel.find(
              (child) => child.name === part,
            );

            if (!existingNode) {
              existingNode = {
                name: part,
                isFile: index === splitPath.length - 1,
                children: index === splitPath.length - 1 ? undefined : [],
              };

              if (existingNode.isFile) {
                const parseFileResult = await parseFile(file);
                if (parseFileResult) {
                  existingNode.file = parseFileResult;
                }
              }
              currentLevel.push(existingNode);
            }

            if (existingNode && !existingNode.isFile) {
              currentLevel = existingNode.children!;
            }
          }
        }
      }
      createFileAndFolderFormTree(rootNode);
    } else {
      const parsedFileList: ImportWorkflow[] = [];

      for (const file of files) {
        const parseFileResult = await parseFile(file);
        if (parseFileResult) {
          parsedFileList.push(parseFileResult);
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
    }
  };

  return (
    <>
      {onlyImportFile ? (
        <MenuItem
          onClick={(e) => {
            e.stopPropagation();
            onClick("file");
          }}
          icon={<IconFileImport size={19} />}
        >
          Import workflows
        </MenuItem>
      ) : (
        <Menu closeOnSelect={true}>
          <MenuButton
            as={Button}
            leftIcon={<IconFileImport size={18} />}
            variant="outline"
            iconSpacing={1}
            size={"sm"}
            colorScheme="teal"
          >
            Import
          </MenuButton>
          <MenuList>
            {importMenuItemList.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  onClick(item.type);
                }}
                iconSpacing={2}
                icon={
                  item.type === "folder" ? (
                    <IconFolder size={18} />
                  ) : (
                    <IconFile size={18} />
                  )
                }
              >
                {item.title}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
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
    </>
  );
}
