import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';


class Patient extends Component {

  constructor(props) {
    super(props);
    this.state = { data: []};
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


  render() {
    // var array = this.state.data
    // var record = array.map();
    // console.log(array)
    console.log(this.state.data.length == 0)

    var results_header = '';
    var results_content = ''
    ;
    if (this.state.data.length !== 0) {
      results_header =
      <thead>
        <tr>
          <th> ID </th>
          <th> Blood Type </th>
          <th> Gender </th>
        </tr>
      </thead>;
      }
    if (this.state.data.length !== 0 && ("DON_DEATH_MECH") in this.state.data[0] === true) {
      console.log("dead donor");
      results_content =
      <tbody>
        {this.state.data.map(member =>
          <tr key={member.DONOR_ID}>
          <a href={"../Patient/deceaseddonor/" + member.DONOR_ID}>
            <td>{member.DONOR_ID} </td>
            <td>{member.DON_ABO} </td>
            <td>{member.DON_GENDER} </td>
            </a>
          </tr>
        )}
      </tbody>
    }
    else if (this.state.data.length !== 0 && ("DON_FUNCTN_STAT") in this.state.data[0] === true) {
      console.log("living donor");
      results_content =
      <tbody>
        {this.state.data.map(member =>
          <tr key={member.DONOR_ID}>
          <a href={"../Patient/livedonor/" + member.DONOR_ID}>
            <td>{member.DONOR_ID} </td>
            <td>{member.DON_ABO} </td>
            <td>{member.DON_GENDER} </td>
            </a>
          </tr>
        )}
      </tbody>
    }
    else if (this.state.data.length !== 0 && ("CAN_ABO") in this.state.data[0] === true){
      console.log("candidate");
      results_content =
      <tbody>
        {this.state.data.map(member =>
          <tr key={member.PX_ID}>
          <a href={"../Patient/candidate/" + member.PX_ID}>
            <td>{member.PX_ID} </td>
            <td>{member.CAN_ABO} </td>
            <td>{member.CAN_GENDER} </td>
            </a>
          </tr>
        )}
      </tbody>
    }

    return (
      <div className="aboutContent" topw>
        <br/>
        <Container>
          <Row>
            <form>
              <fieldset>
                <legend>If You Know the ID</legend>

                Patient ID:<br/>
                <input type="text" name="id"/><br/>
                <input type="radio" name="patient_type" value="cand_liin_m" defaultChecked/> Candidate &nbsp;
                <input type="radio" name="patient_type" value="donor_live_m"/> Living Donor &nbsp;
                <input type="radio" name="patient_type" value="donor_deceased_m"/> Deceased Donor <br/>

                <br/><br/>
                <input type="submit" value="Submit" />
              </fieldset>
            </form>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <form>
              <fieldset>
                <legend>Search by Criteria</legend>
                <input type="radio" name="patient_type" value="cand_liin_m" defaultChecked/> Candidate &nbsp;
                <input type="radio" name="patient_type" value="donor_live_m"/> Living Donor &nbsp;
                <input type="radio" name="patient_type" value="donor_deceased_m"/> Deceased Donor <br/>

                Blood Type:<br/>
                <select name="bloodtype">
                  <option value=""></option>
                  <option value="A">A</option>
                  <option value="A1">AB</option>
                  <option value="A1B">A1B</option>
                  <option value="A2">A2</option>
                  <option value="A2B">A2B</option>
                  <option value="AB">AB</option>
                  <option value="B">B</option>
                  <option value="O">O</option>
                </select>
                <br/>
                Gender:<br/>
                <select name="gender">
                  <option value=""></option>
                  <option value="M">M</option>
                  <option value="F">F</option>

                </select>
                <br/><br/>
                <input type="submit" value="Submit" />
              </fieldset>
            </form>
            </Row>
            <br/><br/><br/>
            <Row>
              <table>
                {results_header}
                {results_content}
              </table>
            </Row>

        </Container>
      </div>
    );
  }
}


export default Patient;

// function table_link(id, patient_type) {
//   var new_url = '../Patient/' + patient_type + '/' + id;
//   window.location.href = new_url;
// }
