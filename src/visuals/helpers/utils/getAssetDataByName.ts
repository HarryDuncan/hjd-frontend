export type AssetItem = { path: string; name: string };

export const getAssetDataByName = (
  assetArray: AssetItem[],
  assetItemName: string
) => {
  const selectedAssetItem = assetArray.find(
    (item) => item.name === assetItemName
  );
  return selectedAssetItem;
};
