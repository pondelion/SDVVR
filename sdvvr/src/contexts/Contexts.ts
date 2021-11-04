import React from 'react';
import * as THREE from 'three';
import { PosVec3, ThreeObjects } from '../types/Three';
import { Parameter } from '../types/Parameter';


export type ThreeContextValue = {
  width: number,
  height: number,
  cameraPos: PosVec3,
  onObjectsChanged?: (objs: ThreeObjects) => void,
  lookAt?: PosVec3,
  bgColor?: THREE.Color,
  onUpdate?: (dt: number) => void,
  objects?: ThreeObjects,
};
export const ThreeContext = React.createContext<ThreeContextValue>({} as ThreeContextValue);


export type ParameterContextValue = {
  params: Parameter[],
}
export const ParameterContext = React.createContext<ParameterContextValue>({} as ParameterContextValue);
