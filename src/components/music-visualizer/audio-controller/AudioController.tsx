import React, { useState, useEffect, useRef } from "react";
import IdleTimer from "react-idle-timer";
import { RendererNode } from "@hjd/visual-vault";
import { Volume, SeekBar, Play, Forward, Rewind, Name } from "./components";
import { secondsToClock } from "./functions";
import { IMix } from "data";
import { getWindowSize } from "utils";
import { useAudioControls } from "./hooks/useAudioControls";

import { useVolumeControls } from "./hooks/useVolumeControls";
import { useSeekerControls } from "./hooks/useSeekerControls";
import { useRenderNode } from "./hooks/useRendererNode";
import {
  AudioControllerContainer,
  ControlsContainer,
} from "./AudioController.styles";

interface AudioController {
  audioContext: AudioContext;
  selectedAudioUrl: string;
  onChangeSelectedAudio: (step: number) => void;
}

export const AudioController = ({
  audioContext,
  selectedAudioUrl,
  onChangeSelectedAudio,
}: AudioController) => {
  return (
    <AudioControllerContainer>
      <ControlsContainer></ControlsContainer>
    </AudioControllerContainer>
  );
};
