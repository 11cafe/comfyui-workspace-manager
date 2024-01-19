import { MetaData } from "../../../utils.ts";
import { getDataByKSampler } from "../OneKSampler/oneKSamplerTool.ts";

export const isMultiKSampler = (metaData: MetaData) => {
  return (
    Object.keys(metaData?.prompt)?.filter?.(
      (v) => metaData?.prompt?.[v]?.["class_type"] === "KSampler",
    )?.length > 1
  );
};
export const calcMultiKSampler: (metaData: MetaData) => {
  [key: string]: string;
} = (metaData: MetaData) => {
  const { prompt } = metaData;
  const promptKeys = Object.keys(prompt);
  const kSamplerKeys = promptKeys?.filter(
    (v) => prompt?.[v]?.["class_type"] === "KSampler",
  );
  return kSamplerKeys.reduce((previousValue, currentValue, currentIndex) => {
    const kSampler = prompt?.[currentValue];
    const metaObj = getDataByKSampler(prompt, kSampler);
    const resultObj = Object.keys(metaObj).reduce(
      (previousValue1, currentValue1) => {
        return {
          ...previousValue1,
          [`${currentValue1}_${currentIndex + 1}`]:
            metaObj?.[currentValue1 as keyof typeof metaObj],
        };
      },
      {},
    );
    return {
      ...previousValue,
      ...resultObj,
    };
  }, {});
};
