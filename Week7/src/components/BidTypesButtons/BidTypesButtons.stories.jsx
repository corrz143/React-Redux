import React from "react";
import { BidTypesButtons } from "./BidTypesButtons";

export default {
  title: "BidTypes Components/BidTypesButtons",
  component: BidTypesButtons,
};

const Template = (args) => <BidTypesButtons {...args} />;

export const Buttons = Template.bind({});
Buttons.args = {
  buttons: {
    btnretry: "Retry Import",
    btnperiod: "Bid Periods",
    btnimport: "Import History",
    btndelete: "Delete",
  },
};
