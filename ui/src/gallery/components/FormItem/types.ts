export type FormItemType = "Input" | "InputSlider" | "Select" | "Textarea";

export type FormItem = {
  type?: FormItemType;
  name: string;
  label?: string;
  value: string | number;
  onChange?: (val: any) => void;
  classType: string;
  promptKey: string;
  updateMetaData?: (data: {
    promptKey: string;
    name: string;
    value: any;
  }) => void;
} & {
  [key in string]: any;
};
