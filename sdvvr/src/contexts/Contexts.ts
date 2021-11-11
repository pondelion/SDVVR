import React from 'react';
import * as THREE from 'three';
import { Vec3, ThreeObjects } from '../types/Three';
import { Parameter } from '../types/Parameter';
import { BaseSystem } from '../simulator/systems/BaseSystem';
import { ChartJSType } from '../types/Chart';


export type ThreeContextValue = {
  width: number,
  height: number,
  camera: THREE.PerspectiveCamera,
  setCamera?: React.Dispatch<React.SetStateAction<THREE.PerspectiveCamera>>,
  onObjectsChanged?: (objs: ThreeObjects) => void,
  lookAt?: Vec3,
  bgColor?: THREE.Color,
  onUpdate?: (dt: number) => void,
  onUpdateChart?: (dt: number) => void,
  objects?: ThreeObjects,
  sceneResetFlag?: boolean,
  simulator?: BaseSystem,
  setSimulator?: React.Dispatch<React.SetStateAction<BaseSystem | undefined>>,
};
export const ThreeContext = React.createContext<ThreeContextValue>({} as ThreeContextValue);


export type ParameterContextValue = {
  params: Parameter[],
  onParameterChaneged?: (params: Parameter[], autoApply: boolean) => void
}
export const ParameterContext = React.createContext<ParameterContextValue>({} as ParameterContextValue);


export type ChartContextValue = {
  onSceneUpdateChartCallbacks?: {[tag: string]: (dt: number, simulator?: BaseSystem) => void},
  setOnSceneUpdateChartCallbacks?:  React.Dispatch<React.SetStateAction<{[tag: string]: (dt: number, simulator?: BaseSystem) => void}>>,
  chartRefs?: {[tag: string]: React.Ref<ChartJSType>},
  setChartRefs?: React.Dispatch<React.SetStateAction<{[tag: string]: React.Ref<ChartJSType>}>>
}
export const ChartContext = React.createContext<ChartContextValue>({} as ChartContextValue);
