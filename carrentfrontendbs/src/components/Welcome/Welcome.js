import React, {useEffect, useState} from 'react';
import Login from "./Login";
import {BrowserRouter as Router, useHistory, Switch, Route} from 'react-router-dom';
import SignUpClient from "./SignUpClient";
import clientsService from "../../API/axiosIngredientService";
import rentersService from "../../API/axiosRentersService";
import SignUpRenter from "./SignUpRenter";
import Landing from "./Landing";

const Welcome = (props) => {

    const pushToC = () => {
        history.push("/signUpClient");
    };

    const pushToR = () => {
        history.push("/signUpRenter");
    };


    const createClient = (client) => {
        clientsService.addClient(client).then((response)=>{
            history.push("/");
        });
    };

    const createRenter = (renter) => {
        rentersService.addRenter(renter).then((response)=>{
            history.push("/");
        });
    };


    const history = useHistory();

    return (
        <div className="App">
            <Login/>
            <Route path={"/"} exact render={(props) => <Landing {...props} pushC={pushToC} pushR={pushToR}/>} />
            <Route path={"/signUpClient"} exact render={(props) => <SignUpClient {...props} onCreate={createClient}/>} />
            <Route path={"/signUpRenter"} exact render={(props) => <SignUpRenter {...props} onCreate={createRenter}/>} />

        </div>
    );
};

export default Welcome;