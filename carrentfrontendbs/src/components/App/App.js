import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Welcome from "../Welcome/Welcome";
import RestOfTheApp from "../RestOfTheApp/RestOfTheApp";
import Dashboard from "../Dashboard/Dashboard";


function App() {
    return (
        <div className="App">
            {/*<Router>*/}
            {/*    <Welcome/>*/}
            {/*</Router>*/}
            <Router>
                <Switch>
                    <Route path={"/dashboard"} component={Dashboard}/>
                    <Route path={"/rota"} component={RestOfTheApp}/>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
