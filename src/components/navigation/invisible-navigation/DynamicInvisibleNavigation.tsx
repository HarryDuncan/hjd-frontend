import dynamic from "next/dynamic";

export const DynamicInvisibleNavigation = dynamic(
  () =>
    import("components/navigation/invisible-navigation/InvisibleNavigation"),
  {
    ssr: false,
  }
);
