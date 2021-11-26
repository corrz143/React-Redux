import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

// import { AirlineView } from "../../components/AirlineView/AirlineView";
// import { NavBarDropDownView } from "../../components/NavBarDropDownView/NavBarDropDownView";
// import logo from "../../../public/BidProLogo.png";
import { LogoView } from "../../components/LogoView/LogoView";
// import { NavBarDropDownView } from "../../components/NavBarDropDownView/NavBarDropDownView";
// import { NavBarDropDownView } from "../../components/NavBarDropDownView/NavBarDropDownView";
// import { NavBarView } from "../../components/NavBarView/NavBarView";
// import { NavLink } from "react-router-dom";

export function HeaderView() {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid className="navbar-bg mt-2 ">
          <Navbar.Brand href="/">
            <LogoView />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav
              className="my-2 my-lg-0"
              // style={{ maxHeight: "100px" }}
              // navbarScroll
            >
              <NavDropdown title="American Airlines" id="basic-navbar-nav">
                <NavDropdown.Item href="/american-airlines/bidtypes">
                  BidTypes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/american-airlines/pilots">
                  Pilots
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Alaska Airlines" id="basic-navbar-nav">
                <NavDropdown.Item href="/alaska-airlines/bidtypes">
                  BidTypes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/alaska-airlines/pilots">
                  Pilots
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Frontier Airlines" id="basic-navbar-nav">
                <NavDropdown.Item href="/frontier-airlines/bidtypes">
                  BidTypes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/frontier-airlines/pilots">
                  Pilots
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="UPS" id="basic-navbar-nav">
                <NavDropdown.Item href="/ups/bidtypes">
                  BidTypes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/ups/pilots">Pilots</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderView;

{
  /*<nav classNameNameNameNameName="navbar navbar-expand-lg navbar-light bg-light">
        <a classNameNameNameName="navbar-brand" href="/">
          <LogoView />
        </a>
        <button
          classNameNameNameName="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameNameNameName="navbar-toggler-icon"></span>
        </button>
        <div classNameNameNameName="collapse navbar-collapse" id="navbarNavDropdown">
          <ul classNameNameNameName="navbar-nav">
            <li classNameNameNameName="nav-item dropdown">
              <a
                classNameNameNameName="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                American Airlines
              </a>
              <div
                classNameNameNameName="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a classNameNameNameName="dropdown-item" href="/">
                  Action
                </a>
                <a classNameNameNameName="dropdown-item" href="#">
                  Another action
                </a>
                <a classNameNameNameName="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* <Nav classNameNameNameNameName="row">
        <Navbar classNameNameNameNameName="navbar-bg py-0  navbar-dark" expand="lg">
          <Navbar.Brand classNameNameNameNameName="navbar-brand py-0">
            <NavLink to="/">
              <img src={logo} alt="Bid Pro logo" />{" "}
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse classNameNameNameNameName="navbar-collapse " id="basic-navbar-nav">
            <Nav classNameNameNameNameName="navbar-nav ml-auto mr-2">
              <NavDropdown
                alignRight
                title="American Airlines"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <NavLink
                    to="/american-airlines/bidtypes"
                    classNameNameNameNameName="navbar-link"
                  >
                    BidTypes
                  </NavLink>
                </NavDropdown.Item>
                <Nav classNameNameNameNameName="dropdown-divider"></Nav>
                <NavDropdown.Item>
                  <NavLink
                    to="/american-airlines/pilots"
                    classNameNameNameNameName="navbar-link"
                  >
                    Pilots
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                alignRight
                title="Alaska Airlines"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <NavLink
                    to="/alaska-airlines/bidtypes"
                    classNameNameNameNameName="navbar-link"
                  >
                    BidTypes
                  </NavLink>
                </NavDropdown.Item>
                <Nav classNameNameNameNameName="dropdown-divider"></Nav>
                <NavDropdown.Item>
                  <NavLink to="/alaska-airlines/pilots" classNameNameNameNameName="navbar-link">
                    Pilots
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown alignRight title="JetSuite" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/jetsuite/bidtypes" classNameNameNameNameName="navbar-link">
                    BidTypes
                  </NavLink>
                </NavDropdown.Item>
                <Nav classNameNameNameNameName="dropdown-divider"></Nav>
                <NavDropdown.Item>
                  <NavLink to="/jetsuite/pilots" classNameNameNameNameName="navbar-link">
                    Pilots
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown alignRight title="UPS" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/ups/bidtypes" classNameNameNameNameName="navbar-link">
                    BidTypes
                  </NavLink>
                </NavDropdown.Item>
                <Nav classNameNameNameNameName="dropdown-divider"></Nav>
                <NavDropdown.Item>
                  <NavLink to="/ups/pilots" classNameNameNameNameName="navbar-link">
                    Pilots
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Nav> */
}

{
  /* <NavBarDropDownView airlineName={airlineName}/> */
  /* <NavBarView airlines={airlines} /> */
  /* <h1>Hello Header</h1> */
  /* <Navbar>
        <Nav classNameNameNameNameName="navbar-bg navbar-dark px-5 py-2" expand="lg">


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            classNameNameNameNameName="navbar-collapse justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav classNameNameNameNameName="navbar-nav">
              <NavDropdown title="American Airlines" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink
                    to="/american-airlines/bidtypes"
                    classNameNameNameNameName="navbar-link"
                  >
                    BidTypes
                  </NavLink>
                </NavDropdown.Item>
                <Nav classNameNameNameNameName="dropdown-divider"></Nav>
                <NavDropdown.Item>
                  <NavLink
                    to="/american-airlines/pilots"
                    classNameNameNameNameName="navbar-link"
                  >
                    Pilots
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown> */
  /* </Nav>
          </Navbar.Collapse>
        </Nav>
      </Navbar> */
  /* //   airlineName="American Airlines",
            //   bidTypesPath="/american-airlines/bidtypes",
  //   pilotdPath="/american-airlines/pilots" */
}
