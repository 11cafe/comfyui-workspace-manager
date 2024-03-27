import { FC } from "react";
import { Flex, Textarea } from "@chakra-ui/react";
import { PromptNodeInputItem } from "../MetaBox/utils.ts";

export const TextareaBase: FC<
  {
    inputItem: PromptNodeInputItem;
  } & {
    [key in string]: any;
  }
> = (props) => {
  const inputItem = props.inputItem;
  return (
    <Flex gap={1} direction={"column"}>
      <Flex>{inputItem.label ?? inputItem.inputName}</Flex>
      <Textarea value={inputItem.inputValue} onChange={(e) => {}} rows={5} />
    </Flex>
  );
};
