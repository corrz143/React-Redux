import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

/**
 * View components that displays each Pilots
 */

export function PilotView({
  // id,
  photo,
  pilotTag,
  pilotName,
  address,
  companyName,
  companyAdd,
  phoneNum,
}) {
  return (
    <div className="card mb-3 ms-1 text-secondary">
      <div className="row g-0">
        <div className="col col-md-4  text-center">
          <img src={photo} alt="Pilot" className="photo rounded-circle" />

          <div className="mt-2 pilotTag">{pilotTag}</div>
        </div>
        <div className="col-md-8">
          <div className="card-body pt-3">
            <p className="pilotName card-title">{pilotName}</p>
            <p className="address p-0">
              <FontAwesomeIcon
                icon={faMapMarker}
                aria-hidden="true"
                className="mapIcon mx-1"
              ></FontAwesomeIcon>
              {address}
            </p>

            <p className="compName ">{companyName}</p>
            <p className="compAdd">{companyAdd}</p>
            <p className="phoneNum">{phoneNum}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PilotView;

PilotView.propTypes = {
  id: PropTypes.number,
  photo: PropTypes.object,
  pilotName: PropTypes.string,
  address: PropTypes.string,
  companyName: PropTypes.string,
  companyAdd: PropTypes.string,
  phoneNum: PropTypes.string,
};
