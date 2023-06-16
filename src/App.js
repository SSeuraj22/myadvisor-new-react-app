import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Button2 from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


function App() {
  const localizer = momentLocalizer(moment);

  const myEventsList = [
    {
      title: 'Event 1',
      start: new Date(),
      end: new Date(),
    },
    // Additional events...
  ];

  confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
  });

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
          <Button variant="contained">Material UI</Button>
        </div>
        <div>
          <Button2 variant="success">React Bootstrap</Button2>
        </div>
        <div>
          <Icon>star</Icon>
          <Icon>add_circle</Icon>
          <Icon>elderly</Icon>
        </div>

        <div>
          <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>

        

      </header>

      
    </div>
  );
}

export default App;
