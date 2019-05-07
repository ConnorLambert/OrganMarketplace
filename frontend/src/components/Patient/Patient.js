import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router'


class Patient extends Component {

  constructor(props) {
    super(props);
    this.state = { data: {}};
  }

  grabData() {
    var current_url = window.location.href
    console.log(current_url)
    fetch(current_url)
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => this.setState({ data: res }))

  }

  componentWillMount() {
        this.grabData();
  }

  renderRedirect(url) {
    console.log(url)
    return <Redirect to={"/search"}/>
  }


  render() {
    var array = this.state.data
    var url;
    if (this.state.data.length !== 0 && ("DON_FUNCTN_STAT") in this.state.data === true){
      url = "/export" + "/livedonor/" + this.state.data['DONOR_ID'];
    }
    else if (this.state.data.length !== 0 && ("DON_DEATH_MECH") in this.state.data === true){
      url = "/export" + "/deceaseddonor/" + this.state.data['DONOR_ID'];
    }
    else if (this.state.data.length !== 0 && ("CAN_ABO") in this.state.data === true){
      url = "/export" + "/candidate/" + this.state.data['PX_ID'];
    }
    var fullUrl = "localhost:3001" + url;
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
        <br/><br/>
        <Button color="info" onClick={() => window.open(fullUrl)}>Export </Button>&nbsp;
      </div>
    );
  }
}



export default Patient;
