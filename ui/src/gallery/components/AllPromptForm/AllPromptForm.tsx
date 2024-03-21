import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { FormItemComponent } from "../FormItem/FormItemComponent.tsx";
import { isInTopField } from "../MetaBox/MetaBox.tsx";
import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import { MetaBoxContext } from "../MetaBox/metaBoxContext.ts";
import { PromptNodeInputItem } from "../MetaBox/utils.ts";

export default function AllPromptForm() {
  const { topFields, updateTopField, calcInputList, showNodeName } =
    useContext(MetaBoxContext);

  const [defaultIndex, setDefaultIndex] = useState<number[]>([]);

  const groupInputsByNodeType = useCallback(
    (inputList: PromptNodeInputItem[]) => {
      const groupedInputs: PromptNodeInputItem[][] = [];
      inputList.forEach((input) => {
        const lastGroup = groupedInputs[groupedInputs.length - 1];
        if (
          !lastGroup ||
          lastGroup[0].nodeID !== input.nodeID ||
          lastGroup[0].classType !== input.classType
        ) {
          groupedInputs.push([input]);
        } else {
          lastGroup.push(input);
        }
      });
      return groupedInputs;
    },
    [],
  );

  useEffect(() => {}, [showNodeName]);

  if (!showNodeName) {
    return <></>;
  }
  const nodes = groupInputsByNodeType(calcInputList);
  return (
    <Stack>
      {nodes.map((groupInput) => {
        if (!groupInput[0]) {
          return null;
        }
        return (
          <CustomAccordionPanel title={groupInput[0].classType}>
            <Flex px={2} gap={1} direction={"column"}>
              {groupInput.map((input) => {
                if (
                  isInTopField(topFields, {
                    name: input.inputName,
                    promptKey: input.nodeID,
                    classType: input.classType,
                  })
                ) {
                  return null;
                }

                return (
                  <FormItemComponent
                    key={`form${input.nodeID}${input.inputName}`}
                    promptKey={input?.nodeID}
                    classType={input?.classType}
                    value={input.inputValue}
                    name={input.inputName}
                    updateTopField={updateTopField}
                    topFields={topFields}
                    label={input.inputName}
                  />
                );
              })}
            </Flex>
          </CustomAccordionPanel>
        );
      })}
    </Stack>
  );
}

// CustomAccordionPanel component
function CustomAccordionPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box border="1px" borderColor="gray.500" borderRadius="md" p={4}>
      <Heading size="sm" mb={2}>
        {title}
      </Heading>
      <div>{children}</div>
    </Box>
  );
}
