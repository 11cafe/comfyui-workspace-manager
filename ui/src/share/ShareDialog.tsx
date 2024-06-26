import {
  Badge,
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
  RadioGroup,
  Stack,
  Switch,
  Tag,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  EWorkflowPrivacy,
  WorkflowPrivacy,
  WorkflowVersion,
} from "../types/dbTypes";
import { useContext, useEffect, useState } from "react";
import CustomSelector from "../components/CustomSelector";
import { IconCopy, IconExternalLink } from "@tabler/icons-react";
import { userSettingsTable, workflowsTable } from "../db-tables/WorkspaceDB";
// @ts-ignore
import { api } from "/scripts/api.js";
import {
  PrivacyLabel,
  fetchCloudWorkflowPrivacy,
  generateRandomKey,
  getCurDateString,
  getNodeDefs,
  privacyOptions,
} from "./shareUtils";

import ResourceDepsForm from "../spacejson/ResourceDepsForm";
import { app } from "../utils/comfyapp";
import { useStateRef } from "../customHooks/useStateRef";
import { WorkspaceContext } from "../WorkspaceContext";
import {
  DepsResult,
  WorkspaceInfoDeps,
  extractAndFetchFileNames,
} from "../spacejson/handleDownloadSpaceJson";
import { fetchApi } from "../Api";
import { COMFYSPACE_TRACKING_FIELD_NAME } from "../const";
import { ShareWorkflowData } from "../types/types";

interface Props {
  onClose: () => void;
}

