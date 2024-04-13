import { SearchHit } from "../model-manager/civitSearchTypes";
import { isCivitModel } from "../model-manager/install-models/util/modelTypes";
import { CivitiModel } from "../model-manager/types";

interface ImageLike {
  nsfw?: "None" | "Soft" | "Mature" | "X";
  nsfwLevel?: number;
}
export function findSfwImage<T extends ImageLike>(
  images?: T[],
  fallback?: boolean,
): T | undefined {
  if (!images || images.length === 0) {
    return;
  }
  let sfw = images.find(
    (image) => image.nsfw === "None" || image.nsfwLevel === 1,
  );

  if (fallback) {
    sfw = sfw ?? images[0];
  }

  return sfw;
}

export function findSfwImageFromModel(
  model: CivitiModel | SearchHit,
  IMAGE_SIZE = 280,
  fallback?: boolean,
): string | undefined {
  if (!model) {
    return;
  }
  if (model.images) {
    const imageurl = `https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${findSfwImage(model.images, fallback)?.url}/width=${IMAGE_SIZE}/`;
    return imageurl;
  } else if (isCivitModel(model)) {
    return findSfwImage(model.modelVersions?.at(0)?.images, fallback)?.url;
  }
  return undefined;
}
