import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Workflow, WorkflowPrivacy, WorkflowVersion } from "../types/dbTypes";
import { useEffect, useRef, useState } from "react";
import CustomSelector from "../components/CustomSelector";
import {
  IconCheck,
  IconCloud,
  IconCopy,
  IconExternalLink,
  IconPlus,
} from "@tabler/icons-react";
import {
  userSettingsTable,
  workflowVersionsTable,
  workflowsTable,
} from "../db-tables/WorkspaceDB";
// @ts-ignore
import { api } from "/scripts/api.js";
// @ts-ignore
import { app } from "/scripts/app.js";
import { generateRandomKey, getNodeDefs, privacyOptions } from "./shareUtils";
import { formatTimestamp } from "../utils";

interface Props {
  onClose: () => void;
}

export default function ShareDialog({ onClose }: Props) {
  const [versionName, setVersionName] = useState(
    "version " + getCurDateString(),
  );
  const [localVersions, setLocalVersions] = useState<WorkflowVersion[]>([]);
  const [loading, setLoading] = useState(false);
  const [cloudHost, setCloudHost] = useState("");
  const [privacy, setPrivacy] = useState<WorkflowPrivacy>("PRIVATE");
  const [selectedVersion, setSelectedVersion] = useState<
    string | "new_version"
  >("new_version");
  const cloudHostRef = useRef("");
  const [workflow, setWorkflow] = useState<Workflow>();
  const toast = useToast();
  const handleShareWorkflowSuccess = async (event: MessageEvent) => {
    const detail = event.data;
    if (
      event.origin !== cloudHostRef.current ||
      detail.type !== "share_workflow_success"
    ) {
      return;
    }

    const localID = detail.localWorkflowID;
    const localVerID = detail.localVersionID;
    const cloudVersionID = detail.version.id;
    const cloudID = detail.version.workflowID;

    cloudID &&
      localID &&
      (await workflowsTable?.updateFlow(localID, {
        cloudID: cloudID,
        cloudURL: cloudHost + "/workflow/" + cloudID,
      }));
    localVerID &&
      cloudVersionID &&
      (await workflowVersionsTable?.update(localVerID, {
        cloudID: cloudVersionID,
      }));
    loadData();
    window.open(cloudHost + "/workflow/" + cloudID, "_blank");
    setLoading(false);
  };
  useEffect(() => {
    loadData();
    window.addEventListener("message", handleShareWorkflowSuccess);
    return () => {
      window.removeEventListener("message", handleShareWorkflowSuccess);
    };
  }, []);

  const loadData = async () => {
    const host =
      import.meta.env.MODE === "production"
        ? await userSettingsTable?.getSetting("cloudHost")
        : "http://localhost:3000";
    if (host) {
      setCloudHost(host);
      cloudHostRef.current = host;
    }
    const workflow = workflowsTable?.curWorkflow ?? undefined;
    setWorkflow(workflow);
    workflowVersionsTable?.listByWorkflowID(workflow!.id).then((vers) => {
      setLocalVersions(vers);
    });
  };
  const copyTextToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          title: "Copied to clipboard",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const onShare = async () => {
    setLoading(true);
    const secretKey = generateRandomKey(32);
    const host =
      import.meta.env.MODE === "production"
        ? ((await userSettingsTable?.getSetting("cloudHost")) as string)
        : "http://localhost:3000";
    const nodeDefs = getNodeDefs();
    let version: WorkflowVersion | undefined;
    if (selectedVersion === "new_version") {
      version = await workflowVersionsTable?.add({
        workflowID: workflow!.id,
        name: versionName,
        createTime: Date.now(),
        json: JSON.stringify(app.graph.serialize()),
      });
    } else {
      version = await workflowVersionsTable?.get(selectedVersion);
    }
    if (!version) {
      alert(`Failed to find version: ${selectedVersion}, please try again.`);
      setLoading(false);
      return;
    }
    const protocol = window.location.protocol;
    const baseHost = window.location.host;
    const baseUrl = `${protocol}//${baseHost}`;
    const popupUrl =
      host + `/share_workflow_confirm/${secretKey}?redirectUrl=${baseUrl}`;
    const sharePopup = window.open(
      popupUrl,
      "Share Workflow",
      "width=800,height=800",
    );
    const handleChildReady = (event: MessageEvent) => {
      if (event.origin === host && event.data === "child_ready") {
        const curWorkflow = workflowsTable?.curWorkflow;
        // Send data to the new window after it loads
        sharePopup!.postMessage(
          {
            workflow: curWorkflow,
            version: version,
            nodeDefs: nodeDefs,
            privacy: privacy,
          },
          host,
        );
        window.removeEventListener("message", handleChildReady);
      }
    };
    window.addEventListener("message", handleChildReady);
  };

  const cloudWorkflowID = workflowsTable?.curWorkflow?.cloudID;
  return (
    <Modal isOpen={true} onClose={onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent width={["98%", "90%", "50%"]} maxWidth={"600px"}>
        <ModalHeader>Share "{workflow?.name}"</ModalHeader>
        <ModalBody pb={10}>
          <Stack gap={6}>
            <CustomSelector<WorkflowPrivacy>
              options={privacyOptions}
              value={privacy}
              onChange={(val) => {
                setPrivacy(val);
              }}
            />

            {cloudWorkflowID && (
              <HStack spacing={2} color="teal.400">
                <Link
                  href={cloudHost + "/workflow/" + cloudWorkflowID}
                  isExternal
                >
                  {cloudHost + "/workflow/" + cloudWorkflowID}{" "}
                  <IconExternalLink
                    size={20}
                    style={{ display: "inline-block", verticalAlign: "middle" }}
                  />
                </Link>

                <Button
                  width={"180px"}
                  size={"sm"}
                  leftIcon={<IconCopy />}
                  onClick={() => {
                    copyTextToClipboard(
                      cloudHost +
                        "/workflow/" +
                        workflowsTable?.curWorkflow?.cloudID,
                    );
                  }}
                >
                  Copy link
                </Button>
              </HStack>
            )}
            <Text>Choose a version to share:</Text>
            <RadioGroup
              gap={4}
              onChange={(val) => {
                setSelectedVersion(val);
              }}
              value={selectedVersion}
            >
              <Stack>
                <HStack mb={5} alignItems={"center"}>
                  <Radio key={"new_version"} value="new_version" />
                  <Input
                    value={versionName}
                    width={"60%"}
                    onFocus={() => {
                      setSelectedVersion("new_version");
                    }}
                    onChange={(e) => {
                      setVersionName(e.target.value);
                    }}
                  />
                  <Flex color="green">
                    <Text>New version</Text>
                  </Flex>
                </HStack>

                {localVersions.slice(0, 4).map((ver) => {
                  return (
                    <Radio key={ver.id} value={ver.id} mb={5}>
                      <HStack spacing={4} alignItems={"center"}>
                        <Text>{ver.name}</Text>
                        <Text color={"GrayText"}>
                          {formatTimestamp(ver.createTime, false)}
                        </Text>
                        {ver.cloudID && (
                          <a
                            href={cloudHost + "/workflow_ver/" + ver.cloudID}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <Button
                              size={"xs"}
                              colorScheme="teal"
                              leftIcon={<IconCloud />}
                              rightIcon={<IconExternalLink size={18} />}
                            >
                              Shared
                            </Button>
                          </a>
                        )}
                      </HStack>
                    </Radio>
                  );
                })}
              </Stack>
            </RadioGroup>
          </Stack>
          <HStack justifyContent={"flex-end"} mt={16}>
            <Button colorScheme="teal" onClick={onShare} isDisabled={loading}>
              {loading ? "Sharing" : "Share"}
            </Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function getCurDateString() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JS
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
