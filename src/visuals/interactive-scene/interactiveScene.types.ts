import { VisualComponentConfig } from "app/redux/visuals/types";
import { Asset } from "visuals/hooks/use-assets/types";
import { InteractionEventObject } from "visuals/helpers/interactions/types";
import { ThreeJsParams } from "visuals/hooks/use-three-js/types";

export interface InteractiveSceneParams {
  threeJsParams: ThreeJsParams;
  interactions: InteractionEventObject[];
  assets: Asset[];
  materialFunctions: any;
  materialParams: any;
  sceneFunctions: any;
  visualComponentConfig: VisualComponentConfig;
  formatSceneData: any;
}
