import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from '../login/login';
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
