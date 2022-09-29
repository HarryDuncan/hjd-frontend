export type VisualiserAudioContext = AudioContext;

export const useAudioContext = () => {
  let context;
  let AudioContext: any = window.AudioContext || window.webkitAudioContext;
  if (AudioContext) {
    context = new AudioContext();
  }
  return context;
};
