import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
//import "./assets/css/bootstrap.min.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
//import reportWebVitals from "./reportWebVitals";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

//reportWebVitals();
