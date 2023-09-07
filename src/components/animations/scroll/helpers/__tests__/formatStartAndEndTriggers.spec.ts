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
    const { start, end } = formatStartAndEndTriggers(startTrigger, endTrigger);
    expect(start).toEqual("bottom center +=30%");
    expect(end).toEqual("top center +=50");
  });
  test("uses default values if no empty config is passed", () => {
    const { start, end } = formatStartAndEndTriggers(startTrigger, endTrigger);
    expect(start).toEqual("center bottom");
    expect(end).toEqual("top top");
  });
  test("doesn't print a percentage sign if no percent is passed", () => {
    const { start, end } = formatStartAndEndTriggers(startTrigger, endTrigger);
    expect(start).toEqual("center bottom");
    expect(end).toEqual("bottom top");
  });
  test("doesn't return section parameters if only percentage", () => {
    const { start, end } = formatStartAndEndTriggers(startTrigger, endTrigger);
    expect(start).toEqual("center bottom");
    expect(end).toEqual("+=50");
  });
});
