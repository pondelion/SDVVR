import React from 'react';
import * as THREE from 'three';
import { Vec3, ThreeObjects } from '../types/Three';
import { Parameter } from '../types/Parameter';


export type ThreeContextValue = {
  width: number,
  height: number,
  cameraPos: Vec3,
  onObjectsChanged?: (objs: ThreeObjects) => void,
  lookAt?: Vec3,
  bgColor?: THREE.Color,
  onUpdate?: (dt: number) => void,
  objects?: ThreeObjects,
};
export const ThreeContext = React.createContext<ThreeContextValue>({} as ThreeContextValue);


export type ParameterContextValue = {
  params: Parameter[],
}
export const ParameterContext = React.createContext<ParameterContextValue>({} as ParameterContextValue);
