import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./Header/Header";
import Cars from "./Cars/Cars";
import Renters from "./Renters/Renters";
import Clients from "./Clients/Clients";


const RestOfTheApp = () => {

    return(

            <div className="App">
                <Header/>

                    <Route path={"/rota/clients"} component={Clients}/>
                    <Route path={"/rota/renters"} component={Renters}/>
                    <Route path={"/rota/cars"} component={Cars}/>


            </div>

    )
};
export default RestOfTheApp;