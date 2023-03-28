import { SHADER_TYPES, UNIFORM_TYPES } from "./shaders.constants";

type FragmentShaderTag = "interactive" | "mouse" | "noUniforms" | "uniforms";

export interface FragmentShader {
  frag: string;
  tags?: FragmentShaderTag[];
}

export interface VertexShader {
  vert: string;
  tags?: FragmentShaderTag[];
}

export interface Shaders {
  fragmentShader: FragmentShader;
  vertexShader: VertexShader;
}

export type UniformTypes = keyof typeof UNIFORM_TYPES;
export interface UniformDefinition {
  uniformName: string;
  uniformType: UniformTypes;
  type?: string;
  value?: unknown;
}
export type ShaderTypes = keyof typeof SHADER_TYPES;
export type Uniform = Record<string, unknown>;
