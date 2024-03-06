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
import { FormConfigType } from "../MetaBox/MetaBox.tsx";
import { MetaData } from "../../utils.ts";

export default function AllPromptForm({
  formConfig,
  metaData,
}: {
  metaData: MetaData;
  formConfig: FormConfigType;
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
              <Flex gap={1} direction={"column"}>
                {inputsKeyList?.map((inputsKey) => {
                  const value = promptInputs[inputsKey];
                  return (
                    <FormItemComponent
                      key={`form${inputsKey}`}
                      {...(formConfig?.formItem?.[promptKey]?.[inputsKey] ??
                        {})}
                      value={value}
                      name={inputsKey}
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
