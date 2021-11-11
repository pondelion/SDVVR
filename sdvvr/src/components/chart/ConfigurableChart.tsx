import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid, { GridSize } from '@material-ui/core/Grid';

import { ChartType, ChartTypeList } from '../../types/Chart';
import { Scatter2D, DataType2D } from './chartjs/Scatter';
import { ChartContext, ChartContextValue } from '../../contexts/Contexts';
import { BaseSystem } from '../../simulator/systems/BaseSystem';


export type ConfigurableChartData = {
  [variable: string]: number[]
}


export interface Props {
  data: ConfigurableChartData,
  variables: string[],
  tag: string,
};


const chart = (
  chartType: ChartType|null,
  data: ConfigurableChartData,
  variableX: string, variableY: string, variableZ: string,
  tag: string,
) => {
  let data_ = [];
  if (variableX !== undefined && variableY !== undefined && variableZ !== undefined) {
    data_ = convertChartDataFormat(data, variableX, variableY, variableZ);
  } else if (variableX !== undefined && variableY !== undefined) {
    data_ = convertChartDataFormat(data, variableX, variableY);
  }
  if (chartType === "SCATTER_2D") {
    return (
      <Scatter2D
        data={data_}
        tag={tag}
      >
      </Scatter2D>
    )
  } else {
    return (
      <div style={{'color': "#FF0000"}}>Not Implemented</div>
    )
  }
}

const numSelectableVariables = (chartType: ChartType|null|""): number => {
  if (chartType === null || chartType === "") {
    return 0;
  } else if (chartType === "LINE_3D" || chartType === "SCATTER_3D") {
    return 3;
  } else if (chartType === "HISTOGRAM") {
    return 1;
  } else {
    return 2;
  }
}

const headerWidgets = (
  variables: string[],
  numVariables: number,
  chartType: ChartType|null|"",
  setChartType: React.Dispatch<React.SetStateAction<ChartType | null>>,
  variableX: string,
  variableY: string,
  variableZ: string,
  setVariableX: React.Dispatch<React.SetStateAction<string>>,
  setVariableY: React.Dispatch<React.SetStateAction<string>>,
  setVariableZ: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (numVariables === 0) {
    return (
      <Grid container spacing={0} direction="row">
        <Grid item xs={4}>
          <InputLabel htmlFor="chart-type-select">Chart Type</InputLabel>
          <Select
            onChange={(event: SelectChangeEvent) => {
              setChartType(event.target.value as ChartType);
            }}
            // displayEmpty
            label="chart_type"
            value={chartType as string}
            variant="outlined"
            style={{height: "30px", fontSize: "0.7em"}}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {ChartTypeList.map((v) => (
              <MenuItem value={v}>
                {v}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    )
  }

  const s = 12 / (numVariables+1);
  const xyzSelect = (label: string, variable: string, setVariable: React.Dispatch<React.SetStateAction<string>>) => {
    return (
      <Select
        onChange={(event: SelectChangeEvent) => {
          setVariable(event.target.value);
        }}
        // displayEmpty
        label={label}
        value={variable}
        variant="outlined"
        style={{height: "30px"}}
      >
        {variables.map((v) => (
          <MenuItem value={v}>
            {v}
          </MenuItem>
        ))}
      </Select>
    )
  }

  return (
    <Grid container spacing={0} direction="row">
      <Grid item xs={s as GridSize}>
        <InputLabel htmlFor="chart-type-select">Chart Type</InputLabel>
        <Select
          onChange={(event: SelectChangeEvent) => {
            setChartType(event.target.value as ChartType);
          }}
          // displayEmpty
          label="chart_type"
          value={chartType as string}
          variant="outlined"
          style={{height: "30px"}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {ChartTypeList.map((v) => (
            <MenuItem value={v}>
              {v}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={s as GridSize}>
        <InputLabel htmlFor="chart-type-select">X</InputLabel>
        {xyzSelect("variable_x", variableX, setVariableX)}
      </Grid>
      {
        (() => {
          if (chartType !== "HISTOGRAM") {
            return (
              <Grid item xs={s as GridSize}>
                <InputLabel htmlFor="chart-type-select">Y</InputLabel>
                {xyzSelect("variable_y", variableY, setVariableY)}
              </Grid>
            )
          }
        })()
      }
      {
        (() => {
          if (numVariables === 3) {
            return (
              <Grid item xs={s as GridSize}>
                <InputLabel htmlFor="chart-type-select">Z</InputLabel>
                {xyzSelect("variable_z", variableZ, setVariableZ)}
              </Grid>
            )
          }
        })()
      }
    </Grid>
  )
}


export const convertChartDataFormat = (
  data: ConfigurableChartData,
  x_variable: string,
  y_variable?: string,
  z_variable?: string
) => {
  return data[x_variable].map((v, idx) => {
    let d: any = {}
    d["x"] = v;
    if (y_variable) {
      d["y"] = data[y_variable][idx];
    }
    if (z_variable) {
      d["z"] = data[z_variable][idx];
    }
    return d;
  })
}


const ConfigurableChart: React.FC<Props> = (props: Props) => {

  const [chartType, setChartType] = useState<ChartType|null>("SCATTER_2D");
  const [variableX, setVariableX] = useState<string>(props.variables[0]);
  const [variableY, setVariableY] = useState<string>(props.variables[0]);
  const [variableZ, setVariableZ] = useState<string>(props.variables[0]);

  const contextValue = React.useContext(ChartContext);

  const nv = numSelectableVariables(chartType);

  if (contextValue !== undefined &&
      contextValue.onSceneUpdateChartCallbacks !== undefined) {
    const onSceneUpdate = contextValue.onSceneUpdateChartCallbacks;
    onSceneUpdate[props.tag] = (dt: number, simulator?: BaseSystem) => {
      if (contextValue !== undefined &&
          contextValue.chartRefs !== undefined &&
          contextValue.chartRefs[props.tag] &&
          simulator !== undefined) {
        let data_ = [];
        if (variableX !== undefined && variableY !== undefined && variableZ !== undefined) {
          data_ = convertChartDataFormat(simulator.historicalData(), variableX, variableY, variableZ);
        } else if (variableX !== undefined && variableY !== undefined) {
          data_ = convertChartDataFormat(simulator.historicalData(), variableX, variableY);
        }
        (contextValue.chartRefs[props.tag] as any).data.datasets[0].data = data_;//[{'x': Math.random(), 'y': Math.random()}];
        (contextValue.chartRefs[props.tag] as any).update();
      }
    }
  }

  return (
    <div>
      {headerWidgets(
        props.variables, nv, chartType, setChartType,
        variableX, variableY, variableZ,
        setVariableX, setVariableY, setVariableZ
      )}
      {chart(chartType, props.data, variableX, variableY, variableZ, props.tag)}
    </div>
  )
}

export default ConfigurableChart;
