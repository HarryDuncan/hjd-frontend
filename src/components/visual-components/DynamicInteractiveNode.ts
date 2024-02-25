import dynamic from "next/dynamic";

export const DynamicScene = dynamic(
  () => import("visual/node/scene-node/SceneNode")
);
