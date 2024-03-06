import { FC } from "react";
import {
  Flex,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";

export const InputSlider: FC<FormItem> = (props) => {
  return (
    <Flex gap={1} direction={"column"}>
      <Flex gap={2}>
        <Flex gap={1} alignItems={"center"} flexBasis={"200px"}>
          {props.label ?? props.name}
        </Flex>
        <Input value={props.value} />
      </Flex>
      <Flex>
        <Slider aria-label="slider-ex-1" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Flex>
    </Flex>
  );
};
