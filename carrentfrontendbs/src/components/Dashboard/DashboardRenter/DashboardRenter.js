import React, {useEffect, useState} from "react";
import {Route, useHistory} from "react-router-dom";
import renterService from "../../../API/axiosRentersService";
import RenterProfile from "./RenterProfile";
import EditRenter from "./EditRenter";
import RenterFollowers from "./RenterFollowers";
import RenterReservations from "./RenterReservations";
import ClientProfile from "../DashboardClient/ClientProfile";
import ClientReservations from "../DashboardClient/ClientReservations";
import ClientFollowing from "../DashboardClient/ClientFollowing";
import EditClient from "../DashboardClient/EditClient";
import RenterCars from "./RenterCars";
import carService from "../../../API/axiosCarService";
import EditCar from "./EditCar";

const DashboardRenter = (props) => {

    useEffect(() =>{
        loadRenter(7);          // ovde id ke se zima od sesijata spored toa koj klient vo momentot e najaven
        loadCars(7)
    },[]);

    const [renter, setRenter] = useState([]);
    const [cars, setCars] = useState([]);
    const [car, setCar] = useState({});
    const history = useHistory();

    const deleteRenter = (id) => {
        renterService.deleteRenter(id).then(() => {
            history.push("/rota/cars/list") ////////////////// OVDE TREBA DA PRENASOCUVA KON LOGIN I DA GO ISCISTI OD SESIJATA
        })
    };

    const loadRenter = (id) => {
        renterService.fetchRenter(id).then(response=>{
            setRenter(response.data);
        })
    };

    const pushToEdit = (id) => {
        history.push(`/dashboard/renter/edit/${id}`);
    };


    const updateRenter = ((editedRenter) => {
        renterService.updateRenter(editedRenter).then((response)=>{

            const newRenter = response.data;
            setRenter(newRenter);
            history.push("/dashboard/renter/profile");
        });
    });

    const loadCars = (id) => {
        carService.fetchCarsByRenterId(id).then(response=>{      // vnimavaj na id
            let list = response.data;
            list.sort((a, b) => (a.id > b.id) ? 1 : -1)
            setCars(list);
        })
    };

    const deleteCar = (id) => {
        carService.deleteCar(id).then(() => {

            const carsReduced = cars.filter((r) => {
                return r.id !== id;
            });
            setCars(carsReduced);
        })
    };

    const updateCar = ((editedCar) => {
        carService.updateCar(editedCar).then((response)=>{

            const newCar = response.data;

            const newCarsRef = cars.map((item)=>{

                if (item.id===newCar.id) {
                    return newCar;
                }
                return item;
            });

            setCars(newCarsRef);
            history.push("/dashboard/renter/profile");
        });
    });

    const loadCar = (id) => {
        carService.fetchCar(id).then(response=>{
            setCar(response.data);
            history.push(`/dashboard/renter/car/edit/${id}`);
        })
    };




    return(
        <div>
            <Route path={"/dashboard/renter/profile"} exact render={(props) => <div>
                <RenterProfile {...props} renter={renter} edit={pushToEdit} onDelete={deleteRenter}/>
                <RenterReservations/>
                <RenterFollowers/>
                <RenterCars {...props} cars={cars} carEdit={loadCar} onDeleteCar={deleteCar}/>
            </div>}/>

            <Route path={"/dashboard/renter/edit/:id"} exact render={(props) => <EditRenter {...props} onSubmit={updateRenter}/>} />
            <Route path={"/dashboard/renter/car/edit/:id"} exact render={(props) => <EditCar {...props} car={car} onSubmitCar={updateCar}/>} />

        </div>
    )

};
export default DashboardRenter;