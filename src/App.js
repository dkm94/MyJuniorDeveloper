import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./Components/Nav-loggedin";
import Home from "./Components/Home";
import Profile from "./Components/Profile/Profile";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (

    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
