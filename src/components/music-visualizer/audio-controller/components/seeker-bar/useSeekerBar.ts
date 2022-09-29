import { useCallback, useState } from "react";

export const useSeekerControls = (audioRef: any, isTrackPlaying: boolean) => {
  const [seekerVal, updateSeekerVal] = useState(0);
  const [audioDuration, setAudioDuration] = useState<string>("");
  const [currentAudioTime, updateCurrentAudioTime] = useState(0);

  const handleProgress = () => {
    if (audioRef.current && isTrackPlaying) {
      const updateSeek = setInterval(() => {
        if (audioRef.current) {
          const currentAudioTime =
            (audioRef.current.currentTime / audioRef.current.duration) * 100;
          updateCurrentAudioTime(audioRef.current.currentTime);
          updateSeekerVal(currentAudioTime);
        }
      }, 500);
    } else {
      clearInterval("updateSeek");
    }
  };
  const handleSeekSlider = useCallback((value: number) => {
    const newAudioTime = audioRef.current.duration * (value / 100);
    audioRef.current.currentTime = newAudioTime;
    updateCurrentAudioTime(newAudioTime);
    updateSeekerVal(value);
  }, []);

  const handleSeek = (value: number) => {
    updateSeekerVal(value);
  };

  const loadDuration = (audio: AudioContext) => {
    //@ts-ignore
    setAudioDuration(formatSeconds(audio.duration));
  };

  return {
    loadDuration,
    handleSeek,
    handleSeekSlider,
    handleProgress,
    seekerVal,
    audioDuration,
    currentAudioTime,
  };
};

export const formatSeconds = (time: number): string => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  if (seconds < 10) {
    return `${minutes}:0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};
