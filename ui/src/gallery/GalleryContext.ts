import { type Dispatch, type SetStateAction, createContext } from "react";
import type { Media } from "../types/dbTypes.ts";

interface GalleryContextProps {
  showAllImages: boolean;
  curMedia: Media | null;
  setCurMedia: (media: Media | null) => void;
  setMediaList: Dispatch<SetStateAction<Media[]>>;
  setShowAllImages: (showAllImages: boolean) => void;
}

export const GalleryContext = createContext<GalleryContextProps>({
  showAllImages: false,
  curMedia: null,
  setCurMedia(): void {},
  setMediaList(): void {},
  setShowAllImages(): void {},
});
