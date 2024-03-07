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

export default function AllPromptForm({
  metaData,
  updateMetaData,
}: {
  metaData: MetaData;
  updateMetaData: FormItem["updateMetaData"];
}) {
  const prompt = metaData.prompt;
  return (
    <Accordion allowToggle>
      {Object.keys(prompt).map((promptKey) => {
        const promptElement = prompt[promptKey];
        const promptInputs = promptElement.inputs;
        const inputsKeyList = Object.keys(promptInputs).filter(
          (v) => !Array.isArray(promptInputs[v]),
        );
        if (inputsKeyList.length === 0) return null;
        return (
          <AccordionItem borderWidth={1} borderRadius={8} my={2}>
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
                  return (
                    <FormItemComponent
                      key={`form${inputsKey}`}
                      promptKey={promptKey}
                      classType={promptElement?.class_type}
                      value={value}
                      name={inputsKey}
                      updateMetaData={updateMetaData}
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
