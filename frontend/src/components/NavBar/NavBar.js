import React, {Component} from 'react';
import { Navbar,
         NavbarBrand,
         Nav,
         NavItem,
         NavLink,
         Form,
         Input } from 'reactstrap';
//Below is a comment-command to stop React from giving us a warning that Route and Link aren't being used, they are just not directly and are required imports for functionality
//eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import brandLogo from './logo.png';

class NavBar extends Component {

  render() {
    return (
      <div>
      <Navbar color="dark" dark expand="xs">
        <NavbarBrand className="mr-auto" href="/"> <img src={brandLogo} width="30" height="30" className="d-inline-block align-top" alt="Orgazon!"/> Orgazon </NavbarBrand>
          <Nav navbar>
          <NavItem>
                <NavLink className="linkText active" tag={Link} to="/data"> Search </NavLink>
          </NavItem>
            <NavItem>
                <NavLink className="linkText active" tag={Link} to="/login"> Login </NavLink>
            </NavItem>

          </Nav>
      </Navbar>
      </div>
    );
  }
}

export default NavBar;
