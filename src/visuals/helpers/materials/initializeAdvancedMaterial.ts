import { initializeMaterial } from "./initializeMaterial";
import { ADVANCED_MESH_MATERIALS } from "./material.constants";
import { AdvancedMaterialTypeKey } from "./materials.types";

export const initializeAdvancedMaterial = (
  advancedMaterialType: AdvancedMaterialTypeKey,
  materialParams: any
) => {
  const selectedMaterial = ADVANCED_MESH_MATERIALS[advancedMaterialType];
  if (selectedMaterial) {
    const type = selectedMaterial.material.type;
    materialParams = {
      ...selectedMaterial.material,
      ...materialParams,
    };
    selectedMaterial.material = initializeMaterial(type, materialParams);
    return selectedMaterial;
  } else {
    console.error(`${String(advancedMaterialType)} is an incorrect material`);
  }
};
