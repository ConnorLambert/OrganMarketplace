import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';


class Patient extends Component {

  constructor(props) {
    super(props);
    this.state = { data: {}};
  }

  grabData() {
    fetch("http://localhost:3001/patient/13")
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => this.setState({ data: res }))

  }

  componentWillMount() {
        this.grabData();
  }


  render() {
    var array = this.state.data
    // var record = array.map();
    console.log(array)
    return (
      <div className="aboutContent" topw>
        <br/>
        <Container>
          <Row>
          <table>
            <thead>
              <tr>
                {Object.keys(array).map(key =>
                  <th>{key}</th>
                )}
              </tr>
            </thead>
            <tbody>
            <tr>
              {Object.keys(array).map(key =>
                  <td>{array[key]} </td>
              )}
              </tr>
            </tbody>
          </table>
          </Row>
        </Container>
      </div>
    );
  }
}



export default Patient;
