// import React from "react";
// import { HomePage } from "./HomePage";
// import { AdministrationView } from "../AdministrationView/AdministrationView";
// import { VersionView } from "../VersionView/VersionView";
// import { LogoView } from "../LogoView/LogoView";
// import { FooterView } from "../FooterView/FooterView";
// import * as Airlines from "../NavBarView/NavBarView.stories";
// import * as AirlineViews from "../AirlineView/AirlineView.stories";

// // export default {
// //   title: "Structural Components/HomeStart",
// //   component: HomeStart,
// // };

// const Template = (args) => <HomePage {...args} />;

// export const HomeViewPage = Template.bind({});
// HomeViewPage.args = {
//   administrationView: <AdministrationView name="Tom Jones!" />,
//   versionView: <VersionView current="1.1.0" />,
//   airlineView: [
//     {
//       ...AirlineViews.ExampleWithNameAndLink.args,
//       name: "American Airlines",
//       path: "/american-airlines/bidtypes",
//     },

//     {
//       ...AirlineViews.ExampleWithNameAndLink.args,
//       name: "Frontier Airlines",
//       path: "/frontier-airlines/bidtypes",
//     },
//     {
//       ...AirlineViews.ExampleWithNameAndLink.args,
//       name: "Alaska Airlines",
//       path: "/alaska-airlines/bidtypes",
//     },
//     {
//       ...AirlineViews.ExampleWithNameAndLink.args,
//       name: "UPS",
//       path: "/ups/bidtypes",
//     },
//   ],

//   logoView: <LogoView />,
//   navbarView: [
//     {
//       ...Airlines.AirlineDropdown.args,
//       airlineName: "American Airlines",
//       bidTypesPath: "/american-airlines/bidtypes",
//       pilotsPath: "/american-airlines/pilots",
//     },
//     {
//       ...Airlines.AirlineDropdown.args,
//       airlineName: "Alaska Airlines",
//       bidTypesPath: "/alaska-airlines/bidtypes",
//       pilotsPath: "/alaska-airlines/pilots",
//     },
//     {
//       ...Airlines.AirlineDropdown.args,
//       airlineName: "Frontier Airlines",
//       bidTypesPath: "/frontier-airlines/bidtypes",
//       pilotsPath: "/frontier-airlines/pilots",
//     },
//     {
//       ...Airlines.AirlineDropdown.args,
//       airlineName: "UPS",
//       bidTypesPath: "/ups/bidtypes",
//       pilotsPath: "/ups/pilots",
//     },
//   ],

//   footerView: <FooterView />,
// };
