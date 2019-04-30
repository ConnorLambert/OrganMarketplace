import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import './Home.css'


export default class Home extends Component {
  render() {

    //example showing how variables can be used to create URLs and have the backend pull records
    //based off of the URL
    var donor_id = "3622031";
    var donor_url = "/Patient/livedonor/" + donor_id

    var candidate_id = "1235470";
    var candidate_url = "/Patient/candidate/" + candidate_id

    var donor_deceased_id = "8000011";
    var donor_deceased_url = "/Patient/deceaseddonor/" + donor_deceased_id

    return (
        <Jumbotron fluid className="HomeJumbotron">
          <h1> Welcome to Orgazon! </h1>
          <h5>A place to match hopeful organs with loving recepients.</h5>
          <hr className="my-2"/>
          <hr className="my-2"/>
          <Button color="info" tag={Link} to="/About"> About Us </Button> &nbsp;
          <Button color="info" tag={Link} to="/Data"> Data </Button>
          <Button color="info" tag={Link} to="/Patient/livedonor/3605829"> Live Donor </Button>
          <Button color="info" tag={Link} to={donor_url}> Live Donor Dynamic</Button>
          <Button color="info" tag={Link} to={candidate_url}> Candidate </Button>
          <Button color="info" tag={Link} to={donor_deceased_url}>Deceased Donor </Button>
        </Jumbotron>
    )
  }
}
