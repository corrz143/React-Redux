import React from "react";
import PropTypes from "prop-types";
// import { BidTypesButtons } from "../BidTypesButtons/BidTypesButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export function BidTypes({
  type: {
    id,
    bidtypes,
    status,
    bidPeriods,
    lastImport,
    btnretry,
    btnperiod,
    btnimport,
    btndelete,
  },
}) {
  return (
    <table className="items">
      <tr className="head grid-container">
        <td className="grid-item mx-2">{id}</td>
        <td className="grid-item">{bidtypes}</td>
        <td className="grid-item">{status}</td>
        <td className="grid-item">{bidPeriods}</td>
        <td className="grid-item">{lastImport}</td>
        <td className="grid-item">
          <button
            type="button"
            className="retry btn btn-primary btn-m py-2 mb-1"
          >
            <FontAwesomeIcon
              icon={faCloudDownloadAlt}
              className="iconview"
            ></FontAwesomeIcon>
            {btnretry}
          </button>
          <button
            type="button"
            className="period btn btn-primary btn-m py-2 mb-1"
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
            className="import btn btn-primary btn-m py-2 mb-1"
            disabled
          >
            {btnimport}
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="iconview2 mx-1"
            ></FontAwesomeIcon>
          </button>
          <button
            type="button"
            className="delete btn btn-danger btn-m py-2 mb-1"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="iconview "
            ></FontAwesomeIcon>
            {btndelete}
          </button>
        </td>
      </tr>
    </table>
  );
}

BidTypes.propTypes = {
  type: PropTypes.shape({
    id: PropTypes.number,
    bidtypes: PropTypes.string,
    status: PropTypes.string,
    bidPeriods: PropTypes.number,
    lastImport: PropTypes.string,
    btnretry: PropTypes.string,
    btnperiod: PropTypes.string,
    btnimport: PropTypes.string,
    btndelete: PropTypes.string,
  }),
};
