import { FC } from "react";
import { Checkbox, Flex } from "@chakra-ui/react";
import { PromptNodeInputItem } from "../MetaBox/utils.ts";

export const CheckboxBase: FC<
  {
    inputItem: PromptNodeInputItem;
  } & {
    [key in string]: any;
  }
> = (props) => {
  const inputItem = props.inputItem;
  return (
    <Flex gap={2}>
      <Flex gap={1} alignItems={"center"} flexBasis={"200px"}>
        {inputItem.label ?? inputItem.inputName}
      </Flex>
      <Checkbox
        defaultChecked={!!inputItem.inputValue}
        onChange={(e) => {
          props?.updateMetaData?.({
            promptKey: props.promptKey,
            name: props.name,
            value: e.target.checked,
          });
        }}
      />
    </Flex>
  );
};
