import {clipboard, ifString, MetaBoxTypeCom, MetaData} from '../../utils.ts'
import {Box, Button, Flex, IconButton, Input, Textarea, VStack} from '@chakra-ui/react'
import {IconCopy} from '@tabler/icons-react'

export const isMultiKSampler = (metaData: MetaData) => {
  return Object.keys(metaData?.prompt)?.filter?.(v => metaData?.prompt?.[v]?.['class_type'] === 'KSampler')?.length > 1
}
export const calcMultiKSampler: (metaData: MetaData) => {[key: string]: string} = (metaData: MetaData) => {
  const {prompt} = metaData
  const promptKeys = Object.keys(prompt)
  const kSamplerKeys = promptKeys?.filter(v => prompt?.[v]?.['class_type'] === 'KSampler')
  return kSamplerKeys.reduce((previousValue, currentValue, currentIndex) => {
    const kSampler = prompt?.[currentValue]
    const ckptName = ifString(prompt?.[kSampler?.inputs?.['model']?.[0]]?.inputs?.['ckpt_name']) ?? ifString(prompt?.[Object.keys(prompt)?.find((v: string) => prompt[v]?.inputs?.ckpt_name) ?? '']?.inputs?.ckpt_name) ?? ''
    const positive = ifString(prompt?.[kSampler?.inputs?.['positive']?.[0]]?.['inputs']?.['text'])
    const negative = ifString(prompt?.[kSampler?.inputs?.['negative']?.[0]]?.['inputs']?.['text']);
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
    const metaObj = {
      ckptName,
      positive,
      negative,
      ...commonFields,
      width,
      height,
    }
    const resultObj = Object.keys(metaObj).reduce((previousValue1, currentValue1) => {
      return {
        ...previousValue1,
        [`${currentValue1}_${currentIndex + 1}`]: metaObj?.[currentValue1 as keyof typeof metaObj],
      }
    }, {})
    return {
      ...previousValue,
      ...resultObj,
    }
  }, {})
}

export const MultiKSampler: MetaBoxTypeCom = ({metaData}) => {
  const mediaMetaData = calcMultiKSampler(metaData)
  
  return <VStack spacing={2} align={'stretch'} >
    <Box>
      <Button onClick={() => clipboard(JSON.stringify(mediaMetaData))}>Copy all field</Button>
    </Box>
    {Object.keys(mediaMetaData ?? {})?.filter(v => !!mediaMetaData?.[v]).map(key => <Flex key={`meta${key}`} gap={2}>
      <Flex gap={1} alignItems={'center'} flexBasis={'200px'}>
        {key}
        <IconButton size={"xm"} onClick={() => clipboard(mediaMetaData?.[key] ?? '')} aria-label={'copy text'} icon={<IconCopy />} variant={'ghost'} />
      </Flex>
      {mediaMetaData?.[key]?.length && mediaMetaData?.[key]?.length > 300 ? <Textarea readOnly={true} value={mediaMetaData?.[key]}/> : <Input readOnly={true} value={mediaMetaData?.[key]}/>}
      {/*<Text overflowY={'auto'} maxH={200} flex={1}>{mediaMetaData?.[key]}</Text>*/}
    </Flex>)}
  </VStack>
}