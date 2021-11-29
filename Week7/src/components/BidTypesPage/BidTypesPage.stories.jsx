import React from "react";
import { BidTypesPage } from "./BidTypesPage";
import * as BidTypesList from "../BidTypes/BidTypes.stories";

export default {
  title: "BidTypes Components/BidTypesPage",
  component: BidTypesPage,
};

const Template = (args) => <BidTypesPage {...args} />;

export const BidTypesInfo = Template.bind({});
BidTypesInfo.args = {
  types: [
    {
      ...BidTypesList.BidTypesExample.args,
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
    {
      ...BidTypesList.BidTypesExample.args,
      id: 2,
      bidtypes: "CAPTAIN LAX 736",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      btnretry: "Retry Import",
      btnperiod: "Bid Periods",
      btnimport: "Import History",
      btndelete: "Delete",
    },
    {
      ...BidTypesList.BidTypesExample.args,
      id: 3,
      bidtypes: "CAPTAIN PDX 736",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      btnretry: "Retry Import",
      btnperiod: "Bid Periods",
      btnimport: "Import History",
      btndelete: "Delete",
    },
    {
      ...BidTypesList.BidTypesExample.args,
      id: 4,
      bidtypes: "CAPTAIN SEA 736",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      btnretry: "Retry Import",
      btnperiod: "Bid Periods",
      btnimport: "Import History",
      btndelete: "Delete",
    },
    {
      ...BidTypesList.BidTypesExample.args,
      id: 5,
      bidtypes: "FIRST OFFICER ANC 736",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      btnretry: "Retry Import",
      btnperiod: "Bid Periods",
      btnimport: "Import History",
      btndelete: "Delete",
    },
    {
      ...BidTypesList.BidTypesExample.args,
      id: 6,
      bidtypes: "FIRST OFFICER ANC 736",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      btnretry: "Retry Import",
      btnperiod: "Bid Periods",
      btnimport: "Import History",
      btndelete: "Delete",
    },
  ],
};
