import React from "react";
import "../src/styles.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  HeaderView from "./pages/header/HeaderView";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/FooterView/FooterView";
import AABidTypesPage from "./pages/american-airlines/AABidTypesPage";

import AAPilotsPage from "./pages/american-airlines/AAPilotsPage";


const App = () =>  {

  return (
      <Router>
          <HeaderView />
          <Switch>
          
          <Route path="/" exact component={HomePage} />
          <Route path="/american-airlines/bidtypes" component={AABidTypesPage} />
          <Route path="/american-airlines/pilots" component={AAPilotsPage} />
         
        
          </Switch>
          <Footer />
      </Router>
  );
 }
 
 export default App;












 




