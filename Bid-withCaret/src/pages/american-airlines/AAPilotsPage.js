import React from "react";
import { PilotView } from "../../components/PilotView/PilotView";


const AAPilotsPage = () => {
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
        <div className="ms-4 ">
          <h3 className="text-secondary mt-4 ">Pilots</h3>
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb mb-4">
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
          <div className="card-list me-5 ">
            {pilots.map((pilot, index) => (
              <PilotView key={index} {...pilot} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AAPilotsPage;

//REDUX

// import React from "react";
// import { Link } from "react-router-dom";

// import {useSelector} from "react-redux";
// import {selectCount} from "../../redux/counterSlice";

// const AAPilotsPage = () => {

//     const count = useSelector(selectCount);

//     return (
//     <>

//         <h1>American Airlines Pilots </h1>
//         <h2>Count: {count} </h2>
//         <Link to="/">Home</Link>
//     </>
//     )
// };

// export default AAPilotsPage;
