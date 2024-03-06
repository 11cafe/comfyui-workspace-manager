import { FC } from "react";
import { Flex, Textarea } from "@chakra-ui/react";
import { FormItem } from "./types.ts";

export const TextareaBase: FC<FormItem> = (props) => {
  return (
    <Flex gap={1} direction={"column"}>
      <Flex>{props.label ?? props.name}</Flex>
      <Textarea rows={5} value={props.value} />
    </Flex>
  );
};
