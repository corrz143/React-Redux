import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AABidTypesPage from "./pages/american-airlines/AABidTypes";
import AAPilotsPage from "./pages/american-airlines/AAPilotsPage";
import ASPilotsPage from "./pages/alaska-airlines/ASPilotsPage";

function App() {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/american-airlines/bidtypes" component={AABidTypesPage} />
                <Route path="/american-airlines/pilots" component={AAPilotsPage} />
                <Route path="/alaska-airlines/pilots" component={ASPilotsPage} />
            </Switch>
        </div>
    );    
}

export default App;