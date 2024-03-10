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
  const prompt = metaData.prompt;
  return (
    <>
      {topFields?.length > 0 && (
        <Flex px={2} gap={2} direction={"column"}>
          {topFields?.map((field, i) => {
            if (!prompt?.[field.promptKey]?.inputs) return null;
            const promptValue = prompt?.[field.promptKey]?.inputs?.[field.name];
            return (
              <FormItemComponent
                key={`formTop${field.name}${i}`}
                promptKey={field.promptKey as string}
                classType={prompt?.[field.promptKey]?.class_type}
                name={field.name}
                value={promptValue}
                updateMetaData={updateMetaData}
                updateTopField={updateTopField}
                topFields={topFields}
              />
            );
          })}
        </Flex>
      )}
    </>
  );
}