export default function ShareDialog({ onClose }: Props) {
  const [versionName, setVersionName, versionNameRef] = useStateRef(
    "v" + getCurDateString(),
  );
  const { saveCurWorkflow } = useContext(WorkspaceContext);
  const [deps, setDeps] = useState<DepsResult>();
  const [uploadingImage, setUploadingImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const cloudHost = userSettingsTable?.settings?.cloudHost;
  const [privacy, setPrivacy, privacyRef] =
    useStateRef<WorkflowPrivacy>("PRIVATE");
  const [selectedVersion, setSelectedVersion] = useState<
    string | "new_version"
  >("new_version");
  const workflow = workflowsTable?.curWorkflow;
  const toast = useToast();
  const [enableDeps, setEnableDeps] = useState(true);
  const handleShareWorkflowSuccess = async (event: MessageEvent) => {
    const detail = event.data;
    if (
      // event.origin !== cloudHostRef.current ||
      detail.type !== "share_workflow_success" ||
      !workflow
    ) {
      return;
    }

    const cloudVersionID = detail.version.id;
    const cloudID = detail.version.workflowID;

    cloudID &&
      (await workflowsTable?.updateMetaInfo(workflow.id, {
        cloudID: cloudID,
      }));

    loadData();
    window.open(
      cloudHost + "/workflow/" + cloudID + "/" + cloudVersionID,
      "_blank",
    );
    setLoading(false);
  };
  useEffect(() => {
    loadData();
    const graph = app.graph.serialize();
    extractAndFetchFileNames(graph.nodes ?? []).then((depsRes) => {
      setDeps(depsRes);
    });
    window.addEventListener("message", handleShareWorkflowSuccess);
    return () => {
      window.removeEventListener("message", handleShareWorkflowSuccess);
    };
  }, []);

  const loadData = async () => {
    if (workflow?.cloudID && workflow.cloudOrigin) {
      fetchCloudWorkflowPrivacy(workflow).then((privacy) => {
        setPrivacy(privacy);
      });
    }
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
  const pushToCloud = async (imageDeps?: DepsResult["images"]) => {
    const graph = app.graph.serialize();
    (graph.extra ||= {})[COMFYSPACE_TRACKING_FIELD_NAME] ||= {};
    graph.extra[COMFYSPACE_TRACKING_FIELD_NAME].deps = {
      models: deps?.models ?? {},
      images: imageDeps ?? {},
      nodeRepos: deps?.nodeRepos ?? [],
    } as WorkspaceInfoDeps;

    await saveCurWorkflow();

    await app
      .graphToPrompt(app.graph)
      .then((data: { output: any; workflow: any }) => {
        graph.extra[COMFYSPACE_TRACKING_FIELD_NAME].apiPrompt = data.output;
        return data.output;
      });
    const jsonToShare = JSON.stringify(graph);
    setLoading(true);
    const secretKey = generateRandomKey(32);
    const host =
      import.meta.env.MODE === "production"
        ? ((await userSettingsTable?.getSetting("cloudHost")) as string)
        : "http://localhost:3000";
    let nodeDefs: Object;
    nodeDefs = getNodeDefs();
    const version: Omit<WorkflowVersion, "id" | "workflowID" | "createTime"> = {
      name: versionNameRef.current,
      json: jsonToShare ?? JSON.stringify(app.graph.serialize()),
    };
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
        if (!curWorkflow) {
          return;
        }
        const input: ShareWorkflowData = {
          workflow: {
            name: curWorkflow.name,
            cloudID: curWorkflow.cloudID,
          },
          version: {
            name: versionNameRef.current,
            json: jsonToShare,
          },
          nodeDefs: nodeDefs,
          privacy: privacyRef.current as EWorkflowPrivacy,
        };
        // Send data to the new window after it loads
        sharePopup!.postMessage(input, host);
        window.removeEventListener("message", handleChildReady);
      }
    };
    window.addEventListener("message", handleChildReady);
  };

  const onShare = async () => {
    const imageDeps = deps?.images ?? {};
    if (enableDeps) {
      // upload images
      setUploadingImage(true);
      const imageDepsToUpload = Object.values(deps?.images ?? {})
        // .filter((i) => !i.url)
        .map((i) => i.filename);
      if (imageDepsToUpload.length) {
        try {
          const uploadResp = await fetchApi("/workspace/upload_image", {
            method: "POST",
            body: JSON.stringify({
              images: imageDepsToUpload,
            }),
          });
          const json = (await uploadResp.json()) as Record<string, string>;
          Object.keys(json).forEach((key) => {
            if (imageDeps?.[key]) {
              imageDeps[key].url = json[key];
            }
          });
        } catch (error) {
          console.error("Error uploading images:", error);
        }
      }
      setUploadingImage(false);
    }

    pushToCloud(imageDeps);
  };

  const cloudWorkflowID = workflowsTable?.curWorkflow?.cloudID;
  return (
    <Modal isOpen={true} onClose={onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent width={["98%", "90%", "50%"]} maxWidth={"600px"}>
        <ModalHeader>
          <Flex justifyContent={"space-between"}>
            <p>Share "{workflow?.name}"</p>
            <Button
              colorScheme="teal"
              onClick={onShare}
              size={"sm"}
              isDisabled={loading}
            >
              {loading ? "Sharing" : "Share"}
            </Button>
          </Flex>
          {cloudHost && (
            <Text fontSize={16} color={"GrayText"} fontWeight={400}>
              Share to {new URL(cloudHost).host}
            </Text>
          )}
        </ModalHeader>
        <ModalBody pb={10}>
          <Stack gap={5}>
            {cloudWorkflowID == null ? (
              <CustomSelector<WorkflowPrivacy>
                options={privacyOptions}
                value={privacy}
                onChange={(val) => {
                  setPrivacy(val);
                }}
              />
            ) : (
              <Tag
                variant={"outline"}
                borderRadius={"full"}
                width={"fit-content"}
              >
                <PrivacyLabel privacy={privacy} showEmoji />
              </Tag>
            )}
            {cloudWorkflowID && (
              <HStack spacing={2} color="teal.400">
                <Link
                  wordBreak={"break-all"}
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
                  size={"sm"}
                  leftIcon={<IconCopy size={18} />}
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
            <RadioGroup
              gap={4}
              onChange={(val) => {
                setSelectedVersion(val);
              }}
              value={selectedVersion}
            >
              <Stack>
                <HStack mb={5} alignItems={"center"}>
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
                    <Badge colorScheme="purple">Version Name</Badge>
                  </Flex>
                </HStack>
              </Stack>
            </RadioGroup>
            {Object.keys(deps?.images ?? {}).length > 0 && (
              <Stack borderRadius={6} borderWidth={"1px"} p={2}>
                <Switch
                  isChecked={enableDeps}
                  onChange={() => setEnableDeps(!enableDeps)}
                  fontWeight={"600"}
                >
                  Share input images
                </Switch>

                <span style={{ color: "GrayText" }}>
                  If enabled your input images will be uploaded and shared to{" "}
                  {cloudHost}
                </span>
                {enableDeps && (
                  <ResourceDepsForm
                    deps={deps ?? null}
                    setDeps={setDeps}
                    uploadingImage={uploadingImage}
                  />
                )}
              </Stack>
            )}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
