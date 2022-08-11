import { Group, Texture } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export const AssetTypes = {
  geometry: "geometry",
  texture: "texture",
  image: "image",
};

export type AssetType = keyof typeof AssetTypes;
export type Model = GLTF | Group;

export type AssetData = Model | Texture;

export type Asset = {
  name: string;
  url: string;
  assetType: AssetType;
  data?: AssetData;
};
