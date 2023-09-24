import dynamic from "next/dynamic";

export const DynamicLayout = dynamic(() => import("layout/DefaultLayout"), {
  ssr: false,
});
