import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from '../login/loginComponent';
import './styles/App.scss';

function App() {
  return (

    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route path="/">
              <Login />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

          </Switch>
        </Router>
      </div>
    </div >
  );
}

export default App;
