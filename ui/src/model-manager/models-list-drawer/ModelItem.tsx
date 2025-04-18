import { Box, Flex, Image, Spinner, Text, Tooltip } from "@chakra-ui/react";
import { ModelsListRespItem } from "../types";
import { useEffect, useState, useRef } from "react";
import { indexdb } from "../../db-tables/indexdb";
import { Model } from "../../types/dbTypes";
import type { DragEvent } from "react";
import { fetchCivitModelFromHashKey } from "../../utils/civitUtils";

interface Props {
  data: ModelsListRespItem;
}

const MODEL_TYPE_TO_NODE_MAPPING: Record<string, string> = {
  checkpoints: "CheckpointLoaderSimple",
  vae: "VAELoader",
  loras: "LoraLoader",
  controlnet: "ControlNetLoader",
  upscale_models: "UpscaleModelLoader",
};

// More comprehensive check for video URLs
const isVideoUrl = (url: string): boolean => {
  // Check common video extensions
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
  const lowercaseUrl = url.toLowerCase();
  
  // Check if URL ends with a video extension
  if (videoExtensions.some(ext => lowercaseUrl.endsWith(ext))) {
    return true;
  }
  
  // Check if URL contains video indicators in the path
  if (lowercaseUrl.includes('/video/') || 
      lowercaseUrl.includes('_video.') || 
      lowercaseUrl.includes('_preview.mp4')) {
    return true;
  }
  
  return false;
};

export function ModelItem({ data }: Props) {
  const [url, setUrl] = useState(
    "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/27fd7433-cb0a-4a87-88c1-21ccb2b1a842/width=450/00060-881622046.jpeg",
  );
  const [hashing, setHashing] = useState(!data.file_hash);
  const [model, setModel] = useState<Model>();
  const [mediaType, setMediaType] = useState<'image' | 'video' | 'loading'>('loading');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false); // Add hover state

  useEffect(() => {
    setHashing(!data.file_hash);
    setMediaType('loading');
    getThumbnail();
  }, [data.file_hash]);

  // Effect to handle video playback based on hover state
  useEffect(() => {
    if (videoRef.current && mediaType === 'video') {
      if (isHovered) {
        videoRef.current.play().catch(err => {
          console.error("Error playing video:", err);
        });
      } else {
        videoRef.current.pause();
        // Optionally reset to first frame
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, mediaType]);

  const getThumbnail = async () => {
    const model = await indexdb.models.get(
      data.model_name + "@" + data.model_type,
    );
    if (model != null) {
      setModel(model);
      if (model.imageUrl?.length) {
        setUrl(model.imageUrl);
        setMediaType(isVideoUrl(model.imageUrl) ? 'video' : 'image');
      }
    }
    if (!model?.imageUrl && data.file_hash != null) {
      try {
        const json = await fetchCivitModelFromHashKey(data.file_hash);
        const image_url = json.imageUrl;
        if (image_url) {
          setUrl(image_url);
          setMediaType(isVideoUrl(image_url) ? 'video' : 'image');
        }

        const newModel: Model = {
          id: data.model_name + "@" + data.model_type,
          fileHash: data.file_hash,
          fileFolder: data.model_type,
          fileName: data.model_name + data.model_extension,
          modelName: json.modelName ?? null,
          civitModelID: json.civitModelID,
          civitModelVersionID: json.civitModelVersionID,
          imageUrl: image_url ?? null,
        };
        // indexdb.models.put(newModel);
        setModel(newModel);
      } catch (e) {
        console.error("Error fetching model data:", e);
        setMediaType('image'); // Fallback to image on error
      }
    }
    if (data.preview) {
      setUrl(data.preview);
      setMediaType(isVideoUrl(data.preview) ? 'video' : 'image');
    }
  };

  // Additional check when the media loads
  const handleMediaLoad = () => {
    console.log("Media loaded:", url);
    setHashing(false);
  };

  // Handle media error - try to recover
  const handleMediaError = () => {
    console.error("Media failed to load:", url);
    // If we tried to load a video but it failed, try as an image instead
    if (mediaType === 'video') {
      console.log("Retrying as image");
      setMediaType('image');
    }
  };

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    const nodeType = MODEL_TYPE_TO_NODE_MAPPING[data.model_type];
    if (!nodeType) {
      return;
    }
    e.dataTransfer.setData("eventName", "WorkspaceManagerAddNode");
    e.dataTransfer.setData(
      "modelRelativePath",
      data.model_name + data.model_extension,
    );
    e.dataTransfer.setData("nodeType", nodeType);
  };

  const handleModelClick = () => {
    if (model?.civitModelID == null || model?.civitModelVersionID == null) {
      return;
    }
    window.open(
      `https://civitai.com/models/${model?.civitModelID}?modelVersionId=${model?.civitModelVersionID}`,
    );
  };

  const renderMedia = () => {
    if (hashing) {
      return (
        <Flex
          bg="rgba(0, 0, 0, 0.5)"
          height={178}
          justifyContent="center"
          alignItems="center"
        >
          <Spinner />
        </Flex>
      );
    }

    const commonProps = {
      cursor: model?.civitModelID != null ? "pointer" : "auto",
      onClick: handleModelClick,
      borderRadius: 4,
    };

    if (mediaType === 'video') {
      return (
        <Box 
          height="150px" 
          width="100%" 
          overflow="hidden"
          {...commonProps}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video 
            ref={videoRef}
            src={url}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px'
            }}
            // Remove autoPlay attribute
            muted
            loop
            playsInline
            draggable={false}
            onLoadedData={handleMediaLoad}
            onError={handleMediaError}
          />
        </Box>
      );
    } else {
      return (
        <Image
          src={url}
          draggable={false}
          boxSize="100%"
          height={150}
          objectFit="cover"
          onLoad={handleMediaLoad}
          onError={handleMediaError}
          {...commonProps}
        />
      );
    }
  };

  return (
    <Box>
      <Box
        position="relative"
        borderRadius={4}
        draggable
        onDragStart={handleDragStart}
      >
        {renderMedia()}
        <Text
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          color="white"
          fontSize={14}
        ></Text>
      </Box>
      <Tooltip
        label={
          <span>
            {data.model_name + data.model_extension}
            <br />
            {data.date.toLocaleDateString()}
          </span>
        }
      >
        <Text textAlign="center" p="1" fontSize={14} noOfLines={2}>
          {data.model_name + data.model_extension}
        </Text>
      </Tooltip>
    </Box>
  );
}