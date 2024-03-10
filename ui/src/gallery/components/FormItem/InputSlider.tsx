import { FC } from "react";
import {
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { FormItem } from "./types.ts";

export const InputSlider: FC<FormItem> = (props) => {
  return (
    <Flex gap={1} direction={"column"}>
      <Flex gap={2}>
        <Flex gap={1} alignItems={"center"} flexBasis={"200px"}>
          {props.label ?? props.name}
        </Flex>
        <NumberInput
          width={"100%"}
          step={props?.step}
          value={props.value}
          min={props?.min}
          max={props?.max}
          onChange={(val) =>
            props?.updateMetaData?.({
              promptKey: props.promptKey,
              name: props.name,
              value: val,
            })
          }
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
      <Flex>
        <Slider
          step={props?.step}
          value={Number(props.value)}
          min={props?.min ?? 0}
          max={props?.max ?? 100}
          onChange={(val) =>
            props?.updateMetaData?.({
              promptKey: props.promptKey,
              name: props.name,
              value: val,
            })
          }
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Flex>
    </Flex>
  );
};
