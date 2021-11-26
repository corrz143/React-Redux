import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
// import { administrationView } from "./HomeStart.stories";
// import { LogoView } from "../LogoView/LogoView";
// import { Footer } from "../FooterView/FooterView";
import logoFile from "../../../public/BidProLogo.png";
// import { NavBarView } from "../NavBarView/NavBarView";
// import { AirlineView } from "../AirlineView/AirlineView";
import { AdministrationView } from "../AdministrationView/AdministrationView";
import { VersionView } from "../VersionView/VersionView";
import { FooterView } from "../FooterView/FooterView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
// import HeaderView from "../HeaderView/HeaderView";

// import { AirlineView } from "../AirlineView/AirlineView";

/**
 * View components that displays the HomeStart
 */
export function HomePage() {
  // const airlines = [
  //   {
  //     airlineName: "American Airlines",
  //     bidTypesPath: "/american-airlines/bidtypes",
  //     pilotsPath: "/american-airlines/pilots",
  //   },
  //   {

  //     airlineName: "Alaska Airlines",
  //     bidTypesPath: "/alaska-airlines/bidtypes",
  //     pilotsPath: "/alaska-airlines/pilots",
  //   },
  //   {

  //     airlineName: "Frontier Airlines",
  //     bidTypesPath: "/frontier-airlines/bidtypes",
  //     pilotsPath: "/frontier-airlines/pilots",
  //   },
  //   {

  //     airlineName: "UPS",
  //     bidTypesPath: "/ups/bidtypes",
  //     pilotsPath: "/ups/pilots",
  //   },
  // ],

  const airlineNames = [
    {
      id: "1",
      name: "American Airlines",
      path: "/american-airlines/bidtypes",
    },
    {
      id: "2",
      name: "Frontier Airlines",
      path: "/frontier-airlines/bidtypes",
    },
    {
      id: "3",
      name: "Alaska Airlines",
      path: "/alaska-airlines/bidtypes",
    },
    {
      id: "4",
      name: "UPS",
      path: "/ups/bidtypes",
    },
  ];
  // logoView,
  // navbarView,
  // administrationView,
  // versionView,
  // airlineView,
  // footerView,
  // }) {
  return (
    <>
      <Navbar className="navbar-bg navbar-dark px-4 py-2" expand="lg">
        <Nav href="#home" className="logohome">
          <img src={logoFile} alt="BidPro Logo" />
        </Nav>

        <Navbar className="navbar navbar-bg navbar-dark py-3" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            {/* <Nav> */}
            {/* <HeaderView /> */}
            {/* </Nav> */}
          </Navbar.Collapse>
        </Navbar>
      </Navbar>

      {/* {
                bidTypes.map((bidType, index) => (
                  <BidTypeView key={index} {...bidType} />
                ))} */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="navbar-collapse justify-content-end"
          id="basic-navbar-nav"
        > */}
      <AdministrationView name="Tom Jones!" />
      {/* {administrationView} */}
      {/* <Nav className="navbar-nav">
         
            {
              airlines.map((airline, index) => (
                <NavBarDropDownView key={index} {...airline} />
              ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}

      <div>
        <div className="jumbotron">
          <section className="row">
            {/* {administrationView}
            {console.log(administrationView)} */}
            <VersionView current="1.1.0" />
            {/* {console.log(versionView)} */}
          </section>
        </div>
      </div>

      <div className="col-sm-12 col-md ">
        <div className="p-3">
          <h1>{airlineNames.name}</h1>
          <p>
            View the monthly bid data, import history &amp; download statistics.
          </p>
          <Link
            to={airlineNames.path}
            className="view btn btn-outline-dark pr-2"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size="xs"
              className="iconview"
            ></FontAwesomeIcon>
            View
          </Link>
        </div>
      </div>
      <div className="col-sm-12 col-md ">
        <div className="p-3">
          <h1>{airlineNames.name}</h1>
          <p>
            View the monthly bid data, import history &amp; download statistics.
          </p>
          <Link
            to={airlineNames.path}
            className="view btn btn-outline-dark pr-2"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size="xs"
              className="iconview"
            ></FontAwesomeIcon>
            View
          </Link>
        </div>
      </div>
      <div className="col-sm-12 col-md ">
        <div className="p-3">
          <h1>{airlineNames.name}</h1>
          <p>
            View the monthly bid data, import history &amp; download statistics.
          </p>
          <Link
            to={airlineNames.path}
            className="view btn btn-outline-dark pr-2"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size="xs"
              className="iconview"
            ></FontAwesomeIcon>
            View
          </Link>
        </div>
      </div>
      <div className="col-sm-12 col-md ">
        <div className="p-3">
          <h1>{airlineNames.name}</h1>
          <p>
            View the monthly bid data, import history &amp; download statistics.
          </p>
          <Link
            to={airlineNames.path}
            className="view btn btn-outline-dark pr-2"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size="xs"
              className="iconview"
            ></FontAwesomeIcon>
            View
          </Link>
        </div>
      </div>

      {/* <div className="container"> */}
      {/* <AirlineView /> */}
      {/* <section>
          <div className="">
            {airlineView &&
              airlineView.map((view, index) => (
                <AirlineView key={index} view={view} />
              ))}
          </div>
        </section> */}
      {/* </div> */}

      <FooterView />
      {/* <div>{footerView}</div> */}
    </>
  );
}

// HomeStart.propTypes = {
//   logoView: PropTypes.object,
//   navbarView: PropTypes.arrayOf({
//     airlineName: PropTypes.string,
//     bidTypesPath: PropTypes.string,
//     pilotsPath: PropTypes.string,
//   }),

//   administrationView: PropTypes.arrayOf({ name: PropTypes.string }),
//   versionView: PropTypes.arrayOf({ current: PropTypes.string }),
//   airlineView: PropTypes.arrayOf({
//     name: PropTypes.string,
//     path: PropTypes.string,
//   }),
//   footerView: PropTypes.string,
// };

export default HomePage;
