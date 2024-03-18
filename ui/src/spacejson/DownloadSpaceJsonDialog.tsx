import { useContext, useEffect, useState } from "react";
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
  IconInfoCircleFilled,
  IconQuestionMark,
  IconRefresh,
} from "@tabler/icons-react";
import { getCivitModelDownloadUrl } from "../utils/civitUtils";

export default function DownloadSpaceJsonDialog() {
  const { route, setRoute } = useContext(WorkspaceContext);
  const [result, setResult] = useState<DepsResult>();
  useEffect(() => {
    console.log("app.graph", app.graph);
    const graph = app.graph.serialize();
    console.log("graph serialize", graph);
    extractAndFetchFileNames(graph.nodes ?? []).then((result) => {
      console.log(result);
      setResult(result);
    });
  }, []);
  if (!result) {
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
            <Stack>
              <Heading size={"sm"}>Models ({result.models.length})</Heading>
              {result.models.map((modelFile, index) => (
                <ModelDepsItem modelFile={modelFile} key={index} />
              ))}
            </Stack>

            {result.models.length > 0 && (
              <Stack>
                <Heading size={"sm"}>Images ({result.images.length})</Heading>
                {result.images.map((image) => (
                  <Stack>
                    <p key={image.filename}>{image.filename}</p>
                    <Image
                      width={250}
                      src={`/workspace/view_media?filename=${image.filename}&isPreview=true&isInput=true`}
                    />
                  </Stack>
                ))}
              </Stack>
            )}
            <Button width={"fit-content"} colorScheme="teal">
              Download .space.json
            </Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function ModelDepsItem({ modelFile }: { modelFile: ModelFile }) {
  if (!modelFile.models?.length) {
    return (
      <Stack>
        <Flex gap={2}>
          <p>{modelFile.filename}</p>
          <Tag size={"sm"} colorScheme={"red"}>
            Model file not found
          </Tag>
        </Flex>
        <Button size={"sm"} leftIcon={<IconRefresh />} width={"fit-content"}>
          Fetch model file
        </Button>
      </Stack>
    );
  }
  const model = modelFile.models[0];
  const downloadLink = model.civitModelVersionID
    ? getCivitModelDownloadUrl(model.civitModelVersionID)
    : model.downloadUrl;
  return (
    <Stack ml={2}>
      <Flex key={modelFile.filename + modelFile.nodeType} gap={2}>
        {modelFile.models?.map((model, index) => (
          <Tag
            height={"fit-content"}
            colorScheme={index === 0 ? "teal" : undefined}
          >
            {model.fileFolder}
          </Tag>
        ))}
        {modelFile.models[0].civitModelVersionID ? (
          <HStack>
            <a href={downloadLink}>{modelFile.filename}</a>
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
                size={"sm"}
                placeholder={"https://civitai.com/api/download/models/324524"}
              />
            </Tooltip>
          </Stack>
        )}
      </Flex>
    </Stack>
  );
}
