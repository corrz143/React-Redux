import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";
import { AirlineView } from "../AirlineView/AirlineView";

/**
 * View components that displays the homepage
 */

export function HomePage({
  logoView,
  navbarView,
  administrationView,
  versionView,
  airlineView,
  footerView,
}) {
  return (
    <>
      <Navbar className="navbar-bg navbar-dark px-4 pt-1" expand="lg">
        <Nav href="#home" className="logohome">
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

      <div>
        <div className="jumbotron">
          <section className="row">
            {administrationView}
            {versionView}
          </section>
        </div>
      </div>

      <div className="container">
        <section>
          <div className="">
            {airlineView.map((view, index) => (
              <AirlineView key={index} view={view} />
            ))}
          </div>
        </section>
      </div>

      <div>{footerView}</div>
    </>
  );
}
