import { Flex, IconButton, Tooltip } from "@chakra-ui/react";
import DeleteConfirm from "../components/DeleteConfirm";
import MoreActionMenu from "./MoreActionMenu";
import { useContext } from "react";
import { RecentFilesContext } from "../WorkspaceContext";
import { Workflow } from "../types/dbTypes";

export default function WorkflowListItemActionButtons({
  workflow,
}: {
  workflow: Workflow;
}) {
  const { onDeleteFlow } = useContext(RecentFilesContext);
  return (
    <Flex justifyContent={"flex-end"}>
      <DeleteConfirm
        promptMessage="Are you sure you want to delete this workflow?"
        onDelete={() => {
          onDeleteFlow && onDeleteFlow(workflow.id);
        }}
      />
      <MoreActionMenu workflow={workflow} />
    </Flex>
  );
}
