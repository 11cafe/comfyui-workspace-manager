import { useCallback, useContext, useEffect, useState } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import {
  Badge,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  Spinner,
  Stack,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  DepsResult,
  ModelFile,
  WorkspaceInfoDeps,
  extractAndFetchFileNames,
} from "./handleDownloadSpaceJson";
// @ts-ignore
import { app } from "/scripts/app.js";
import {
  IconExternalLink,
  IconInfoCircle,
  IconRefresh,
} from "@tabler/icons-react";
import { getCivitModelPageUrl } from "../utils/civitUtils";
import { getAllModelsList } from "../Api";
import { COMFYSPACE_TRACKING_FIELD_NAME } from "../const";
import { downloadJsonFile } from "../utils/downloadJsonFile";
import { workflowsTable } from "../db-tables/WorkspaceDB";
import { indexdb } from "../db-tables/indexdb";

export default function DownloadSpaceJsonDialog() {
  const { setRoute } = useContext(WorkspaceContext);
  const [deps, setDeps] = useState<DepsResult>();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploadingImage, setUploadingImage] = useState(false);
  useEffect(() => {
    console.log("app.graph", app.graph);
    const graph = app.graph.serialize();
    console.log("graph serialize", graph);
    extractAndFetchFileNames(graph.nodes ?? []).then((deps) => {
      setDeps(deps);
    });
  }, []);
  const validateURL = (url: string) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i",
    );
    return !!pattern.test(url);
  };
  const validateModelDeps = useCallback((modelDeps: ModelFile[]) => {
    let isValid = true;
    modelDeps.forEach((model) => {
      const key = model.filename + model.nodeType;
      if (!model.downloadUrl) {
        setErrors((prev) => ({
          ...prev,
          [key]: "Invalid URL",
        }));
        isValid = false;
        return;
      }
      if (!validateURL(model.downloadUrl)) {
        setErrors((prev) => ({ ...prev, [key]: "Invalid URL" }));
        isValid = false;
        return;
      }
      if (!model.fileFolder) {
        setErrors((prev) => ({
          ...prev,
          [key]: "Model file not found, please re-scan models folder",
        }));
        isValid = false;
        return;
      }
    });
    return isValid;
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const modelDepsPromises: Promise<ModelFile>[] =
      deps?.models.map(async (model) => {
        const inputDownloadUrl = formData
          .get(model.filename + model.nodeType)
          ?.toString();
        if (inputDownloadUrl) {
          await indexdb.models.update(model.filename + "@" + model.fileFolder, {
            downloadUrl: inputDownloadUrl,
          });
        }
        return {
          filename: model.filename,
          nodeType: model.nodeType,
          fileHash: model.fileHash,
          fileFolder: model.fileFolder,
          downloadUrl:
            model.downloadUrl ??
            formData.get(model.filename + model.nodeType)?.toString() ??
            null,
        };
      }) ?? [];
    const modelDeps = await Promise.all(modelDepsPromises);
    if (!validateModelDeps(modelDeps)) {
      return;
    }
    setErrors({});
    setUploadingImage(true);
    const imageDeps: WorkspaceInfoDeps["images"] = deps?.images ?? [];
    if (imageDeps.length) {
      const uploadResp = await fetch("/workspace/upload_image", {
        method: "POST",
        body: JSON.stringify({
          images: deps?.images.map((image) => image.filename) ?? [],
        }),
      });
      const json = await uploadResp.json();
      imageDeps.forEach((image) => {
        image.url = json[image.filename];
      });
    }
    setUploadingImage(false);
    const graph = app.graph.serialize();
    (graph.extra ||= {})[COMFYSPACE_TRACKING_FIELD_NAME] ||= {};
    graph.extra[COMFYSPACE_TRACKING_FIELD_NAME].deps = {
      models: modelDeps,
      images: imageDeps,
      nodeRepos: deps?.nodeRepos ?? [],
    } as WorkspaceInfoDeps;
    console.log("graph", graph);

    downloadJsonFile(
      JSON.stringify(graph),
      (workflowsTable?.curWorkflow?.name ?? "unknown") + ".space",
    );
  };

  return (
    <Modal isOpen={true} onClose={() => setRoute("root")} size={"xl"}>
      <ModalContent>
        <ModalBody p={5} gap={5}>
          <HStack>
            <Heading size={"md"}>Workflow Resouce Dependencies</Heading>
            <Tooltip
              label=".space.json workflows include all resource dependecy links
              (models, cursom nodes, input images) and can be one-click
              installed and run in any ComfyUI with workpace-manager installed."
            >
              <Badge borderRadius={10}>
                <IconInfoCircle size={20} />
              </Badge>
            </Tooltip>
          </HStack>
          <Text color={"GrayText"}>Export one-click installable workflow</Text>
          {deps == null && <Spinner size="md" color="teal.400" />}
          {deps && (
            <form onSubmit={handleSubmit}>
              <Stack gap={5} mt={5}>
                <Stack>
                  <Heading size={"sm"}>Models ({deps.models.length})</Heading>
                  {deps.models.map((modelFile, index) => (
                    <ModelDepsItem
                      modelFile={modelFile}
                      key={index}
                      errors={errors}
                    />
                  ))}
                </Stack>

                {deps.images.length > 0 && (
                  <Stack>
                    <HStack>
                      <Heading size={"sm"}>
                        Images ({deps.images.length})
                      </Heading>
                      <Text color={"GrayText"}>Will be uploaded as url</Text>
                    </HStack>
                    {uploadingImage && (
                      <span>
                        <Spinner size="md" color="teal.400" /> Uploading
                      </span>
                    )}
                    {deps.images.map((image) => (
                      <Stack key={image.filename}>
                        <p>{image.filename}</p>
                        <Image
                          width={250}
                          src={`/workspace/view_media?filename=${image.filename}&isPreview=true&isInput=true`}
                        />
                      </Stack>
                    ))}
                  </Stack>
                )}
                <Button
                  width={"fit-content"}
                  colorScheme="teal"
                  type="submit"
                  mt={4}
                >
                  Download .space.json
                </Button>
              </Stack>
            </form>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function ModelDepsItem({
  modelFile,
  errors,
}: {
  modelFile: DepsResult["models"][0];
  errors: Record<string, string>;
}) {
  const inputKey = modelFile.filename + modelFile.nodeType;

  if (!modelFile.fileFolder) {
    return (
      <Stack>
        <Flex gap={2}>
          <p>{modelFile.filename}</p>
          <Tag size={"sm"} colorScheme={"red"}>
            Model file not found
          </Tag>
        </Flex>
        <Button
          size={"sm"}
          leftIcon={<IconRefresh />}
          width={"fit-content"}
          borderColor={"red"}
          borderWidth={errors[inputKey] != null ? 2 : 0}
          onClick={async () => await getAllModelsList()}
        >
          Fetch model file
        </Button>
      </Stack>
    );
  }
  return (
    <Stack ml={2}>
      <Flex key={modelFile.filename + modelFile.nodeType} gap={2}>
        <Tag height={"fit-content"} colorScheme={"teal"}>
          {modelFile.fileFolder}
        </Tag>

        {modelFile.downloadUrl ? (
          <HStack>
            <a
              href={
                modelFile.civitModelID
                  ? getCivitModelPageUrl(modelFile.civitModelID)
                  : modelFile.downloadUrl
              }
              target="_blank"
            >
              {modelFile.filename}
            </a>
            <IconExternalLink size={18} />
          </HStack>
        ) : (
          <Stack>
            <span>
              {modelFile.filename} <span>❓</span>
            </span>
            <Tooltip
              label={"Model download link, supports Huggingface and Civitai"}
            >
              <Input
                name={inputKey}
                size={"sm"}
                isInvalid={errors[inputKey] != null}
                placeholder={"https://civitai.com/api/download/models/324524"}
              />
            </Tooltip>
            <Text color={"red.400"}>{errors[inputKey]}</Text>
          </Stack>
        )}
      </Flex>
    </Stack>
  );
}
