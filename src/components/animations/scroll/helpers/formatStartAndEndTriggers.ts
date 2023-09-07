import {
  DEFAULT_END_TIGGER_TEXT,
  DEFAULT_START_TIGGER_TEXT,
  TRIGGER_TYPES,
} from "../scroll.consts";
import { ScrollTriggerConfig } from "../scroll.types";

export const formatStartAndEndTriggers = (
  startTrigger: Partial<ScrollTriggerConfig> = {},
  endTrigger: Partial<ScrollTriggerConfig> = {}
) => {
  return {
    startTriggerText: formatTrigger(startTrigger, TRIGGER_TYPES.START),
    endTriggerText: formatTrigger(endTrigger, TRIGGER_TYPES.END),
  };
};

const formatTrigger = (
  triggerConfig: Partial<ScrollTriggerConfig>,
  triggerType: string
) => {
  const { targetSection, screenSection, percentage } = triggerConfig;
  if (
    !targetSection &&
    !screenSection &&
    !percentage &&
    triggerType === TRIGGER_TYPES.START
  ) {
    return DEFAULT_START_TIGGER_TEXT;
  }
  if (
    !targetSection &&
    !screenSection &&
    !percentage &&
    triggerType === TRIGGER_TYPES.END
  ) {
    return DEFAULT_END_TIGGER_TEXT;
  }
  return `${targetSection} ${screenSection}${formatPercentage(
    percentage
  )} `.toLowerCase();
};

const formatPercentage = (percentage: number | undefined) =>
  percentage !== undefined ? ` +=${percentage}%` : "";
