import React, {useEffect, useState} from "react";
import {Route, useHistory} from "react-router-dom";
import clientsService from "../../../API/axiosIngredientService";
import ClientProfile from "./ClientProfile";
import EditClient from "./EditClient";
import ClientReservations from "./ClientReservations";
import ClientFollowing from "./ClientFollowing";
import reservationsService from "../../../API/axiosReservationsService";

const DashboardClient = (props) => {

    useEffect(() =>{
        loadClient(3);
    },[]);

    const [client, setClient] = useState([]);
    const history = useHistory();

    const deleteClient = (id) => {
        clientsService.deleteClient(id).then(() => {
            history.push("/rota/cars/list") ////////////////// OVDE TREBA DA PRENASOCUVA KON LOGIN I DA GO ISCISTI OD SESIJATA
        })
    };

    const loadClient = (id) => {            // ovde id ke se zima od sesijata spored toa koj klient vo momentot e najaven
        clientsService.fetchClient(id).then(response=>{
            setClient(response.data);
        })
    };

    const pushToEdit = (id) => {
        history.push(`/dashboard/client/edit/${id}`);
    };


    const updateClient = ((editedClient) => {
        clientsService.updateClient(editedClient).then((response)=>{

            const newClient = response.data;
            setClient(newClient);
            history.push("/dashboard/client/profile");
        });
    });

    return(
        <div>
            <Route path={"/dashboard/client/profile"} exact render={(props) => <div>
                <ClientProfile {...props} client={client} edit={pushToEdit} onDelete={deleteClient}/>
                <ClientReservations/>
                <ClientFollowing/>
            </div>}/>

            <Route path={"/dashboard/client/edit/:id"} exact render={(props) => <EditClient {...props} onSubmit={updateClient}/>} />

        </div>
    )

};
export default DashboardClient;