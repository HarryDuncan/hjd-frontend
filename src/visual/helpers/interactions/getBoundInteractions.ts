import { Binding, InteractionEventObject } from "./types";

export const getBoundInteractions = (
  interactions: InteractionEventObject[] = [],
  bindingType: Binding = Binding.InteractiveScene
) => interactions.filter((interaction) => interaction.binding === bindingType);
