import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from "react-router-dom";
import './ds.css';

export const mainListItems = (
    <div>
        <ListSubheader inset>MAIN NAVIGATION</ListSubheader>
        <ListItem button component={Link} to="/dashboard/client/profile">           {/*vo zavisnost od ulogata*/}
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>

        {/*<ListItem button component={Link} to="/dashboard/client/profile" >*/}
        {/*    <ListItemIcon>*/}
        {/*        <PeopleIcon />*/}
        {/*    </ListItemIcon>*/}

        {/*    <ListItemText primary="Cars" />*/}
        {/*</ListItem>*/}


        {/*<ListItem button component={Link} to="/dashboard/client/profile" >*/}
        {/*    <ListItemIcon>*/}
        {/*        <PeopleIcon />*/}
        {/*    </ListItemIcon>*/}
        {/*    <ListItemText primary="Clients"  />*/}
        {/*</ListItem>*/}

        <ListItem button component={Link} to="/dashboard/client/following" >
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Renters" />
        </ListItem>


        <ListItem button component={Link} to="/dashboard/client/reservations" >
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Reservations" />
        </ListItem>


        {/*<ListItem button component={Link} to="/dashboard/client/profile" >*/}
        {/*    <ListItemIcon>*/}
        {/*        <LayersIcon />*/}
        {/*    </ListItemIcon>*/}
        {/*    <ListItemText primary="Car Histories" />*/}
        {/*</ListItem>*/}

    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Logs / reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Renter Session Logs" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Client Session Logs" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
    </div>
);