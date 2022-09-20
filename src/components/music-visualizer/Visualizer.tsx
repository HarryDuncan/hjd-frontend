import { useMixesData } from "hooks/mixes/useMixesData";
import { MixItem } from "models/music/types";
import { AudioController } from "./audio-controller/AudioController";
import { VisualizerContainer } from "./MusicVisualizer.styles";
import { useAudioContext } from "./useAudioContext";

interface VisualizerProps {
  mix: MixItem;
}

const Visualizer = ({ mix }: VisualizerProps) => {
  const { currentIndex, mixes, audioContext } = useVisualizerData(mix);
  const onIndexUpdate = (step: number) => {
    console.log(step);
  };
  return (
    <VisualizerContainer>
      <AudioController
        audioContext={audioContext}
        selectedAudioUrl={mixes[currentIndex].audioUrl}
        onChangeSelectedAudio={onIndexUpdate}
      />
    </VisualizerContainer>
  );
};

function useVisualizerData(selectedMix: MixItem) {
  const { mixes } = useMixesData();
  const currentIndex = mixes.findIndex(
    (mixItem: MixItem) => mixItem.slug === selectedMix.slug
  );
  const audioContext = useAudioContext();
  return { currentIndex, mixes, audioContext };
}
export default Visualizer;
