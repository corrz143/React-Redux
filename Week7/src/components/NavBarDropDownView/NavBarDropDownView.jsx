import React from "react";
import PropTypes from "prop-types";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";

/**
 * Interactive components that displays the airline dropdown section
 */

export const NavBardropDownView = ({
  airlineName,
  bidTypesPath,
  pilotsPath,
}) => (
  <li className="nav-item dropdown bg-primary d-inline-block">
    <a
      className="nav-link dropdown-toggle text-light"
      href="#"
      id="navbarDropdow"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {airlineName}
    </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropDown">
      <li>
        <a className="dropdown-item" href={bidTypesPath}>
          BidTypes
        </a>
      </li>
      <hr className="dropdown-divider" />
      <li>
        <a className="dropdown-item" href={pilotsPath}>
          Pilots
        </a>
      </li>
    </ul>
  </li>
);

// export function NavBarDropDownView({
//   airline: { airlineName, bidTypesPath, pilotsPath },
// }) {
//   return (
//     <NavDropdown title={airlineName} id="basic-nav-dropdown">
//       <NavDropdown.Item href={bidTypesPath}>BidTypes</NavDropdown.Item>
//       <NavDropdown.Divider />
//       <NavDropdown.Item href={pilotsPath} className="">
//         Pilots
//       </NavDropdown.Item>
//     </NavDropdown>
//   );
// }

NavBarDropDownView.propTypes = {
  airline: PropTypes.shape({
    airlineName: PropTypes.string,
    bidTypesPath: PropTypes.string,
    pilotsPath: PropTypes.string,
  }),
};
