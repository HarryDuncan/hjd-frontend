import { useRef, useState } from "react";
import {
  AudioControllerContainer,
  ControlsContainer,
} from "./AudioController.styles";
import { ControlButton } from "./components/ControlButton";
import { SeekBar } from "./components/seeker-bar/SeekerBar";
import { useSeekerControls } from "./components/seeker-bar/useSeekerBar";

interface AudioController {
  audioContext: AudioContext;
  selectedAudioUrl: string;
  onChangeSelectedAudio: (step: number) => void;
}

const ASSET_PATH = "/assets/";

export const AudioController = ({
  audioContext,
  selectedAudioUrl,
  onChangeSelectedAudio,
}: AudioController) => {
  const audioRef = useRef<AudioContext | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleRewind = () => {
    console.log("ss");
  };
  const CONTROL_BUTTONS: ControlButton[] = [
    {
      handleClick: handleRewind,
      iconProps: {
        iconName: "Rewind",
        iconSrc: `${ASSET_PATH}/rewind.png`,
        iconHoveredSrc: `${ASSET_PATH}/rewind-hovered.png`,
      },
    },
    {
      handleClick: handleRewind,
      iconProps: {
        iconName: "Play/Pause",
        iconSrc: `${ASSET_PATH}/play.png`,
        iconHoveredSrc: `${ASSET_PATH}/play-hovered.png`,
      },
    },
    {
      handleClick: handleRewind,
      iconProps: {
        iconName: "Forward",
        iconSrc: `${ASSET_PATH}/forward.png`,
        iconHoveredSrc: `${ASSET_PATH}/forward-hovered.png`,
      },
    },
  ];

  const {
    loadDuration,
    handleSeek,
    handleSeekSlider,
    handleProgress,
    seekerVal,
    audioDuration,
    currentAudioTime,
  } = useSeekerControls(audioRef, isPlaying);

  return (
    <AudioControllerContainer>
      <ControlsContainer>
        {CONTROL_BUTTONS.map(({ handleClick, iconProps }) => (
          <ControlButton handleClick={handleClick} iconProps={iconProps} />
        ))}
        <SeekBar
          handleSeek={handleSeek}
          handleSeekSlider={handleSeekSlider}
          seekerVal={seekerVal}
          duration={audioDuration}
          currentAudioTime={currentAudioTime}
          width={100}
        />
      </ControlsContainer>
    </AudioControllerContainer>
  );
};
