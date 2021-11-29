import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";

export function BidTypesView() {
  return (
    <>
      <thead>
        <tr className="grid-container">
          <th className="grid-item mx-1">ID</th>
          <th className="grid-item">Bid Types</th>
          <th className="grid-item ">Status</th>
          <th className="grid-item ">#Bid Periods</th>
          <th className="grid-item text-center">Last Import</th>
          <th className="grid-item text-end mx-5">
            <a href="#">
              <FontAwesomeIcon icon={faFilter} size="xs"></FontAwesomeIcon>
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faPlus}
                size="xs"
                className="mx-2"
              ></FontAwesomeIcon>
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faSync}
                size="xs"
                // className="mx-2"
              ></FontAwesomeIcon>
            </a>
          </th>
        </tr>
      </thead>
    </>
  );
}
