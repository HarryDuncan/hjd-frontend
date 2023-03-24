import { DirectionalLight as ThreeDirectionalLight, Vector3 } from "three";
import { DEFAULT_LIGHT_COLOR } from "./lights.constants";
import { LightProps } from "./lights.types";

export interface DirectionalLightProps extends LightProps {
  name: string;
}
export const DirectionalLight = ({
  name,
  color,
  position = new Vector3(-0, 0, 1),
}: DirectionalLightProps) => {
  const light = new ThreeDirectionalLight(color ?? DEFAULT_LIGHT_COLOR);
  light.position.set(position.x, position.y, position.z);
  light.intensity = 1;
  light.name = name;
  return light;
};
