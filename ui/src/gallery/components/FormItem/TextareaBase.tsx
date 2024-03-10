import { FC } from "react";
import { Flex, Textarea } from "@chakra-ui/react";
import { FormItem } from "./types.ts";

export const TextareaBase: FC<FormItem> = (props) => {
  return (
    <Flex gap={1} direction={"column"}>
      <Flex>{props.label ?? props.name}</Flex>
      <Textarea
        value={props.value}
        onChange={(e) =>
          props?.updateMetaData?.({
            promptKey: props.promptKey,
            name: props.name,
            value: e.target.value,
          })
        }
        rows={5}
      />
    </Flex>
  );
};
