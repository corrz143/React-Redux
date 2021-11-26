import React from "react";
import { AAPilotsPage } from "./AAPilotsPage";
// import * as BidList from "../BidTypeListView/BidTypeListView.stories";
// import { BidTypeListView } from "../BidTypeListView/BidTypeListView";
// import * as Pilots from "../PilotsListView/PilotsListView.stories";
export default {
  title: "Structural Components/AAPilotsPage",
  component: AAPilotsPage,
};

const Template = (args) => <AAPilotsPage {...args} />;

export const PilotsInfoPage = Template.bind({});
PilotsInfoPage.args = {
  aaPilots: [
    {
      address: "Riviera State 32/106",
      companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
      companyName: "Twitter, Inc.",
      id: "1",
      phoneNum: "P: (123) 456-7890",
      photo: "/images/john-smith.jpeg",
      pilotName: "John Smith",
      pilotTag: "CPT 737 GEG",
    },
    {
      address: "Riviera State 32/106",
      companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
      companyName: "Twitter, Inc.",
      id: "2",
      phoneNum: "P: (123) 456-7890",
      photo: "/images/alex-johnathan.jpeg",
      pilotName: "Alex Johnathan",
      pilotTag: "CPT 737 GEG",
    },
    {
      address: "Riviera State 32/106",
      companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
      companyName: "Twitter, Inc.",
      id: "3",
      phoneNum: "P: (123) 456-7890",
      photo: "/images/monica-smith.jpeg",
      pilotName: "Monica Smith",
      pilotTag: "CPT 737 GEG",
    },
    {
      address: "Riviera State 32/106",
      companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
      companyName: "Twitter, Inc.",
      id: "4",
      phoneNum: "P: (123) 456-7890",
      photo: "/images/michael-zimber.jpeg",
      pilotName: "Michael Zimber",
      pilotTag: "FO 737 GEG",
    },
    {
      address: "Riviera State 32/106",
      companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
      companyName: "Twitter, Inc.",
      id: "5",
      phoneNum: "P: (123) 456-7890",
      photo: "/images/sandra-smith.jpeg",
      pilotName: "Sandra Smith",
      pilotTag: "FO 737 GEG",
    },
    {
      address: "Riviera State 32/106",
      companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
      companyName: "Twitter, Inc.",
      id: "6",
      phoneNum: "P: (123) 456-7890",
      photo: "/images/janet-carton.jpeg",
      pilotName: "Janet Carton",
      pilotTag: "FO 737 GEG",
    },
  ],
};
