import dynamic from "next/dynamic";

// Dynamically import AnimatedScene and disable SSR
export const DynamicAnimatedScene = dynamic(() => import("./Scene"), {
  ssr: false, // This ensures it only renders on the client-side
});
