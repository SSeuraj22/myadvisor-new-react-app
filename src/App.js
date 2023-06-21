import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Main from './components/Main';

import './App.css';

function App () {

  return (
      <Router>
        <Routes>
          <Route
            path="/"
            render={(props) => <Main {...props} />}
          />
        </Routes>
      </Router>
  );
}

export default App;
