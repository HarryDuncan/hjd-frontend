import dynamic from "next/dynamic";

export const DynamicInteractiveScene = dynamic(
  () => import("visuals/interactive-scene/InteractiveScene"),
  {
    ssr: false,
  }
);
