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
  nodeID?: string;
  children?: string[]; // output links to other node e.g. CLIPTextEncode -> KSampler
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

export type PromptNodeInputItem = {
  classType: string; // nodeType
  inputName: string;
  inputValue: any;
  nodeID: string;
  children: string[]; // output links to other node e.g. CLIPTextEncode.text -> KSampler.negative
};

let inputList: PromptNodeInputItem[] = [];
let visitedIDs = new Set<string>();

function dfs(promptNode: ImagePromptNodeItem, prompt: ImagePrompt) {
  if (visitedIDs.has(promptNode.nodeID!)) {
    return;
  }
  visitedIDs.add(promptNode.nodeID!);
  Object.entries(promptNode.inputs).forEach(([inputName, value]) => {
    if (Array.isArray(value)) {
      const parentID = value[0];
      dfs(prompt[parentID], prompt);
    }
  });
  Object.entries(promptNode.inputs).forEach(([inputName, value]) => {
    if (!Array.isArray(value)) {
      inputList.push({
        classType: promptNode.class_type,
        inputName,
        inputValue: value,
        nodeID: promptNode.nodeID!,
        children: promptNode.children || [],
      });
    }
  });
  return inputList;
}

export function calcInputListRecursive(
  prompt: ImagePrompt,
): PromptNodeInputItem[] {
  inputList = []; // clear result inputlist
  for (const key of Object.keys(prompt)) {
    prompt[key].nodeID = key;
    Object.entries(prompt[key].inputs).forEach(([inputName, value]) => {
      if (Array.isArray(value)) {
        const parentID = value[0];
        const parentNode = prompt[parentID];
        if (!parentNode.children) {
          parentNode.children = [];
        }
        // record children output links
        parentNode.children.push(inputName);
      }
    });
  }

  for (const key of Object.keys(prompt)) {
    dfs(prompt[key], prompt);
  }
  console.log("calcInputListRecursive res", inputList);
  return inputList;
}
