import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import './Home.css'


export default class Home extends Component {
  render() {
    return (
        <Jumbotron fluid className="HomeJumbotron">
          <h1> Welcome to Orgazon! </h1>
          <h5>A place to match hopeful organs with loving recepients.</h5>
          <hr className="my-2"/>
          <hr className="my-2"/>
          <Button color="info" tag={Link} to="/About"> About Us </Button>
        </Jumbotron>
    )
  }
}
