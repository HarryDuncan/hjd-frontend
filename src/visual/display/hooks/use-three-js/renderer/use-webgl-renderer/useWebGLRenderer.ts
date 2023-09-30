import { useMemo } from "react";
import { SRGBColorSpace, WebGLRenderer } from "three";
import { useRendererSize } from "../hooks/useRendererSize";
import { DEFAULT_RENDERER_PARAMS } from "../rendererConstants";
import { RendererParams } from "../types";
import { useWindowState } from "visual/compat/window-state/windowStateProvider";

export const useWebGLRenderer = (
  rendererParams: RendererParams = DEFAULT_RENDERER_PARAMS as RendererParams
) => {
  const {
    state: { devicePixelRatio },
  } = useWindowState();
  const { width, height } = useRendererSize(rendererParams);
  const renderer = useMemo(
    () =>
      new WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        precision: "mediump",
      }),
    []
  );
  return useMemo(() => {
    renderer.setPixelRatio(devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x112233, 0);
    renderer.outputColorSpace = rendererParams.outputEncoding ?? SRGBColorSpace;

    return renderer;
  }, [rendererParams, width, height, devicePixelRatio, renderer]);
};
