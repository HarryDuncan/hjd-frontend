/* eslint import/namespace: ['error', { allowComputed: true }] */
import { MaterialUniform } from "visual/set-up/config/material/materials.types";
import * as Shaders from "../shaders";

export const importShader = (
  shaderId: string,
  vertexShaderId: string | undefined,
  fragmentShaderId: string | undefined
): {
  fragmentShader: string;
  vertexShader: string;
  setUpDefaultUniforms: ((uniforms: MaterialUniform) => MaterialUniform) | null;
} => {
  try {
    const {
      fragmentShader: defaultFragmentShader,
      vertexShader: defaultVertexShader,
      defaultUniforms: setUpDefaultUniforms,
      // @ts-ignore - not ideal but will replace with build shader
    } = Shaders[shaderId];

    const fragmentShader = getFragmentShader(
      defaultFragmentShader,
      fragmentShaderId
    );
    const vertexShader = getVertexShader(defaultVertexShader, vertexShaderId);
    return { fragmentShader, vertexShader, setUpDefaultUniforms };
  } catch {
    console.error(`${shaderId} not a valid shader`);
    return { fragmentShader: "", vertexShader: "", setUpDefaultUniforms: null };
  }
};

const getFragmentShader = (
  defaultFragmentShader: string,
  fragmentShaderId: string | undefined
) => {
  if (fragmentShaderId) {
    // @ts-ignore - not ideal but will replace with build shader
    const { fragmentShader } = Shaders[fragmentShaderId];
    return fragmentShader;
  }
  return defaultFragmentShader;
};

const getVertexShader = (
  defaultVertexShader: string,
  vertexShaderId: string | undefined
) => {
  if (vertexShaderId) {
    // @ts-ignore - not ideal but will replace with build shader
    const { vertexShader } = Shaders[vertexShaderId];
    return vertexShader;
  }
  return defaultVertexShader;
};
