import { Parameter, ParameterType } from '../../../types/Parameter';


export const FreeFallingParameters: Parameter[] = [
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
    name: "初期位置(高さ)",
    id: "initial_height",
    parameterType: "NUMBER_IMPUT",
    value: 6,
  },
  {
    category: "GENERAL",
    name: "地面の高さ",
    id: "ground_height",
    parameterType: "SLIDER_FLOAT",
    value: 0.0,
    minValue: -40.0,
    maxValue: 40.0,
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
    name: "地面との反発係数",
    id: "restitution_coefficient",
    parameterType: "SLIDER_FLOAT",
    value: 0.8,
    minValue: 0.0,
    maxValue: 1,
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
    name: "ボール質量",
    id: "ball_mass",
    parameterType: "SLIDER_FLOAT",
    value: 1.0,
    minValue: 0.1,
    maxValue: 50.0,
  },
]
