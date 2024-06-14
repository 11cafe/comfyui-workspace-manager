import { HStack, Heading, Image, Spinner, Stack } from "@chakra-ui/react";
import { DepsResult } from "./handleDownloadSpaceJson";

export default function ResourceDepsForm({
  deps,
  uploadingImage,
}: {
  deps: DepsResult | null;
  setDeps: (deps: DepsResult) => void;
  uploadingImage: boolean;
}) {
  const imageDepsArr = Object.values(deps?.images ?? {});
  if (!deps) {
    return <Spinner size="md" color="teal.400" />;
  }

  return (
    <Stack gap={5}>
      {imageDepsArr.length > 0 && (
        <Stack>
          <HStack>
            <Heading size={"sm"}>Images ({imageDepsArr.length})</Heading>
            {/* <Tag colorScheme="yellow">Will be uploaded as url</Tag> */}
            <p style={{ color: "GrayText" }}>Will be uploaded as url</p>
          </HStack>
          {uploadingImage && (
            <span>
              <Spinner size="md" color="teal.400" /> Uploading
            </span>
          )}
          {imageDepsArr.map((image) => (
            <Stack key={image.filename}>
              <p>{image.filename}</p>
              <Image
                width={250}
                src={`/workspace/view_media?filename=${image.filename}&isPreview=true&isInput=true`}
              />
            </Stack>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
