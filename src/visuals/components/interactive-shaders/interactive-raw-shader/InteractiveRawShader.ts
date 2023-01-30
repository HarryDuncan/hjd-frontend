import { Clock, DoubleSide, RawShaderMaterial } from "three";
import { EventConfig } from "visuals/hooks/use-events/types";
import { InteractionEventObject } from "visuals/helpers/interactions/types";
import { UPDATE_TIME_UNIFORM } from "visuals/visual-configs/default-configs/material-functions/updateTimeUniform";
import { InteractiveMaterialFunctions, InteractiveShaders } from "../types";

export default class InteractiveRawShader extends RawShaderMaterial {
  clock: Clock;

  isRunningThread: boolean;

  interactions: InteractionEventObject[];

  materialFunctions: InteractiveMaterialFunctions;

  constructor(
    uniforms,
    shaders: InteractiveShaders,
    interactions: InteractionEventObject[],
    materialFunctions: InteractiveMaterialFunctions = UPDATE_TIME_UNIFORM
  ) {
    super({
      vertexShader: shaders.vertexShader.vert,
      fragmentShader: shaders.fragmentShader.frag,
      transparent: true,
      side: DoubleSide,
      defines: {
        PI: Math.PI,
        PR: window.devicePixelRatio.toFixed(1),
      },
    });
    this.isRunningThread = true;
    this.uniforms = uniforms;
    this.materialFunctions = materialFunctions;
    this.clock = new Clock();
    this.interactions = interactions;
    this.bindMaterialFunctions();
    interactions.forEach(({ eventKey }) => {
      document.addEventListener(`${eventKey}`, (ev) =>
        this.onGestureEvent(ev as CustomEvent)
      );
    });
  }

  bindMaterialFunctions() {
    document.addEventListener("scene:update", () =>
      this.materialFunctions.onTimeUpdate(this)
    );
  }

  onGestureEvent(event: CustomEvent) {
    const { type, detail } = event;
    const currentAction = this.interactions.find(
      (interactionEvent) => interactionEvent.eventKey === type
    );

    if (currentAction?.eventFunction) {
      currentAction.eventFunction(this, detail);
    }
  }

  continueThread() {
    this.isRunningThread = !this.isRunningThread;
  }

  addEvents(eventConfig: EventConfig[]) {
    eventConfig.forEach(({ eventKey, eventFunction }) => {
      document.addEventListener(eventKey, (e) => eventFunction(this, e));
    });
  }

  startThread() {
    setTimeout(() => {
      this.isRunningThread = true;
    }, 100);
  }
}
