import { BaseSystem, ObjectState } from "./BaseSystem";
import { FreeFallingObjects } from "../../scene_settings/samples/free_falling/FreeFallingObjects";
import { FreeFallingParameters } from "../../scene_settings/samples/free_falling/FreeFallingParameters";


export class BouncingBallSystem extends BaseSystem {

  private _ballObjIdx: number;
  private _groundObjIdx: number;

  private _gaCoefIdx: number;
  private _ballRadiusIdx: number;
  private _groundHeightIdx: number;
  private _restitutionCoeffIdx: number;
  private _airRessistanceCoefIdx: number;
  private _initialHeightIdx: number;
  private _massIdx: number;

  private _ballPosys: number[] = [];
  private _ballVelys: number[] = [];
  private _energies: number[] = [];

  constructor() {
    super(FreeFallingObjects, FreeFallingParameters);
    this._ballObjIdx = this.findObjIndex("ball1");
    this._groundObjIdx = this.findObjIndex("ground1");

    this._gaCoefIdx = this.findParamIndex("gravitational_acceleration");
    this._groundHeightIdx = this.findParamIndex("ground_height");
    this._ballRadiusIdx = this.findParamIndex("ball_radius");
    this._restitutionCoeffIdx = this.findParamIndex("restitution_coefficient");
    this._airRessistanceCoefIdx = this.findParamIndex("air_resistance_coefficient");
    this._initialHeightIdx = this.findParamIndex("initial_height");
    this._massIdx = this.findParamIndex("ball_mass");
    this.reset();
  }

  override _update(dt: number): void {
    if (!this._is_running) {
      return;
    }
    const mass = this._systemParams[this._massIdx].value as number;
    // Update ball state by euler method.
    this._objStates[this._ballObjIdx].vel.y += dt*this.gravitationalForce()/mass;
    this._objStates[this._ballObjIdx].pos.y += dt*this._objStates[this._ballObjIdx].vel.y;
    this._objStates[this._ballObjIdx].pos.x += dt*this._objStates[this._ballObjIdx].vel.x;
    this._objStates[this._ballObjIdx].pos.z += dt*this._objStates[this._ballObjIdx].vel.z;
    const ballRadius = this._systemParams[this._ballRadiusIdx].value as number;
    const groundHeight = this._systemParams[this._groundHeightIdx].value as number;
    const restitutionCoeff = this._systemParams[this._restitutionCoeffIdx].value as number;
    if (this._objStates[this._ballObjIdx].pos.y - ballRadius < groundHeight) {
      this._objStates[this._ballObjIdx].pos.y = groundHeight + ballRadius;
      this._objStates[this._ballObjIdx].vel.y *= -restitutionCoeff;
    }
    this._ballPosys.push(this._objStates[this._ballObjIdx].pos.y);
    if (this._ballPosys.length > this.MAX_QUEUE) {
      this._ballPosys.shift();
    }
    this._ballVelys.push(this._objStates[this._ballObjIdx].vel.y);
    if (this._ballVelys.length > this.MAX_QUEUE) {
      this._ballVelys.shift();
    }
    this._energies.push(this.energy());
    if (this._energies.length > this.MAX_QUEUE) {
      this._energies.shift();
    }
  }

  getStates(t?: number): ObjectState[] {
    if (t !== undefined) {
      throw new Error("Method not implemented.");
    }
    // always return latest states for now.
    return this._objStates;
  }

  getBallHeight(): number {
    return this._objStates[this._ballObjIdx].pos.y;
  }

  getGroundHeight(): number {
    return this._systemParams[this._groundHeightIdx].value as number;
  }

  getBallRadius(): number {
    return this._systemParams[this._ballRadiusIdx].value as number;
  }

  private gravitationalForce(): number {
    // Fy = -mg - k*vy^2
    const mass = this._systemParams[this._massIdx].value as number;
    const gaCoef = this._systemParams[this._gaCoefIdx].value as number;
    const airRessistanceCoef = this._systemParams[this._airRessistanceCoefIdx].value as number;
    return -mass*gaCoef - airRessistanceCoef*this._objStates[this._ballObjIdx].vel.y**2;
  }

  private energy(): number {
    const mass = this._systemParams[this._massIdx].value as number;
    const gaCoef = this._systemParams[this._gaCoefIdx].value as number;
    return 0.5*mass*this._objStates[this._ballObjIdx].vel.y**2 + mass*gaCoef*this._objStates[this._ballObjIdx].pos.y
  }

  override reset(): void {
    super.reset();
    if (this._ballObjIdx !== undefined) {
      this._objStates[this._ballObjIdx].pos.y = parseFloat(this._systemParams[this._initialHeightIdx].value as string);
      this._objStates[this._ballObjIdx].vel.y = 0.0;
    }
    this._ballVelys.splice(0);
    this._ballPosys.splice(0);
  }

  override historicalData() {
    let data: any = super.historicalData();
    data['ball_pos_y'] = this._ballPosys;
    data['ball_vel_y'] = this._ballVelys;
    data['energy'] = this._energies;
    return data;
  }
}