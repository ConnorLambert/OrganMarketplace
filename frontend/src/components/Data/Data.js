import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { Container, Row, Col, Button, Nav, NavLink, NavItem } from 'reactstrap';
import classnames from 'classnames';

class Data extends Component {
render() {
  return (
    <div className="aboutContent" topw>

    <Nav>
          <NavItem>
            <NavLink className="linkText active" tag={Link} to="/return">Return</NavLink>
          </NavItem>
    </Nav>
      <Container>


      <legend>Export Records</legend>
      <br/>
      <Row>
        <Col>
          <Button color="secondary" onClick={() => window.open("localhost:3001/export/cand_liin_m")} >Candidate </Button>&nbsp;
        </Col>
        </Row>
        <br/>
        <Row>
        <Col>
          <Button color="secondary" onClick={() => window.open("localhost:3001/export/donor_live_m")} >Live Donor </Button>&nbsp;
        </Col>
        </Row>
        <br/>
        <Row>
        <Col>
          <Button color="secondary" onClick={() => window.open("localhost:3001/export/donor_deceased_m")}  >Deceased Donor</Button>&nbsp;
        </Col>
        </Row>
        <br/>
        <Row>
        <Col>
          <Button color="secondary" onClick={() => window.open("localhost:3001/export/tx_li_m")} >Transplant </Button>&nbsp;
        </Col>
        </Row>
        <br/>
        <Row>
        <Col>
          <Button color="secondary" onClick={() => window.open("localhost:3001/export/txf_li_m")} >Transplant Follow-up </Button>&nbsp;
        </Col>
        </Row>
      </Container>
    </div>
  );
}
}



export default Data;
