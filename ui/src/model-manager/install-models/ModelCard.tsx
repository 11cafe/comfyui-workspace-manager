import {
  Button,
  HStack,
  Text,
  Image,
  Stack,
  Tooltip,
  Card,
  Flex,
  Select,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { IconDownload } from "@tabler/icons-react";
import { SearchHit, SearchModelVersion } from "../civitSearchTypes";
import { findLeastNsfwImage } from "../../utils/findLeastNsfwImage";
const IMAGE_SIZE = 280;

interface ModelCardProps {
  model: SearchHit;
  onClickInstallModel: (file: SearchModelVersion, model: SearchHit) => void;
  installing: string[];
}
export default function ModelCard({
  model,
  onClickInstallModel,
  installing,
}: ModelCardProps) {
  const modelPhoto = `https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${findLeastNsfwImage(model.images)?.url}/width=${IMAGE_SIZE}/`;
  const versions = model.versions;
  const [selectedFile, setSelectedFile] = useState<string>(
    versions?.[0]?.name ?? "",
  );
  const curFile = versions?.find(
    (versionFile) => versionFile?.name === selectedFile,
  );
  const onClickMedia = () => {
    window.open(`https://civitai.com/models/${model.id}`);
  };
  const installHandler = useCallback(() => {
    if (curFile == null) {
      console.error("no file is find by name", selectedFile);
      return;
    }
    onClickInstallModel(curFile, model);
  }, [selectedFile]);
  return (
    <Card width={IMAGE_SIZE} justifyContent={"space-between"} mb={2} gap={1}>
      <Image
        borderRadius={3}
        boxSize={IMAGE_SIZE + "px"}
        objectFit="cover"
        src={modelPhoto}
        alt={"model cover image"}
        cursor={"pointer"}
        onClick={() => onClickMedia()}
      />
      <Stack p={1}>
        <Tooltip label={model.name}>
          <Text fontWeight={500} noOfLines={1}>
            {model.name}
          </Text>
        </Tooltip>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Button
            borderRadius={14}
            noOfLines={1}
            size={"xs"}
            colorScheme="teal"
            maxWidth={"40%"}
            flexShrink={1}
            variant={"outline"}
            px={1}
            cursor={"text"}
          >
            <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
              {model.type}
            </Text>
          </Button>
          <Button
            leftIcon={<IconDownload size={18} />}
            iconSpacing={1}
            borderRadius={10}
            size={"sm"}
            py={1}
            colorScheme="teal"
            type="submit"
            onClick={() => installHandler()}
            isDisabled={Boolean(
              selectedFile && installing.includes(selectedFile),
            )}
          >
            Install
          </Button>
        </Flex>

        <HStack>
          <Select
            size={"md"}
            style={{ paddingLeft: 4 }}
            onChange={(e) => {
              setSelectedFile(e.target.value);
            }}
          >
            {versions?.map((versionFile) => {
              const filename = versionFile?.name;
              if (!filename) return null;
              return (
                <option
                  value={filename}
                  key={versionFile.id}
                  style={{ padding: 0 }}
                >
                  {filename}
                </option>
              );
            })}
          </Select>
        </HStack>
      </Stack>
    </Card>
  );
}
