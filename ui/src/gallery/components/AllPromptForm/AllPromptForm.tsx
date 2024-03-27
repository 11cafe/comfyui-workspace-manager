import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import { FormItemComponent } from "../FormItem/FormItemComponent.tsx";
import { isInTopField } from "../MetaBox/MetadataForm.tsx";
import { useCallback, useContext, useEffect, useState } from "react";
import { MetaBoxContext } from "../MetaBox/metaBoxContext.ts";
import { PromptNodeInputItem } from "../MetaBox/utils.ts";

export default function AllPromptForm() {
  const { topFields, calcInputList, showNodeName } = useContext(MetaBoxContext);

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
    return (
      <Stack>
        {calcInputList.map((input) => {
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
              inputItem={input}
            />
          );
        })}
      </Stack>
    );
  }
  const nodes = groupInputsByNodeType(calcInputList);
  return (
    <Stack>
      {nodes.map((nodeInputs) => {
        if (!nodeInputs[0]) {
          return null;
        }
        return (
          <CustomAccordionPanel
            title={nodeInputs[0].classType + " #" + nodeInputs[0].nodeID}
            key={nodeInputs[0].nodeID}
          >
            <Flex px={2} gap={1} direction={"column"}>
              {nodeInputs.map((input) => {
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
                    inputItem={input}
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

function CustomAccordionPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box border="1px" borderColor="gray.500" borderRadius="md" p={4}>
      <Text size="sm" mb={1} color={"GrayText"}>
        {title}
      </Text>
      <div>{children}</div>
    </Box>
  );
}
