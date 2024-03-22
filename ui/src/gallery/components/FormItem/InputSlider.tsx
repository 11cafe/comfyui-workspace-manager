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
import { PromptNodeInputItem } from "../MetaBox/utils.ts";

export const InputSlider: FC<
  {
    inputItem: PromptNodeInputItem;
  } & {
    [key in string]: any;
  }
> = (props) => {
  const inputItem = props.inputItem;
  return (
    <Flex gap={1} direction={"column"}>
      <Flex gap={2}>
        <Flex gap={1} alignItems={"center"} flexBasis={"200px"}>
          {inputItem.label ?? inputItem.inputName}
        </Flex>
        <NumberInput
          width={"100%"}
          step={props?.step}
          value={inputItem.inputValue}
          min={props?.min}
          max={props?.max}
          onChange={(val) => {}}
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
          maxWidth={"400px"}
          step={props?.step}
          value={Number(inputItem.inputValue)}
          min={props?.min ?? 0}
          max={props?.max ?? 100}
          onChange={(val) => {}}
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
