import { MetaData } from "../../utils.ts";
import { FormConfigType } from "../MetaBox/MetaBox.tsx";
import { Flex } from "@chakra-ui/react";
import { FormItemComponent } from "../FormItem/FormItemComponent.tsx";

export default function TopForm({
  formConfig,
  metaData,
}: {
  metaData: MetaData;
  formConfig: FormConfigType;
}) {
  const prompt = metaData.prompt;
  return (
    <>
      {formConfig?.topField?.length > 0 && (
        <Flex gap={2} direction={"column"}>
          {formConfig?.topField?.map((field) => {
            const promptValue = prompt?.[field.promptKey]?.inputs?.[field.name];
            return (
              <FormItemComponent
                key={`formTop${field.name}`}
                {...(formConfig?.formItem?.[field.promptKey]?.[field.name] ??
                  {})}
                name={field.name}
                value={promptValue}
              />
            );
          })}
        </Flex>
      )}
    </>
  );
}
