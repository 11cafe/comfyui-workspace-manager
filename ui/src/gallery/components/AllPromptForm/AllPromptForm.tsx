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
import { Fragment, useEffect, useState } from "react";
import { InputResultItem } from "../MetaBox/utils.ts";

export type FormBoxProps = {
  metaData: MetaData;
  topFields: TopFieldType[];
  updateMetaData: FormItem["updateMetaData"];
  updateTopField?: (field: TopFieldType) => void;
  calcInputList: InputResultItem[];
  showNodeName: boolean;
};
export default function AllPromptForm({
  metaData,
  updateMetaData,
  topFields,
  updateTopField,
  calcInputList,
  showNodeName,
}: FormBoxProps) {
  const [defaultIndex, setDefaultIndex] = useState<number[]>([]);

  const groupInputList =
    calcInputList?.reduce<
      {
        list: InputResultItem[];
        class_type: string;
      }[]
    >((previousValue, currentValue) => {
      if (
        isInTopField(topFields, {
          name: currentValue.name,
          promptKey: currentValue.linkId,
          classType: currentValue.class_type,
        })
      ) {
        return previousValue;
      }
      const findItem = previousValue.find(
        (v) => v.class_type === currentValue.class_type,
      );
      if (findItem) {
        return previousValue.map((item) => {
          if (item.class_type === currentValue.class_type) {
            return {
              ...item,
              list: [...(item.list ?? []), currentValue],
            };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...previousValue,
          {
            class_type: currentValue.class_type,
            list: [currentValue],
          },
        ];
      }
    }, []) ?? [];

  useEffect(() => {
    if (showNodeName && groupInputList?.length) {
      setDefaultIndex(
        Array(groupInputList?.length)
          .fill("")
          .map((_, i) => i),
      );
    }
  }, [groupInputList?.length, showNodeName]);

  if (!showNodeName) {
    return (
      <>
        {groupInputList.map((groupInput) => (
          <Fragment
            key={`group${groupInput.class_type}${groupInput?.list?.[0]?.linkId}`}
          >
            {groupInput.list.map((input) => {
              const value = metaData.prompt[input.linkId]?.inputs?.[input.name];
              return (
                <FormItemComponent
                  key={`form${input.linkId}${input.name}`}
                  promptKey={input.linkId}
                  classType={input?.class_type}
                  value={value}
                  name={input.name}
                  updateMetaData={updateMetaData}
                  updateTopField={updateTopField}
                  topFields={topFields}
                  metaData={metaData}
                  label={input.formLabel}
                />
              );
            })}
          </Fragment>
        ))}
      </>
    );
  }
  return (
    <Accordion
      index={defaultIndex}
      onChange={(val) => setDefaultIndex(val as number[])}
      allowMultiple
    >
      {groupInputList.map((groupInput) => {
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
                  const value =
                    metaData.prompt[input.linkId]?.inputs?.[input.name];
                  return (
                    <FormItemComponent
                      key={`form${input.linkId}${input.name}`}
                      promptKey={input.linkId}
                      classType={input?.class_type}
                      value={value}
                      name={input.name}
                      updateMetaData={updateMetaData}
                      updateTopField={updateTopField}
                      topFields={topFields}
                      metaData={metaData}
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

  // return (
  //   <Accordion
  //     index={defaultIndex}
  //     onChange={(val) => setDefaultIndex(val as number[])}
  //     allowMultiple
  //   >
  //     {Object.keys(prompt).map((promptKey) => {
  //       const promptElement = prompt[promptKey];
  //       const promptInputs = promptElement.inputs;
  //       const inputsKeyList = Object.keys(promptInputs).filter(
  //         (v) =>
  //           !Array.isArray(promptInputs[v]) &&
  //           !isInTopField(topFields, {
  //             name: v,
  //             promptKey: promptKey,
  //             classType: promptElement.class_type,
  //           }),
  //       );
  //       if (inputsKeyList.length === 0) return null;
  //       return (
  //         <AccordionItem
  //           key={`AccordionItem${promptKey}`}
  //           borderWidth={1}
  //           borderRadius={8}
  //           my={2}
  //         >
  //           <AccordionButton>
  //             <Box as="span" flex="1" textAlign="left">
  //               {promptElement.class_type}
  //             </Box>
  //             <AccordionIcon />
  //           </AccordionButton>
  //           <AccordionPanel>
  //             <Flex px={2} gap={1} direction={"column"}>
  //               {inputsKeyList?.map((inputsKey) => {
  //                 const value = promptInputs[inputsKey];
  //                 if (
  //                   isInTopField(topFields, {
  //                     name: inputsKey,
  //                     promptKey,
  //                     classType: promptElement.class_type,
  //                   })
  //                 ) {
  //                   return null;
  //                 }
  //                 return (
  //                   <FormItemComponent
  //                     key={`form${inputsKey}`}
  //                     promptKey={promptKey}
  //                     classType={promptElement?.class_type}
  //                     value={value}
  //                     name={inputsKey}
  //                     updateMetaData={updateMetaData}
  //                     updateTopField={updateTopField}
  //                     topFields={topFields}
  //                     metaData={metaData}
  //                   />
  //                 );
  //               })}
  //             </Flex>
  //           </AccordionPanel>
  //         </AccordionItem>
  //       );
  //     })}
  //   </Accordion>
  // );
}
