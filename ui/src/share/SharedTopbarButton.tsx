import { Button } from "@chakra-ui/react";
import { IconCloud } from "@tabler/icons-react";
import { workflowsTable } from "../db-tables/WorkspaceDB";

export function SharedTopbarButton({}) {
  const isCloudflow = workflowsTable?.curWorkflow?.cloudID;
  if (!isCloudflow) return null;
  return (
    <>
      <Button
        onClick={() => {
          window.open(workflowsTable?.curWorkflow?.cloudURL);
        }}
        aria-label={"Shared"}
        size={"sm"}
        leftIcon={<IconCloud />}
      >
        Public
      </Button>
    </>
  );
}
