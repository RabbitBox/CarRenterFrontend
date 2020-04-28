import React from 'react';
import './App.css';
import Welcome from "../Welcome/Welcome";
import RestOfTheApp from "../RestOfTheApp/RestOfTheApp";
import Dashboard from "../Dashboard/Dashboard";

function App() {
    return (
        <div className="App">
            {/*<Welcome/>*/}
            <RestOfTheApp/>
            {/*<Dashboard/>*/}
        </div>
    );
}

export default App;
