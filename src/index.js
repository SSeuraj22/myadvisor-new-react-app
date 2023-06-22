import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
//import reportWebVitals from './reportWebVitals';
import "./assets/css/bootstrap.min.css";
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

/*
ReactDOM.render(
  <App />, document.getElementById('root')
);

/*

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
