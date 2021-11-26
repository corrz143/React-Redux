import React from "react";
// import HomePage from "../../components/HomePage/HomePage";
// const AABidTypesPage = () => <h1>American Airlines BidTypes Goes Here</h1>;
import AABidTypesPage from "../../components/AABidTypesPage/AABidTypesPage";

export function AABidTypes() {
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox App - Fall 2021</span>
        </h1>
      </nav>
      <AABidTypesPage />
    </div>
  );
}

export default AABidTypes;
