import { RawShaderMaterial } from "three";
import { InteractiveScene } from "visual/display/components/interactive-scene/InteractiveScene";
import { getMeshesByIdentifier } from "visual/utils/scene/object-finding/getMeshesByIdentifier";

export const updateUniformTime = (
  scene: InteractiveScene,
  identifier: string
) => {
  const meshes = getMeshesByIdentifier(scene, identifier);
  const delta = scene.clock.getDelta();
  meshes.forEach((mesh) => {
    const material = mesh.material as RawShaderMaterial;
    material.uniforms.uTime.value += delta;
  });
};
