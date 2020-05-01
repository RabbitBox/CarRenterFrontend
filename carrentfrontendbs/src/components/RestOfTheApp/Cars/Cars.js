import React, {useState, useEffect} from 'react';
import {Route, useHistory} from "react-router-dom"
import carService from "../../../API/axiosCarService";
import ListCars from "./ListCars";
import "../../../myStyle/carStyle.css"


const Cars = ({match}) => {

    useEffect(() =>{
        loadCars();
    },[]);

    const [cars, setCars] = useState([]);
    const [car, setCar] = useState({});
    const [carTermines, setCarTermines] = useState([]);


    const history = useHistory();


    const loadCars = () => {
        carService.fetchCars().then(response=>{
            let list = response.data;
            list.sort((a, b) => (a.id > b.id) ? 1 : -1)
            setCars(list);
        })
    };


    const loadCar = (id, decideFlag) => {
        carService.fetchCar(id).then(response=>{
            carService.fetchTermines(id).then(response=>{
                setCarTermines(response.data);
            });
            setCar(response.data);
            if(decideFlag === "details"){
                history.push(`/cars/details/${id}`);
            }
            else if(decideFlag === "edit"){
                history.push(`/cars/edit/${id}`);
            }

        })
    };

    const setRating = (id, rating) => {
        carService.setCarRating(id,rating).then(response =>{
            loadCars();
            history.push("/rota/cars/list");
        })
    };

    return(
        <div className="App">
            <h2 className="text-center" style={{color: "rgb(60,64,68)"}}>Give you're self a comfy ride</h2>
            <p className="text-center" id="car-paragraph" style={{color: "rgb(112,120,128)"}}>All of the cars that are
                listed down are tehnical checked multiple times, showing good result on test drives.<br/>We encourage you
                to pick the best ride for you're needs, we are here to help with the choice.<br/>Pick and ride, good
                luck !</p>

            <div id="ccc1">
                    <Route path={`${match.path}/list`} exact render={() => <ListCars cars={cars} rating={setRating} onDetails={loadCar}/>}/>
                    {/*<Route path={"/cars/details/:id"} exact render={(props) => <CarDetails {...props} termines={carTermines} car={car}/>} />*/}
            </div>
        </div>
    );
};

export default Cars;
