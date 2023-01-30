import { InteractiveRawShader } from "visuals/components/interactive-shaders/interactive-raw-shader";
import { InteractiveShader } from "visuals/components/interactive-shaders/interactive-shader";
import { INTERACTIVE_SHADER_TYPES } from "visuals/components/interactive-shaders/types";
import { InteractiveMaterialParameters } from "../assets/geometry/types";
import { getBoundInteractions } from "../interactions/getBoundInteractions";
import { Binding, InteractionEventObject } from "../interactions/types";

export const getInteractiveMaterial = (
  materialParams: InteractiveMaterialParameters,
  interactions: InteractionEventObject[],
  materialFunctions
) => {
  const { shaderType, shaders, uniforms } =
    materialParams as InteractiveMaterialParameters;
  const boundInteractions = getBoundInteractions(
    interactions,
    Binding.InteractiveMesh
  );
  switch (shaderType) {
    case INTERACTIVE_SHADER_TYPES.RAW_SHADER:
      return new InteractiveRawShader(
        uniforms,
        shaders,
        boundInteractions,
        materialFunctions
      );
    case INTERACTIVE_SHADER_TYPES.SHADER:
      return new InteractiveShader(
        uniforms,
        shaders,
        boundInteractions,
        materialFunctions
      );

    case INTERACTIVE_SHADER_TYPES.NON_INTERACTIVE:
    default:
  }
};
