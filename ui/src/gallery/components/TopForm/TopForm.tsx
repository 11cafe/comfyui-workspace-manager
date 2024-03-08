import { MetaData } from "../../utils.ts";
import { DEFAULT_TOP_FIELDS } from "../MetaBox/MetaBox.tsx";
import { Flex } from "@chakra-ui/react";
import { FormItemComponent } from "../FormItem/FormItemComponent.tsx";
import { FormItem } from "../FormItem/types.ts";

export default function TopForm({
  metaData,
  updateMetaData,
}: {
  metaData: MetaData;
  updateMetaData: FormItem["updateMetaData"];
}) {
  const prompt = metaData.prompt;
  return (
    <>
      {DEFAULT_TOP_FIELDS?.length > 0 && (
        <Flex px={2} gap={2} direction={"column"}>
          {DEFAULT_TOP_FIELDS?.map((field) => {
            if (!prompt?.[field.promptKey]?.inputs) return null;
            const promptValue = prompt?.[field.promptKey]?.inputs?.[field.name];
            return (
              <FormItemComponent
                key={`formTop${field.name}`}
                promptKey={field.promptKey as string}
                classType={prompt?.[field.promptKey]?.class_type}
                name={field.name}
                value={promptValue}
                updateMetaData={updateMetaData}
              />
            );
          })}
        </Flex>
      )}
    </>
  );
}
