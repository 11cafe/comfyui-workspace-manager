import {
  GridItem,
  VStack,
  Button,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";
import { IconExternalLink } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { getModelFromSearch } from "../install-models/util/getModelFromSearch";
import { COMFYSPACE_TRACKING_FIELD_NAME } from "../../const";
// @ts-ignore
import { app } from "/scripts/app.js";
import { DepsResult } from "../../spacejson/handleDownloadSpaceJson";

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
}
type missingModelPredict = {
  url: string;
  name: string;
  downloadUrl?: string;
  icon: string;
};
export default function MissingModelItem({ model }: Props) {
  const [suggestedUrls, setSuggestedUrls] = useState<missingModelPredict[]>([]);
  const modelName = formatSearchQuery(model.received_value);
  useEffect(() => {
    const modelDeps: DepsResult["models"] =
      app.graph.extra?.[COMFYSPACE_TRACKING_FIELD_NAME]?.deps?.models;
    if (modelDeps) {
      const modelDep = modelDeps.find(
        (dep) => dep.filename === model.received_value,
      );
      if (modelDep?.downloadUrl && modelDep?.infoUrl) {
        setSuggestedUrls([
          {
            name: modelDep.filename,
            downloadUrl: modelDep.downloadUrl,
            url: modelDep.infoUrl,
            icon: modelDep.downloadUrl.includes("huggingface")
              ? HF_LOGO
              : CIVITAI_LOGO,
          },
        ]);
      }
    }
  }, []);

  return (
    <GridItem p={3} shadow="md" borderWidth="1px">
      <VStack align="start">
        <Text>{model.class_type}</Text>
        <HStack ml={3}>
          <Text>{model.input_name}: </Text>
          <Text color="red.400">{model.received_value}</Text>
        </HStack>
        {suggestedUrls.map(({ url, name, icon }) => (
          <Button
            size={"sm"}
            onClick={(e) => {
              e.stopPropagation();
              window.open(url, "_blank");
            }}
            leftIcon={<Image width={5} src={icon} />}
            rightIcon={<IconExternalLink size={20} />}
          >
            {name}
          </Button>
        ))}
      </VStack>
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
