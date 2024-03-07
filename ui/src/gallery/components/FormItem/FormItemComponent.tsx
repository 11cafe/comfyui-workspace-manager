import { FC } from "react";
import { InputBase } from "./InputBase.tsx";
import { InputSlider } from "./InputSlider.tsx";
import { SelectBase } from "./SelectBase.tsx";
import { TextareaBase } from "./TextareaBase.tsx";
import { FormItem, FormItemType } from "./types.ts";
import { getNodesInfo } from "../../utils.ts";
import { NoSupport } from "./NoSupport.tsx";

const INPUT_TYPE_COMPONENT_MAPPING = {
  Input: InputBase,
  InputSlider: InputSlider,
  Select: SelectBase,
  Textarea: TextareaBase,
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

export const FormItemComponent: FC<FormItem> = (props) => {
  const configByNodeInfo = getInputConfigByInfo(props);
  const Com = INPUT_TYPE_COMPONENT_MAPPING[configByNodeInfo.type ?? "Input"];
  return <Com {...props} {...configByNodeInfo} />;
};
