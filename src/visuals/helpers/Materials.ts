import * as THREE from "three";

export const THREE_MESH_MATERIAL_TYPES = {
  LAMBERT: "MeshLambertMaterial",
  STANDARD: "MeshStandardMaterial",
  PHONG: "MeshPhongMaterial",
};

export const ADVANCED_MESH_MATERIALS = {
  CHROME: {
    material: {
      type: THREE_MESH_MATERIAL_TYPES.LAMBERT,
      color: 0xffffff,
      envMap: null,
    },
    h: 0,
    s: 0,
    l: 1,
  },
  LIQUID: {
    material: {
      type: THREE_MESH_MATERIAL_TYPES.LAMBERT,
      color: 0xffffff,
      envMap: null,
      refractionRatio: 0.85,
    },

    h: 0,
    s: 0,
    l: 1,
  },

  SHINY: {
    material: {
      type: THREE_MESH_MATERIAL_TYPES.STANDARD,
      color: 0x050505,
      envMap: null,
      roughness: 0.1,
      metalness: 1.0,
    },
    h: 0,
    s: 0.8,
    l: 1,
  },
  MATTE: {
    material: {
      type: THREE_MESH_MATERIAL_TYPES.PHONG,
      color: 0x000000,
      specular: 0x111111,
      shininess: 1,
    },

    h: 0,
    s: 0,
    l: 1,
  },
  PLASTIC: {
    material: {
      type: THREE_MESH_MATERIAL_TYPES.PHONG,
      color: 0x000000,
      specular: 0x888888,
      shininess: 250,
    },
    h: 0.6,
    s: 0.8,
    l: 0.1,
  },
};
export const initializeThreeMaterial = (
  materialName: string,
  materialParams: any
) => {
  try {
    //@ts-ignore
    const material = new THREE[materialName]({
      ...materialParams,
      color: 0xffffff,
    });

    return material;
  } catch {
    console.error("Material params did not match the material type");
  }
};

export const initializeAdvancedMaterial = (
  advancedMaterialType: string,
  materialParams: any
) => {
  const selectedMaterial = ADVANCED_MESH_MATERIALS[advancedMaterialType];
  if (selectedMaterial) {
    const { type } = selectedMaterial.material;
    materialParams = { ...selectedMaterial.material, ...materialParams };
    delete materialParams.type;
    selectedMaterial.material = initializeThreeMaterial(type, materialParams);

    return selectedMaterial;
  } else {
    console.error(`${advancedMaterialType} is an incorrect material`);
  }
};