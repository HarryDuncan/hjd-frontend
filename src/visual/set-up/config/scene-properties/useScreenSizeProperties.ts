import { ScreenType } from "visual/compat/window-state/types";
import { MeshComponentConfig, SceneConfig } from "../config.types";
import { useMemo } from "react";

export const useScreenSizeProperties = (
  config: SceneConfig | undefined | null,
  currentScreenType: ScreenType
): SceneConfig | null | undefined =>
  useMemo(() => {
    if (!config || currentScreenType === "DESKTOP") {
      return config;
    }
    const { screenSizeAdjustments } = config;
    if (!screenSizeAdjustments || !screenSizeAdjustments.length) {
      return config;
    }
    const currentAdjustment = screenSizeAdjustments.find(
      ({ screenType }) => screenType === currentScreenType
    );
    if (!currentAdjustment) {
      return config;
    }
    const meshComponentConfigs = mergeMeshConfigs(
      config.meshComponentConfigs,
      currentAdjustment.meshComponentConfigs
    );

    const updatedConfig = {
      ...config,
      meshComponentConfigs,
      threeJsConfig: {
        ...config.threeJsConfig,
        ...(currentAdjustment?.threeJsConfig ?? {}),
      },
    };
    return updatedConfig;
  }, [config, currentScreenType]);

const mergeMeshConfigs = (
  currentMeshConfigs: MeshComponentConfig[] = [],
  meshesToMerge: Partial<MeshComponentConfig>[] = []
): MeshComponentConfig[] => {
  const currentMeshConfigMap = new Map<string, MeshComponentConfig>();
  currentMeshConfigs.forEach((meshConfig) => {
    currentMeshConfigMap.set(meshConfig.id, meshConfig);
  });

  const mergedMeshConfigs: MeshComponentConfig[] = [];

  meshesToMerge.forEach((meshToMerge) => {
    const currentMeshConfig = currentMeshConfigMap.get(meshToMerge.id ?? "");
    if (currentMeshConfig) {
      const mergedMeshConfig: MeshComponentConfig = {
        ...currentMeshConfig,
        ...meshToMerge,
        rotation: {
          ...(currentMeshConfig.rotation || {}),
          ...(meshToMerge.rotation || {}),
        },
        position: {
          ...(currentMeshConfig.position || {}),
          ...(meshToMerge.position || {}),
        },
      };

      mergedMeshConfigs.push(mergedMeshConfig);
    } else {
      mergedMeshConfigs.push(meshToMerge as MeshComponentConfig);
    }
  });
  const mergedMeshConfigMap = new Map<string, MeshComponentConfig>();
  mergedMeshConfigs.forEach((meshConfig) => {
    mergedMeshConfigMap.set(meshConfig.id, meshConfig);
  });

  currentMeshConfigs.forEach((currentMeshConfig) => {
    if (!mergedMeshConfigMap.has(currentMeshConfig.id)) {
      mergedMeshConfigs.push(currentMeshConfig);
    }
  });
  return mergedMeshConfigs;
};
