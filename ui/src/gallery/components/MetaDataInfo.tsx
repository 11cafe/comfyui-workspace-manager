import {Media} from '../../types/dbTypes.ts'
import {FC, useEffect, useState} from 'react'
import {
  Box,
  Flex,
  Grid,
  IconButton,
  Input,
  Link,
  SimpleGrid,
  StackDivider,
  Text,
  Textarea, Tooltip,
  VStack,
} from '@chakra-ui/react'
import Carousel from '../../components/Carousel/Carousel.tsx'
import {CalcPngMetadata, calcPngMetadata, clipboard, getPngMetadataFromUrl} from '../utils.ts'
import {IconCopy, IconDownload} from '@tabler/icons-react'
import {formatTimestamp} from '../../utils.tsx'

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
    <Flex direction={'column'} gap={2} flex={1}>
      <SimpleGrid columns={2} spacing={2}>
        <Flex alignItems={'center'} gap={1}>
          <Text>File Name:</Text>
          <Text>{mediaAct?.localPath}</Text>
          <Tooltip label="Donwload image from gallery">
            <Link href={`/workspace/view_media?filename=${mediaAct?.localPath}`} download={mediaAct?.localPath} >
              <IconButton
                  size={"sm"}
                  variant={"ghost"}
                  icon={<IconDownload size={19} />}
                  aria-label="donwload image from gallery"
              />
            </Link>
          </Tooltip>
        </Flex>
        <Flex gap={1}>
          <Text>Create Time:</Text>
          <Text>{formatTimestamp(mediaAct?.createTime ?? 0, true)}</Text>
        </Flex>
      </SimpleGrid>
      <VStack spacing={2} align={'stretch'} >
        {Object.keys(mediaMetaData ?? {}).map(key => <Flex key={`meta${key}`} gap={2}>
          <Flex gap={1} alignItems={'center'} flexBasis={'200px'}>
            {key}
            <IconButton size={"xm"} onClick={() => clipboard(mediaMetaData?.[key] ?? '')} aria-label={'copy text'} icon={<IconCopy />} variant={'ghost'} />
          </Flex>
          {mediaMetaData?.[key]?.length && mediaMetaData?.[key]?.length > 300 ? <Textarea readOnly={true} value={mediaMetaData?.[key]}/> : <Input readOnly={true} value={mediaMetaData?.[key]}/>}
          {/*<Text overflowY={'auto'} maxH={200} flex={1}>{mediaMetaData?.[key]}</Text>*/}
        </Flex>)}
      </VStack>
      
    </Flex>
  </Flex>
}