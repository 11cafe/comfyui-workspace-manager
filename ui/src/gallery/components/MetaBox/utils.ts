import { getNodesInfo } from "../../utils.ts";

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

interface Meta {
  prompt: {
    [key: string | number]: {
      class_type: string;
      inputs: {
        [key: string]: MetaValue | any;
      };
    };
  };
  workflow: Workflow;
}

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

const nodesInfo = getNodesInfo();

const getInputConfig = (props: { classType: string; name: string }) => {
  const nodeData = nodesInfo[props.classType]?.nodeData;
  return {
    ...({
      ...(nodeData?.input?.required ?? {}),
      ...(nodeData?.input?.optional ?? {}),
    }?.[props.name] ?? {}),
    output: nodeData?.output ?? [],
    output_name: nodeData?.output_name ?? [],
  };
};

// 根据节点路径信息猜测节点类型(模型,正向提示词,方向提示词)
export function getNodeTypeByPath({ input }: { input: InputResultItem }) {
  if (
    input.name === "width" &&
    input.inputInfo?.output?.some((out: string) => out === "LATENT")
  ) {
    return {
      ...input,
      isTop: true,
    };
  }
  if (
    input.name === "cfg" &&
    input.inputInfo?.output?.some((out: string) => out === "LATENT")
  ) {
    return {
      ...input,
      isTop: true,
    };
  }

  if (
    input.name === "steps" &&
    input.inputInfo?.output?.some((out: string) => out === "LATENT")
  ) {
    return {
      ...input,
      isTop: true,
    };
  }
  if (
    input.name === "sampler_name" &&
    input.inputInfo?.output?.some((out: string) => out === "LATENT")
  ) {
    return {
      ...input,
      isTop: true,
    };
  }

  if (
    input.name === "height" &&
    input.inputInfo?.output?.some((out: string) => out === "LATENT")
  ) {
    return {
      ...input,
      isTop: true,
    };
  }

  if (
    input.path.some((v) => v.name === "model") &&
    input.inputInfo?.output?.some((out: string) => out === "MODEL")
  ) {
    return {
      ...input,
      isTop: true,
    };
  }

  if (
    input.path.some((v) => v.name === "positive") &&
    input.inputInfo?.output?.some((out: string) =>
      ["CONDITIONING", "STRING"].includes(out),
    ) &&
    input.inputInfo?.["0"] === "STRING"
  ) {
    return {
      ...input,
      formLabel: `positive-${input.name}`,
      isTop: true,
    };
  }
  if (
    input.path.some((v) => v.name === "negative") &&
    input.inputInfo?.output?.some((out: string) =>
      ["CONDITIONING", "STRING"].includes(out),
    ) &&
    input.inputInfo?.["0"] === "STRING"
  ) {
    return {
      ...input,
      formLabel: `negative-${input.name}`,
      isTop: true,
    };
  }
  return {
    ...input,
  };
}

function fineRoot(prompt: Meta["prompt"]) {
  const keyList = Object.keys(prompt);
  const allInputs = keyList.reduce<string[]>((previousValue, currentValue) => {
    const inputs = prompt[currentValue].inputs;
    const allArrValue = Object.keys(inputs).reduce<string[]>(
      (previousValue1, currentValue1) => {
        if (Array.isArray(inputs[currentValue1])) {
          return [...previousValue1, inputs[currentValue1]?.[0]];
        }
        return [...previousValue1];
      },
      [],
    );
    return [...previousValue, ...allArrValue];
  }, []);
  return keyList.filter((item) => {
    return !allInputs.includes(item);
  });
}

function getInputListByLinkId({
  oriMeta,
  linkId,
  parentItem,
}: {
  oriMeta: Meta;
  linkId: string;
  parentItem?: InputResultItem[];
}): InputResultItem[] {
  const prompt = oriMeta.prompt;
  if (!prompt[linkId]) {
    return [];
  }
  const class_type = prompt[linkId].class_type;
  const currentInputKeyList = Object.keys(prompt[linkId].inputs);
  const inputList = currentInputKeyList.map(
    (input) =>
      ({
        name: input,
        class_type: class_type,
        linkId: linkId,
        value: prompt[linkId]?.inputs?.[input],
        path: parentItem ?? [],
        inputInfo: getInputConfig({ classType: class_type, name: input }),
      }) as InputResultItem,
  );

  // 遍历节点所有input
  const childrenInputList = inputList.reduce<InputResultItem[]>(
    (previousValue, currentValue) => {
      // 如果节点为array,则数据为上一节点传入的数据,递归查询上一节点的信息,同时保存当前节点路径,便于后续查找节点的父子关系
      if (Array.isArray(currentValue.value)) {
        const curList = getInputListByLinkId({
          oriMeta,
          linkId: currentValue?.value?.[0] ?? "",
          parentItem: [...(parentItem ?? []), currentValue],
        });
        return [
          ...previousValue,
          // 如果之前已经添加过该节点,则跳过,(有的节点数据会提供给多个node)
          ...curList.filter(
            (cur) =>
              !previousValue.some(
                (value) =>
                  value.linkId === cur.linkId && value.name === cur.name,
              ),
          ),
        ];
      }
      return previousValue;
    },
    [],
  );

  // 最终输出的是当前节点的信息, 加上递归的节点数据
  return [
    ...inputList.filter((v) => !Array.isArray(v.value)),
    ...childrenInputList,
  ];
}

// 递归遍历所有子节点
export function calcMeta(oriMeta: Meta): InputResultItem[] {
  // const last_link_id = oriMeta.workflow.last_node_id;
  const rootId = fineRoot(oriMeta.prompt);

  if (rootId.length) {
    return getInputListByLinkId({
      oriMeta,
      linkId: `${rootId[0]}`,
    });
  }
  return getInputListByLinkId({
    oriMeta,
    linkId: `${rootId}`,
  });
}
