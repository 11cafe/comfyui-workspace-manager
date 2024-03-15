import { MetaData } from "../../utils.ts";
import { Flex } from "@chakra-ui/react";
import { Media } from "../../../types/dbTypes.ts";
import TopForm from "../TopForm/TopForm.tsx";
import AllPromptForm from "../AllPromptForm/AllPromptForm.tsx";
import { useEffect, useState } from "react";
import { FormItem } from "../FormItem/types.ts";
import { calcMeta, type InputResultItem } from "./utils.ts";

export type TopFieldType = {
  promptKey: string | number;
  class_type?: string;
  name: string;
};

export const isInTopField = (
  topFields: TopFieldType[],
  item: Pick<FormItem, "name" | "promptKey" | "classType">,
) => {
  return topFields?.some(
    (top) =>
      top.promptKey === item?.promptKey &&
      top.name === item?.name &&
      top.class_type === item.classType,
  );
};

export default function MetaBox({
  metaData: oriMetaData,
  showNodeName,
}: {
  metaData: MetaData;
  media: Media;
  showNodeName: boolean;
}) {
  const _metaData = JSON.parse(JSON.stringify(oriMetaData));
  const [calcInputList, setCalcInputList] = useState<InputResultItem[]>([]);

  useEffect(() => {
    const calcInput = calcMeta(_metaData);
    setCalcInputList(calcInput);
    setTopFields(
      calcInput
        ?.filter((input: InputResultItem) => input.isTop)
        ?.map((input: InputResultItem) => ({
          name: input.name,
          promptKey: input.linkId,
          class_type: input.class_type,
        })),
    );
  }, []);

  const [topFields, setTopFields] = useState<TopFieldType[]>([]);
  const [metaData, setMetaData] = useState<MetaData>(_metaData);
  const updateMetaData = ({
    promptKey,
    name,
    value,
  }: {
    promptKey: string | number;
    name: string;
    value: any;
  }) => {
    setMetaData((pre) => ({
      ...(pre ?? {}),
      prompt: {
        ...(pre?.prompt ?? {}),
        [promptKey]: {
          ...(pre?.prompt?.[promptKey] ?? {}),
          inputs: {
            ...(pre.prompt?.[promptKey]?.inputs ?? {}),
            [name]: value,
          },
        },
      },
    }));
  };

  const updateTopField = (field: TopFieldType) => {
    if (
      isInTopField(topFields, {
        name: field.name,
        promptKey: field?.promptKey,
        classType: field?.class_type ?? "",
      })
    ) {
      setTopFields((pre) =>
        pre.filter(
          (v) => v.name !== field.name || v.promptKey !== field.promptKey,
        ),
      );
    } else {
      setTopFields((pre) => [...pre, field]);
    }
  };

  return (
    <Flex direction={"column"} align={"stretch"}>
      <TopForm
        showNodeName={showNodeName}
        topFields={topFields}
        metaData={metaData}
        updateMetaData={updateMetaData}
        updateTopField={updateTopField}
        calcInputList={calcInputList}
      />
      <AllPromptForm
        showNodeName={showNodeName}
        topFields={topFields}
        metaData={metaData}
        updateMetaData={updateMetaData}
        updateTopField={updateTopField}
        calcInputList={calcInputList}
      />
    </Flex>
  );
}

const t = {
  "3": {
    inputs: {
      seed: 561349015796654,
      steps: 25,
      cfg: 2.5,
      sampler_name: "euler_ancestral",
      scheduler: "karras",
      denoise: 1,
      model: ["14", 0],
      positive: ["12", 0],
      negative: ["12", 1],
      latent_image: ["12", 2],
    },
    class_type: "KSampler",
  },
  "8": {
    inputs: {
      samples: ["3", 0],
      vae: ["15", 2],
    },
    class_type: "VAEDecode",
  },
  "12": {
    inputs: {
      width: 576,
      height: 1024,
      video_frames: 25,
      motion_bucket_id: 120,
      fps: 8,
      augmentation_level: 0.07,
      clip_vision: ["15", 1],
      init_image: ["57", 0],
      vae: ["15", 2],
    },
    class_type: "SVD_img2vid_Conditioning",
  },
  "14": {
    inputs: {
      min_cfg: 1,
      model: ["15", 0],
    },
    class_type: "VideoLinearCFGGuidance",
  },
  "15": {
    inputs: {
      ckpt_name: "stableVideoDiffusion_img2vid.safetensors",
    },
    class_type: "ImageOnlyCheckpointLoader",
  },
  "24": {
    inputs: {
      frame_rate: 10,
      loop_count: 0,
      filename_prefix: "comfyUI",
      format: "video/h265-mp4",
      pix_fmt: "yuv420p10le",
      crf: 20,
      save_metadata: true,
      pingpong: false,
      save_output: true,
      images: ["8", 0],
    },
    class_type: "VHS_VideoCombine",
  },
  "57": {
    inputs: {
      image:
        "00352-596241437-c4tt4stic,(own hands together_1.3),a cartoon cat wearing a jacket,(pray_1.1),_lora_c4tt4stic_0.85_,pitiful,i beg you,cupping han - 副本 (1).png",
      upload: "image",
    },
    class_type: "LoadImage",
    is_changed: [
      "22bc50d33b258d1d8446a4f1fce10d568ee9fc24952428bf0f66ccab583f7fed",
    ],
  },
};

function fineRoot(t) {
  const keyList = Object.keys(t);
  const allInputs = keyList.reduce<string[]>((previousValue, currentValue) => {
    const inputs = t[currentValue].inputs;
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

console.log(fineRoot(t));
