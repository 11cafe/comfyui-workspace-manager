import { TopFieldType } from "../MetaBox/MetaBox.tsx";

export enum FormItemType {
  Input = "Input",
  InputSlider = "InputSlider",
  Select = "Select",
  Textarea = "Textarea",
  Checkbox = "Checkbox",
  NoSupport = "NoSupport",
}

export type FormItem = {
  type?: FormItemType;
  name: string;
  label?: string;
  value: string | number;
  onChange?: (val: any) => void;
  classType: string;
  promptKey: string | number;
  topFields: TopFieldType[];
  updateTopField?: (field: TopFieldType) => void;
  updateMetaData?: (data: {
    promptKey: string | number;
    name: string;
    value: any;
  }) => void;
} & {
  [key in string]: any;
};
