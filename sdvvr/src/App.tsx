import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { darkTheme } from './theme/MaterialUI';
import Simulation from './pages/Simulation';


function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={darkTheme}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" component={Simulation} exact />
          </Switch>
          <Switch>
            <Route path="/simulation" component={Simulation} exact />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
