import React from "react";
import { BidTypesImport } from "./BidTypesImport";

export default {
  title: "BidTypes Components/BidTypesImport",
  component: BidTypesImport,
};

const Template = (args) => <BidTypesImport {...args} />;

export const Default = Template.bind({});
Default.args = {
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
    state: "DEFAULT",
    backgrounds: "",
  },
  isImporting: false,
};

export const Imported = Template.bind({});
Imported.args = {
  type: {
    ...Default.args.type,
    status: "Importing",
    state: "IMPORTED",
    backgrounds: "lightyellow",
    btndelete: "Cancel",
  },
  isImporting: true,
};
