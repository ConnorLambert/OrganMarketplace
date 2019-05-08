import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Row, Col, Container, Table} from 'reactstrap';
import './Home.css'


export default class Home extends Component {
  render() {

    //example showing how variables can be used to create URLs and have the backend pull records
    //based off of the URL

    return (
      <div>
        <Jumbotron fluid className="HomeJumbotron">
          <h1> Welcome to Orgazon! </h1>
          <h5>A place to match hopeful organs with loving recipients.</h5>
          <hr className="my-2"/>
          <hr className="my-2"/>
          <Button color="info" tag={Link} to="/About"> About Us </Button> &nbsp;
        </Jumbotron>
        <Row>
          <Col xs="3"><h1>Statistics</h1></Col>
        </Row>
        <Table hover>
       <thead>
         <tr>
           <th>Type</th>
           <th>Stats</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>Number of Living Transplant Donors</td>
           <td>-</td>
         </tr>
         <tr>
           <td>Number of Deceased Transplant Donors</td>
           <td>-</td>
         </tr>
         <tr>
           <td>Number of Candidates on the Waiting List</td>
           <td>-</td>
         </tr>
       </tbody>
     </Table>
        </div>
    )
  }
}
