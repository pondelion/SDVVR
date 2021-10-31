import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { darkTheme } from './theme/MaterialUI';
import MainDashboard from './pages/MainDashboard';


function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={darkTheme}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" component={MainDashboard} exact />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
