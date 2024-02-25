import dynamic from "next/dynamic";

export const DynamicCartStorageHandler = dynamic(
  () => import("views/shop/checkout/cancel/CartStorageHandler"),
  {
    ssr: false,
  }
);
