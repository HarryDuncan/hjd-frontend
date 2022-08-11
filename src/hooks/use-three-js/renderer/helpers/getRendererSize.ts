import useDeviceSize from "hooks/useDeviceSize";
import { RendererParams } from "../types";

export const getRendererSize = (rendererParams: RendererParams) => {
  const { size } = rendererParams;

  return { width: size.width, height: size.height };
};
