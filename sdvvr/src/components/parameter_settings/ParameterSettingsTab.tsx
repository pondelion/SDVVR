import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clone from 'clone';

import { Parameter } from '../../types/Parameter';
import { ParameterContext, ParameterContextValue } from '../../contexts/Contexts';


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const createParameterWidgets = (
  params: Parameter[],
  category: string,
  contextValue: ParameterContextValue,
  autoApply: boolean,
) => {
  const categoryParams = params.filter(v => v.category === category);

  const paramChanged = (e: any) => {
    console.log(`new value : ${category} : ${e.target.name} : ${e.target.value}`);
    for (let i = 0; i < params.length; ++i) {
      if (params[i].category === category && params[i].id === e.target.name) {
        params[i].value = e.target.value;
        // setUpdatedParams(updatedParams);
        if (contextValue.onParameterChaneged !== undefined) {
          contextValue.onParameterChaneged(params, autoApply);
        }
        break;
      }
    }
  }

  return categoryParams.map(v => {
    return (
      <Paper style={{marginBottom: "10px", paddingTop: "20px", paddingLeft: "20px", paddingRight: "25px"}}>
        <Typography>{v.name}</Typography>
        {
          (() => {
            if (v.parameterType === "NUMBER_IMPUT") {
              return (
                <TextField
                  id={v.id}
                  label={v.id}
                  name={v.id}
                  // style={{ marginLeft: 8, marginRight: 8 }}
                  placeholder={ v.value as string }
                  defaultValue={ v.value as string }
                  // fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={paramChanged}
                />
              )
            } else if (v.parameterType === "SLIDER_FLOAT") {
              const maxValue = v.maxValue ? v.maxValue : 0;
              const minValue = v.minValue ? v.minValue : 0;
              return (
                <Slider
                  name={v.id}
                  defaultValue={v.value as number}
                  min={minValue}
                  max={maxValue}
                  step={0.002*(maxValue-minValue)}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  onChange={paramChanged}
                  // style={{ marginLeft: "20px", paddingRight: "30px" }}
                />
              )
            } else if (v.parameterType === "SLIDER_INT") {
              return (
                <Slider
                  name={v.id}
                  defaultValue={v.value as number}
                  min={v.minValue}
                  max={v.maxValue}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  onChange={paramChanged}
                  // style={{ marginLeft: "20px", paddingRight: "30px" }}
                />
              )
            }
          })()
        }
      </Paper>
    )
  })
}

type Props = {
}

const ParameterSettingsTab: React.FC<Props> = (props: Props) => {

  const contextValue = React.useContext(ParameterContext);
  const [autoApply, setAutoApply] = useState<boolean>(true);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleTagChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const paramsCp = clone(contextValue.params);
  const [updatedParams, setUpdatedParams] = useState<Parameter[]>(paramsCp);
  console.log(paramsCp)
  console.log(updatedParams)

  const uniqueCategories = Array.from((new Set(
    contextValue.params.map(v => v.category)
  ).values()))

  console.log(uniqueCategories);

  return (
    <div>
      {/* <Typography variant="h6" align="left" gutterBottom> */}
        Parameter Settings
      {/* </Typography> */}
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleTagChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="simple tabs example"
          style={{minHeight:"10%"}}
        >
          {
            uniqueCategories.map((category, idx) => {
              return (
                <Tab label={category} {...a11yProps(idx)} style={{minWidth:"20%", minHeight:"10%"}}/>
              )
            })
          }
          <Tab label="Params1" {...a11yProps(uniqueCategories.length)} style={{minWidth:"20%", minHeight:"10%"}}/>
        </Tabs>
      </AppBar>
      {
        uniqueCategories.map((category, idx) => {
          return (
            <TabPanel value={value} index={idx}>
              <div style={{overflowY: 'scroll', height: 0.52*window.innerHeight, margin: '0px'}}>
              {createParameterWidgets(
                contextValue.params, category, contextValue, autoApply
              )}
              </div>
            </TabPanel>
          )
        })
      }
      <TabPanel value={value} index={uniqueCategories.length}>
        <div style={{overflowY: 'scroll', height: 0.52*window.innerHeight, margin: '0px'}}>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
          <div><Button>tab111</Button></div>
        </div>
      </TabPanel>
      <Checkbox
        checked={autoApply}
        id="auto_apply_check"
        onChange={e => {setAutoApply(e.target.checked)}}
      />
      Auto Apply
      <Button variant='contained' style={{'float': "right", marginTop: "10px"}}>Apply</Button>
    </div>
  )
}

export default ParameterSettingsTab;
