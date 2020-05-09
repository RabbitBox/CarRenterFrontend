import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Welcome from "../Welcome/Welcome";
import RestOfTheApp from "../RestOfTheApp/RestOfTheApp";
import Dashboard from "../Dashboard/Dashboard";
import LogOut from "../Welcome/LogOut";


function App() {
    return (
        <div className="App">

            <Router>
                <Switch>
                    <Route path={"/home"} component={Welcome}/>
                    <Route path={"/dashboard"} component={Dashboard}/>
                    <Route path={"/rota"} component={RestOfTheApp}/>
                    <Route path={"/logout"} component={LogOut}/>

                </Switch>
            </Router>

        </div>
    );
}

export default App;
