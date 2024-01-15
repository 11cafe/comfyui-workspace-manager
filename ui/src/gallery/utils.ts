import {getPngMetadata} from '../utils.tsx'

export function getPngMetadataFromUrl(url: string) {
  return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const fileName = url.split("/").pop() ?? '';
        const fileObj = new File([blob], fileName);
        return getPngMetadata(fileObj) as Promise<{prompt: string, workflow: string}>;
      });
}

export interface CalcPngMetadata {
  ckptName: string;
  negative: string;
  positive: string;
  [key: string]: string;
}
export function calcPngMetadata(metaData: {prompt: string, workflow: string}): CalcPngMetadata {
  const prompt = JSON.parse(metaData?.prompt)
  // const workflow = JSON.parse(metaData?.workflow)
  // console.log(workflow)
  // KSampler
  const kSampler = prompt?.[Object.keys(prompt)?.find((v: string) => prompt[v].class_type === 'KSampler') ?? '']
  const checkpoint = prompt?.[kSampler?.inputs?.['model']?.[0]]
  const ckptName = checkpoint?.inputs?.['ckpt_name']
  const positive = prompt?.[kSampler?.inputs?.['positive']?.[0]]?.['inputs']?.['text']
  const negative = prompt?.[kSampler?.inputs?.['negative']?.[0]]?.['inputs']?.['text'];
  const commonFields = ['seed', 'sampler_name', 'scheduler', 'steps', 'cfg'].reduce((previousValue, currentValue) => {
    if (kSampler?.inputs?.[currentValue]) {
      return {
        ...previousValue,
        [currentValue]: kSampler?.inputs?.[currentValue],
      }
    }
    return previousValue
  }, {})

  return {
    ckptName,
    positive,
    negative,
    ...commonFields,
  }
}

export function clipboard(text: string) {
  navigator.clipboard
      .writeText(text)
      .then(function () {
      })
      .catch(function (err) {
        console.error('Unable to copy to clipboard: ', err);
      });
}
