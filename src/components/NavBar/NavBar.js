import React, {Component} from 'react';
import { Collapse,
         Navbar,
         NavbarToggler,
         NavbarBrand,
         Nav,
         NavItem,
         NavLink,
         UncontrolledDropdown,
         DropdownToggle,
         DropdownMenu,
         DropdownItem,
         Container,
         Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import brandLogo from './logo.svg';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
      <Navbar color="dark" dark expand="xs">
        <NavbarBrand className="mr-auto" href="/"> <img src={brandLogo} width="30" height="30" className="d-inline-block align-top" alt="Orgazon!"/></NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/About"> About </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/login"> Login </NavLink>
            </NavItem>

          </Nav>
      </Navbar>
      <br/>
      </div>
    );
  }
}

export default NavBar;
