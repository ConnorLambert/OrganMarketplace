import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class Login extends Component {
  render() {
    return(
      <Form>
        <FormGroup>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter username" />
          </Col>
        </FormGroup>
        <FormGroup>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
          </Col>
        </FormGroup>
        <Button tag={Link} to="/Data">Sign in</Button>
      </Form>
    )
  }
}

export default Login;
