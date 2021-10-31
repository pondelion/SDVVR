import React from 'react';
import { Container } from '@material-ui/core';
// import Paper from '@mui/material/Paper';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@mui/material/Button';

import SideMenu from '../layouts/SideMenu';
import ParameterSettingsTab from '../components/parameter_settings/ParameterSettingsTab';
import CoordinateAxisScene from '../components/scene/CoordinateAxisScene';
import TestBoxPlaneScene from '../components/scene/TestBoxPlaneScene';
import { ThreeContext } from '../contexts/Contexts';
import { ThreeObjects } from '../types/Three';
import { Scatter } from '../components/chart/chartjs/Scatter';


type Props = {
}

const MainDashboard: React.FC<Props> = (props: Props) => {

  const [scenes, setScenes] = React.useState<string[]>(["CoordinateAxisScene", "TestBoxPlaneScene", "Scene3"]);
  const [selectedScene, setSelectedScene] = React.useState<string>("TestBoxPlaneScene");
  const [threeObjs, setThreeObjs] = React.useState<ThreeObjects>([]);

  return (
    <div>
      <SideMenu />
      <Container maxWidth='xl'>
        <Grid container spacing={2} direction="row" alignItems="center">
          <Grid item xs={12} md={11} lg={11} style={{padding: "0px 0px 0px 60px"}}>
            <InputLabel htmlFor="scene-select">SCENE</InputLabel>
            <Select
              onChange={(event: SelectChangeEvent) => {
                setThreeObjs([]);
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
              {scenes.map((scene) => (
                <MenuItem value={scene}>
                  {scene}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={1} lg={1} style={{padding: "0px 60px 0px 0px"}}>
            <Button variant="contained">Run</Button>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Paper
              style={{padding: "10px 50px 30px", margin: "0px 0px 0px 40px", height: 550}}
            >
              {`3DViewer / ${selectedScene}`}
              <ThreeContext.Provider value={{
                width: 0.55*window.innerWidth,
                height: 0.6*window.innerHeight,
                cameraPos: {x: 6, y: 6, z: 6},
                objects: threeObjs,
              }}>
                {
                  (() => {
                    if (selectedScene === "CoordinateAxisScene") {
                      return <CoordinateAxisScene/>
                    } else if (selectedScene === "TestBoxPlaneScene") {
                      return <TestBoxPlaneScene/>
                    }
                  })()
                }
              </ThreeContext.Provider>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper style={{padding: "5px 5px 5px", margin: "0px 40px 0px 0px", height: 550}}>
              <ParameterSettingsTab />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{padding: "10px 50px 30px", margin: "0px 40px 0px 40px", height: 300}}>
              Chart
              <Scatter />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default MainDashboard;
