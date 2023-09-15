import { describe, expect, test } from "vitest";
import { SCROLL_TRIGGER_SECTIONS } from "../../scroll.consts";
import { formatStartAndEndTriggers } from "../formatStartAndEndTriggers";
import { ScrollTriggerConfig } from "../../scroll.types";

const startTrigger = {
  targetSection: SCROLL_TRIGGER_SECTIONS.BOTTOM,
  screenSection: SCROLL_TRIGGER_SECTIONS.CENTER,
  percentage: 30,
} as ScrollTriggerConfig;

const endTrigger = {
  targetSection: SCROLL_TRIGGER_SECTIONS.TOP,
  screenSection: SCROLL_TRIGGER_SECTIONS.CENTER,
  percentage: 50,
} as ScrollTriggerConfig;

describe("formatStartAndEndTriggers", () => {
  test("creates a start and end trigger string using the correct values from a config", () => {
    const { startTriggerText, endTriggerText } = formatStartAndEndTriggers(
      startTrigger,
      endTrigger
    );
    expect(startTriggerText).toMatch("bottom center +=30%");
    expect(endTriggerText).toMatch("top center +=50");
  });
  test("uses default values if no empty config is passed", () => {
    const { startTriggerText, endTriggerText } = formatStartAndEndTriggers(
      {},
      {}
    );
    expect(startTriggerText).toMatch("center bottom");
    expect(endTriggerText).toMatch("top top");
  });
  test("doesn't print a percentage sign if no percent is passed", () => {
    const updatedStart = { ...startTrigger };
    delete updatedStart.percentage;
    const updatedEnd = { ...endTrigger };
    delete updatedEnd.percentage;
    const { startTriggerText, endTriggerText } = formatStartAndEndTriggers(
      updatedStart,
      updatedEnd
    );
    expect(startTriggerText).toMatch("bottom center");
    expect(endTriggerText).toMatch("top center");
  });
  test("doesn't return section parameters if only percentage", () => {
    const updatedStart = { ...startTrigger };
    delete updatedStart.percentage;
    const updatedEnd = { ...endTrigger };
    delete updatedEnd.screenSection;
    delete updatedEnd.targetSection;
    const { startTriggerText, endTriggerText } = formatStartAndEndTriggers(
      updatedStart,
      updatedEnd
    );
    expect(startTriggerText).toMatch("bottom center");
    expect(endTriggerText).toMatch("+=50");
  });
});
