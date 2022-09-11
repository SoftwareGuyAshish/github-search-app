import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import UserContext from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="bg-info text-black" light expand="sm">
      <NavbarBrand>
        <Link
          to="/"
          className="text-black font-weight-bold text-decoration-none"
        >
          Github Search App
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="mr-2" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavbarText className="text-black">
            {context.user?.email ? context.user?.email : ""}
          </NavbarText>
          {context.user ? (
            <NavItem>
              <NavLink
                onClick={() => context.setUser(null)}
                className="text-black"
              >
                Sign Out
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-black">
                  Sign Up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin" className="text-black">
                  Sign In
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
