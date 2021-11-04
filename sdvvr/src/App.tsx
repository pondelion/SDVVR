import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { darkTheme } from './theme/MaterialUI';
import PhysicalSimulation from './pages/PhysicalSimulation';


function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={darkTheme}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" component={PhysicalSimulation} exact />
          </Switch>
          <Switch>
            <Route path="/physical_simulation" component={PhysicalSimulation} exact />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
