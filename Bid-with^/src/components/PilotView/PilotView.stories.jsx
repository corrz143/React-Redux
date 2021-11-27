import React from "react";
import { PilotView } from "./PilotView";

export default {
  title: "Pilot Components/PilotView",
  component: PilotView,
};

const Template = (args) => <PilotView {...args} />;

export const PilotJohn = Template.bind({});
PilotJohn.args = {
  id: 1,
  photo: "/images/john-smith.jpeg",
  pilotTag: "CPT 737 GEG",
  pilotName: "John Smith",
  address: "Riviera State 32/106",
  companyName: "Twitter, Inc.",
  companyAdd: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
  phoneNum: "P: (123) 456-7890",
};

export const PilotAlex = Template.bind({});
PilotAlex.args = {
  ...PilotJohn.args,
  id: 2,
  photo: "/images/alex-johnathan.jpeg",
  pilotName: "Alex Johnathan",
};

export const PilotMonica = Template.bind({});
PilotMonica.args = {
  ...PilotJohn.args,
  id: 3,
  photo: "/images/monica-smith.jpeg",
  pilotName: "Monica Smith",
};

export const PilotMichael = Template.bind({});
PilotMichael.args = {
  ...PilotJohn.args,
  id: 4,
  photo: "/images/michael-zimber.jpeg",
  pilotTag: "FO 737 GEG",
  pilotName: "Michael Zimber",
};

export const PilotSandra = Template.bind({});
PilotSandra.args = {
  ...PilotMichael.args,
  id: 5,
  photo: "/images/sandra-smith.jpeg",
  pilotName: "Sandra Smith",
};

export const PilotJanet = Template.bind({});
PilotJanet.args = {
  ...PilotMichael.args,
  id: 6,
  photo: "/images/janet-carton.jpeg",
  pilotName: "Janet Carton",
};
