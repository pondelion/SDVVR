import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid, { GridSize } from '@material-ui/core/Grid';

import { ChartType, ChartTypeList } from '../../types/Chart';
import Scatter from './chartjs/Scatter';


export interface Props {
  data: any,
  variables: string[],
};


const chart = (chartType: ChartType|null) => {
  return (
    <Scatter></Scatter>
  )
}

const numSelectableVariables = (chartType: ChartType|null|""): number => {
  if (chartType === null || chartType === "") {
    return 0;
  } else if (chartType === "LINE_3D" || chartType === "SCATTER_3D") {
    return 3;
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


const ConfigurableChart: React.FC<Props> = (props: Props) => {

  const [chartType, setChartType] = useState<ChartType|null>(null);
  const [variableX, setVariableX] = useState<string>(props.variables[0]);
  const [variableY, setVariableY] = useState<string>(props.variables[0]);
  const [variableZ, setVariableZ] = useState<string>(props.variables[0]);

  const nv = numSelectableVariables(chartType);

  return (
    <div>
      {headerWidgets(
        props.variables, nv, chartType, setChartType,
        variableX, variableY, variableZ,
        setVariableX, setVariableY, setVariableZ
      )}
      {chart(chartType)}
    </div>
  )
}

export default ConfigurableChart;
