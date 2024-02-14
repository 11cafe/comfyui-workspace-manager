import {
  Button,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Workflow, WorkflowVersion } from "../types/dbTypes";
import { useEffect, useState } from "react";
import CustomDropdown, {
  CustomSelectorOption,
} from "../components/CustomSelector";
import { IconLink, IconLock, IconWorld } from "@tabler/icons-react";
import {
  userSettingsTable,
  workflowVersionsTable,
  workflowsTable,
} from "../db-tables/WorkspaceDB";
// @ts-ignore
import { api } from "/scripts/api.js";
// @ts-ignore
import { app } from "/scripts/app.js";

interface Props {
  onClose: () => void;
}
type CreatedCloudflowVersionEvent = {
  createdVer: WorkflowVersion;
  localWorkflowID: string;
  localVersionID: string;
};

function generateRandomKey(length: number) {
  // Generate a random array of bytes
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);

  // Convert the bytes to a hex string
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  );
}

const privacyOptions: CustomSelectorOption[] = [
  { label: "Private", value: "PRIVATE", icon: <IconLock /> },
  {
    label: "Anyone with the link can access",
    value: "UNLISTED",
    icon: <IconLink />,
  },
  { label: "Public", value: "PUBLIC", icon: <IconWorld /> },
];
export default function ShareDialog({ onClose }: Props) {
  const [versionName, setVersionName] = useState(
    "version " + getCurDateString(),
  );
  const [localVersions, setLocalVersions] = useState<WorkflowVersion[]>([]);
  const [loading, setLoading] = useState(false);
  const [cloudHost, setCloudHost] = useState("");
  const [workflow, setWorkflow] = useState<Workflow>();
  const toast = useToast();
  useEffect(() => {
    api.addEventListener(
      "created_cloudflow_version",
      async (e: { detail: CreatedCloudflowVersionEvent }) => {
        const localID = e.detail.localWorkflowID;
        const localVerID = e.detail.localVersionID;
        const cloudVersionID = e.detail.createdVer.id;
        const cloudID = e.detail.createdVer.workflowID;
        // if (!localID || !localVerID || !cloudID || !cloudVersionID) {
        //   return;
        // }
        console.log("created_cloudflow_version", e.detail);
        cloudID &&
          localID &&
          (await workflowsTable?.updateFlow(localID, {
            cloudID: cloudID,
          }));
        localVerID &&
          cloudVersionID &&
          (await workflowVersionsTable?.update(localVerID, {
            cloudVersionID: cloudVersionID,
          }));
        loadData();
      },
    );

    loadData();
  }, []);
  const getNodeDefs = () => {
    const allNodes = app.graph._nodes;
    console.log("allNodes", allNodes);
    const nodeDefs = {};
    for (let n of allNodes) {
      // Patch T2IAdapterLoader to ControlNetLoader since they are the same node now
      if (n.type == "T2IAdapterLoader") n.type = "ControlNetLoader";
      if (n.type == "ConditioningAverage ") n.type = "ConditioningAverage"; //typo fix
      if (n.type == "SDV_img2vid_Conditioning")
        n.type = "SVD_img2vid_Conditioning"; //typo fix

      if (n.type in LiteGraph.registered_node_types) {
        nodeDefs[n.type] = LiteGraph.registered_node_types[n.type];
      }
    }
    return nodeDefs;
  };
  const loadData = async () => {
    const host =
      import.meta.env.MODE === "production"
        ? await userSettingsTable?.getSetting("cloudHost")
        : "http://localhost:3000";
    host && setCloudHost(host);
    const workflow = workflowsTable?.curWorkflow ?? undefined;
    setWorkflow(workflow);
    if (!workflow) {
      alert("Failed to get workflow, please try again.");
      return;
    }
    workflowVersionsTable?.listByWorkflowID(workflow.id).then((vers) => {
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
        // Error handling
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
      json: workflow!.json,
      nodeDefs: JSON.stringify(nodeDefs),
    });
    if (!newVer) {
      alert("Failed to create new version, please try again.");
      setLoading(false);
      return;
    }

    const resp = await fetch(host + "/api/shareWorkflow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: workflow!.id,
        name: workflow!.name,
        json: workflow!.json,
        keyID: secretKey,
        versionID: newVer.id,
        versionName: versionName,
      }),
    });

    const protocol = window.location.protocol;
    const baseHost = window.location.host;
    const baseUrl = `${protocol}//${baseHost}`;
    const popupUrl =
      host + `/share_workflow_confirm/${secretKey}?redirectUrl=${baseUrl}`;
    const sharePopup = window.open(
      popupUrl,
      "Share Workflow",
      "width=800,height=600",
    );
    setLoading(false);
    const handleChildReady = (event: MessageEvent) => {
      if (event.origin === host && event.data === "child_ready") {
        console.log("Child window is ready.");
        // Send data to the new window after it loads
        sharePopup!.postMessage(
          {
            workflow: workflow,
            version: newVer,
          },
          host,
        );
        window.removeEventListener("message", handleChildReady);
      }
    };
    // setTimeout(() => {
    //   handleChildReady({ origin: host, data: "child_ready" } as MessageEvent);
    // }, 3000);
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
            <CustomDropdown options={privacyOptions} />
            {cloudWorkflowID && (
              <Text>
                {cloudHost +
                  "/workflow/" +
                  workflowsTable?.curWorkflow?.cloudID}
              </Text>
            )}
            <HStack>
              <Text mb={3}>New Version</Text>
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
                <Text key={ver.id} mb={3}>
                  {ver.name}
                </Text>
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
