import { EMPTY_SCENE_DATA } from "constants/visual/visual.constants";

export const defaultFormatSceneData = (_assets) => {
  console.warn("format scene data not configured");
  return EMPTY_SCENE_DATA;
};

export const defaultFormatWithContext = (_assets, _context, _dispatch) => {
  console.warn("format scene not configured");
  return EMPTY_SCENE_DATA;
};
