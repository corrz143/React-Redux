import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const AirlineSection = (props) => {
  return (
    <div className="col-sm-12 col-md ">
      <div className="p-3">
        <h1>{props.airlineName}</h1>
        <p>
          View the monthly bid data, import history &amp; download statistics
        </p>
        <Link
          to={props.airlineLink}
          className="btn view btn-outline-dark mb-2"
          role="button"
        >
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            size="xs"
            className="iconview me-1"
          ></FontAwesomeIcon>
          View
        </Link>
      </div>
    </div>
  );
};

export default AirlineSection;
