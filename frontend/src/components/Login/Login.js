import React, { Component } from 'react';
import { Button, Input, Container, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  submitForm = () => {
    var data = this.state
    console.log(data);
      return fetch('/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        this.props.history.push('/');
      })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const {email, password} = this.state;

    return(
      <div>
        <Container>

            <legend> Login </legend><br/>
              <form>
                <Col>
                <label htmlFor="email"> Email: </label> &nbsp;
                  <Input type="email" name="email" value={email} onChange={this.onChange}/>
                </Col>
                <Col>
                <label htmlFor="password"> Password: </label> &nbsp;
                  <Input type="password" name="password" value={password} onChange={this.onChange}/>

                </Col>
                <Col>
                  <br/>
                  &nbsp;<Button color="info" onClick={this.submitForm}> Login </Button>&nbsp;
                </Col>
              </form>
        </Container>
      </div>
    )
  }
}

export default Login;
