import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Button2 from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBeer } from "react-icons/fa";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';


function App() {
  const localizer = momentLocalizer(moment);
  const notify = () => toast("Wow so hard!");

  const myEventsList = [
    {
      title: 'Event 1',
      start: new Date(),
      end: new Date(),
    },
    // Additional events...
  ];

  /*
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
  */

  const [startDate, setStartDate] = useState(new Date());

  const products = [ 
                      { id: 1, name: 'Product 1', price: 100 },
                      { id: 2, name: 'Product 2', price: 200 },
                      { id: 3, name: 'Product 3', price: 300 } 
                   ];

  const columns = [{
    dataField: 'id',
    text: 'Product ID'
  }, {
    dataField: 'name',
    text: 'Product Name'
  }, {
    dataField: 'price',
    text: 'Product Price'
  }];

   
    


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
        <div style={{ marginTop: '20px' }}>
          <Button variant="contained">Material UI</Button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button2 variant="success">React Bootstrap</Button2>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Icon>star</Icon>
          <Icon>add_circle</Icon>
          <Icon>elderly</Icon>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>

        <div style={{ marginTop: '20px' }}>
          <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>

        <div style={{ marginTop: '20px' }}>
          <button onClick={notify}>Notify!</button>
          <ToastContainer />
        </div>

        <div style={{ marginTop: '20px' }}>
          <h3>
              Lets go for a <FaBeer />?
          </h3>
        </div>

        <div style={{ marginTop: '20px' }}>
          <BootstrapTable keyField='id' data={ products } columns={ columns } />
        </div>
        

        

      </header>
    </div>
  );
}

export default App;
