import dynamic from "next/dynamic";

export const DynamicNavigation = dynamic(
  () => import("components/navigation/Navigation"),
  {
    ssr: false,
  }
);
