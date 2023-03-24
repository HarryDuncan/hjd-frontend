import dynamic from "next/dynamic";

export const DynamicInteractiveScene = dynamic(
  () => import("visual/visual-components/interactive-scene/InteractiveScene"),
  {
    ssr: false,
  }
);
