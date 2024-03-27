import { Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { IconExternalLink } from "@tabler/icons-react";
import DeleteConfirm from "../components/DeleteConfirm";
import MoreActionMenu from "./MoreActionMenu";
import { openWorkflowInNewTab } from "../utils";
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
    <Flex width={"90px"} justifyContent={"flex-end"}>
      <Tooltip label="Open in new tab">
        <IconButton
          aria-label="Open in new tab"
          size={"sm"}
          variant="ghost"
          onClick={() => openWorkflowInNewTab(workflow.id)}
          icon={<IconExternalLink color={"#718096"} size={23} />}
        />
      </Tooltip>

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
