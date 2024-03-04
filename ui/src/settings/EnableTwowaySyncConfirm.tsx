import { Button, Heading, Stack } from "@chakra-ui/react";
import { downloadWorkflowsZip } from "../utils/downloadWorkflowsZip";
import { workflowsTable } from "../db-tables/WorkspaceDB";

export default function EnableTwoWaySyncConfirm({
  myWorkflowsDir,
}: {
  myWorkflowsDir: string;
}) {
  return (
    <Stack gap={3}>
      <Heading size={"md"}>🦄 Upgrade to 2.0 - enable two way sync!</Heading>
      <p>Your workflows will be synced to and from path:</p>
      <p>
        <b>{myWorkflowsDir}</b>
      </p>
      <p>
        You can manually put workflow files into this folder using File Explorer
        to sync them with your workspace. You can change this path anytime in
        Settings {">"} Workspace Save Directory
      </p>
      <p>
        <b>
          Please download all your workflows before enabling two way sync as a
          backup!
        </b>{" "}
        So you can manually import some workflows into your workspace in case
        something unexpected happens.
      </p>
      <Button
        colorScheme="teal"
        variant={"outline"}
        width={"fit-content"}
        onClick={async () => {
          const workflows = await workflowsTable?.listAll();
          downloadWorkflowsZip(workflows ?? []);
        }}
      >
        👉 Download All My Workflows
      </Button>
    </Stack>
  );
}
