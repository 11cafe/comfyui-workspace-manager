import { GridItem, VStack, Button, Text } from "@chakra-ui/react";
import { IconExternalLink } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export interface MissingModel {
  class_type: string;
  input_name: string;
  received_value: string;
}

interface Props {
  model: MissingModel;
}

export default function MissingModelItem({ model }: Props) {
  const [suggestedUrls, setSuggestedUrls] = useState<{ url: string, name: string }[]>([]);
  const modelName = formatSearchQuery(model.received_value);
  const getSearchData = async () => {
    // huggingface search
    const hfData = await fetch(`https://huggingface.co/api/models?limit=3&search=${modelName}`);
    const hfSearchResult = await hfData.json() as { id: string; modelId: string }[];
    const hfUrls = hfSearchResult.map(({ modelId }) => ({ name: `${modelId.split('/')[1]} on HuggingFace`, url: `https://huggingface.co/${modelId}` }));
    console.log(modelName, "hf", hfSearchResult, hfUrls);
    // civitai search
    const civitaiData = await fetch(`https://civitai.com/api/v1/models?limit=3&query=${modelName}`);
    const civitaiSearchResult = await civitaiData.json() as { items: { id: string, name: string }[] };
    const civitaiUrls = civitaiSearchResult.items?.map(({ name, id }) => ({ name: `${name} on civitAI`, url: `https://civitai.com/models/${id}` })) ?? [];
    console.log(modelName, "civitai", civitaiSearchResult, civitaiUrls);
    // set suggested urls
    setSuggestedUrls([...hfUrls, ...civitaiUrls]);
  };
  useEffect(() => {
    getSearchData();
  }, [model]);

  console.log(suggestedUrls);

  return (
    <GridItem p={3} shadow="md" borderWidth="1px">
      <VStack align="start">
        <Text>{model.class_type}</Text>
        <Text fontWeight="bold">Input:</Text>
        <Text>{model.input_name}</Text>
        <Text fontWeight="bold">Received Value:</Text>
        <Text color="red.400">{model.received_value}</Text>
        {suggestedUrls.map(({ url, name }) => (
          <Button
            colorScheme="blue"
            mt={5}
            iconSpacing={1}
            leftIcon={<IconExternalLink size={20} />}
            size={"sm"}
            onClick={() => {
              window.open(url, "_blank");
            }}
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
  return query
    // Remove path, only applies if model is in a subfolder
    .replace(/^.*(\\|\/|\:)/, '') 
    // Remove file extension
    .replace(/\.[^/.]+$/, "")
    // Replace special characters with space
    .replace(/[^a-zA-Z0-9]/g, " ")
    // Add space before capital letters
    .replace(/([A-Z])/g, " $1")
    .trim();
}