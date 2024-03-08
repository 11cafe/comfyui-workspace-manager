import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { FormItem } from "./types.ts";

export const NoSupport: FC<FormItem> = (props) => {
  return (
    <Flex gap={2}>
      <Flex gap={1} alignItems={"center"} flexBasis={"200px"}>
        {props.label ?? props.name}
      </Flex>
      <Flex>No Support</Flex>
    </Flex>
  );
};
