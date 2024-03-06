import { MetaData } from "../../utils.ts";
import { VStack } from "@chakra-ui/react";
import { Media } from "../../../types/dbTypes.ts";
import { FormItem } from "../FormItem/types.ts";
import TopForm from "../TopForm/TopForm.tsx";
import AllPromptForm from "../AllPromptForm/AllPromptForm.tsx";

export type FormConfigType = {
  topField: {
    promptKey: string | number;
    class_type?: string;
    name: string;
  }[];
  formItem: {
    [key in string]: {
      [key in string]: Partial<FormItem>;
    };
  };
};
const formConfig: FormConfigType = {
  topField: [
    {
      promptKey: "4",
      name: "ckpt_name",
    },
    {
      promptKey: "6",
      name: "text",
    },
    {
      promptKey: "7",
      name: "text",
    },
    {
      promptKey: "5",
      name: "width",
    },
    {
      promptKey: "5",
      name: "height",
    },
    {
      promptKey: "3",
      name: "steps",
    },
    {
      promptKey: "3",
      name: "sampler_name",
    },
    {
      promptKey: "3",
      name: "cfg",
    },
  ],
  formItem: {
    3: {
      steps: {
        type: "InputSlider",
      },
      cfg: {
        type: "InputSlider",
      },
      denoise: {
        type: "InputSlider",
      },
      sampler_name: {
        type: "Select",
      },
    },
    4: {
      ckpt_name: {
        type: "Select",
      },
    },
    5: {
      width: { type: "InputSlider" },
      height: { type: "InputSlider" },
    },
    6: {
      text: {
        type: "Textarea",
        label: "正向提示词",
      },
    },
    7: {
      text: {
        type: "Textarea",
        label: "反向提示词",
      },
    },
  },
};

export default function MetaBox({
  metaData,
}: {
  metaData: MetaData;
  media: Media;
}) {
  return (
    <VStack spacing={2} align={"stretch"}>
      <TopForm metaData={metaData} formConfig={formConfig} />
      <AllPromptForm metaData={metaData} formConfig={formConfig} />
    </VStack>
  );
}
