import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Slider from '@mui/material/Slider';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { Parameter, ParameterType } from '../../types/Parameter';
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
        <Box p={3}>
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

const createParameterWidgets = (params: Parameter[], category: string) => {
  const categoryParams = params.filter(v => v.category === category);

  return categoryParams.map(v => {
    return (
      <Paper style={{marginBottom: "10px", paddingLeft: "10px", paddingRight: "20px"}}>
        <Typography>{v.name}</Typography>
        {
          (() => {
            if (v.parameterType === "NUMBER_IMPUT") {
              return (
                <TextField
                  id={v.id}
                  label={v.id}
                  // style={{ marginLeft: 8, marginRight: 8 }}
                  placeholder={ v.defaultValue as string }
                  defaultValue={ v.defaultValue as string }
                  // fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={(event: any) => { }}
                />
              )
            } else if (v.parameterType === "SLIDER_FLOAT") {
              const maxValue = v.maxValue ? v.maxValue : 0;
              const minValue = v.minValue ? v.minValue : 0;
              return (
                <Slider
                  defaultValue={v.defaultValue as number}
                  min={minValue}
                  max={maxValue}
                  step={0.002*(maxValue-minValue)}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  // style={{ marginLeft: "20px", paddingRight: "30px" }}
                />
              )
            } else if (v.parameterType === "SLIDER_INT") {
              return (
                <Slider
                  defaultValue={v.defaultValue as number}
                  min={v.minValue}
                  max={v.maxValue}
                  aria-label="Default"
                  valueLabelDisplay="auto"
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

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

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
          onChange={handleChange}
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
              <div style={{overflowY: 'scroll', height: 0.48*window.innerHeight, margin: '0px'}}>
              {createParameterWidgets(contextValue.params, category)}
              </div>
            </TabPanel>
          )
        })
      }
      <TabPanel value={value} index={uniqueCategories.length}>
        <div style={{overflowY: 'scroll', height: 0.48*window.innerHeight, margin: '0px'}}>
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
      <Button variant='contained'>Apply Settings</Button>
    </div>
  )
}

export default ParameterSettingsTab;
