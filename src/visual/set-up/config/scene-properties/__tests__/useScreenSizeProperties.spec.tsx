import React from "react";
import { expect, test, describe, vi } from "vitest";
import { render } from "@testing-library/react";
import mockConfig from "./mockConfig.json";
import { useScreenSizeProperties } from "../useScreenSizeProperties";
import { SceneConfig } from "../../config.types";

const mockFunction = vi.fn();

describe("useScreenSizeProperties", () => {
  test("returns default config if no adjustment detected", () => {
    render(
      <MockComponent mockScreenConfig={mockConfig} screenType={"DESKTOP"} />
    );
    expect(mockFunction).toHaveBeenCalledWith(mockConfig);
  });
  test("returns merged three js config for a mobile screen size", () => {
    const withScreenProperties = {
      ...mockConfig,
      screenSizeAdjustments: [
        {
          screenType: "MOBILE",
          threeJsConfig: {
            camera: { position: { x: 0.5, y: -10, z: 90 } },
          },
        },
      ],
    };
    const expectedThreeJsConfig = {
      camera: { position: { x: 0, y: -10, z: 90 } },
      controls: {
        minDistance: 10,
        maxDistance: 25,
      },
    };
    render(
      <MockComponent
        mockScreenConfig={withScreenProperties}
        screenType={"MOBILE"}
      />
    );
    expect(mockFunction).toHaveBeenCalledWith(expectedThreeJsConfig);
  });
  test("merges matching mesh configs for a mobile screen size", () => {
    const withScreenProperties = {
      ...mockConfig,
      screenSizeAdjustments: [
        {
          screenType: "MOBILE",
          threeJsConfig: {
            camera: { position: { x: 0, y: -10, z: 90 } },
          },
          meshComponentConfigs: [
            {
              id: "hjdcurves1",
              size: 20,
              position: { x: -0.5, y: 10, z: 0 },
            },
          ],
        },
      ],
    };
    const expected = [
      {
        id: "hjdcurves1",
        geometryId: "Cube",
        size: 20,
        position: { x: -0.5, y: 10, z: 0 },
        rotation: { x: -90, y: -130, z: -40 },
        materialId: "phong-red",
      },
    ];
    render(
      <MockComponent
        mockScreenConfig={withScreenProperties}
        screenType={"MOBILE"}
      />
    );
    expect(mockFunction).toHaveBeenCalledWith(expected);
  });
});

const MockComponent = ({ mockScreenConfig, screenType }) => {
  const config = useScreenSizeProperties(
    mockScreenConfig,
    screenType
  ) as SceneConfig;
  if (config) {
    const three = config.threeJsConfig;
    const mesh = config.meshComponentConfigs;
    console.log(three);
    mockFunction(three);
  }

  return <div />;
};
