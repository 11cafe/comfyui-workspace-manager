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
import { findLeastNsfwImage } from "../../utils/findLeastNsfwImage";
import {
  FileEssential,
  apiResponse,
  isCivitModel,
  isCivitVersion,
} from "./util/modelTypes";
import { KBtoGB } from "../utils";
const IMAGE_SIZE = 280;

interface ModelCardProps {
  model: apiResponse;
  onClickInstallModel: (file: FileEssential, model: apiResponse) => void;
  installing: string[];
}
export default function ModelCard({
  model,
  onClickInstallModel,
  installing,
}: ModelCardProps) {
  const modelPhoto = isCivitModel(model)
    ? model.modelVersions?.at(0)?.images?.at(0)?.url
    : `https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${findLeastNsfwImage(model.images)?.url}/width=${IMAGE_SIZE}/`;
  const versions = isCivitModel(model) ? model.modelVersions : model.versions;
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
    let fileData: FileEssential;
    if (isCivitVersion(curFile)) {
      fileData = {
        id: curFile.id,
        SHA256: curFile.files?.[0].hashes?.SHA256,
        name: curFile.files?.[0].name,
      };
    } else {
      fileData = {
        id: curFile.id,
        SHA256: curFile.hashes?.[2],
        name: `${model.name} ${curFile.name}`,
      };
    }
    onClickInstallModel(fileData, model);
  }, [selectedFile]);
  const sizeKB =
    curFile && isCivitVersion(curFile)
      ? curFile?.files?.[0]?.sizeKB
      : undefined;
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
          {sizeKB && (
            <Tooltip label={KBtoGB(sizeKB)}>
              <Text flexShrink={1} noOfLines={1} width={"40%"}>
                {KBtoGB(sizeKB)}
              </Text>
            </Tooltip>
          )}
        </HStack>
      </Stack>
    </Card>
  );
}
