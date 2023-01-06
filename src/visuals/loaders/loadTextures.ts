import { TextureLoader } from "three";
import { createKeyName } from "visuals/helpers/utils";
import { AssetItem } from "visuals/helpers/utils/getAssetDataByName";

export const loadTexturePromise = (textureProps: AssetItem) =>
  new Promise((resolve, reject) => {
    const loadedTexture = new TextureLoader().load(
      textureProps.path,
      (onLoad) => {
        resolve(loadedTexture);
      },

      (onError) => {
        console.error("error loading texture");
        reject("error");
      }
    );
  });

export const loadTextures = (textures: AssetItem[]): any =>
  new Promise((resolve, reject) => {
    const loadedTextures: any = {};
    let errorCount = 0;
    textures.forEach((texture: AssetItem) => {
      loadTexturePromise(texture)
        .then((response) => {
          loadedTextures[
            `${createKeyName("texture", loadedTextures, texture.name)}`
          ] = response;
          if (
            Object.keys(loadedTextures).length + errorCount ===
            textures.length
          ) {
            resolve(loadedTextures);
          }
        })
        .catch(() => {
          errorCount++;
          if (errorCount === textures.length) {
            reject({});
          } else if (
            Object.keys(loadedTextures).length + errorCount ===
            textures.length
          ) {
            resolve(loadedTextures);
          }
        });
    });
  });
