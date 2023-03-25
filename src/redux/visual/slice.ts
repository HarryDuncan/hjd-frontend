import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VisualComponentConfig } from "./types";
import { Layer } from "visual/components/layers/types";

export type VisualState = {
  visualComponentConfig: VisualComponentConfig;
  layers: Layer[];
  visualData: any;
};

export const INITIAL_STATE: VisualState = {
  visualComponentConfig: {
    viewWidth: "100vw",
    viewHeight: "100vh",
    backgroundColor: "white",
    backgroundUrl: "",
  },
  layers: [],
  visualData: {},
};

export const slice = createSlice({
  name: "visual",
  initialState: INITIAL_STATE,
  reducers: {
    setVisualData: (state, { payload }: PayloadAction<any>) => {
      const layers = payload.layers ?? [];
      return {
        ...state,
        visualData: payload,
        layers,
      };
    },
  },
});

export const { reducer, actions } = slice;
