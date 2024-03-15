import { MetaData } from "../../utils.ts";
import { Flex } from "@chakra-ui/react";
import { Media } from "../../../types/dbTypes.ts";
import TopForm from "../TopForm/TopForm.tsx";
import AllPromptForm from "../AllPromptForm/AllPromptForm.tsx";
import { useEffect, useState } from "react";
import { FormItem } from "../FormItem/types.ts";
import { calcMeta, type InputResultItem } from "./utils.ts";

export type TopFieldType = {
  promptKey: string | number;
  class_type?: string;
  name: string;
};

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
  showNodeName,
}: {
  metaData: MetaData;
  media: Media;
  showNodeName: boolean;
}) {
  const _metaData = JSON.parse(JSON.stringify(oriMetaData));
  const [calcInputList, setCalcInputList] = useState<InputResultItem[]>([]);

  useEffect(() => {
    const calcInput = calcMeta(_metaData);
    setCalcInputList(calcInput);
    setTopFields(
      calcInput
        ?.filter((input: InputResultItem) => input.isTop)
        ?.map((input: InputResultItem) => ({
          name: input.name,
          promptKey: input.linkId,
          class_type: input.class_type,
        })),
    );
  }, []);

  const [topFields, setTopFields] = useState<TopFieldType[]>([]);
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
        showNodeName={showNodeName}
        topFields={topFields}
        metaData={metaData}
        updateMetaData={updateMetaData}
        updateTopField={updateTopField}
        calcInputList={calcInputList}
      />
      <AllPromptForm
        showNodeName={showNodeName}
        topFields={topFields}
        metaData={metaData}
        updateMetaData={updateMetaData}
        updateTopField={updateTopField}
        calcInputList={calcInputList}
      />
    </Flex>
  );
}
