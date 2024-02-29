import { Button, Checkbox, Stack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { userSettingsTable, workflowsTable } from "../db-tables/WorkspaceDB";
import { useDialog } from "../components/AlertDialogProvider";
import { downloadWorkflowsZip } from "../utils/downloadWorkflowsZip";

export default function TwoWaySyncSettings() {
  const [checked, setChecked] = useState(false);
  const [savingDir, setSavingDir] = useState("");
  const { showDialog } = useDialog();
  const getTwoWaySync = () => {
    userSettingsTable?.getSettings().then((res) => {
      setSavingDir(res?.myWorkflowsDir ?? "undefined");
      setChecked(!!res?.twoWaySync);
    });
  };

  useEffect(() => {
    getTwoWaySync();
  }, []);
  const onTwoWaySyncChange = async (e: any) => {
    // setChecked(e.target.checked);
    if (!e.target.checked) {
      await userSettingsTable?.upsert({ twoWaySync: e.target.checked });
      getTwoWaySync();
      return;
    }
    const myWorkflowsDir =
      await userSettingsTable?.getSetting("myWorkflowsDir");
    showDialog(
      <EnableTwoWaySyncConfirm
        myWorkflowsDir={myWorkflowsDir ?? "undefined"}
      />,
      [
        {
          label: "I have downloaded all my workflows and ready to enable",
          onClick: async () => {
            await userSettingsTable?.upsert({ twoWaySync: true });
            getTwoWaySync();
          },
        },
      ],
    );
  };

  return (
    <Stack>
      <Text>
        If enabled, your workflows will be synced to and from <b>{savingDir}</b>
        <br />
        You can manually move files into this folder using File Explorer or
        Finder to import them into your workspace.
      </Text>
      <Checkbox isChecked={checked} onChange={onTwoWaySyncChange}>
        Enable two way sync (DO NOT USE!! EXPERIMENTAL!)
      </Checkbox>
    </Stack>
  );
}

function EnableTwoWaySyncConfirm({
  myWorkflowsDir,
}: {
  myWorkflowsDir: string;
}) {
  return (
    <Stack gap={3}>
      <p>Your workflows will be synced to and from path:</p>
      <p>
        <b>{myWorkflowsDir}</b>
      </p>
      <p>
        Please make sure this path is valid. You can change this path anytime in
        Settings {">"} Workspace Save Direcotry
      </p>
      <p>
        <b>Please download all your workflows before enabling two way sync!</b>{" "}
        So you can manually import some workflows into your my_workflows/
        directory on your disk in case something unexpected happens.
      </p>
      <Button
        colorScheme="teal"
        variant={"outline"}
        width={"fit-content"}
        size={"sm"}
        onClick={async () => {
          const workflows = await workflowsTable?.listAll();
          downloadWorkflowsZip(workflows ?? []);
        }}
      >
        Download All My Workflows
      </Button>
    </Stack>
  );
}
