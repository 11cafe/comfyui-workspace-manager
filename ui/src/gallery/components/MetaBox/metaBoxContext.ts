import { createContext } from "react";
import { TopFieldType } from "./MetadataForm.tsx";
import { PromptNodeInputItem } from "./utils.ts";

interface MetaBoxContextProps {
  topFields: TopFieldType[];
  updateTopField?: (field: TopFieldType) => void;
  calcInputList: PromptNodeInputItem[];
  showNodeName: boolean;
  // updateInputValue: (input: PromptNodeInputItem) => void;
}

export const MetaBoxContext = createContext<MetaBoxContextProps>({
  topFields: [],
  calcInputList: [],
  showNodeName: false,
  updateTopField(): void {},
  // updateInputValue(): void {},
});
