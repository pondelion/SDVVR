import React from 'react';
import * as THREE from 'three';
import { Vec3, ThreeObjects } from '../types/Three';
import { Parameter } from '../types/Parameter';
import { BaseSystem } from '../simulator/systems/BaseSystem';


export type ThreeContextValue = {
  width: number,
  height: number,
  camera: THREE.PerspectiveCamera,
  setCamera?: React.Dispatch<React.SetStateAction<THREE.PerspectiveCamera>>,
  onObjectsChanged?: (objs: ThreeObjects) => void,
  lookAt?: Vec3,
  bgColor?: THREE.Color,
  onUpdate?: (dt: number) => void,
  objects?: ThreeObjects,
  sceneResetFlag?: boolean,
  simulator?: BaseSystem,
  setSimulator?: React.Dispatch<React.SetStateAction<BaseSystem | undefined>>
};
export const ThreeContext = React.createContext<ThreeContextValue>({} as ThreeContextValue);


export type ParameterContextValue = {
  params: Parameter[],
  onParameterChaneged?: (params: Parameter[], autoApply: boolean) => void
}
export const ParameterContext = React.createContext<ParameterContextValue>({} as ParameterContextValue);
