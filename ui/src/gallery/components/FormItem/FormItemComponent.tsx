import { FC } from "react";
import { InputBase } from "./InputBase.tsx";
import { InputSlider } from "./InputSlider.tsx";
import { SelectBase } from "./SelectBase.tsx";
import { TextareaBase } from "./TextareaBase.tsx";
import { FormItem, FormItemType } from "./types.ts";

const INPUT_TYPE_COMPONENT_MAPPING = {
  Input: InputBase,
  InputSlider: InputSlider,
  Select: SelectBase,
  Textarea: TextareaBase,
} as Record<FormItemType, any>;

export const FormItemComponent: FC<FormItem> = (props) => {
  const Com = INPUT_TYPE_COMPONENT_MAPPING[props.type ?? "Input"];
  return <Com {...props} />;
};
