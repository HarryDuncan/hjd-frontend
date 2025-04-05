declare module "art-os-package" {
  export interface SceneConfig {
    assetPath?: string;
    [key: string]: unknown;
  }

  export const SceneNode: React.FC<{
    sceneConfig: SceneConfig;
    events?: unknown[];
    interactionEvents?: unknown[];
    loaderComponent?: React.ReactNode;
  }>;

  export function useFetchConfig(filePath: string): SceneConfig[] | null;
}
