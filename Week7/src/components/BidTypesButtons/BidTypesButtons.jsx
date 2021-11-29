import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export function BidTypesButtons({
  buttons: { btnretry, btnperiod, btnimport, btndelete },
}) {
  return (
    <>
      <div className="d-flex flex-column mx-5">
        <button type="button" className="btn btn-primary btn-m py-2 mb-1 ">
          <FontAwesomeIcon
            icon={faCloudDownloadAlt}
            className="iconview"
          ></FontAwesomeIcon>
          {btnretry}
        </button>
        <button
          type="button"
          className="btn btn-primary btn-m py-2 mb-1"
          disabled
        >
          {btnperiod}
          <FontAwesomeIcon
            icon={faAngleDoubleRight}
            className="iconview2 mx-1"
          ></FontAwesomeIcon>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-m py-2 mb-1"
          disabled
        >
          {btnimport}
          <FontAwesomeIcon
            icon={faAngleDoubleRight}
            className="iconview2 mx-1"
          ></FontAwesomeIcon>
        </button>
        <button type="button" className="btn btn-danger btn-m py-2 mb-1">
          <FontAwesomeIcon
            icon={faTimes}
            className="iconview "
          ></FontAwesomeIcon>
          {btndelete}
        </button>
      </div>
    </>
  );
}

BidTypesButtons.propTypes = {
  //Composition of the task
  buttons: PropTypes.shape({
    btnretry: PropTypes.string,
    btnperiod: PropTypes.string,
    btnimport: PropTypes.string,
    btndelete: PropTypes.string,
  }),
};
