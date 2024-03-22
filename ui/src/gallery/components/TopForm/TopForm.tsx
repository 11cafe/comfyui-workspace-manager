import { Flex } from "@chakra-ui/react";
import { FormItemComponent } from "../FormItem/FormItemComponent.tsx";
import { useContext } from "react";
import { MetaBoxContext } from "../MetaBox/metaBoxContext.ts";

export default function TopForm() {
  const { topFields, updateTopField, calcInputList } =
    useContext(MetaBoxContext);
  if (topFields.length === 0) return null;

  return (
    <>
      <Flex px={2} gap={2} direction={"column"}>
        {topFields?.map((field) => {
          const input = calcInputList.find(
            (input) =>
              input.nodeID == field.promptKey &&
              input.inputName === field.name &&
              input.classType === field.class_type,
          );
          if (!field.class_type || !input) {
            return null;
          }
          return (
            <FormItemComponent
              key={`formTopField${field.promptKey}${field.name}`}
              inputItem={input}
            />
          );
        })}
      </Flex>
    </>
  );
}
