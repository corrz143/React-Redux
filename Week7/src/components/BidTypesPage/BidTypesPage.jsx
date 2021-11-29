import React from "react";
import { BidTypesView } from "../BidTypesView/BidTypesView";
import { BidTypes } from "../BidTypes/BidTypes";

export function BidTypesPage({ types }) {
  return (
    <>
      <h1>Bid Types</h1>

      <hr />
      <table>
        <BidTypesView />
        <hr />
        <tbody>
          <tr className="grid-item">
            {types.map((type, index) => (
              <BidTypes key={index} type={type} />
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}
