import { MetaData } from "../../utils.ts";
import { FormConfigType } from "../MetaBox/MetaBox.tsx";
import { Flex } from "@chakra-ui/react";
import { FormItemComponent } from "../FormItem/FormItemComponent.tsx";
import { FormItem } from "../FormItem/types.ts";

export default function TopForm({
  formConfig,
  metaData,
  updateMetaData,
}: {
  metaData: MetaData;
  formConfig: FormConfigType;
  updateMetaData: FormItem["updateMetaData"];
}) {
  const prompt = metaData.prompt;
  return (
    <>
      {formConfig?.topField?.length > 0 && (
        <Flex px={2} gap={2} direction={"column"}>
          {formConfig?.topField?.map((field) => {
            const promptValue = prompt?.[field.promptKey]?.inputs?.[field.name];
            return (
              <FormItemComponent
                key={`formTop${field.name}`}
                {...(formConfig?.formItem?.[field.promptKey]?.[field.name] ??
                  {})}
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
