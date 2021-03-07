import logo from './logo.svg';
// import TextField from '@material-ui/core/TextField';
import { createMuiTheme, Typography } from '@material-ui/core';
import './App.css';
import { Login } from './components';

import { ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36
    }
  },
  palette: {
    primary: {
      main: '#020100',
    },
    secondary: {
      main: '#a9ff27',
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h1" color="primary">Shrine</Typography>
          <Login />




        </header>
      </div>
    </ThemeProvider>

  );
}

export default App;
