export type FormItemType = "Input" | "InputSlider" | "Select" | "Textarea";

export interface FormItem {
  type?: FormItemType;
  name: string;
  label?: string;
  value: string;
  onChange?: (val: any) => void;
}
