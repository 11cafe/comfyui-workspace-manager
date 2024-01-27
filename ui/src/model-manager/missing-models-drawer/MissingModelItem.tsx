import { GridItem, VStack, Button, Text, Link } from "@chakra-ui/react";
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
type missingModelPredict = { url: string; name: string; downloadUrl: string };
export default function MissingModelItem({ model }: Props) {
  const [suggestedUrls, setSuggestedUrls] = useState<missingModelPredict[]>([]);
  const modelName = formatSearchQuery(model.received_value);
  const getHuggingFaceData = async () => {
    console.warn("fetching hf", modelName);
    const hfData = await fetch(
      `https://huggingface.co/api/models?limit=3&search=${modelName}&full=true`,
    );
    const hfSearchResult = (await hfData.json()) as {
      id: string;
      modelId: string;
      siblings?: { rfilename: string }[];
    }[];
    const hfUrls: missingModelPredict[] = [];
    console.log(hfSearchResult);
    hfSearchResult.slice(0, 1).forEach(({ modelId, siblings }) => {
      console.log(modelId, siblings);
      siblings?.forEach((s) => {
        const ext = s.rfilename.split(".").pop();
        console.log(ext);
        if (modelExtensions.includes(ext ?? "")) {
          hfUrls.push({
            name: s.rfilename,
            downloadUrl: `https://huggingface.co/${modelId}/resolve/main/${s.rfilename}`,
            url: `https://huggingface.co/${modelId}/tree/main`,
          });
        }
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
        <Text fontWeight="bold">Input:</Text>
        <Text>{model.input_name}</Text>
        <Text fontWeight="bold">Received Value:</Text>
        <Text color="red.400">{model.received_value}</Text>
        {suggestedUrls.map(({ url, name }) => (
          <Link
            href={url}
            isExternal
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {name}
            <IconExternalLink size={20} />
          </Link>
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
