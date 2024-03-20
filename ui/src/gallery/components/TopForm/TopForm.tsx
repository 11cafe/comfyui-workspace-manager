import { Flex } from "@chakra-ui/react";
import { FormItemComponent } from "../FormItem/FormItemComponent.tsx";
import { useContext } from "react";
import { MetaBoxContext } from "../MetaBox/metaBoxContext.ts";

export default function TopForm() {
  const { topFields, updateTopField, calcInputList, updateMetaData, metaData } =
    useContext(MetaBoxContext);
  if (topFields.length === 0) return null;
  const prompt = metaData.prompt;
  return (
    <>
      <Flex px={2} gap={2} direction={"column"}>
        {topFields?.map((field, i) => {
          const nodeInputs = prompt?.[field.promptKey]?.inputs;
          if (!nodeInputs) return null;
          const nodeClassType = prompt?.[field.promptKey]?.class_type;
          if (nodeClassType !== field.class_type) return null;
          const inputValue = nodeInputs?.[field.name];
          const label =
            calcInputList?.find(
              (input) =>
                input?.linkId === field?.promptKey &&
                input?.name === field?.name,
            )?.formLabel ?? undefined;
          return (
            <FormItemComponent
              key={`formTop${field.name}${i}`}
              promptKey={field.promptKey as string}
              classType={prompt?.[field.promptKey]?.class_type}
              name={field.name}
              value={inputValue}
              updateMetaData={updateMetaData}
              updateTopField={updateTopField}
              topFields={topFields}
              label={label}
            />
          );
        })}
      </Flex>
    </>
  );
}
