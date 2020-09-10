import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Profile from "./Components/Profile/Profile";
import Dashboard from "./Components/Dashboard/Dashboard";
import Search from "./Components/Search/Search";
import Register from "./Components/Register/Register";

function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard/:id" component={Dashboard} />
          <Route path="/search" component={Search} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
