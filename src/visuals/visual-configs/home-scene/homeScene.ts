import { PlaneGeometry, Texture, Vector2 } from "three";
import { SceneData } from "visuals/components/interactive-scene/types";
import { INTERACTIVE_SHADER_TYPES } from "visuals/components/interactive-shaders/types";
import { MATERIAL_TYPES } from "visuals/helpers/assets/geometry/types";
import { getTextureRatio } from "visuals/helpers/assets/texture/getTextureRatio";
import { getMeshByName } from "visuals/helpers/scene/getMeshByName";
import { Asset, ASSET_TYPES } from "visuals/hooks/use-assets/types";
import { gooeyFragment } from "visuals/shaders/fragement/image-hover/gooeyFrag";
import { imageHoverVertex } from "visuals/shaders/vertex/imageHoverVertex";
import { InteractiveThreeScene as InteractiveScene } from "visuals/components/interactive-scene/InteractiveScene";

const formatAssetsWithUniforms = (uniforms: any, assets: Asset[]) => {
  assets.forEach((asset) => {
    uniforms[asset.name].value = asset.data;
  });
  uniforms.uCoverImageRatio.value = getTextureRatio(assets[0].data as Texture);
  uniforms.uRevealedImageRatio.value = getTextureRatio(
    assets[1].data as Texture
  );
  return uniforms;
};

export const getGooeyShaderSceneData = (assets: Asset[]): SceneData => {
  const uniforms = {
    uAlpha: { value: 1 },
    uCoverImage: { type: "t", value: null },
    uCoverImageRatio: { value: 0 },
    uRevealedImage: { type: "t", value: null },
    uRevealedImageRatio: { value: 0 },
    uShape: { value: 0 },
    uProgressHover: { value: 1.0 },
    uProgressClick: { value: 0 },
    uTime: { value: 0 },
    uPosition: { value: new Vector2(0, 0) },
    uResolution: {
      value: new Vector2(window.innerWidth, window.innerHeight),
    },
  };
  const formattedUniforms = formatAssetsWithUniforms(uniforms, assets);
  const geometry = new PlaneGeometry(2, 2);
  return {
    isSceneDataInitialized: true,
    meshConfigs: [
      {
        materialType: MATERIAL_TYPES.standardShader,
        geometry,
        materialParameters: {
          shaders: {
            vertexShader: imageHoverVertex,
            fragmentShader: gooeyFragment,
          },
          shaderType: INTERACTIVE_SHADER_TYPES.SHADER,
          uniforms: formattedUniforms,
        },
      },
    ],
  };
};

export const homeScene = {
  threeJsParams: {
    camera: { position: { x: 0, y: 0, z: 2 } },
  },
  formatSceneData: getGooeyShaderSceneData,
  assets: [
    {
      name: "uCoverImage",
      url: "../images/campaigns/AidsDay.jpg",
      assetType: ASSET_TYPES.Texture,
    },
    {
      name: "uRevealedImage",
      url: "../images/campaigns/PayTheRent.jpg",
      assetType: ASSET_TYPES.Texture,
    },
  ],

  sceneFunctions: {
    onTimeUpdate: (scene: InteractiveScene) => {
      const mesh = getMeshByName(scene, "mesh-0");
      if (mesh) {
        const delta = scene.clock.getDelta();
        mesh.material.uniforms.uTime.value += delta;
      }
    },
  },
};
