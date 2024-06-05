import {
  GridItem,
  Button,
  Text,
  Image,
  HStack,
  Checkbox,
  Tooltip,
  Select,
  Stack,
} from "@chakra-ui/react";
import { IconExternalLink } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { COMFYSPACE_TRACKING_FIELD_NAME } from "../../const";
import type {
  DepsResult,
  ModelDep,
} from "../../spacejson/handleDownloadSpaceJson";
import { indexdb } from "../../db-tables/indexdb";
import { app } from "../../utils/comfyapp";

const HF_LOGO =
  "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png";
const CIVITAI_LOGO =
  "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/gtxrcmtsvpjjevozblfa";

export interface MissingModel {
  class_type: string;
  input_name: string;
  received_value: string;
}

interface Props {
  model: MissingModel;
  setSelectedModelDeps: (deps: ModelDep[]) => void;
  selectedModelDeps: ModelDep[];
  foldersList: Record<string, string[]>;
  setFoldersList: (folders: Record<string, string[]>) => void;
}

export default function MissingModelItem({
  model,
  selectedModelDeps,
  setSelectedModelDeps,
  foldersList,
  setFoldersList,
}: Props) {
  const [suggestedModel, setSuggestedModel] = useState<
    ModelDep | { existingModel: string }
  >();
  const modelDeps: DepsResult["models"] =
    app.graph.extra?.[COMFYSPACE_TRACKING_FIELD_NAME]?.deps?.models;
  useEffect(() => {
    const fetchData = async () => {
      if (modelDeps) {
        const modelDep = modelDeps[model.received_value];
        if (modelDeps[model.received_value]?.downloadUrl) {
          const existingModel = await indexdb.models
            .where({
              fileHash: modelDep.fileHash,
            })
            .toArray();
          if (existingModel[0]) {
            setSuggestedModel({
              existingModel: existingModel[0].fileName,
            });
          } else {
            setSuggestedModel(modelDep);
          }
        }
      }
    };

    fetchData();
  }, []);

  const selectedModelNames = selectedModelDeps.map((dep) => dep.filename);
  function isExistingModel(
    model: ModelDep | { existingModel: string },
  ): model is { existingModel: string } {
    return (model as { existingModel: string }).existingModel != null;
  }

  return (
    <GridItem p={3} shadow="md" borderWidth="1px">
      <Stack align="start">
        <Text>{model.class_type}</Text>
        <HStack ml={3}>
          {/* <Text>{model.input_name}: </Text> */}
          <Text color="red.400">{model.received_value}</Text>
        </HStack>
        {suggestedModel && isExistingModel(suggestedModel) && (
          <Text>
            This model is already installed as{" "}
            <Text as="span" color="blue.400" fontWeight={600}>
              {suggestedModel.existingModel}
            </Text>
          </Text>
        )}
        {suggestedModel &&
          !isExistingModel(suggestedModel) &&
          suggestedModel.fileFolder && (
            <>
              <HStack>
                <Checkbox
                  key={suggestedModel.filename}
                  size="sm"
                  isChecked={selectedModelNames.includes(
                    suggestedModel.filename,
                  )}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedModelDeps([
                        ...selectedModelDeps,
                        modelDeps[model.received_value],
                      ]);
                    } else {
                      setSelectedModelDeps(
                        selectedModelDeps.filter(
                          (dep) => dep.filename !== suggestedModel.filename,
                        ),
                      );
                    }
                  }}
                />
                <Tooltip label={suggestedModel.infoUrl}>
                  <Button
                    size={"sm"}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(suggestedModel.infoUrl ?? "", "_blank");
                    }}
                    leftIcon={
                      <Image
                        width={5}
                        src={
                          suggestedModel.downloadUrl?.includes("huggingface")
                            ? HF_LOGO
                            : CIVITAI_LOGO
                        }
                      />
                    }
                    rightIcon={<IconExternalLink size={20} />}
                  >
                    {suggestedModel.filename}
                  </Button>
                </Tooltip>
              </HStack>
              <Stack>
                <Text width={"fit-content"}>Install path:</Text>
                {foldersList[suggestedModel.fileFolder]?.length && (
                  <Select
                    value={foldersList[suggestedModel.fileFolder].at(0)}
                    onChange={(e) => {
                      const newFoldersList = { ...foldersList };
                      const restOptions = newFoldersList[
                        suggestedModel.fileFolder!
                      ].filter((f) => f !== e.target.value);
                      newFoldersList[suggestedModel.fileFolder!] = [
                        e.target.value,
                        ...restOptions,
                      ];
                      setFoldersList(newFoldersList);
                    }}
                  >
                    {foldersList[suggestedModel.fileFolder].map((path) => (
                      <option key={path} value={path}>
                        {path}
                      </option>
                    ))}
                  </Select>
                )}
              </Stack>
            </>
          )}
        {!suggestedModel && (
          <Button
            colorScheme="blue"
            mt={5}
            iconSpacing={1}
            leftIcon={<IconExternalLink size={20} />}
            size={"sm"}
            onClick={() => {
              window.open(
                `https://civitai.com/search/models?sortBy=models_v7&query=${model.received_value}`,
                "_blank",
              );
            }}
          >
            Search in CivitAI
          </Button>
        )}
      </Stack>
    </GridItem>
  );
}

function formatSearchQuery(query: string): string {
  return (
    query
      // Remove path, only applies if model is in a subfolder
      .replace(/^.*(\\|\/|\:)/, "")
      // Remove file extension
      .replace(/\.[^/.]+$/, "")
      // Replace underscore with space
      .replaceAll("_", " ")
      // Add space before capital letters
      .replace(/([A-Z])/g, " $1")
      .trim()
  );
}
