type MetaValue = string | number | null | any[];

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
  label?: string;
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
  Object.entries(promptNode.inputs).forEach(([_inputName, value]) => {
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
  visitedIDs = new Set<string>(); // clear visited nodes
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
  return inputList;
}
