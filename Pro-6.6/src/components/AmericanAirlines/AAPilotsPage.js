import React from "react";
import { PilotView } from "../PilotView/PilotView";
// import { PilotsListView } from "../PilotsListView/PilotsListView";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

const AAPilotPage = () => {
  const pilots = [
    {
      address: "Riviera State 32/106",
      companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
      companyName: "Twitter, Inc.",
      id: "1",
      phoneNum: "P: (123) 456-7890",
      photo: "../../public/images/john-smith.jpeg",
      pilotName: "John Smith",
      pilotTag: "CPT 737 GEG",
    },
    {
      address: "Riviera State 32/106",
      companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
      companyName: "Twitter, Inc.",
      id: "2",
      phoneNum: "P: (123) 456-7890",
      photo: "../../public/images/alex-johnathan.jpeg",
      pilotName: "Alex Johnathan",
      pilotTag: "CPT 737 GEG",
    },
    {
      address: "Riviera State 32/106",
      companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
      companyName: "Twitter, Inc.",
      id: "3",
      phoneNum: "P: (123) 456-7890",
      photo: "../../public/images/monica-smith.jpeg",
      pilotName: "Monica Smith",
      pilotTag: "CPT 737 GEG",
    },
    {
      address: "Riviera State 32/106",
      companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
      companyName: "Twitter, Inc.",
      id: "4",
      phoneNum: "P: (123) 456-7890",
      photo: "../../public/images/michael-zimber.jpeg",
      pilotName: "Michael Zimber",
      pilotTag: "FO 737 GEG",
    },
    {
      address: "Riviera State 32/106",
      companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
      companyName: "Twitter, Inc.",
      id: "5",
      phoneNum: "P: (123) 456-7890",
      photo: "../../public/images/sandra-smith.jpeg",
      pilotName: "Sandra Smith",
      pilotTag: "FO 737 GEG",
    },
    {
      address: "Riviera State 32/106",
      companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
      companyName: "Twitter, Inc.",
      id: "6",
      phoneNum: "P: (123) 456-7890",
      photo: "../../public/images/janet-carton.jpeg",
      pilotName: "Janet Carton",
      pilotTag: "FO 737 GEG",
    },
  ];

  return (
    <>
      <div className="ms-4">
        <div className="ms-3">
          <h3 className="text-secondary">Pilots</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">App Views</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contacts
              </li>
            </ol>
          </nav>
        </div>
        <div>
          <div className="card-list ">
            {pilots.map((pilot, index) => (
              <PilotView key={index} {...pilot} />
            ))}
          </div>
        </div>
        {/* <div className="ms-3 border-light">
           <div className="cardPage">
          <PilotsListView pilots={pilots} />
        </div>
        </div> */}
        {/* <div className="card-page ">
          {console.log(pilots[0])}
          {pilots.map((pilot) => {
            <div className="card-bg ">
              <div className="card ms-3 border-light">
                <div>
                  <img
                    src={pilot.photo}
                    alt="Pilot Photo"
                    className="photo rounded-circle"
                  />
                  <div className="pilotTag card-body text-secondary text-center">
                    {pilot.pilotTag}
                  </div>
                </div>
                <div className="card-body text-secondary pt-3">
                  <p className="pilotName">{pilot.pilotName}</p>
                  <p className="address p-0">
                    <FontAwesomeIcon
                      icon={faMapMarker}
                      aria-hidden="true"
                      className="mapIcon mx-1"
                    ></FontAwesomeIcon>
                    {pilot.address}
                  </p>

                  <p className="compName ">{pilot.companyName}</p>
                  <p className="compAdd">{pilot.companyAdd}</p>
                  <p className="phoneNum">{pilot.phoneNum}</p>
                </div>
              </div>
            </div>;
          })}
        </div> */}
      </div>
    </>
  );
};

export default AAPilotPage;
