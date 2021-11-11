import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
// import Paper from '@mui/material/Paper';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@mui/material/Button';
import * as THREE from 'three';

import SideMenu from '../layouts/SideMenu';
import ParameterSettingsTab from '../components/parameter_settings/ParameterSettingsTab';
import CoordinateAxisScene from '../components/scene/CoordinateAxisScene';
import TestBoxPlaneScene from '../components/scene/TestBoxPlaneScene';
import FlowFieldScene from '../components/scene/FlowFieldScene';
import { ThreeContext, ParameterContext, ChartContext } from '../contexts/Contexts';
import { ThreeObjects, Vec3 } from '../types/Three';
import ConfigurableChart from '../components/chart/ConfigurableChart';
import { FreeFallingParameters } from '../scene_settings/samples/free_falling/FreeFallingParameters';
import BouncingBallScene from '../components/scene/BouncingBallScene';
import { BaseSystem } from '../simulator/systems/BaseSystem';
import { Parameter } from '../types/Parameter';
import { ChartJSType } from '../types/Chart';
import { FlowFieldParameters } from '../scene_settings/samples/flow_field/FlowFieldParameters';


type Props = {
}

const Simulation: React.FC<Props> = (props: Props) => {

  const [scenes, setScenes] = React.useState<string[]>(
    ["CoordinateAxisScene", "TestBoxPlaneScene", "BouncingBallScene", "FlowFieldScene"]
  );
  const [selectedScene, setSelectedScene] = React.useState<string>("BouncingBallScene");
  const [threeObjs, setThreeObjs] = React.useState<ThreeObjects>([]);
  const [simulator, setSimulator] = React.useState<BaseSystem>();
  const [camera, setCamera] = React.useState<THREE.PerspectiveCamera>((() => {
    const cam = new THREE.PerspectiveCamera(
      45,
      (0.55*window.innerWidth) / ( 0.6*window.innerHeight),
      0.1,
      1000
    )
    cam.position.x = 10.0;
    cam.position.y = 10.0;
    cam.position.z = 10.0;
    return cam
  })());
  const [runStopBtnText, setRunStopBtnText] = React.useState<"RUN"|"STOP">("RUN");
  const [selectableVariables, setSelectableVariables] = React.useState<string[]>([]);
  const [chartRefs, setChartRefs] = React.useState<{[tag: string]: React.Ref<ChartJSType>}>({});
  const [onSceneUpdateChartCallbacks, setOnSceneUpdateChartCallbacks] =
      React.useState<{[tag: string]: (dt: number, simulator?: BaseSystem) => void}>({});

  const scene2Params = (sceneName: string) => {
    if (sceneName === "BouncingBallScene") {
      return FreeFallingParameters;
    } else if (sceneName === "FlowFieldScene") {
      return FlowFieldParameters;
    } else {
      return [];
    }
  }

  useEffect(() => {
    if (simulator) {
      const data = simulator.historicalData();
      const varibles: string[] = Object.keys(data);
      setSelectableVariables(varibles);
      console.log(varibles)
    }
  }, [simulator]);

  let cnt = 0;
  const onSceneUpdate = (dt: number) => {
    // console.log(dt);
    cnt += 1;
    if (simulator && simulator.isRunning() && cnt % 10 == 0) {
      if (onSceneUpdateChartCallbacks["chart1"]) {
        onSceneUpdateChartCallbacks["chart1"](dt, simulator);
      }
      if (onSceneUpdateChartCallbacks["chart2"]) {
        onSceneUpdateChartCallbacks["chart2"](dt, simulator);
      }
      if (onSceneUpdateChartCallbacks["chart3"]) {
        onSceneUpdateChartCallbacks["chart3"](dt, simulator);
      }
    }
  }

  const clearScene = () => {
    setThreeObjs([]);
    setSimulator(undefined);
    setSelectableVariables([]);
  }

  return (
    <div>
      <SideMenu />
      <Container maxWidth='xl'>
        <Grid container spacing={2} direction="row" alignItems="center">
          <Grid item xs={12} md={10} lg={10} style={{padding: "0px 0px 0px 60px"}}>
            <InputLabel htmlFor="scene-select">SCENE</InputLabel>
            <Select
              onChange={(event: SelectChangeEvent) => {
                clearScene();
                setSelectedScene(event.target.value);
              }}
              // displayEmpty
              label="Scene"
              value={selectedScene}
              variant="outlined"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <ListSubheader style={{color: '#0000FF'}}>--Frontend Calculated--</ListSubheader>
              {scenes.map((scene) => (
                <MenuItem value={scene}>
                  {scene}
                </MenuItem>
              ))}
              <ListSubheader style={{color: '#0000FF'}}>--Backend Calculated--</ListSubheader>
            </Select>
          </Grid>
          <Grid item xs={12} md={2} lg={2} style={{padding: "0px 60px 0px 0px"}}>
            <Button
              variant="contained"
              onClick={(event) => {
                if (simulator !== undefined) {
                  console.log("run button")
                  if (simulator.isRunning()) {
                    simulator.stop();
                    setRunStopBtnText("RUN");
                  } else {
                    simulator.start();
                    setRunStopBtnText("STOP");
                  }
                }
              }}
              style={{marginRight: "10px"}}
            >
              {runStopBtnText}
            </Button>
            <Button variant="contained" onClick={(event) => {
              if (simulator !== undefined) {
                simulator.reset();
                setRunStopBtnText("RUN");
              }
            }}>
              Reset
            </Button>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Paper
              style={{padding: "10px 50px 30px", margin: "0px 0px 0px 40px", height: 550}}
            >
              {`3DViewer / ${selectedScene}`}
              <ThreeContext.Provider value={{
                width: 0.55*window.innerWidth,
                height: 0.6*window.innerHeight,
                camera: camera,
                setCamera: setCamera,
                objects: threeObjs,
                simulator: simulator,
                setSimulator: setSimulator,
                onUpdateChart: onSceneUpdate,
              }}>
                {
                  (() => {
                    if (selectedScene === "CoordinateAxisScene") {
                      return <CoordinateAxisScene/>
                    } else if (selectedScene === "TestBoxPlaneScene") {
                      return <TestBoxPlaneScene/>
                    } else if (selectedScene === "BouncingBallScene") {
                      return <BouncingBallScene />
                    } else if (selectedScene === "FlowFieldScene") {
                      return <FlowFieldScene />
                    }
                  })()
                }
              </ThreeContext.Provider>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper style={{padding: "5px 5px 5px", margin: "0px 40px 0px 0px", height: 550}}>
              <ParameterContext.Provider value={{
                params: scene2Params(selectedScene),
                onParameterChaneged: (params: Parameter[], autoApply: boolean) => {
                  console.log(`param changed : ${autoApply}`)
                  console.log(params)
                  if (simulator !== undefined && autoApply) {
                    console.log('Setting params')
                    simulator.setSystemParams(params);
                  }
                }
              }}>
                <ParameterSettingsTab />
              </ParameterContext.Provider>
            </Paper>
          </Grid>
          {/* Chart */}
          <ChartContext.Provider value={{
            onSceneUpdateChartCallbacks: onSceneUpdateChartCallbacks,
            setOnSceneUpdateChartCallbacks: setOnSceneUpdateChartCallbacks,
            chartRefs: chartRefs,
            setChartRefs: setChartRefs,
          }}>
            <Grid item xs={4}>
              <Paper style={{padding: "10px 10px 10px", margin: "0px 0px 0px 40px", height: 300}}>
                <ConfigurableChart
                  data={(() => {
                    if (simulator) {
                      const data: any = simulator.historicalData();
                      console.log(data)
                      return data;
                    } else {
                      return {};
                    }
                  })()}
                  variables={selectableVariables}
                  tag="chart1"
                />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={{padding: "10px 50px 10px", margin: "0px 0px 0px 0px", height: 300}}>
              <ConfigurableChart
                  data={(() => {
                    if (simulator) {
                      const data: any = simulator.historicalData();
                      console.log(data)
                      return data;
                    } else {
                      return {};
                    }
                  })()}
                  variables={selectableVariables}
                  tag="chart2"
                />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={{padding: "10px 10px 10px", margin: "0px 40px 0px 0px", height: 300}}>
              <ConfigurableChart
                  data={(() => {
                    if (simulator) {
                      const data: any = simulator.historicalData();
                      return data;
                    } else {
                      return {};
                    }
                  })()}
                  variables={selectableVariables}
                  tag="chart3"
                />
              </Paper>
            </Grid>
          </ChartContext.Provider>
        </Grid>
      </Container>
    </div>
  )
}

export default Simulation;
