import { MetaData } from "../../utils.ts";
import { Flex } from "@chakra-ui/react";
import { Media } from "../../../types/dbTypes.ts";
import TopForm from "../TopForm/TopForm.tsx";
import AllPromptForm from "../AllPromptForm/AllPromptForm.tsx";
import { useState } from "react";
import { FormItem } from "../FormItem/types.ts";

export type TopFieldType = {
  promptKey: string | number;
  class_type?: string;
  name: string;
};

// comfyui default workflow
export const DEFAULT_TOP_FIELDS: TopFieldType[] = [
  {
    promptKey: "4",
    name: "ckpt_name",
    class_type: "CheckpointLoaderSimple",
  },
  {
    promptKey: "6",
    name: "text",
    class_type: "CLIPTextEncode",
  },
  {
    promptKey: "7",
    name: "text",
    class_type: "CLIPTextEncode",
  },
  {
    promptKey: "5",
    name: "width",
    class_type: "EmptyLatentImage",
  },
  {
    promptKey: "5",
    name: "height",
    class_type: "EmptyLatentImage",
  },
  {
    promptKey: "3",
    name: "steps",
    class_type: "KSampler",
  },
  {
    promptKey: "3",
    name: "sampler_name",
    class_type: "KSampler",
  },
  {
    promptKey: "3",
    name: "cfg",
    class_type: "KSampler",
  },
];
export const isInTopField = (
  topFields: TopFieldType[],
  item: Pick<FormItem, "name" | "promptKey" | "classType">,
) => {
  return topFields?.some(
    (top) =>
      top.promptKey === item?.promptKey &&
      top.name === item?.name &&
      top.class_type === item.classType,
  );
};

export default function MetaBox({
  metaData: oriMetaData,
}: {
  metaData: MetaData;
  media: Media;
}) {
  const _metaData = JSON.parse(JSON.stringify(oriMetaData));
  const [topFields, setTopFields] = useState(DEFAULT_TOP_FIELDS);
  const [metaData, setMetaData] = useState<MetaData>(_metaData);
  const updateMetaData = ({
    promptKey,
    name,
    value,
  }: {
    promptKey: string | number;
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

  const updateTopField = (field: TopFieldType) => {
    if (
      isInTopField(topFields, {
        name: field.name,
        promptKey: field?.promptKey,
        classType: field?.class_type ?? "",
      })
    ) {
      setTopFields((pre) =>
        pre.filter(
          (v) => v.name !== field.name || v.promptKey !== field.promptKey,
        ),
      );
    } else {
      setTopFields((pre) => [...pre, field]);
    }
  };

  return (
    <Flex direction={"column"} align={"stretch"}>
      <TopForm
        topFields={topFields}
        metaData={metaData}
        updateMetaData={updateMetaData}
        updateTopField={updateTopField}
      />
      <AllPromptForm
        topFields={topFields}
        metaData={metaData}
        updateMetaData={updateMetaData}
        updateTopField={updateTopField}
      />
    </Flex>
  );
}
