import { FC } from "react";
import { Flex, Select } from "@chakra-ui/react";
import { FormItem } from "./types.ts";

export const SelectBase: FC<FormItem> = (props) => {
  return (
    <Flex gap={2}>
      <Flex gap={1} alignItems={"center"} flexBasis={"200px"}>
        {props.label ?? props.name}
      </Flex>
      <Select
        value={props.value}
        onChange={(e) =>
          props?.updateMetaData?.({
            promptKey: props.promptKey,
            name: props.name,
            value: e.target.value,
          })
        }
      >
        {props?.options?.map((v: string, i: number) => (
          <option
            key={`select${props.promptKey}${props.classType}${props.name}${i}`}
            value={v}
          >
            {v}
          </option>
        ))}
      </Select>
    </Flex>
  );
};
