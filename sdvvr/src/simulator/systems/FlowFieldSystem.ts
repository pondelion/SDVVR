import { BaseSystem, ObjectState } from "./BaseSystem";
import { FlowFieldObjects } from "../../scene_settings/samples/flow_field/FlowFieldObjects";
import { FlowFieldParameters } from "../../scene_settings/samples/flow_field/FlowFieldParameters";


export class FlowFieldSystem extends BaseSystem {

  constructor() {
    super(FlowFieldObjects, FlowFieldParameters);
    this.reset();
  }

  override _update(dt: number): void {
    if (!this._is_running) {
      return;
    }
  }

  override getStates(t?: number): ObjectState[] {
    if (t !== undefined) {
      throw new Error("Method not implemented.");
    }
    // always return latest states for now.
    return this._objStates;
  }

  override reset(): void {
    super.reset();
  }

  override historicalData() {
    let data: any = super.historicalData();
    return data;
  }
}