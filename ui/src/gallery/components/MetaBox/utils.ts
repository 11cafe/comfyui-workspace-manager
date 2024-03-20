type MetaValue = string | number | null | any[];
interface Workflow {
  last_node_id: number;
  last_link_id: number;
  nodes: Node[];
  links: Link[];
  groups: any[];
  config: object;
  extra: object;
  version: number;
  widget_idx_map: WidgetIdxMap;
}

interface Properties {
  "Node name for S&R"?: string;
}

interface Node {
  id: number;
  type: string;
  pos: number[];
  size: Size;
  flags: object;
  order: number;
  mode: number;
  inputs?: Input[];
  outputs?: Output[];
  properties: Properties;
  widgets_values: MetaValue[];
}

interface Link {
  id?: number;
  type?: string;
  pos?: number[];
  size?: Size;
  flags?: object;
  order?: number;
  mode?: number;
  inputs?: Input[];
  outputs?: Output[];
  properties?: Properties;
  widgets_values?: MetaValue[];
}

interface Size {
  0: number;
  1: number;
}

interface Input {
  name: string;
  type: string;
  link: number;
  label: string;
}

interface Output {
  name: string;
  type: string;
  links: number[];
  slot_index: number;
  label: string;
}

interface WidgetIdxMap {
  [key: string]: {
    [key: string]: number;
  };
}

export type ImagePrompt = {
  [key: string | number]: ImagePromptNodeItem;
};
export type ImagePromptNodeItem = {
  class_type: string;
  inputs: {
    [key: string]: MetaValue | any;
  };
  promptKey?: string;
};
export type InputResultItem = {
  class_type: string;
  name: string;
  linkId: string;
  value: MetaValue;
  path: InputResultItem[];
  inputInfo: any;
  isTop?: boolean;
  formLabel?: string;
};

let toExecute: ImagePromptNodeItem[] = [];
export type PromptNodeInputItem = {
  classType: string;
  inputName: string;
  inputValue: any;
  promptKey: string;
  path?: string[];
};

function recursiveGetInputList(
  promptNode: ImagePromptNodeItem,
  prompt: ImagePrompt,
  path: string[],
) {
  const index = toExecute.findIndex(
    (v) => v.promptKey === promptNode.promptKey,
  );
  if (index == -1) {
    return [];
  }
  toExecute = toExecute.filter((v) => v !== promptNode);

  const inputList: PromptNodeInputItem[] = [];
  Object.entries(promptNode.inputs).forEach(([inputName, value]) => {
    if (Array.isArray(value)) {
      const list = recursiveGetInputList(prompt[value[0]], prompt, [
        ...path,
        inputName,
      ]);
      inputList.push(...list);
      return;
    }
    inputList.push({
      classType: promptNode.class_type,
      inputName,
      promptKey: promptNode.promptKey ?? "",
      inputValue: value,
      path: [...path, inputName],
    });
  });
  return inputList;
}

export function calcInputListRecursive(
  prompt: ImagePrompt,
): PromptNodeInputItem[] {
  toExecute = Object.values(prompt);
  for (const key of Object.keys(prompt)) {
    prompt[key].promptKey = key;
  }
  const res = [];
  while (toExecute.length) {
    const inputList = recursiveGetInputList(toExecute[0], prompt, []);
    res.push(...inputList);
  }
  console.log("calcInputListRecursive res", res);
  return res;
}
