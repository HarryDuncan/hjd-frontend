import { SceneConfig, ScreenType } from "../config.types";

export const useScreenSizeProperties = (
  config: SceneConfig | undefined | null,
  currentScreenType: ScreenType
): SceneConfig | null | undefined => {
  if (!config || currentScreenType === "DESKTOP") {
    return config;
  }
  const { screenSizeAdjustments } = config;
  if (!screenSizeAdjustments || !screenSizeAdjustments.length) {
    return config;
  }
  // const currentAdjustment = screenSizeAdjustments.filter(
  //   ({ screenType }) => screenType === currentScreenType
  // );
  // TODO - ScreenSizeAdjustment when we actually need it
  const updatedConfig = {
    ...config,
  };
  return updatedConfig;
};
