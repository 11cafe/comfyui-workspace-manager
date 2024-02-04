import {
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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { IconX } from "@tabler/icons-react";
import {
  changelogsTable,
  workflowsTable,
  workflowVersionsTable,
} from "../db-tables/WorkspaceDB";
import { useContext, useEffect, useState } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import { formatTimestamp } from "../utils";
// @ts-ignore
import { app } from "/scripts/app.js";
import { Changelog, WorkflowVersion } from "../types/dbTypes";
import DeleteConfirm from "./DeleteConfirm";

export function VersionHistoryDrawer({ onClose }: { onClose: () => void }) {
  const { curFlowID, isDirty } = useContext(WorkspaceContext);
  const [active, setActive] = useState(0); // 0: version、1: changelog
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const [changelogs, setChangelogs] = useState<Changelog[]>([]);
  const [versions, setVersions] = useState<WorkflowVersion[]>([]);

  const loadChangeLogs = async (flowId: string) => {
    const workflow = await workflowsTable?.get(flowId);
    const changelogs = await changelogsTable?.listByWorkflowID(flowId);
    setChangelogs(changelogs ?? []);
    const selectedChangelog = changelogs?.filter(
      (c) => c.json === workflow?.lastSavedJson,
    );
    const selectedChangelogID = selectedChangelog?.[0]?.id;
    selectedChangelogID && setSelectedVersion(selectedChangelogID);
  };

  useEffect(() => {
    switch (active) {
      case 0:
        workflowVersionsTable?.listByWorkflowID(curFlowID!).then((res) => {
          setVersions(res);
        });
        break;
      case 1:
        loadChangeLogs(curFlowID!);
        break;
    }
  }, [active]);

  useEffect(() => {
    app.canvasEl.addEventListener("click", onClose);
    return () => {
      app.canvasEl.removeEventListener("click", onClose);
    };
  }, [active]);

  return (
    <Card
      width={400}
      height={"100vh"}
      gap={0}
      position={"fixed"}
      top={0}
      left={0}
      zIndex={1000}
    >
      <CardHeader pb={1} mb={0}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Heading size="md">Version History</Heading>
          <IconButton
            size={"sm"}
            icon={<IconX />}
            onClick={onClose}
            variant={"ghost"}
            aria-label="close version history"
          />
        </Flex>
      </CardHeader>
      <CardBody overflowY={"auto"} gap={0}>
        <Tabs isFitted variant="enclosed" onChange={setActive}>
          <TabList mb="1em">
            <Tab>Versions</Tab>
            <Tab>Change History</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack divider={<StackDivider />} spacing={2}>
                {versions?.map((version) => {
                  return (
                    <Flex w={"100%"} mb={1} justify={"space-between"}>
                      <Stack textAlign={"left"} gap={0}>
                        <Text fontWeight={"500"}>
                          {version.name ?? "untitled"}
                        </Text>
                        <Text color={"GrayText"} fontSize={"sm"}>
                          Created: {formatTimestamp(version.createTime)}
                        </Text>
                      </Stack>
                      <Flex alignItems="center">
                        <DeleteConfirm
                          promptMessage="Are you sure you want to delete this version?"
                          onDelete={() => {
                            // TODO
                          }}
                        />
                      </Flex>
                    </Flex>
                  );
                })}
              </Stack>
            </TabPanel>
            <TabPanel>
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
                            "You have unsaved changes, please save or discard your changes to proceed switching version, in case losing your changes.",
                          );
                          return;
                        }
                        app.loadGraphData(JSON.parse(c.json));
                        workflowsTable?.updateFlow(curFlowID!, {
                          lastSavedJson: c.json,
                        });
                        onClose();
                      }}
                      isActive={c.id === selectedVersion}
                    >
                      Saved at {formatTimestamp(c.createTime, true)}
                    </Button>
                  );
                })}
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  );
}
