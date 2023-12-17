import { Checkbox, HStack, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { IconListCheck, IconX, IconFileExport } from "@tabler/icons-react";
import DeleteConfirm from "../components/DeleteConfirm";
import { ChangeEvent } from "react";
import { batchDeleteFlow, listWorkflows } from "../WorkspaceDB";
import JSZip from "JSZip";
import { formatTimestamp } from "../utils";

type Props = {
  multipleState: boolean;
  selectedKeys: string[];
  isSelectedAll: boolean;
  changeMultipleState: (isMultiple: boolean) => void;
  batchOperationCallback: (type: string, value?: unknown) => void;
};

export default function MultipleSelectionOperation(props: Props) {
  const {
    multipleState,
    changeMultipleState,
    selectedKeys,
    isSelectedAll,
    batchOperationCallback,
  } = props;

  const batchExport = () => {
    const selectedList = listWorkflows().filter((flow) =>
      selectedKeys.includes(flow.id)
    );
    const exportName = `ComfyUI workflow ${formatTimestamp(Date.now())}`;
    const zip = new JSZip();
    const folder = zip.folder(exportName);
    selectedList.forEach((flow) => {
      folder && folder.file(`${flow.name}.json`, flow.json);
    });
    zip.generateAsync({ type: "blob" }).then(function (content) {
      const a = document.createElement("a");
      a.href = window.URL.createObjectURL(content);
      a.download = `${exportName}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };

  const notChecked = selectedKeys.length === 0;

  return (
    <HStack spacing={2} wrap={"wrap"} mb={0}>
      {multipleState ? (
        <>
          <Checkbox
            isChecked={isSelectedAll}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              batchOperationCallback("selectAll", e.target.checked);
            }}
          />
          <Tooltip hasArrow label="Batch export" placement="bottom">
            <IconButton
              isDisabled={notChecked}
              aria-label="Batch export"
              size={"sm"}
              icon={<IconFileExport />}
              onClick={batchExport}
            />
          </Tooltip>
          <Tooltip hasArrow label="Batch deletion">
            <DeleteConfirm
              isDisabled={notChecked}
              variant="solid"
              promptMessage={`Are you sure you want to delete these ${selectedKeys.length} checked workflows?`}
              tooltipText="Batch deletion"
              onDelete={() => {
                batchDeleteFlow(selectedKeys);
                batchOperationCallback("batchDelete");
              }}
            />
          </Tooltip>

          {selectedKeys.length > 0 && (
            <Text fontWeight={600}>{`Selected ${selectedKeys.length}`}</Text>
          )}
          <Tooltip hasArrow label="Exit batch operation">
            <IconButton
              aria-label="Close multi-select operation"
              size={"sm"}
              icon={<IconX />}
              onClick={() => {
                changeMultipleState(false);
              }}
            />
          </Tooltip>
        </>
      ) : (
        <Tooltip hasArrow label="Start batch operation" placement="right">
          <IconButton
            aria-label="Start multi-select operation"
            size={"sm"}
            icon={<IconListCheck />}
            onClick={() => {
              changeMultipleState(true);
            }}
          />
        </Tooltip>
      )}
    </HStack>
  );
}
