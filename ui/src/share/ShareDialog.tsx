import {
  Button,
  Flex,
  HStack,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Workflow, WorkflowPrivacy, WorkflowVersion } from "../types/dbTypes";
import { useEffect, useRef, useState } from "react";
import CustomSelector from "../components/CustomSelector";
import { IconCloud, IconCopy, IconExternalLink } from "@tabler/icons-react";
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
    const newVer = await workflowVersionsTable?.add({
      workflowID: workflow!.id,
      name: versionName,
      createTime: Date.now(),
      json: JSON.stringify(app.graph.serialize()),
    });
    if (!newVer) {
      alert("Failed to create new version, please try again.");
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
    setLoading(false);
    const handleChildReady = (event: MessageEvent) => {
      if (event.origin === host && event.data === "child_ready") {
        const curWorkflow = workflowsTable?.curWorkflow;
        // Send data to the new window after it loads
        console.log("sending privacy", privacy);
        sharePopup!.postMessage(
          {
            workflow: curWorkflow,
            version: newVer,
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
            <HStack>
              <Text>New Version</Text>
              <Input
                value={versionName}
                maxWidth={440}
                onChange={(e) => {
                  setVersionName(e.target.value);
                }}
              />
            </HStack>
            {localVersions.slice(0, 4).map((ver) => {
              return (
                <HStack key={ver.id} spacing={4} alignItems={"center"} mb={3}>
                  <Text>{ver.name}</Text>
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
              );
            })}
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
