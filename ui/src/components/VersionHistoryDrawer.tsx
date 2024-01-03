import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { IconX } from "@tabler/icons-react";
import {
  changelogsTable,
  getWorkflow,
  updateFlow,
  workspace,
} from "../WorkspaceDB";
import { useContext, useEffect, useState } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import { formatTimestamp } from "../utils";
// @ts-ignore
import { app } from "/scripts/app.js";

export function VersionHistoryDrawer({ onClose }: { onClose: () => void }) {
  const { curFlowID, isDirty } = useContext(WorkspaceContext);
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const curWorkflow = curFlowID != null ? getWorkflow(curFlowID) : null;
  if (curFlowID == null || curWorkflow == null) {
    alert("No current workflow found!");
    return null;
  }
  const changelogs = changelogsTable?.getByWorkflowID(curFlowID);

  useEffect(() => {
    const selectedChangelog = changelogs?.filter(
      (c) => c.json === curWorkflow.lastSavedJson
    );
    const selectedChangelogID = selectedChangelog?.[0]?.id;
    selectedChangelogID && setSelectedVersion(selectedChangelogID);
  }, []);
  return (
    <Card
      width={400}
      height={"100vh"}
      pl={4}
      pr={5}
      pt={4}
      gap={4}
      position={"fixed"}
      top={0}
      left={0}
      zIndex={1000}
    >
      <CardBody>
        <Flex justifyContent={"space-between"} alignItems={"center"} mb={3}>
          <Heading size="md">Version History</Heading>
          <IconButton
            size={"sm"}
            icon={<IconX />}
            onClick={onClose}
            variant={"ghost"}
            aria-label="close version history"
          />
        </Flex>
        <Text mb={4}>All the saved changes of this workflow</Text>
        <Stack divider={<StackDivider />} spacing={2}>
          {changelogs?.map((c) => {
            return (
              <Button
                size={"sm"}
                variant={"ghost"}
                onClick={() => {
                  if (isDirty) {
                    alert(
                      "You have unsaved changes, please save or discard your changes to proceed switching version, in case losing your changes."
                    );
                    return;
                  }
                  app.loadGraphData(JSON.parse(c.json));
                  updateFlow(curFlowID, { lastSavedJson: c.json });
                  onClose();
                }}
                isActive={c.id === selectedVersion}
              >
                Saved at {formatTimestamp(c.createTime, true)}
              </Button>
            );
          })}
        </Stack>
      </CardBody>
    </Card>
  );
}