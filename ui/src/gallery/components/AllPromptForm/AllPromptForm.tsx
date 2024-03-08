import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import { FormItemComponent } from "../FormItem/FormItemComponent.tsx";
import { MetaData } from "../../utils.ts";
import { FormItem } from "../FormItem/types.ts";
import { isInTopField, TopFieldType } from "../MetaBox/MetaBox.tsx";
import { useEffect, useState } from "react";

export default function AllPromptForm({
  metaData,
  updateMetaData,
  topFields,
  updateTopField,
}: {
  metaData: MetaData;
  topFields: TopFieldType[];
  updateMetaData: FormItem["updateMetaData"];
  updateTopField?: (field: TopFieldType) => void;
}) {
  const prompt = metaData.prompt;
  const [defaultIndex, setDefaultIndex] = useState<number[]>([]);
  useEffect(() => {
    setDefaultIndex(Object.keys(prompt).map((_, i) => i));
  }, [prompt]);
  return (
    <Accordion
      index={defaultIndex}
      onChange={(val) => setDefaultIndex(val as number[])}
      allowMultiple
    >
      {Object.keys(prompt).map((promptKey) => {
        const promptElement = prompt[promptKey];
        const promptInputs = promptElement.inputs;
        const inputsKeyList = Object.keys(promptInputs).filter(
          (v) =>
            !Array.isArray(promptInputs[v]) &&
            !isInTopField(topFields, {
              name: v,
              promptKey: promptKey,
              classType: promptElement.class_type,
            }),
        );
        if (inputsKeyList.length === 0) return null;
        return (
          <AccordionItem
            key={`AccordionItem${promptKey}`}
            borderWidth={1}
            borderRadius={8}
            my={2}
          >
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {promptElement.class_type}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Flex px={2} gap={1} direction={"column"}>
                {inputsKeyList?.map((inputsKey) => {
                  const value = promptInputs[inputsKey];
                  if (
                    isInTopField(topFields, {
                      name: inputsKey,
                      promptKey,
                      classType: promptElement.class_type,
                    })
                  ) {
                    return null;
                  }
                  return (
                    <FormItemComponent
                      key={`form${inputsKey}`}
                      promptKey={promptKey}
                      classType={promptElement?.class_type}
                      value={value}
                      name={inputsKey}
                      updateMetaData={updateMetaData}
                      updateTopField={updateTopField}
                      topFields={topFields}
                      metaData={metaData}
                    />
                  );
                })}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
