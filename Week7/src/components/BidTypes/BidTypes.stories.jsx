import React from "react";
import { BidTypes } from "./BidTypes";

export default {
  title: "BidTypes Components/BidTypes",
  component: BidTypes,
};

const Template = (args) => <BidTypes {...args} />;

export const BidTypesExample = Template.bind({});
BidTypesExample.args = {
  type: {
    id: 1,
    bidtypes: "CAPTAIN ANC 736",
    status: "Current",
    bidPeriods: 1,
    lastImport: "Nov 1 2017 12:00AM",
    btnretry: "Retry Import",
    btnperiod: "Bid Periods",
    btnimport: "Import History",
    btndelete: "Delete",
  },
};
