import { clipboard, MetaBoxTypeCom } from "../../../utils.ts";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { IconCopy } from "@tabler/icons-react";
import { calcOneKSampler } from "./oneKSamplerTool.ts";

export const OneKSampler: MetaBoxTypeCom = ({ metaData }) => {
  const mediaMetaData = calcOneKSampler(metaData);

  return (
    <VStack spacing={2} align={"stretch"}>
      <Box>
        <Button
          size={"sm"}
          onClick={() => clipboard(JSON.stringify(mediaMetaData))}
        >
          Copy all
        </Button>
      </Box>
      {Object.keys(mediaMetaData ?? {}).map((key) => (
        <Flex key={`meta${key}`} gap={2}>
          <Flex gap={1} alignItems={"center"} flexBasis={"200px"}>
            {key}
            <IconButton
              size={"xm"}
              onClick={() => clipboard(mediaMetaData?.[key] ?? "")}
              aria-label={"copy text"}
              icon={<IconCopy />}
              variant={"ghost"}
            />
          </Flex>
          {mediaMetaData?.[key]?.length &&
          mediaMetaData?.[key]?.length > 300 ? (
            <Textarea readOnly={true} value={mediaMetaData?.[key]} />
          ) : (
            <Input readOnly={true} value={mediaMetaData?.[key]} />
          )}
          {/*<Text overflowY={'auto'} maxH={200} flex={1}>{mediaMetaData?.[key]}</Text>*/}
        </Flex>
      ))}
    </VStack>
  );
};
