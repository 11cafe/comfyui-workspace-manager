import { FC, useContext } from "react";
import { InputBase } from "./InputBase.tsx";
import { InputSlider } from "./InputSlider.tsx";
import { SelectBase } from "./SelectBase.tsx";
import { TextareaBase } from "./TextareaBase.tsx";
import { FormItem, FormItemType } from "./types.ts";
import { getNodesInfo } from "../../utils.ts";
import { NoSupport } from "./NoSupport.tsx";
import { CheckboxBase } from "./CheckboxBase.tsx";
import { Flex, Grid, IconButton } from "@chakra-ui/react";
import { IconPin, IconPinFilled } from "@tabler/icons-react";
import { isInTopField } from "../MetaBox/MetaBox.tsx";
import { PromptNodeInputItem } from "../MetaBox/utils.ts";
import { MetaBoxContext } from "../MetaBox/metaBoxContext.ts";

const INPUT_TYPE_COMPONENT_MAPPING = {
  [FormItemType.Input]: InputBase,
  [FormItemType.InputSlider]: InputSlider,
  [FormItemType.Select]: SelectBase,
  [FormItemType.Textarea]: TextareaBase,
  [FormItemType.Checkbox]: CheckboxBase,
  NoSupport: NoSupport,
} as Record<FormItemType, any>;

// @ts-expect-error
const nodesInfo = LiteGraph.registered_node_types;

function getInputConfigByInfo(
  classType: string,
  inputName: string,
): Partial<FormItem> {
  const nodeData = nodesInfo[classType]?.nodeData;
  const inputsInfo = {
    ...(nodeData?.input?.required ?? {}),
    ...(nodeData?.input?.optional ?? {}),
  }[inputName];

  if (inputsInfo?.[0] === "STRING") {
    if (inputsInfo?.[1]?.multiline) {
      return {
        type: FormItemType.Textarea,
      };
    }
    return {
      type: FormItemType.Input,
    };
  }
  if (inputsInfo?.[0] === "BOOLEAN") {
    return {
      type: FormItemType.Checkbox,
    };
  }
  if (inputsInfo?.[0] === "FLOAT") {
    return {
      ...(inputsInfo?.[1] ?? {}),
      type: FormItemType.InputSlider,
    };
  }
  if (inputsInfo?.[0] === "INT") {
    return {
      ...(inputsInfo?.[1] ?? {}),
      type: FormItemType.InputSlider,
    };
  }
  if (
    Array.isArray(inputsInfo?.[0]) &&
    inputsInfo?.[0]?.every((v) => typeof v === "string")
  ) {
    return {
      options: inputsInfo?.[0],
      type: FormItemType.Select,
    };
  }
  return { type: FormItemType.NoSupport };
}

export const FormItemComponent: FC<{ inputItem: PromptNodeInputItem }> = ({
  inputItem,
}) => {
  const configByNodeInfo = getInputConfigByInfo(
    inputItem.classType,
    inputItem.inputName,
  );
  const Com = INPUT_TYPE_COMPONENT_MAPPING[configByNodeInfo.type ?? "Input"];
  const { updateTopField, topFields } = useContext(MetaBoxContext);
  const childrenOutputLink =
    inputItem.children[0] === "negative" || inputItem.children[0] === "positive"
      ? `-${inputItem.children[0]}`
      : "";
  const inputWithLabel = {
    ...inputItem,
    label: inputItem.label ?? inputItem.inputName + childrenOutputLink,
  };

  return (
    <Grid templateColumns={"max-content 1fr"} gap={1}>
      <Flex>
        <IconButton
          onClick={() =>
            updateTopField?.({
              name: inputItem.inputName,
              promptKey: inputItem.nodeID,
              class_type: inputItem.classType,
            })
          }
          variant={"text"}
          icon={
            isInTopField(topFields, {
              name: inputItem.inputName,
              promptKey: inputItem.nodeID,
              classType: inputItem.classType,
            }) ? (
              <IconPinFilled />
            ) : (
              <IconPin />
            )
          }
          aria-label={"pin"}
        />
      </Flex>
      <Com inputItem={inputWithLabel} {...configByNodeInfo} />
    </Grid>
  );
};
