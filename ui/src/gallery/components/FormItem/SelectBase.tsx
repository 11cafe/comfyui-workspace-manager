import { FC } from "react";
import { Flex, Select } from "@chakra-ui/react";
import { PromptNodeInputItem } from "../MetaBox/utils.ts";

export const SelectBase: FC<
  {
    inputItem: PromptNodeInputItem;
  } & {
    [key in string]: any;
  }
> = (props) => {
  const { inputItem } = props;
  return (
    <Flex gap={2}>
      <Flex gap={1} alignItems={"center"} flexBasis={"200px"}>
        {inputItem.label ?? inputItem.inputName}
      </Flex>
      <Select value={inputItem.inputValue} onChange={(e) => {}}>
        {props?.options?.map((v: string, i: number) => (
          <option
            key={`select${inputItem.nodeID}${inputItem.inputName}${i}`}
            value={v}
          >
            {v}
          </option>
        ))}
      </Select>
    </Flex>
  );
};
