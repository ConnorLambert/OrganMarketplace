import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'reactstrap';
import './Home.css'


export default class Home extends Component {
  render() {
    return (
        <Jumbotron fluid className="HomeJumbotron">
          <h2> Welcome to Orgazon! </h2>
          <p>A place to match hopeful organs with loving recepients.</p>
        </Jumbotron>
    )
  }
}
