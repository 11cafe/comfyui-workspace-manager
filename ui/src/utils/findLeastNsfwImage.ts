interface ImageLike {
  nsfw: "None" | "Soft" | "Mature" | "X";
}
export function findLeastNsfwImage<T extends ImageLike>(
  images: T[],
): T | undefined {
  if (images.length === 0) {
    return;
  }

  const nsfwLevels = {
    None: 0,
    Soft: 1,
    Mature: 2,
    X: 3,
  };

  images.sort((a, b) => nsfwLevels[a.nsfw] - nsfwLevels[b.nsfw]);

  return images[0];
}
