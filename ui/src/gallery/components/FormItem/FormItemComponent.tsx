import { FC } from "react";
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

const INPUT_TYPE_COMPONENT_MAPPING = {
  [FormItemType.Input]: InputBase,
  [FormItemType.InputSlider]: InputSlider,
  [FormItemType.Select]: SelectBase,
  [FormItemType.Textarea]: TextareaBase,
  [FormItemType.Checkbox]: CheckboxBase,
  NoSupport: NoSupport,
} as Record<FormItemType, any>;

const nodesInfo = getNodesInfo();

function getInputConfigByInfo(props: FormItem): Partial<FormItem> {
  const nodeData = nodesInfo[props.classType]?.nodeData;
  const inputsInfo = {
    ...(nodeData?.input?.required ?? {}),
    ...(nodeData?.input?.optional ?? {}),
  }[props.name];

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
  // console.log("no support", props, inputsInfo);
  return { type: FormItemType.NoSupport };
}

export const FormItemComponent: FC<FormItem> = (props) => {
  const configByNodeInfo = getInputConfigByInfo(props);
  const Com = INPUT_TYPE_COMPONENT_MAPPING[configByNodeInfo.type ?? "Input"];
  return (
    <Grid templateColumns={"max-content 1fr"} gap={1}>
      <Flex>
        <IconButton
          onClick={() =>
            props?.updateTopField?.({
              name: props.name,
              promptKey: props.promptKey,
              class_type: props.classType,
            })
          }
          variant={"text"}
          icon={
            isInTopField(props.topFields, {
              name: props.name,
              promptKey: props.promptKey,
              classType: props.classType,
            }) ? (
              <IconPinFilled />
            ) : (
              <IconPin />
            )
          }
          aria-label={"pin"}
        />
      </Flex>
      <Com {...props} {...configByNodeInfo} />
    </Grid>
  );
};
