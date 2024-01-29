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
import { modelExtensions } from "../utils";
export interface MissingModel {
  class_type: string;
  input_name: string;
  received_value: string;
}

interface Props {
  model: MissingModel;
}
type missingModelPredict = { url: string; name: string; downloadUrl?: string };
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
      });
    });
    setSuggestedUrls(hfUrls);
  };
  const getCivitaiData = async () => {
    const civitaiData = await fetch(
      `https://civitai.com/api/v1/models?limit=3&query=${modelName}`,
    );
    const civitaiSearchResult = (await civitaiData.json()) as {
      items: { id: string; name: string }[];
    };
    const civitaiUrls =
      civitaiSearchResult.items?.map(({ name, id }) => ({
        name: `${name} on civitAI`,
        url: `https://civitai.com/models/${id}`,
        downloadUrl: `https://civitai.com/models/${id}`,
      })) ?? [];
    setSuggestedUrls((p) => [...p, ...civitaiUrls]);
  };
  useEffect(() => {
    getHuggingFaceData();
    // getCivitaiData();
  }, []);

  return (
    <GridItem p={3} shadow="md" borderWidth="1px">
      <VStack align="start">
        <Text>{model.class_type}</Text>
        <HStack ml={3}>
          <Text>{model.input_name}: </Text>
          <Text color="red.400">{model.received_value}</Text>
        </HStack>
        {suggestedUrls.map(({ url, name }) => (
          <Button
            size={"sm"}
            onClick={(e) => {
              e.stopPropagation();
              window.open(url, "_blank");
            }}
            leftIcon={
              <Image
                width={5}
                src="https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png"
              />
            }
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
