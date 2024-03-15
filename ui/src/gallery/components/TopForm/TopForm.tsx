import { MetaData } from "../../utils.ts";
import { TopFieldType } from "../MetaBox/MetaBox.tsx";
import { Flex } from "@chakra-ui/react";
import { FormItemComponent } from "../FormItem/FormItemComponent.tsx";
import { FormItem } from "../FormItem/types.ts";

export default function TopForm({
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
            />
          );
        })}
      </Flex>
    </>
  );
}
