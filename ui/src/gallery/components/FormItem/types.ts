type FormItemType = "Input" | "InputSlider" | "Select" | "Textarea";

interface FormItem {
  type?: FormItemType;
  name: string;
  label?: string;
  value: string;
  onChange?: (val: any) => void;
}
