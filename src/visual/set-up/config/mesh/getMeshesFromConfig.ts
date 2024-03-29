import { Material, Object3D } from "three";
import { formatGeometry } from "./geometry/formatGeometry";
import { addMaterials } from "./mesh-materials/addMaterials";
import { setUpMeshes } from "./mesh-setup/setUpMeshes";
import { setUpRandomizedMeshConfigs } from "./randomized/setUpRandomizedMeshConfigs";
import { Asset } from "visual/set-up/assets/asset.types";
import { SceneConfig } from "../config.types";
import { transformGeometry } from "./geometry/transform-geometries/transformGeometries";
import { ShaderAttributeConfig } from "../material/shaders/build-shader/buildShader.types";
import { formatMeshTransforms } from "./geometry/formatMeshTransforms";
import { multipleMeshes } from "./multiple-meshes/multipleMeshes";

export const getMeshesFromConfig = (
  assets: Asset[],
  materials: Material[],
  config: SceneConfig,
  attributeConfigs: ShaderAttributeConfig[]
): Object3D[] => {
  const { meshComponentConfigs, meshTransforms } = config;
  const meshConfigs =
    meshComponentConfigs?.filter(
      (meshConfig) => !meshConfig.randomizationConfig
    ) ?? [];
  const randomizedMeshes = setUpRandomizedMeshConfigs(meshComponentConfigs);
  const multipleMeshConfigs = multipleMeshes(meshComponentConfigs);
  const allMeshes = [
    ...meshConfigs,
    ...randomizedMeshes,
    ...multipleMeshConfigs,
  ];
  const formattedGeometry = formatGeometry(assets, allMeshes);
  const formattedTransforms = formatMeshTransforms(
    meshTransforms ?? [],
    attributeConfigs
  );

  const transformedGeometry = transformGeometry(
    formattedTransforms,
    formattedGeometry
  );
  const geometriesWithMaterials = addMaterials(
    transformedGeometry,
    materials,
    allMeshes
  );
  const meshes = setUpMeshes(geometriesWithMaterials);
  return meshes;
};
