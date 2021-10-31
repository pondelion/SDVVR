import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';


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

type Props = {
}

const ParameterSettingsTab: React.FC<Props> = (props: Props) => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

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
          <Tab label="Params1" {...a11yProps(0)} style={{minWidth:"20%", minHeight:"10%"}}/>
          <Tab label="Params2" {...a11yProps(1)} style={{minWidth:"20%", minHeight:"10%"}}/>
          <Tab label="Params3" {...a11yProps(2)} style={{minWidth:"20%", minHeight:"10%"}}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        tab111
      </TabPanel>
      <TabPanel value={value} index={1}>
        tab222
      </TabPanel>
      <TabPanel value={value} index={2}>
        tab333
      </TabPanel>
    </div>
  )
}

export default ParameterSettingsTab;
