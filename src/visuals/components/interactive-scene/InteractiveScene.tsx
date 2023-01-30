import { Clock, Scene } from "three";
import { InteractionEventObject } from "visuals/helpers/interactions/types";
import { AnimationManager } from "../animation-manager/AnimationManager";
import { CustomAnimation } from "../animation-manager/animationManager.types";
import { InteractiveSceneFunctions, SceneObject } from "./types";

export class InteractiveThreeScene extends Scene {
  clock: Clock;

  isRunningThread: boolean;

  interactions: InteractionEventObject[];

  sceneFunctions: InteractiveSceneFunctions;

  sceneParams: any;

  sceneObjects: SceneObject[];

  animationProperties: any;

  animationManager: AnimationManager;

  constructor(
    interactions: InteractionEventObject[],
    sceneFunctions: InteractiveSceneFunctions = {},
    sceneParams: any = {},
    sceneObjects: SceneObject[] = []
  ) {
    super();
    this.isRunningThread = true;
    this.sceneFunctions = sceneFunctions;
    this.clock = new Clock();
    this.interactions = interactions;
    this.sceneParams = sceneParams;
    this.sceneObjects = sceneObjects;
    this.animationProperties = {};
    this.bindMaterialFunctions();
    this.animationManager = new AnimationManager();
    interactions.forEach(({ eventKey }) => {
      document.addEventListener(`${eventKey}`, (ev) =>
        this.onGestureEvent(ev as CustomEvent)
      );
    });
  }

  bindMaterialFunctions() {
    const { onTimeUpdate, onPageScroll } = this.sceneFunctions;
    if (onTimeUpdate) {
      document.addEventListener("scene:update", () => {
        onTimeUpdate(this);
      });
    }
    if (onPageScroll) {
      document.addEventListener("scroll", (event) => {
        onPageScroll(this, event);
      });
    }
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

  addAnimations(animations: CustomAnimation[]) {
    this.animationManager.initializeAnimations(animations);
  }
}
