import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
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
  Stack,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  DepsResult,
  ModelFile,
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

export default function DownloadSpaceJsonDialog() {
  const { route, setRoute } = useContext(WorkspaceContext);
  const [deps, setDeps] = useState<DepsResult>();
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    console.log("app.graph", app.graph);
    const graph = app.graph.serialize();
    console.log("graph serialize", graph);
    extractAndFetchFileNames(graph.nodes ?? []).then((deps) => {
      console.log(deps);
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const modelDeps =
      deps?.models.map((model) => {
        return {
          ...model,
          downloadUrl:
            model.downloadUrl ??
            formData.get(model.filename + model.nodeType)?.toString() ??
            null,
        };
      }) ?? [];
    if (!validateModelDeps(modelDeps)) {
      return;
    }

    setErrors({});
  };

  if (!deps) {
    return <div>Preparing...</div>;
  }

  return (
    <Modal isOpen={true} onClose={() => setRoute("root")} size={"xl"}>
      {/* <ModalOverlay /> */}
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
          <Stack gap={5} mt={5}>
            <form onSubmit={handleSubmit}>
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

              {deps.models.length > 0 && (
                <Stack>
                  <Heading size={"sm"}>Images ({deps.images.length})</Heading>
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
              <Button width={"fit-content"} colorScheme="teal" type="submit">
                Download .space.json
              </Button>
            </form>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function ModelDepsItem({
  modelFile,
  errors,
}: {
  modelFile: ModelFile;
  errors: Record<string, string>;
}) {
  useEffect(() => {
    console.log("modelFile", modelFile);
  }, []);
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
