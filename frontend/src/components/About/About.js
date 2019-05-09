import React, { Component } from 'react';
import { Container, Col, Row, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import vinceVaughn from "./vinceVaughn.jpg";
import haydern from "./haydern.jpg";
import john from "./john.jpg";
import rachel from "./rachel.JPG"

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
                  <CardText> Connor is from Mississippi and has the coolest Siamese cat. He has to watch out for the cat getting out or else he has the late exuse of "Sorry, I had to catch my cat." </CardText>
                  <Button color="info" href="https://github.com/ConnorLambert"> Github </Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src={haydern}/>
                <CardBody>
                  <CardTitle> Hayden McLendon </CardTitle>
                  <CardSubtitle> -Backend Development- </CardSubtitle>
                  <CardText> Hayden works downtown at a place called Vendorin and will almost certainly beat you at Smash Bros. </CardText>
                  <Button color="info" href="https://github.com/HaydernMcLendern"> Github </Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src={john}/>
                <CardBody>
                  <CardTitle> John Robinson </CardTitle>
                  <CardSubtitle> -Backend Development- </CardSubtitle>
                  <CardText> Also known as uninformed. His favorite language by far is Python. He favors server-side development but has been dabbling in the client-side development. </CardText>
                  <Button color="info" href="https://github.com/uninformed"> Github </Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src={rachel}/>
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
