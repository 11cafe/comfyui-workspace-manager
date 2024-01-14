import { Box, WrapItem, Image, Grid, Text } from "@chakra-ui/react";

interface Props {
  list: string[];
}

const url =
  "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/27fd7433-cb0a-4a87-88c1-21ccb2b1a842/width=450/00060-881622046.jpeg";
export function ModelsList({ list }: Props) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={1} marginTop={2}>
      {list.map((v) => {
        return (
          <WrapItem>
            <Box key={v} position="relative" borderRadius={4}>
              <Image src={url} boxSize="100%" objectFit="cover" borderRadius={4}/>
              <Text
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="rgba(0, 0, 0, 0.5)"
                color="white"
                textAlign="center"
                p="0"
                fontSize={12}
              >
                {v}
              </Text>
            </Box>
          </WrapItem>
        );
      })}
    </Grid>
  );
}
