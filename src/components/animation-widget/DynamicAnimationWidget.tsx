import dynamic from "next/dynamic";

export const DynamicAnimationWidget = dynamic(
  () => import("components/animation-widget/AnimationWidget"),
  {
    ssr: false,
  }
);
