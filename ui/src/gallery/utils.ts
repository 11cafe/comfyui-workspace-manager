/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {getPngMetadata, getVideoMetadata, getWebpMetadata, isVideoName} from '../utils.tsx'

type MetaData<T = any> = {prompt: T, workflow: T}

export function getPngMetadataFromUrl(url: string) {
  const extension = url.split(".").pop();
  return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(async blob => {
        const fileName = url.split("/").pop() ?? '';
        const fileObj = new File([blob], fileName);
        if (isVideoName(url)) {
          return getVideoMetadata(fileObj) as Promise<MetaData>
        }
        if (extension === 'webp') {
          return getWebpMetadata(fileObj) as Promise<MetaData>
        }
        const metaData = await getPngMetadata(fileObj) as MetaData<string>;
        const prompt = JSON.parse(metaData?.prompt)
        const workflow = JSON.parse(metaData?.workflow)
        return {
          prompt,
          workflow,
        } as MetaData
      });
}

const ifString = (t: any) => {
  if (typeof t === 'string') {
    return t
  }
}

export interface CalcPngMetadata {
  ckptName: string;
  negative: string;
  positive: string;
  [key: string]: string;
}
export function calcPngMetadata(metaData: MetaData): CalcPngMetadata {
  const {prompt, workflow} = metaData
  // KSampler
  const kSampler = prompt?.[Object.keys(prompt)?.find((v: string) => prompt[v].class_type === 'KSampler') ?? '']
  const ckptName = ifString(prompt?.[kSampler?.inputs?.['model']?.[0]]?.inputs?.['ckpt_name']) ?? ifString(prompt?.[Object.keys(prompt)?.find((v: string) => prompt[v]?.inputs?.ckpt_name) ?? '']?.inputs?.ckpt_name) ?? ''
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
  const latent_image = prompt?.[kSampler?.inputs?.['latent_image']?.[0]]?.['inputs'];
  const width = latent_image?.['width']
  const height = latent_image?.['height']

  return {
    ckptName,
    positive,
    negative,
    ...commonFields,
    width,
    height,
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
