import { Camera, PerspectiveCamera, Scene } from "three";

export interface AnimationWidgetScene {
  name: string;
  data: any;
}

export type FunctionBasedScene = {
  name: string;
  scene: null | Scene;
  camera: null | PerspectiveCamera;
  sceneParams: any;
  sceneLength: number;
  init: (
    sceneData: any
  ) => Promise<{ camera: any; scene: any; sceneParams: any }>;
  onUpdate: (sceneParams: any) => void;
  onClose?: (sceneParams: any) => void;
};
