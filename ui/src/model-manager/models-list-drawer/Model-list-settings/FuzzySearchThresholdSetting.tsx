import {
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { userSettingsTable } from "../../../db-tables/WorkspaceDB";
import { useModelListSettings } from "./useModelListSettings";

export default function FuzzySearchThresholdSetting() {
  const [threshold, setThreshold] = useModelListSettings("threshold", 0.6);
  const [sliderVal, setSliderVal] = useState(threshold * 100);

  useEffect(() => {
    userSettingsTable?.getSetting("threshold").then((res) => {
      res !== undefined && setSliderVal(res * 100);
    });
  }, []);

  return (
    <Flex gap={4} direction="column">
      <Text whiteSpace="nowrap">Search threshold {sliderVal / 100}</Text>
      <Flex gap={4}>
        <Text whiteSpace="nowrap">Exact Match</Text>
        <Slider
          aria-label="slider-threshold"
          value={sliderVal}
          onChange={(e) => setSliderVal(e)}
          onChangeEnd={(e) => setThreshold(e / 100)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text whiteSpace="nowrap">Match Everything</Text>
      </Flex>
    </Flex>
  );
}
