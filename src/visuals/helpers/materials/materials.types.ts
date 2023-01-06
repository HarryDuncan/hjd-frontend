import {
  ADVANCED_MESH_MATERIALS,
  THREE_MESH_MATERIAL_TYPES,
} from "./material.constants";
export type MaterialTypes = typeof THREE_MESH_MATERIAL_TYPES;
export type MaterialTypeKey = keyof MaterialTypes;

export type AdvancedMaterialTypes = typeof ADVANCED_MESH_MATERIALS;
export type AdvancedMaterialTypeKey = keyof AdvancedMaterialTypes;

export type AdvancedMaterialParams =
  | MaterialParams
  | ChromeMaterialParams
  | LiquidMaterialParams;

export interface MaterialParams {
  material: {
    type: MaterialTypeKey;
    color: any;
    specular: any;
    shininess: number;
  };
  h: number;
  s: number;
  l: number;
}

export interface ChromeMaterialParams {
  material: {
    type: MaterialTypeKey;
    color: any;
    envMap: any;
  };
  h: number;
  s: number;
  l: number;
}

export interface LiquidMaterialParams {
  material: {
    type: MaterialTypeKey;
    color: any;
    envMap: any;
    refractionRatio: number;
  };
  h: number;
  s: number;
  l: number;
}
