import React from "react";
import {
     // Collapse,
     Navbar,
     // NavbarToggler,
     // NavbarBrand,
     Nav,
     NavItem,
     // NavLink,
     // UncontrolledDropdown,
     // DropdownToggle,
     // DropdownMenu,
     // DropdownItem
} from "reactstrap";

import { Link } from "react-router-dom";

export default class MyNavbar extends React.Component {

     // constructor(props) {
     //      super(props);

     //      this.toggle = this.toggle.bind(this);
     //      this.state = {
     //           isOpen: false
     //      };
     // }

     // toggle() {
     //      this.setState({
     //           isOpen: !this.state.isOpen
     //      });
     // }

     render() {
          return (
               <div>
                    <Navbar color="dark" dark expand="sm">
                         <Link to="/">StarWars</Link>
                         <Nav className="ml-auto" navbar>
                              <NavItem>
                                   <Link to="/weather">Weather</Link>
                              </NavItem>
                         </Nav>
                         {/* <NavbarToggler onClick={this.toggle} />
                         <Collapse isOpen={this.state.isOpen} navbar>
                              <Nav className="ml-auto" navbar>
                                   <NavItem>
                                        <Link to="/weather">Weather</Link>
                                   </NavItem>
                              </Nav>
                         </Collapse> */}
                    </Navbar>
               </div>
          );
     }
}