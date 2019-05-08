import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router'

class Data extends Component {

render() {
  return (
    <div className="aboutContent" topw>
      <Container>
      <br/><br/>
      <legend>Export Records</legend>
      <br/><br/>
      <Row>
        <Col>
          <Button color="info" onClick={() => window.open("localhost:3001/export/cand_liin_m")} >Candidate </Button>&nbsp;
        </Col>
        <Col>
          <Button color="info" onClick={() => window.open("localhost:3001/export/donor_live_m")} >Live Donor </Button>&nbsp;
        </Col>
        <Col>
          <Button color="info" onClick={() => window.open("localhost:3001/export/donor_deceased_m")}  >Deceased Donor</Button>&nbsp;
        </Col>
        <Col>
          <Button color="info" onClick={() => window.open("localhost:3001/export/tx_li_m")} >Transfers </Button>&nbsp;
        </Col>
        <Col>
          <Button color="info" onClick={() => window.open("localhost:3001/export/txf_li_m")} >Transfer Follow-up </Button>&nbsp;
        </Col>
        </Row>
      </Container>
    </div>
  );
}
}



export default Data;
