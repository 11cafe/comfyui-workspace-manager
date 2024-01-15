import {Media} from '../../types/dbTypes.ts'
import {FC, useEffect, useState} from 'react'
import {Box, Flex, IconButton, StackDivider, Text, VStack} from '@chakra-ui/react'
import Carousel from '../../components/Carousel/Carousel.tsx'
import {CalcPngMetadata, calcPngMetadata, clipboard, getPngMetadataFromUrl} from '../utils.ts'
import {IconCopy} from '@tabler/icons-react'

interface MetaDataInfoProps {
  media: Media
  mediaList: Media[]
}

export const MetaDataInfo: FC<MetaDataInfoProps> = ({mediaList, media}) => {
  const [mediaAct, setMediaAct] = useState<Media>()
  const [mediaMetaData, setMediaMetaData] = useState<CalcPngMetadata>()
  useEffect(() => {
    if (media) {
      setMediaAct(media)
    }
  }, [media])
  const getMetaData = async (curMedia: Media) => {
    const res = await getPngMetadataFromUrl(`/workspace/view_media?filename=${curMedia.localPath}`)
    try {
      const pngMetadata = calcPngMetadata(res)
      setMediaMetaData(pngMetadata)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    if (mediaAct) {
      getMetaData(mediaAct)
    }
  }, [mediaAct])

  return <Flex gap={3} h={'100%'}>
    <Flex flex={1}>
      <Carousel
          media={mediaList.map(v => ({
            id: v.id,
            imageUrl: `/workspace/view_media?filename=${v.localPath}`
          }))}
          currentNum={mediaList?.findIndex(p => p.id === mediaAct?.id)}
          setMediaAct={(newMedia) => setMediaAct(mediaList?.find(v => v.id === newMedia.id))}
        />
    </Flex>
    <Box flex={1}>
      {/*<Text>Meta Info</Text>*/}
      <VStack spacing={2} align={'stretch'} divider={<StackDivider />}>
        {Object.keys(mediaMetaData ?? {}).map(key => <Flex key={`meta${key}`} gap={2}>
          <Flex gap={1} alignItems={'flex-start'} flexBasis={'200px'}>
            {key}
            <IconButton size={"xm"} onClick={() => clipboard(mediaMetaData?.[key] ?? '')} aria-label={'copy text'} icon={<IconCopy />} variant={'ghost'} />
          </Flex>
          <Text overflowY={'auto'} maxH={200} flex={1}>{mediaMetaData?.[key]}</Text>
        </Flex>)}
      </VStack>
      
    </Box>
  </Flex>
}