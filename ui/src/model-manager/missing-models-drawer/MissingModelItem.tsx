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
  const getHuggingFaceData = async () => {
    const hfData = await fetch(
      `https://huggingface.co/api/models?limit=3&search=${modelName}&full=true`,
    );
    const hfSearchResult = (await hfData.json()) as {
      id: string;
      modelId: string;
      siblings?: { rfilename: string }[];
    }[];
    const hfUrls: missingModelPredict[] = [];
    hfSearchResult.slice(0, 1).forEach(({ modelId, siblings }) => {
      hfUrls.push({
        name: modelId,
        downloadUrl: `https://huggingface.co/${modelId}/resolve/main/`,
        url: `https://huggingface.co/${modelId}/tree/main`,
        icon: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png",
      });
    });
    setSuggestedUrls((p) => [...p, ...hfUrls]);
  };
  const getCivitaiData = async () => {
    const civitaiData = await getModelFromSearch(modelName);
    setSuggestedUrls((p) => [
      ...p,
      ...civitaiData?.slice(0, 1).map((c) => ({
        name: c.name,
        url: "https://civitai.com/models/" + c.id,
        icon: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/gtxrcmtsvpjjevozblfa",
      })),
    ]);
  };
  useEffect(() => {
    getHuggingFaceData();
    getCivitaiData();
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
        <Button
          colorScheme="blue"
          mt={5}
          iconSpacing={1}
          leftIcon={<IconExternalLink size={20} />}
          size={"sm"}
          onClick={() => {
            window.open(
              `https://civitai.com/search/models?sortBy=models_v5&query=${modelName}`,
              "_blank",
            );
          }}
        >
          Search in CivitAI
        </Button>
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
