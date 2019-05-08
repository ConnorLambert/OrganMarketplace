import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Login from './components/Login/Login';
import Data from './components/Data/Data';
import Patient from './components/Patient/Patient';
import Search from './components/Search/Search';
import Register from './components/Register/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route path="/data" component={Data}/>
          <Route path="/patient" component={Patient}/>
          <Route path="/search" component={Search}/>
          <Route path="/register" component={Register}/>
        </div>
      </Router>
    );
  }
}

export default App;
