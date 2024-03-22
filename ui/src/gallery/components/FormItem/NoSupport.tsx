import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { PromptNodeInputItem } from "../MetaBox/utils.ts";

export const NoSupport: FC<{ inputItem: PromptNodeInputItem }> = (props) => {
  return (
    <Flex gap={2}>
      <Flex gap={1} alignItems={"center"} flexBasis={"200px"}>
        {props.inputItem.label ?? props.inputItem.inputName}
      </Flex>
      <Flex>No Support</Flex>
    </Flex>
  );
};
