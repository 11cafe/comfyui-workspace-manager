import { createContext } from "react";
import { MetaData } from "../../utils.ts";
import { TopFieldType } from "./MetaBox.tsx";
import { FormItem } from "../FormItem/types.ts";
import { InputResultItem } from "./utils.ts";

interface MetaBoxContextProps {
  metaData: MetaData;
  topFields: TopFieldType[];
  updateMetaData: FormItem["updateMetaData"];
  updateTopField?: (field: TopFieldType) => void;
  calcInputList: InputResultItem[];
  showNodeName: boolean;
}

export const MetaBoxContext = createContext<MetaBoxContextProps>({
  topFields: [],
  calcInputList: [],
  metaData: {} as MetaData,
  showNodeName: false,
  updateMetaData: undefined,
  updateTopField(): void {},
});
