import { MetaData } from "../../utils.ts";
import { Flex } from "@chakra-ui/react";
import { Media } from "../../../types/dbTypes.ts";
import TopForm from "../TopForm/TopForm.tsx";
import AllPromptForm from "../AllPromptForm/AllPromptForm.tsx";
import { useContext, useEffect, useState } from "react";
import { FormItem } from "../FormItem/types.ts";
import { calcMeta, getNodeTypeByPath, type InputResultItem } from "./utils.ts";
import { MetaBoxContext } from "./metaBoxContext.ts";
import { workflowsTable } from "../../../db-tables/WorkspaceDB.ts";
import { WorkspaceContext } from "../../../WorkspaceContext.ts";

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
  const { curFlowID } = useContext(WorkspaceContext);

  useEffect(() => {
    const calcInput = calcMeta(_metaData);
    setCalcInputList(calcInput);
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

  useEffect(() => {
    (async () => {
      if (curFlowID) {
        const topFieldsConfig = (await workflowsTable?.get(curFlowID))
          ?.topFieldsConfig;
        if (topFieldsConfig) {
          setTopFields(topFieldsConfig);
        }
      }
    })();
  }, [curFlowID]);
  const updateTopField = (field: TopFieldType) => {
    if (
      isInTopField(topFields, {
        name: field.name,
        promptKey: field?.promptKey,
        classType: field?.class_type ?? "",
      })
    ) {
      const topFieldsConfig = topFields.filter(
        (v) => v.name !== field.name || v.promptKey !== field.promptKey,
      );
      setTopFields(topFieldsConfig);
      if (curFlowID) {
        workflowsTable?.updateTopFields(curFlowID, {
          topFieldsConfig,
        });
      }
    } else {
      const topFieldsConfig = [...topFields, field];
      setTopFields(topFieldsConfig);
      if (curFlowID) {
        workflowsTable?.updateTopFields(curFlowID, {
          topFieldsConfig,
        });
      }
    }
  };

  return (
    <MetaBoxContext.Provider
      value={{
        topFields,
        metaData,
        updateMetaData,
        showNodeName,
        calcInputList,
        updateTopField,
      }}
    >
      <Flex direction={"column"} align={"stretch"}>
        <TopForm />
        <AllPromptForm />
      </Flex>
    </MetaBoxContext.Provider>
  );
}
