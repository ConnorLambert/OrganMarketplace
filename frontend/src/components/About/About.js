import React, { Component } from 'react';
import { Container, Col, Row, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import vinceVaughn from "./vinceVaughn.jpg";

class About extends Component {
  render() {
    return(
      <div className="aboutContent">
        <br/>
        <Container>
          <Row>
            <Col>
              <h4> ---The Faces of Orgazon-- </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardImg top width="100%" src={vinceVaughn}/>
                <CardBody>
                  <CardTitle> Connor Lambert </CardTitle>
                  <CardSubtitle> -UI Design- </CardSubtitle>
                  <CardText> Insert something later that looks good I guess, hobbies or some stuff, enough to make it look filled. </CardText>
                  <Button color="info" href="https://github.com/ConnorLambert"> Github </Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src={vinceVaughn}/>
                <CardBody>
                  <CardTitle> Hayden Mclendon </CardTitle>
                  <CardSubtitle> -Backend Development- </CardSubtitle>
                  <CardText> Insert something later that looks good I guess, hobbies or some stuff, enough to make it look filled. </CardText>
                  <Button color="info" href="https://github.com/HaydernMcLendern"> Github </Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src={vinceVaughn}/>
                <CardBody>
                  <CardTitle> John Robinson </CardTitle>
                  <CardSubtitle> -Backend Development- </CardSubtitle>
                  <CardText> Insert something later that looks good I guess, hobbies or some stuff, enough to make it look filled. </CardText>
                  <Button color="info" href="https://github.com/uninformed"> Github </Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src={vinceVaughn}/>
                <CardBody>
                  <CardTitle> Rachel Tedder </CardTitle>
                  <CardSubtitle> -UI Design- </CardSubtitle>
                  <CardText> Rachel is a graduating senior at Southern Miss. She will graduate in May with a Bachelors in Computer Science and a minor in Math. She has a job lined up outside of Dallas, TX for a tech company called Vizient. </CardText>
                  <Button color="info" href="https://github.com/rtedder"> Github </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
