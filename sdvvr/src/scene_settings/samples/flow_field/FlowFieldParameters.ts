import { Parameter, ParameterType } from '../../../types/Parameter';


export const FlowFieldParameters: Parameter[] = [
  {
    category: "GENERAL",
    name: "重力加速度",
    id: "gravitational_acceleration",
    parameterType: "SLIDER_FLOAT",
    value: 9.8,
    minValue: 0.0,
    maxValue: 100,
  },
  {
    category: "GENERAL",
    name: "ボールの半径",
    id: "ball_radius",
    parameterType: "SLIDER_FLOAT",
    value: 0.5,
    minValue: 0.1,
    maxValue: 10,
  },
  {
    category: "GENERAL",
    name: "空気抵抗係数",
    id: "air_resistance_coefficient",
    parameterType: "SLIDER_FLOAT",
    value: 0.0,
    minValue: 0.0,
    maxValue: 10.0,
  },
  {
    category: "GENERAL",
    name: "質量",
    id: "ball_mass",
    parameterType: "SLIDER_FLOAT",
    value: 1.0,
    minValue: 0.1,
    maxValue: 50.0,
  },
]
