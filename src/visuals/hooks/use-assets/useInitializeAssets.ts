import { useCallback } from "react";

import { loadImage } from "visuals/helpers/assets/image/load-image/LoadImage";
import { loadFont } from "visuals/helpers/assets/fonts/loadFont";
import { loadTexture } from "visuals/helpers/assets/texture/load-texture/loadTexture";
import { loadGeometry } from "visuals/helpers/assets/geometry/load-geometry/LoadGeometry";

import { getFileTypeFromFilename } from "visuals/utils/getFileType";
import { Asset, ASSET_TYPES } from "./types";

export const useInitializeAssets = (assets: Asset[]) => {
  async function initializeAsset(asset: Asset) {
    const loadedAsset = await loadAsset(asset);
    if (!loadedAsset) {
      console.warn(`asset ${asset.url} not properly loaded`);
    }
    return { ...asset, data: loadedAsset };
  }
  return useCallback(async () => {
    const loadedAssets = await Promise.all(
      assets.map(async (asset) => initializeAsset(asset))
    );
    return loadedAssets as Asset[];
  }, [assets]);
};

const loadAsset = async (asset: Asset) => {
  const { assetType, url: path } = asset;
  const fileType = getFileTypeFromFilename(path);
  switch (assetType) {
    case ASSET_TYPES.Geometry: {
      const geometry = await loadGeometry(path, fileType);
      return geometry;
    }
    case ASSET_TYPES.Texture: {
      const texture = await loadTexture(path);
      return texture;
    }
    case ASSET_TYPES.Image: {
      const image = await loadImage(path);
      return image;
    }
    case ASSET_TYPES.Video: {
      // todo - check if url actually exists
      return "";
    }
    case ASSET_TYPES.FONT: {
      const loadedFont = await loadFont(path);
      return loadedFont;
    }
    default: {
      return null;
    }
  }
};
