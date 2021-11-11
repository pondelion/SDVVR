import { Scatter as ChartJSScatter } from 'react-chartjs-2';


export type ChartType =
  "SCATTER_2D" |
  "SCATTER_3D" |
  "LINE_2D" |
  "LINE_3D" |
  "HISTOGRAM"
;

export const ChartTypeList = [
  "SCATTER_2D",
  "SCATTER_3D",
  "LINE_2D",
  "LINE_3D",
  "HISTOGRAM"
]

export type ChartJSType = typeof ChartJSScatter;
