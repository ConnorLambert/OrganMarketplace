import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';


class Data extends Component {

  constructor(props) {
    super(props);
    this.state = { data: []};
  }

  grabData() {
    fetch("http://localhost:3001/data")
        .then(res => res.json())
        .then(res => this.setState({ data: res }));
  }

  componentWillMount() {
        this.grabData();
        console.log(this.state.data)
  }


render() {
  return (
    <div className="aboutContent" topw>
      <br/>
      <Container>
        <Row>
          <table>
            <thead>
              <tr>
                <th> Person ID </th>
                <th> Followup ID </th>
                <th> Weight(KG) </th>
                <th> Hospitalizations </th>
                <th> Organ Type </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(member =>
                <tr key={member.PERS_ID}>
                  <td>{member.PERS_ID} </td>
                  <td>{member.TRR_FOL_ID} </td>
                  <td>{member.TFL_WGT_KG} </td>
                  <td>{member.TFL_HOSP} </td>
                  <td>{member.ORG_TY} </td>
                </tr>
              )}
            </tbody>
          </table>
        </Row>
      </Container>
    </div>
  );
}
}



export default Data;
