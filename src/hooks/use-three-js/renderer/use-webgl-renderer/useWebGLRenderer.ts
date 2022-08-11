import useDeviceSize from "hooks/useDeviceSize";
import { useMemo } from "react";
import { LinearEncoding, WebGLRenderer } from "three";
// import { getRendererSize } from "../helpers/getRendererSize";
import { DEFAULT_RENDERER_PARAMS } from "../rendererConstants";
import { RendererParams } from "../types";

export const useWebGLRenderer = (
  rendererParams: RendererParams = DEFAULT_RENDERER_PARAMS
) => {
  const { width, height } = useDeviceSize();
  return useMemo(() => {
    const renderer = new WebGLRenderer({
      powerPreference: "high-performance",
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(1);
    renderer.setSize(width, height);
    renderer.setClearColor(0xfffffff, 0);
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = LinearEncoding;
    return renderer;
  }, [width, height]);
};
