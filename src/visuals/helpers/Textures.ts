import { CubeTextureLoader, MathUtils, Texture, TextureLoader } from "three";

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

export const loadTexture = (path: string) =>
  new Promise((resolve: (value: Texture) => void) => {
    const textureLoader = new TextureLoader();
    textureLoader.load(path, (data) => {
      if (
        !MathUtils.isPowerOfTwo(data.image.width) ||
        !MathUtils.isPowerOfTwo(data.image.height)
      ) {
        console.warn(`"${path}" image size is not power of 2.`);
      }
      data.needsUpdate = true;
      resolve(data);
    });
  });
