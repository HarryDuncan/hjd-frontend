import { CubeTextureLoader, TextureLoader } from "three";

import { createKeyName } from "./utils";

const getCubeUrls = (url: string, fileFormat: string) => [
  // Middle Right
  `${url}px.${fileFormat}`,
  // Middle Left
  `${url}nx.${fileFormat}`,
  // Top Middle
  `${url}py.${fileFormat}`,
  // Bottom Middle
  `${url}ny.${fileFormat}`,

  // Middle Middle
  `${url}pz.${fileFormat}`,
  `/images/textures/cube/nz.${fileFormat}`,
];

export const setUpReflectionEnvMap = (
  url: string,
  fileFormat: string,
  textureLoader: any = new CubeTextureLoader()
) => {
  const urls = getCubeUrls(url, fileFormat);
  const reflectionCube = textureLoader.load(urls);

  return reflectionCube;
};

export const setUpRefractionEnvMap = (
  url: string,
  fileFormat: string,
  textureLoader: any = new CubeTextureLoader()
) => {
  const urls = getCubeUrls(url, fileFormat);
  const refractionCube = textureLoader.load(urls);
  return refractionCube;
};

export const fitTextureToPlane = (
  texture: any,
  viewportWidth: number,
  viewportHeight: number
) => {
  texture.matrixAutoUpdate = false;

  var aspect = viewportWidth / viewportHeight;
  var imageAspect = texture.image.width / texture.image.height;

  if (aspect < imageAspect) {
    texture.matrix.setUvTransform(0, 0, aspect / imageAspect, 1, 0, 0.5, 0.5);
  } else {
    texture.matrix.setUvTransform(0, 0, 1, imageAspect / aspect, 0, 0.5, 0.5);
  }

  return texture;
};
