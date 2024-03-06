import { MetaBoxTypeCom } from "../../utils.ts";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { FormItem } from "../FormItem/FormItem.tsx";

const formConfig: {
  topField: {
    promptKey: string | number;
    class_type?: string;
    name: string;
  }[];
  formItem: {
    [key in string]: {
      [key in string]: Partial<FormItem>;
    };
  };
} = {
  topField: [
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
  ],
  formItem: {
    3: {
      steps: {
        type: "InputSlider",
      },
      cfg: {
        type: "InputSlider",
      },
      denoise: {
        type: "InputSlider",
      },
      sampler_name: {
        type: "Select",
      },
    },
    4: {
      ckpt_name: {
        type: "Select",
      },
    },
    5: {
      width: { type: "InputSlider" },
      height: { type: "InputSlider" },
    },
    6: {
      text: {
        type: "Textarea",
        label: "正向提示词",
      },
    },
    7: {
      text: {
        type: "Textarea",
        label: "反向提示词",
      },
    },
  },
};

export const MetaBox: MetaBoxTypeCom = ({ metaData }) => {
  const prompt = metaData.prompt;
  console.log(metaData);

  return (
    <VStack spacing={2} align={"stretch"}>
      {formConfig?.topField?.length > 0 && (
        <Flex gap={2} direction={"column"}>
          {formConfig?.topField?.map((field) => {
            const promptValue = prompt?.[field.promptKey]?.inputs?.[field.name];
            return (
              <FormItem
                key={`formTop${field.name}`}
                {...(formConfig?.formItem?.[field.promptKey]?.[field.name] ??
                  {})}
                name={field.name}
                value={promptValue}
              />
            );
          })}
        </Flex>
      )}
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
                      <FormItem
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
    </VStack>
  );
};
