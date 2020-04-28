import React from 'react';
import SingleCar from "./SingleCar";
import "../../../myStyle/carStyle.css";
import tesla from "../../../img/tesla1.jpg";

const ListCars = (props) => {


    const singleCar = props.cars.map((car) => {

        return(
            <SingleCar onDetails={props.onDetails} single={car} key={car.id} />
        );
    });

    return (
        <div className="row">
            {singleCar}
        </div>

    );

};

export default ListCars;