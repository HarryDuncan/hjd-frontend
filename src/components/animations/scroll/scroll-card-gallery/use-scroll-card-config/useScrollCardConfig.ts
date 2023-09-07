import { useMemo } from "react";
import { ScrollGalleryConfig } from "../scrollCardGallery.types";
import { DEFAULT_CONFIG } from "../scrollCardGallery.consts";
import { formatStartAndEndTriggers } from "../../helpers/formatStartAndEndTriggers";

export const useScrollCardConfig = (
  configProps: Partial<ScrollGalleryConfig>
) =>
  useMemo(() => {
    const scrollCardConfig = {
      ...DEFAULT_CONFIG,
      ...configProps,
    } as ScrollGalleryConfig;
    const { startTrigger, endTrigger } = scrollCardConfig;
    const { startTriggerText, endTriggerText } = formatStartAndEndTriggers(
      startTrigger,
      endTrigger
    );
    return { scrollCardConfig, startTriggerText, endTriggerText };
  }, [configProps]);
