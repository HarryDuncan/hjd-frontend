import React from "react";
import { expect, test, describe, fn } from "vitest";
import mockConfig from "./mockConfig.json";
import { useAssetLocation } from "../useAssetLocation";

const mockFunction = fn();

describe("useAssetLocation", () => {
  test("if running locally asset url points to public folder i.e returns the url from config", () => {
    <MockComponent mockConfig={mockConfig} />;
    expect(mockFunction).toHaveBeenCalledWith(
      "../assets/textures/point-textures/1.png"
    );
  });
  test("if running on server asset url is concatenated with NEXT_PUBLIC_CONTENT_ROOT", () => {
    <MockComponent mockConfig={mockConfig} />;
    expect(mockFunction).toHaveBeenCalledWith(
      "../assets/textures/point-textures/1.png"
    );
  });
});

const MockComponent = (mockConfig) => {
  const config = useAssetLocation(mockConfig);
  console.log(config);
  if (config) {
    console.log(config);
    const assets = config[0].assets ?? [];
    const url = assets[0].url;
    mockFunction(url);
  }

  return <div />;
};
