import { useContext, useEffect, useState } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import {
  Box,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Tag,
} from "@chakra-ui/react";
import {
  DepsResult,
  ModelFile,
  extractAndFetchFileNames,
} from "./handleDownloadSpaceJson";
// @ts-ignore
import { app } from "/scripts/app.js";
import {
  IconAlertCircle,
  IconEscalator,
  IconQuestionMark,
} from "@tabler/icons-react";

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
        <ModalBody p={5}>
          <Stack gap={5}>
            <Heading size={"md"}>Workflow Resouce Dependencies</Heading>

            <Stack>
              <Heading size={"sm"}>Models ({result.models.length})</Heading>
              {result.models.map((modelFile) => (
                <ModelDepsItem modelFile={modelFile} />
              ))}
            </Stack>

            {result.models.length > 0 && (
              <Stack>
                <Heading size={"sm"}>Images ({result.images.length})</Heading>
                {result.images.map((image) => (
                  <p key={image.filename}>{image.filename}</p>
                ))}
              </Stack>
            )}
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
        <Flex>
          <p>{modelFile.filename}</p>
        </Flex>
        <Input placeholder={"Please enter model download url"} />
      </Stack>
    );
  }
  if (modelFile.models.length === 1) {
    const model = modelFile.models[0];
    return (
      <Flex key={model.id} gap={2}>
        <Tag>{model.fileFolder}</Tag>
        <p>{modelFile.filename}</p>
      </Flex>
    );
  }
  return (
    <Stack ml={2}>
      <p key={modelFile.filename}>{modelFile.filename}</p>
      {modelFile.models?.map((model) => (
        <Flex key={model.id} gap={2}>
          <Tag>{model.fileFolder}</Tag>
          <p>{model.modelName}</p>
        </Flex>
      ))}
    </Stack>
  );
}
