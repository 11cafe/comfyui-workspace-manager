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
import { CivitiModel, CivitiModelFileVersion } from "../types";
import { KBtoGB } from "../utils";
const IMAGE_SIZE = 280;

interface ModelCardProps {
  model: CivitiModel;
  onClickInstallModel: (
    file: CivitiModelFileVersion,
    model: CivitiModel
  ) => void;
}
export default function ModelCard({
  model,
  onClickInstallModel,
}: ModelCardProps) {
  const modelPhoto = model.modelVersions?.at(0)?.images?.at(0)?.url;
  const versions = model.modelVersions;
  const versionFiles = versions?.map((version) => version?.files?.at(0));
  const [selectedFile, setSelectedFile] = useState<string>(
    versionFiles?.at(0)?.name ?? ""
  );
  const curFile = versionFiles?.find(
    (versionFile) => versionFile?.name === selectedFile
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
            {versionFiles?.map((versionFile) => {
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
          {curFile?.sizeKB && (
            <Tooltip label={KBtoGB(curFile.sizeKB) + "GB"}>
              <Text flexShrink={1} noOfLines={1} width={"40%"}>
                {KBtoGB(curFile.sizeKB)} GB
              </Text>
            </Tooltip>
          )}
        </HStack>
      </Stack>
    </Card>
  );
}
