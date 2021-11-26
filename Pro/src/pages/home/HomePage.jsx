import React from "react";
import AirlineView from "./AirlineView";
import { AdministrationView } from "../../components/AdministrationView/AdministrationView";
import { VersionView } from "../../components/VersionView/VersionView";
// import HeaderView from "../../components/HeaderView/HeaderView";
// import { AdministrationView } from "../AdministrationView/AdministrationView";

const HomePage = () => {
  return (
    <>
      {/* <HeaderView /> */}

      <div className="jumbotron">
        <section className="row ">
          <AdministrationView name="Tom Jones!" />
          <VersionView current="1.1.0" />
        </section>
      </div>

      <div className="row ms-5">
        <div className="col-md-6">
          <AirlineView
            airlineName="American Airlines"
            airlineLink="/american-airlines/bidtypes"
          />
        </div>
        <div className="col-md-6">
          <AirlineView
            airlineName="Alaska Airlines"
            airlineLink="/alaska-airlines/bidtypes"
          />
        </div>
      </div>
      <div className="row ms-5">
        <div className="col-md-6">
          <AirlineView
            airlineName="JetSuite"
            airlineLink="/jetsuite/bidtypes"
          />
        </div>
        <div className="col-md-6">
          <AirlineView airlineName="UPS" airlineLink="/ups/bidtypes" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
