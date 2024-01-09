import dynamic from "next/dynamic";

export const DynamicSuccessContent = dynamic(
  () => import("views/shop/checkout/success/SuccessContent"),
  {
    ssr: false,
  }
);
