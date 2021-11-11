import clone from "clone";

import { ThreeObject } from '../../types/Three';
import { Object } from '../../types/ObjectConfig';
import { Parameter } from '../../types/Parameter';


// export type ObjectState = {
//   'obj': ThreeObject,
//   'state': Object
// }
export type ObjectState = Object;


export abstract class BaseSystem {
  protected _t: number = 0.0;
  protected _is_running: boolean = false;
  protected _initialObjStates: ObjectState[] = [];
  protected _objStates: ObjectState[] = [];
  protected _systemParams: Parameter[] = [];
  protected MAX_DT: number = 0.1;
  protected MAX_QUEUE: number = 2000;

  protected _ts: number[] = []

  constructor(
    initialObjStates: ObjectState[],
    systemParams: Parameter[],
  ) {
    this._initialObjStates = initialObjStates;
    this._objStates = clone(initialObjStates);
    this._systemParams = clone(systemParams);
    //this.reset();
  }

  /*
    Update system by dt.
  */
  update(dt: number): void {
    if (this._is_running) {
      this._t += dt;
      this._update(Math.min(dt, this.MAX_DT))
      this._ts.push(this._t);
      if (this._ts.length > this.MAX_QUEUE) {
        this._ts.shift();
      }
    }
  }

  /*
    Update each object's state in the system by dt.
    Subclass must overrides this method.
  */
  abstract _update(dt: number): void;

  /*
    Get each object's state in the system at t.
    Returns latest states if t is not specified.
    Subclass must implements this method.
  */
  abstract getStates(t?: number): ObjectState[];

  reset(initialObjStates?: ObjectState[]): void {
    this._t = 0.0;
    this._is_running = false;
    if (initialObjStates !== undefined) {
      this._initialObjStates = initialObjStates;
      this._objStates = clone(initialObjStates);
    } else {
      this._objStates = clone(this._initialObjStates);
    }
    this._ts.splice(0);
    console.log("simulator reset");
  }

  stop(): void {
    console.log("stopped running");
    this._is_running = false;
  }

  start(): void {
    console.log("started running");
    this._is_running = true;
  }

  setSystemParams(systemParams: Parameter[]): void {
    this._systemParams = clone(systemParams);
  }

  isRunning(): boolean {
    return this._is_running;
  }

  protected findObjIndex(name: string): number {
    for (let i = 0; i < this._objStates?.length; ++i) {
      if (this._objStates[i]["name"] === name) {
        return i;
      }
    }
    throw new Error(`Object with name ${name} not found.`);
  }

  protected findParamIndex(name: string): number {
    for (let i = 0; i < this._systemParams?.length; ++i) {
      if (this._systemParams[i]["id"] === name) {
        return i;
      }
    }
    throw new Error(`Parameter with name ${name} not found.`);
  }

  historicalData() {
    return {
      'time': this._ts
    }
  }
}
