import React from "react";
import "../src/styles.css"
// import ASBidTypePage from "./alaska-airlines/ASBidTypePage";
// import ASPilotPage from "./alaska-airlines/ASPilotPage";

// import AAPilotPage from "./american-airlines/AAPilotPage";

// import JSBidTypePage from "./jetsuite/JSBidTypePage";
// import JSPilotPage from "./jetsuite/JSPilotPage";
// import UPBidTypePage from "./ups/UPBidTypePage";
// import UPPilotPage from "./ups/UPPilotPage";
import HomePage from "./pages/home/HomePage";

// import Header from "./shared/Header";
import Footer from "./components/FooterView/FooterView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  HeaderView from "./pages/header/HeaderView";
// import AABidTypes from "./pages/american-airlines/AABidTypes";
import AABidTypesPage from "./components/AmericanAirlines/BidTypesPage";
import AAPilotsPage from "./components/AmericanAirlines/AAPilotsPage";



const App = () =>  {

  return (
      <Router>
          <HeaderView />
          <Switch>
          
          <Route path="/" exact component={HomePage} />
          <Route path="/american-airlines/bidtypes" component={AABidTypesPage} />
          <Route path="/american-airlines/pilots" component={AAPilotsPage} />
         
          {/* <Footer /> */}
          </Switch>
          <Footer />
      </Router>
  );
 }
 
 export default App;












 




