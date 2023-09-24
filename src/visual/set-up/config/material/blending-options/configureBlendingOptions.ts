import {
  CustomBlending,
  OneFactor,
  SrcAlphaFactor,
  SrcColorFactor,
  ZeroFactor,
} from "three";
import {
  BLEND_DST_KEYS,
  BLEND_SRC_KEYS,
  DEFAULT_BLENDING_OPTIONS,
} from "./blendingOptions.consts";

export const configureBlendingOptions = (
  blendingConfig: Record<string, unknown> | undefined
) => {
  if (!blendingConfig) return {};
  // TODO - make blending options properly configurable
  const mergedConfig = { ...DEFAULT_BLENDING_OPTIONS, ...blendingConfig };
  const { blendSrcKey, blendDstKey, depthTest, transparent } = mergedConfig;
  const blendDst = getBlendDst(blendDstKey as string);
  const blendSrc = getBlendSrc(blendSrcKey as string);
  return {
    blending: CustomBlending,
    blendSrc,
    blendDst,
    transparent,
    depthTest,
  };
};

const getBlendSrc = (blendSrcKey: string | undefined) => {
  switch (blendSrcKey) {
    case BLEND_SRC_KEYS.SRC_ALPHA:
      return SrcAlphaFactor;
    case BLEND_SRC_KEYS.ZERO:
      return ZeroFactor;
    default:
      return OneFactor;
  }
};

const getBlendDst = (blendSrcKey: string | undefined) => {
  switch (blendSrcKey) {
    case BLEND_DST_KEYS.SRC_COLOR:
      return SrcColorFactor;
    case BLEND_DST_KEYS.SRC_ALPHA:
      return SrcAlphaFactor;
    case BLEND_DST_KEYS.ZERO:
      return ZeroFactor;
    case BLEND_DST_KEYS.ONE:
    default:
      return OneFactor;
  }
};
