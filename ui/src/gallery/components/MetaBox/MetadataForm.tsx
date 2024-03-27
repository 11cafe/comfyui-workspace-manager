import { MetaData, getMetadataFromUrl } from "../../utils.ts";
import { Flex, HStack, Switch } from "@chakra-ui/react";
import { Media } from "../../../types/dbTypes.ts";
import TopForm from "../TopForm/TopForm.tsx";
import AllPromptForm from "../AllPromptForm/AllPromptForm.tsx";
import { useContext, useEffect, useState } from "react";
import { FormItem } from "../FormItem/types.ts";
import {
  calcInputListRecursive,
  ImagePrompt,
  PromptNodeInputItem,
} from "./utils.ts";
import { MetaBoxContext } from "./metaBoxContext.ts";
import { workflowsTable } from "../../../db-tables/WorkspaceDB.ts";
import { WorkspaceContext } from "../../../WorkspaceContext.ts";
// @ts-ignore
import { app } from "/scripts/app.js";
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

export default function MetadataForm({ media }: { media: Media | null }) {
  const [calcInputList, setCalcInputList] = useState<PromptNodeInputItem[]>([]);
  const { curFlowID } = useContext(WorkspaceContext);
  const [imagePrompt, setImagePrompt] = useState<ImagePrompt>();
  const [showAllInputs, setShowAllInputs] = useState(true);
  const [showNodeName, setShowNodeName] = useState(true);

  useEffect(() => {
    if (media) {
      getMetadataFromUrl(
        `/workspace/view_media?filename=${media.localPath}`,
      ).then((data) => {
        setImagePrompt(data.prompt);
      });
    } else {
      app
        .graphToPrompt(app.graph)
        .then((data: { output: any; workflow: any }) => {
          setImagePrompt(data.output);
        });
    }
  }, [media]);

  useEffect(() => {
    if (!imagePrompt) return;
    const calcInput = calcInputListRecursive(imagePrompt);
    setCalcInputList(calcInput);
  }, [imagePrompt]);

  const [topFields, setTopFields] = useState<TopFieldType[]>([]);

  useEffect(() => {
    (async () => {
      if (curFlowID) {
        const topFieldsConfig = (await workflowsTable?.get(curFlowID))
          ?.topFieldsConfig;
        if (topFieldsConfig) {
          setTopFields(topFieldsConfig);
          setShowAllInputs(false);
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
        showNodeName,
        calcInputList,
        updateTopField,
      }}
    >
      <Flex direction={"column"} align={"stretch"} gap={5}>
        <TopForm />
        <HStack>
          <p>Show all inputs</p>
          <Switch
            isChecked={showAllInputs}
            onChange={(e) => setShowAllInputs(!showAllInputs)}
          />
          <p>Show node names</p>
          <Switch
            isChecked={showNodeName}
            onChange={(e) => setShowNodeName(!showNodeName)}
          />
        </HStack>
        {showAllInputs && <AllPromptForm />}
      </Flex>
    </MetaBoxContext.Provider>
  );
}
