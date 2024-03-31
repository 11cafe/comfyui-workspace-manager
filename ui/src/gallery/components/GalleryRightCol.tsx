import { MetaData } from "../utils.ts";
import { Media } from "../../types/dbTypes.ts";
import { Flex } from "@chakra-ui/react";
import MetadataForm from "./MetaBox/MetadataForm.tsx";
import { GalleryRightColHeaderButtons } from "./GalleryRightColHeaderButtons.tsx";

export type MediaWithMetaData = Media & {
  metaData?: MetaData;
};
export const GalleryRightCol = ({ media }: { media?: MediaWithMetaData }) => {
  return (
    <Flex overflowY={"auto"} mb={4} direction={"column"} gap={2} flex={1}>
      <GalleryRightColHeaderButtons media={media} />
      <MetadataForm media={media ?? null} />
    </Flex>
  );
};
