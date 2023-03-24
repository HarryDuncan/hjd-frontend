import { PointLight as ThreePointLight, Vector3 } from "three";
import { DEFAULT_LIGHT_COLOR } from "./lights.constants";
import { LightProps } from "./lights.types";

export interface PointLightProps extends LightProps {
  name: string;
}
export const PointLight = ({
  name,
  color,
  position = new Vector3(-0, 0, 1),
}: PointLightProps) => {
  const pointLight = new ThreePointLight(color ?? DEFAULT_LIGHT_COLOR);
  pointLight.position.set(position.x, position.y, position.z);
  pointLight.name = name;
  return pointLight;
};
