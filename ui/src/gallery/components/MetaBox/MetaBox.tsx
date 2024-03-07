import { MetaData } from "../../utils.ts";
import { Flex } from "@chakra-ui/react";
import { Media } from "../../../types/dbTypes.ts";
import TopForm from "../TopForm/TopForm.tsx";
import AllPromptForm from "../AllPromptForm/AllPromptForm.tsx";
import { useState } from "react";

export const DEFAULT_TOP_FIELDS: {
  promptKey: string | number;
  class_type?: string;
  name: string;
}[] = [
  {
    promptKey: "4",
    name: "ckpt_name",
  },
  {
    promptKey: "6",
    name: "text",
  },
  {
    promptKey: "7",
    name: "text",
  },
  {
    promptKey: "5",
    name: "width",
  },
  {
    promptKey: "5",
    name: "height",
  },
  {
    promptKey: "3",
    name: "steps",
  },
  {
    promptKey: "3",
    name: "sampler_name",
  },
  {
    promptKey: "3",
    name: "cfg",
  },
];

export default function MetaBox({
  metaData: oriMetaData,
}: {
  metaData: MetaData;
  media: Media;
}) {
  const [metaData, setMetaData] = useState<MetaData>(
    JSON.parse(JSON.stringify(oriMetaData)),
  );
  const updateMetaData = ({
    promptKey,
    name,
    value,
  }: {
    promptKey: string;
    name: string;
    value: any;
  }) => {
    setMetaData((pre) => ({
      ...(pre ?? {}),
      prompt: {
        ...(pre?.prompt ?? {}),
        [promptKey]: {
          ...(pre?.prompt?.[promptKey] ?? {}),
          inputs: {
            ...(pre.prompt?.[promptKey]?.inputs ?? {}),
            [name]: value,
          },
        },
      },
    }));
  };

  return (
    <Flex direction={"column"} align={"stretch"}>
      <TopForm metaData={metaData} updateMetaData={updateMetaData} />
      <AllPromptForm metaData={metaData} updateMetaData={updateMetaData} />
    </Flex>
  );
}
