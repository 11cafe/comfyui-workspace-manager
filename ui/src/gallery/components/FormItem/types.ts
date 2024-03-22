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
} & {
  [key in string]: any;
};
