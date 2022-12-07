import dynamic from "next/dynamic";

export const DynamicLayout = dynamic(
  () => import("components/layout/DefaultLayout"),
  {
    ssr: false,
  }
);
