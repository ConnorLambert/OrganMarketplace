import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router'


class Register extends Component {


  constructor() {
        super();
        this.state = {
          CAN_GENDER: '',
          CAN_ABO: '',
          CAN_RACE_SRTR: '',
          CAN_ETHNICITY_SRTR: '',
          CAN_MOST_RECENT_HGT_CM: '',
          CAN_MOST_RECENT_WGT_KG: '',
          CAN_CITIZENSHIP: '',
          CAN_YEAR_ENTRY_US: '',
          CAN_PERM_STATE: ''
        };

        this.onChange = this.onChange.bind(this);
      }

      submitForm = () => {
        var data = this.state
        console.log(data);
         return fetch('/register', {
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
        console.log(this.state.CAN_GENDER)
      }


  render() {
    const {CAN_GENDER, CAN_ABO, CAN_RACE_SRTR, CAN_ETHNICITY_SRTR, CAN_MOST_RECENT_HGT_CM, CAN_MOST_RECENT_WGT_KG, CAN_CITIZENSHIP, CAN_YEAR_ENTRY_US, CAN_PERM_STATE } = this.state;
    var yearEntered = {};
    if (this.state.CAN_CITIZENSHIP >= 5) {
      yearEntered.first = <label htmlFor="CAN_YEAR_ENTRY_US">Entry Year</label>
      yearEntered.second = <br/>
      yearEntered.third = <input name="CAN_YEAR_ENTRY_US" type="text" value={CAN_YEAR_ENTRY_US} onChange={this.onChange}/>
      yearEntered.fourth = <br/>
    }
    // var record = array.map();
    return (

      <div className="aboutContent" topw>
        <br/>
        <Container>
          <Col>
          <legend>Patient Registration</legend><br/>
            <form>
              <label htmlFor="CAN_GENDER">Gender: </label> &nbsp;
              <br/>
                <select name="CAN_GENDER" value={CAN_GENDER} onChange={this.onChange}>
                  <option value=""></option>
                  <option value="M">M</option>
                  <option value="F">F</option>
                </select>&nbsp;&nbsp;<br/>

              <label htmlFor="CAN_ABO">Bloodtype: </label> &nbsp;
              <br/>
                <select name="CAN_ABO" value={CAN_ABO} onChange={this.onChange}>
                  <option value=""></option>
                  <option value="A">A</option>
                  <option value="A1">AB</option>
                  <option value="A1B">A1B</option>
                  <option value="A2">A2</option>
                  <option value="A2B">A2B</option>
                  <option value="AB">AB</option>
                  <option value="B">B</option>
                  <option value="O">O</option>
                </select>&nbsp;&nbsp;<br/>

              <label htmlFor="CAN_RACE_SRTR">Race: </label> &nbsp;
              <br/>
                <select name="CAN_RACE_SRTR" value={CAN_RACE_SRTR} onChange={this.onChange}>
                  <option value=""></option>
                  <option value="ASIAN">Asian</option>
                  <option value="BLACK">Black</option>
                  <option value="MULTI">Multiracial</option>
                  <option value="NATIVE">Native American</option>
                  <option value="PACIFIC">Pacific Islander</option>
                  <option value="WHITE">White</option>
                </select>&nbsp;&nbsp;<br/>

              <label htmlFor="CAN_ETHNICITY_SRTR">Ethnicity: </label> &nbsp;
              <br/>
                <select name="CAN_ETHNICITY_SRTR" value={CAN_ETHNICITY_SRTR} onChange={this.onChange}>
                  <option value=""></option>
                  <option value="LATINO">Latino</option>
                  <option value="NLATIN">Non-latino</option>
                </select>&nbsp;&nbsp;<br/>

              <label htmlFor="CAN_MOST_RECENT_HGT_CM">Height (cm)</label> &nbsp;
              <br/>
              <input name="CAN_MOST_RECENT_HGT_CM" type="text" value={CAN_MOST_RECENT_HGT_CM} onChange={this.onChange}/>
              <br/>

              <label htmlFor="CAN_MOST_RECENT_WGT_KG">Weight (kg)</label> &nbsp;
              <br/>
              <input name="CAN_MOST_RECENT_WGT_KG" type="text" value={CAN_MOST_RECENT_WGT_KG} onChange={this.onChange}/>
              <br/>

              <label htmlFor="CAN_CITIZENSHIP">Citizenship: </label> &nbsp;
              <br/>
                <select name="CAN_CITIZENSHIP" value={CAN_CITIZENSHIP} onChange={this.onChange}>
                  <option value=""></option>
                  <option value="1">US Citizen</option>
                  <option value="2">Resident Alien</option>
                  <option value="3">Non-Resident Alien</option>
                  <option value="4">Non-US Citizen</option>
                  <option value="5">Non-US Citzen (Did Not Travel for Transplant)</option>
                  <option value="6">Non-US Citzen (Travelled for Transplant)</option>
                </select>&nbsp;&nbsp;<br/>

                {yearEntered.first}
                {yearEntered.second}
                {yearEntered.third}
                {yearEntered.fourth}


                <label htmlFor="CAN_PERM_STATE">State: </label> &nbsp;
                <br/>
                  <select name="CAN_PERM_STATE" value={CAN_PERM_STATE} onChange={this.onChange}>
                    <option value=""></option>
                    <option value="AK">Alaska</option>
                    <option value="AL">Alabama</option>
                    <option value="AR">Arkansas</option>
                    <option value="AZ">Arizona</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DC">District of Columbia</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="IA">Iowa</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MD">Maryland</option>
                    <option value="ME">Maine</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MO">Missouri</option>
                    <option value="MS">Mississippi</option>
                    <option value="MT">Montana</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="NE">Nebraska</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NV">Nevada</option>
                    <option value="NY">New York</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VA">Virginia</option>
                    <option value="VT">Vermont</option>
                    <option value="WA">Washington</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WV">West Virginia</option>
                    <option value="WY">Wyoming</option>
                  </select>&nbsp;&nbsp;<br/><br/>

              &nbsp;<Button color="info" onClick={this.submitForm}> Submit </Button>&nbsp;
            </form>
          </Col>
        </Container>
        <br/><br/>

      </div>
    );
  }
}

// function submitForm() {
//   console.log(this.state);
//   debugger;
//    return fetch('/register', {
//      method: 'POST',
//      body: this.state,
//      headers:{
//        'Content-Type': 'application/json'
//     }
//    })
// }



export default Register;
