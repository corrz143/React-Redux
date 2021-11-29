import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

/**
 * View components that displays the header section
 */

export function HeaderView({ logoView, navbarView }) {
  return (
    <>
      <Navbar className="navbar-bg navbar-dark px-5 pt-1" expand="lg">
        <Nav href="#home" className="logo">
          {logoView}
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="navbar-collapse justify-content-end"
          id="basic-navbar-nav"
        >
          <Nav className="navbar-nav">
            {navbarView.map((airline, index) => (
              <NavBarDropDownView key={index} airline={airline} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
