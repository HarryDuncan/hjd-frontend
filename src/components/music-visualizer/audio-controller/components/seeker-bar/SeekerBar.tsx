import React from "react";
import { Slider, ISliderStyles } from "@fluentui/react";
import { CurrentTime, SeekBarWrapper, SeekContainer } from "./Seekbar.styles";

const SliderStyles: Partial<ISliderStyles> = {
  root: { margin: 0, width: "100%" },
  container: { margin: 0 },
  valueLabel: { display: "none" },
};

interface SeekBarProps {
  seekerVal: number;
  handleSeekSlider: any;
  handleSeek: any;
  width: number;
  currentAudioTime: number;
  duration: string;
}

export const SeekBar = ({
  seekerVal,
  handleSeekSlider,
  handleSeek,
  currentAudioTime,
  duration,
}: SeekBarProps) => {
  return (
    <SeekContainer>
      <SeekBarWrapper>
        <Slider
          max={100}
          value={seekerVal}
          onChange={handleSeekSlider}
          onChanged={handleSeek}
          styles={SliderStyles}
        />
      </SeekBarWrapper>
      <CurrentTime>
        {currentAudioTime}/{duration}
      </CurrentTime>
    </SeekContainer>
  );
};
