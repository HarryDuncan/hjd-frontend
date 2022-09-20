import dynamic from "next/dynamic";

export const DynamicVisualizer = dynamic(
  () => import("components/music-visualizer/Visualizer"),
  {
    ssr: false,
  }
);
