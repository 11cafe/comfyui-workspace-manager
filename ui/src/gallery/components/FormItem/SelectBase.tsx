import { FC } from "react";
import { Flex, Select } from "@chakra-ui/react";

export const SelectBase: FC<FormItem> = (props) => {
  return (
    <Flex gap={2}>
      <Flex gap={1} alignItems={"center"} flexBasis={"200px"}>
        {props.label ?? props.name}
      </Flex>
      <Select>
        <option value={props.value}>{props.value}</option>
      </Select>
    </Flex>
  );
};
