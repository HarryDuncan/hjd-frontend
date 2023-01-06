import { AdvancedMaterialParams } from "./materials.types";
import * as THREE from "three";
export const initializeMaterial = (
  materialName: string,
  materialParams: any
) => {
  try {
    const formattedParams = materialParams;
    delete formattedParams.type;
    //@ts-ignore
    const material = new THREE[materialName]({
      ...formattedParams,
      color: 0xffffff,
    });

    return material;
  } catch (e) {
    console.error(e);
    console.error("Material params did not match the material type");
  }
};
