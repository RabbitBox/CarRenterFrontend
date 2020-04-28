import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./Header/Header";
import Cars from "./Cars/Cars";
import Renters from "./Renters/Renters";
import Clients from "./Clients/Clients";


const RestOfTheApp = () => {

    return(
        <Router>
            <div className="App">
                <Header/>

                <Switch>
                    <Route path={"/clients"} component={Clients}/>
                    <Route path={"/renters"} component={Renters}/>
                    <Route path={"/cars"} component={Cars}/>
                </Switch>

            </div>
        </Router>
    )
};
export default RestOfTheApp;