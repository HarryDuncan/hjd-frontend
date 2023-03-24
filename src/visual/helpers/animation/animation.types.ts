import { Vector3 } from "three";
import { AXIS } from "../three-dimension-space/position/position.types";

export enum ANIMATION_TYPES {
  ROTATE = "ROTATE",
  SPIN = "SPIN",
  TRAVERSE = "TRAVERSE",
}

export interface AnimationPropertiesConfig {
  animationDurationMilis: number;
  repeatAnimation: boolean;
  animationPauseMilis: number;
}

export interface SpinAnimationConfig extends AnimationPropertiesConfig {
  rotationAxis: AXIS;
  speed: number;
}
export interface RotationAnimationConfig extends AnimationPropertiesConfig {
  rotationAxis: AXIS;
}

export interface TraversalAnimationConfig extends AnimationPropertiesConfig {
  startPosition: Vector3;
  endPosition: Vector3;
  curveSize: number;
  curve?: any;
}

export type AnimationProperties =
  | RotationAnimationConfig
  | SpinAnimationConfig
  | TraversalAnimationConfig;

export interface AnimationConfig {
  animationType: ANIMATION_TYPES;
  animationProperties: AnimationProperties;
}
