import { Checkbox, HStack, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { IconListCheck, IconX, IconDownload } from "@tabler/icons-react";
import DeleteConfirm from "../components/DeleteConfirm";
import { ChangeEvent } from "react";
import { workflowsTable } from "../db-tables/WorkspaceDB";
import { downloadWorkflowsZip } from "../utils/downloadWorkflowsZip";

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

  const batchExport = async () => {
    const selectedList = (await workflowsTable?.batchQuery(selectedKeys)) ?? [];
    downloadWorkflowsZip(selectedList);
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
          <Tooltip hasArrow label="Download Zip" placement="bottom">
            <IconButton
              isDisabled={notChecked}
              aria-label="Batch export"
              size={"sm"}
              icon={<IconDownload size={21} />}
              onClick={batchExport}
            />
          </Tooltip>
          <Tooltip hasArrow label="Batch deletion">
            <DeleteConfirm
              isDisabled={notChecked}
              variant="solid"
              promptMessage={`Are you sure you want to delete these ${selectedKeys.length} checked workflows?`}
              tooltipText="Delete selected"
              onDelete={async () => {
                await workflowsTable?.batchDeleteFlow(selectedKeys);
                batchOperationCallback("batchDelete");
              }}
            />
          </Tooltip>

          {selectedKeys.length > 0 && (
            <Text fontWeight={600}>{`Selected ${selectedKeys.length}`}</Text>
          )}
          <Tooltip hasArrow label="Exit multi-select">
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
        <Tooltip hasArrow label="Select multiple" placement="bottom-start">
          <IconButton
            aria-label="Start multi-select operation"
            size={"sm"}
            variant={"outline"}
            icon={<IconListCheck size={21} />}
            onClick={() => {
              changeMultipleState(true);
            }}
          />
        </Tooltip>
      )}
    </HStack>
  );
}
