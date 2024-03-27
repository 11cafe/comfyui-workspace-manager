import { FC } from "react";
import { Flex, Input } from "@chakra-ui/react";
import { PromptNodeInputItem } from "../MetaBox/utils.ts";

export const InputBase: FC<
  {
    inputItem: PromptNodeInputItem;
  } & {
    [key in string]: any;
  }
> = ({ inputItem }) => {
  return (
    <Flex gap={2}>
      <Flex gap={1} alignItems={"center"} flexBasis={"200px"}>
        {inputItem.label ?? inputItem.inputName}
      </Flex>
      <Input value={inputItem.inputValue} onChange={(e) => {}} />
    </Flex>
  );
};
