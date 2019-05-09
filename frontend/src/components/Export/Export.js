import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class Export extends Component {

  constructor(props) {
    super(props);
    this.state = { data: {}};
  }

  grabData() {
    var current_url = window.location.href
    console.log(current_url)
    fetch(current_url)
        // .then(res => res.json())
        // // .then(res => console.log(res))
        // .then(res => this.setState({ data: res }))

  }

  componentWillMount() {
        this.grabData();
  }


  render() {
    var array = this.state.data
    var url = window.location.href
    console.log(url);
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



export default Export;
