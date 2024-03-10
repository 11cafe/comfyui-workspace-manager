import { ifString, MetaData } from "../../../utils.ts";

export function getDataByKSampler(prompt: any, kSampler: any) {
  const ckptName =
    ifString(
      prompt?.[kSampler?.inputs?.["model"]?.[0]]?.inputs?.["ckpt_name"],
    ) ??
    ifString(
      prompt?.[
        Object.keys(prompt)?.find(
          (v: string) => prompt[v]?.inputs?.ckpt_name,
        ) ?? ""
      ]?.inputs?.ckpt_name,
    ) ??
    "";
  const positive = ifString(
    prompt?.[kSampler?.inputs?.["positive"]?.[0]]?.["inputs"]?.["text"],
  );
  const negative = ifString(
    prompt?.[kSampler?.inputs?.["negative"]?.[0]]?.["inputs"]?.["text"],
  );
  const commonFields = [
    "seed",
    "sampler_name",
    "scheduler",
    "steps",
    "cfg",
  ].reduce((previousValue, currentValue) => {
    if (kSampler?.inputs?.[currentValue]) {
      return {
        ...previousValue,
        [currentValue]: kSampler?.inputs?.[currentValue],
      };
    }
    return previousValue;
  }, {});
  const latent_image =
    prompt?.[kSampler?.inputs?.["latent_image"]?.[0]]?.["inputs"];
  const width = latent_image?.["width"];
  const height = latent_image?.["height"];
  return {
    ckptName,
    positive,
    negative,
    ...commonFields,
    width,
    height,
  };
}

export const calcOneKSampler: (metaData: MetaData) => {
  [key: string]: any;
} = (metaData) => {
  const { prompt, workflow } = metaData;
  // KSampler
  const kSampler =
    prompt?.[
      Object.keys(prompt)?.find(
        (v: string) => prompt[v].class_type === "KSampler",
      ) ?? ""
    ];
  return getDataByKSampler(prompt, kSampler);
};
