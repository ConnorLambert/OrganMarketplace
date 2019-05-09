import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Return extends Component {
  render() {

    //example showing how variables can be used to create URLs and have the backend pull records
    //based off of the URL

    return (
      <div>
      <Nav>
            <NavItem>
              <Button color="danger" tag={Link} to="/"> Logout </Button> &nbsp;
            </NavItem>
      </Nav>

      <Container>

        <legend>PRIVATE ACCESS: Liver Transplant Data</legend>
        <br/>
        <Row>
        <Col>
          <Button color="info" tag={Link} to="/Register"> Register Candidate </Button> &nbsp;
          </Col>
          </Row>
          <br/>
          <Row>
          <Col>
          <Button color="info" tag={Link} to="/Search"> Search </Button> &nbsp;
          </Col>
          </Row>
          <br/>
          <Row>
          <Col>
          <Button color="info" tag={Link} to="/Data"> Export Data </Button> &nbsp;
          </Col>
          </Row>
</Container>

        </div>
    )
  }
}
export default Return;
