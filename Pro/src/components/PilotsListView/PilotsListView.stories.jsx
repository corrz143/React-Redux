import React from "react";
import { PilotsListView } from "./PilotsListView";

import * as PilotsList from "../PilotView/PilotView.stories";

export default {
  title: "Pilot Components/PilotsListView",
  component: PilotsListView,
};

const Template = (args) => <PilotsListView {...args} />;

export const PilotsInfo = Template.bind({});
PilotsInfo.args = {
  pilots: [
    {
      ...PilotsList.PilotJohn.args,
      id: 1,
      photo: "/images/john-smith.jpeg",
      pilotTag: "CPT 737 GEG",
      pilotName: "John Smith",
      address: "Riviera State 32/106",
      companyName: "Twitter, Inc.",
      companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
      phoneNum: "P: (123) 456-7890",
    },
    {
      ...PilotsList.PilotJohn.args,
      id: 2,
      photo: "/images/alex-johnathan.jpeg",
      pilotName: "Alex Johnathan",
    },
    {
      ...PilotsList.PilotJohn.args,
      id: 3,
      photo: "/images/monica-smith.jpeg",
      pilotName: "Monica Smith",
    },
    {
      ...PilotsList.PilotJohn.args,
      id: 4,
      photo: "/images/michael-zimber.jpeg",
      pilotTag: "FO 737 GEG",
      pilotName: "Michael Zimber",
    },
    {
      ...PilotsList.PilotMichael.args,
      id: 6,
      photo: "/images/sandra-smith.jpeg",
      pilotName: "Sandra Smith",
    },
    {
      ...PilotsList.PilotMichael.args,
      id: 6,
      photo: "/images/janet-carton.jpeg",
      pilotName: "Janet Carton",
    },
  ],
};

// export const PilotMichael = Template.bind({});
// PilotMichael.args = {
//   ...PilotJohn.args,
//   id: "4",
//   photo: "/images/michael-zimber.jpeg",
//   pilotTag: "FO 737 GEG",
//   pilotName: "Michael Zimber",
// };

// export const PilotSandra = Template.bind({});
// PilotSandra.args = {
//   ...PilotMichael.args,
//   id: "5",
//   photo: "/images/sandra-smith.jpeg",
//   pilotName: "Sandra Smith",
// };

// export const PilotJanet = Template.bind({});
// PilotJanet.args = {
//   ...PilotMichael.args,
//   id: "5",
//   photo: "/images/janet-carton.jpeg",
//   pilotName: "Janet Carton",
// };
