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
import { isInTopField } from "../MetaBox/MetaBox.tsx";
import { Fragment, useContext, useEffect, useState } from "react";
import { MetaBoxContext } from "../MetaBox/metaBoxContext.ts";

export default function AllPromptForm() {
  const { topFields, updateTopField, calcInputList, showNodeName } =
    useContext(MetaBoxContext);

  const [defaultIndex, setDefaultIndex] = useState<number[]>([]);

  useEffect(() => {}, [showNodeName]);

  if (!showNodeName) {
    return <></>;
  }
  return (
    <Accordion
      index={defaultIndex}
      onChange={(val) => setDefaultIndex(val as number[])}
      allowMultiple
    >
      {[].map((groupInput) => {
        return (
          <AccordionItem
            key={`AccordionItem${groupInput.class_type}${groupInput?.list?.[0]?.linkId}`}
            borderWidth={1}
            borderRadius={8}
            my={2}
          >
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {groupInput.class_type}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Flex px={2} gap={1} direction={"column"}>
                {groupInput.list?.map((input) => {
                  if (
                    isInTopField(topFields, {
                      name: input.name,
                      promptKey: input.linkId,
                      classType: input.class_type,
                    })
                  ) {
                    return null;
                  }
                  const value = prompt[input.linkId]?.inputs?.[input.name];
                  return (
                    <FormItemComponent
                      key={`form${input.linkId}${input.name}`}
                      promptKey={input?.linkId}
                      classType={input?.class_type}
                      value={value}
                      name={input.name}
                      updateTopField={updateTopField}
                      topFields={topFields}
                      label={input.formLabel}
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
