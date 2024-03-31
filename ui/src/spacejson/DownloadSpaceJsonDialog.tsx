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
import { getHgModelInfoUrlFromDownloadUrl } from "../utils/civitUtils";
import { getAllModelsList } from "../Api";
import { COMFYSPACE_TRACKING_FIELD_NAME } from "../const";
import { downloadJsonFile } from "../utils/downloadJsonFile";
import { workflowsTable } from "../db-tables/WorkspaceDB";
import { indexdb } from "../db-tables/indexdb";

export default function DownloadSpaceJsonDialog() {
  const { setRoute, saveCurWorkflow } = useContext(WorkspaceContext);
  const [deps, setDeps] = useState<DepsResult>();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploadingImage, setUploadingImage] = useState(false);

  const init = useCallback(async () => {
    const graph = app.graph.serialize();
    extractAndFetchFileNames(graph.nodes ?? []).then((depsRes) => {
      setDeps(depsRes);
    });
  }, []);

  const onRefreshModelsList = useCallback(async () => {
    setDeps(undefined);
    await getAllModelsList();
    window.addEventListener("model_list_updated", () => {
      init();
      window.removeEventListener("model_list_updated", () => {});
    });
  }, []);

  useEffect(() => {
    init();
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

    // validate model deps and save model urls to db
    const saveModelUrlDBPromises: Promise<ModelFile>[] =
      Object.values(deps?.models ?? {}).map(async (model) => {
        const inputDownloadUrl = formData.get(model.filename)?.toString();
        if (inputDownloadUrl) {
          // because the models table is storing filename without extension as id, which should be migrated
          const baseName = getBaseFileName(model.filename);
          await indexdb.models.update(baseName + "@" + model.fileFolder, {
            downloadUrl: inputDownloadUrl,
          });
        }
        const infoUrl = model.infoUrl?.length
          ? model.infoUrl
          : inputDownloadUrl
            ? getHgModelInfoUrlFromDownloadUrl(inputDownloadUrl)
            : null;
        return {
          filename: model.filename,
          nodeType: model.nodeType,
          fileHash: model.fileHash,
          fileFolder: model.fileFolder,
          downloadUrl: model.downloadUrl ?? inputDownloadUrl ?? null,
          infoUrl: infoUrl ?? null,
          inputName: model.inputName,
        };
      }) ?? [];
    const modelDepsArr = await Promise.all(saveModelUrlDBPromises);
    if (!validateModelDeps(modelDepsArr)) {
      return;
    }
    setErrors({});

    // upload images
    setUploadingImage(true);
    const imageDepsToUpload = Object.values(deps?.images ?? {})
      .filter((i) => !i.url)
      .map((i) => i.filename);
    const imageDeps = deps?.images ?? {};

    if (imageDepsToUpload.length) {
      const uploadResp = await fetch("/workspace/upload_image", {
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
    }
    setUploadingImage(false);

    // save deps to graph
    const modelDeps: WorkspaceInfoDeps["models"] = {};
    modelDepsArr.forEach((model) => {
      modelDeps[model.filename] = model;
    });
    const graph = app.graph.serialize();
    (graph.extra ||= {})[COMFYSPACE_TRACKING_FIELD_NAME] ||= {};
    graph.extra[COMFYSPACE_TRACKING_FIELD_NAME].deps = {
      models: modelDeps,
      images: imageDeps ?? {},
      nodeRepos: deps?.nodeRepos ?? [],
    } as WorkspaceInfoDeps;

    saveCurWorkflow();
    console.log("json", graph);
    downloadJsonFile(
      JSON.stringify(graph, null, 2),
      (workflowsTable?.curWorkflow?.name ?? "unknown") + ".runner",
    );
  };
  const imageDepsArr = Object.values(deps?.images ?? {});
  const modelDepsArr = Object.values(deps?.models ?? []);

  return (
    <Modal isOpen={true} onClose={() => setRoute("root")} size={"xl"}>
      <ModalContent>
        <ModalBody p={5} gap={5}>
          <HStack>
            <Heading size={"md"}>Workflow Resouce Dependencies</Heading>
            <Tooltip
              label=".runner.json workflows include all resource dependecy download urls
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
                  <Heading size={"sm"}>Models ({modelDepsArr.length})</Heading>
                  {modelDepsArr.map((modelFile, index) => (
                    <ModelDepsItem
                      modelFile={modelFile}
                      key={index}
                      errors={errors}
                      onClickRefetchModelList={onRefreshModelsList}
                    />
                  ))}
                </Stack>

                {imageDepsArr.length > 0 && (
                  <Stack>
                    <HStack>
                      <Heading size={"sm"}>
                        Images ({imageDepsArr.length})
                      </Heading>
                      {/* <Tag colorScheme="yellow">Will be uploaded as url</Tag> */}
                      <p style={{ color: "GrayText" }}>
                        Will be uploaded as url
                      </p>
                    </HStack>
                    {uploadingImage && (
                      <span>
                        <Spinner size="md" color="teal.400" /> Uploading
                      </span>
                    )}
                    {imageDepsArr.map((image) => (
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
                  Download .runner.json
                </Button>
              </Stack>
            </form>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function getBaseFileName(filename: string) {
  const parts = filename.split(".");
  if (parts.length > 1) {
    parts.pop();
    return parts.join(".");
  } else {
    return filename;
  }
}

function ModelDepsItem({
  modelFile,
  errors,
  onClickRefetchModelList,
}: {
  modelFile: DepsResult["models"][0];
  errors: Record<string, string>;
  onClickRefetchModelList: () => void;
}) {
  const inputKey = modelFile.filename;

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
          onClick={onClickRefetchModelList}
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
              href={modelFile.infoUrl ?? modelFile.downloadUrl}
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
