import { FC } from "react";
import { InputBase } from "./InputBase.tsx";
import { InputSlider } from "./InputSlider.tsx";
import { SelectBase } from "./SelectBase.tsx";
import { TextareaBase } from "./TextareaBase.tsx";

export const FormItem: FC<FormItem> = (props) => {
  const Com = (
    {
      Input: InputBase,
      InputSlider: InputSlider,
      Select: SelectBase,
      Textarea: TextareaBase,
    } as Record<FormItemType, any>
  )[props.type ?? "Input"];
  return <Com {...props} />;
};
