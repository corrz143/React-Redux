import React from "react";
import PropTypes from "prop-types";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

/**
 * View components that displays the NavBarDropDownView for different airlines
 */

export const NavBarView = ({ dropDowns }) => {
  return (
    <div
      className="collapse navbar-collapse bg-primary"
      id="navbarSupporedContent"
    >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
        {dropDowns.map((args, ctr) => {
          return <NavBarDropDownView {...args} />;
        })}
      </ul>
    </div>
  );
};

// export function NavBarView({ airlines }) {
//   return (
//     <>
//       <Navbar className="navbar navbar-bg navbar-dark py-3" expand="lg">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
//           <Nav>
//             {airlines.map((airline, index) => (
//               <NavBarDropDownView key={index} airline={airline} />
//             ))}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// }

NavBarDropDownView.propTypes = {
  dropDowns: propTypes.arrayOf(
    PropTypes.shape({
      airlineName: PropTypes.string,
      bidTypesPath: PropTypes.string,
      pilotsPath: PropTypes.string,
    })
  ),
};
