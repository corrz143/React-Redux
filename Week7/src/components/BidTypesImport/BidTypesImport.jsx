import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export function BidTypesImport({
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
    state,
    backgrounds,
  },
  isImporting,
}) {
  return (
    <div className={isImporting ? "color" : ""}>
      <div className={`list-item ${state}`}>
        <div className="head grid-container">
          <div className="grid-item mx-2">{id}</div>
          <div className="grid-item">{bidtypes}</div>
          <div className="grid-item">{status}</div>
          <div className="grid-item">{bidPeriods}</div>
          <div className="grid-item">{lastImport}</div>
          <div className="grid-item">
            <button
              type="button"
              defaultChecked={state === "IMPORT"}
              hidden={isImporting ? true : ""}
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
              defaultChecked={state === "IMPORT"}
              hidden={isImporting ? true : ""}
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
              defaultChecked={state === "IMPORT"}
              hidden={isImporting ? true : ""}
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
          </div>
        </div>
      </div>

      <div className="actions">
        {state == "IMPORT" && (
          <a onClick="">
            <div className="grid-item">{status}</div>
          </a>
        )}
      </div>
    </div>
  );
}

BidTypesImport.propTypes = {
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
    state: PropTypes.string,
    backgrounds: PropTypes.string,
  }),
};
