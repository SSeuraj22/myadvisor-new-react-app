import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Button variant="contained">Hello World</Button>
        </div>
        <div>
          <Icon>star</Icon>
          <Icon>add_circle</Icon>
          <Icon>elderly</Icon>
        </div>

      </header>
    </div>
  );
}

export default App;
