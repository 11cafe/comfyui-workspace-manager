import { useContext, useEffect, useState } from "react";
import GalleryMediaItem from "./GalleryMediaItem";
import { HStack } from "@chakra-ui/react";
import type { Media } from "../../types/dbTypes";
import { mediaTable } from "../../db-tables/WorkspaceDB";
import { GalleryContext } from "../GalleryContext";

export default function GalleryGridView({
  searchQuery,
}: {
  searchQuery: string;
}) {
  const [medias, setMedias] = useState<Media[]>([]);
  const { setCurMedia, setShowAllImages, setMediaList } =
    useContext(GalleryContext);
  useEffect(() => {
    if (searchQuery === "") {
      mediaTable?.listAll().then((data) => {
        setMedias(data.slice(0, 50) ?? []);
      });
    } else {
      mediaTable
        ?.filter((v) => v.workflowJSON?.includes(searchQuery) ?? false)
        .then((data) => {
          setMedias(data);
        });
    }
  }, [searchQuery]);

  const onClickMedia = (media: Media) => {
    setMediaList([media].concat(medias.filter((v) => v.id !== media.id)));
    setCurMedia(media);
    setShowAllImages(false);
  };
  return (
    <HStack wrap={"wrap"}>
      {medias.map((media) => {
        return (
          <GalleryMediaItem
            key={media.id}
            selectedID={[]}
            media={media}
            isSelecting={false}
            onClickMedia={onClickMedia}
          />
        );
      })}
    </HStack>
  );
}
