import React from "react";

const Header = (props) => {

    return(
        <nav className="navbar navbar-light navbar-expand-md" id="header-nav" style={{padding: "15px"}}>
            <div className="container-fluid"><a className="navbar-brand" href="/rota/cars/list"
                                                style={{fontSize: "22px", fontFamily: "Aclonica, sans-serif"}}
            ><em>Car Rent
                Management System</em></a>
                <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span
                    className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1" style={{fontSize: "18px"}}>
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item kopce" role="presentation"><input
                                className="border rounded border-info form-control" type="text"
                                style={{width: "160px", height: "38px", padding: "7px"}} name="searchInput" placeholder="Search..."/>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="l1" href="/rota/cars/list" style={{margin: "8px", opacity: "0.90"}}>Cars&nbsp;</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="l1" href="/rota/reservations" style={{margin: "8px", opacity: "0.90"}}>Reservations&nbsp;</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="l1" href="/rota/renters" style={{margin: "8px", opacity: "0.90"}}>Renters</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="l1" href="/rota/clients" style={{margin: "8px", opacity: "0.90"}}>Clients</a>
                            </li>

                            <li className="nav-item" role="presentation">   {/*ovde treba da se praka idto na toj sto e najaven i ulogata za da znae sto da izrenderira t.e koja komponenta*/}
                                <a className="l1" href="/dashboard/client/profile" style={{margin: "8px", opacity: "0.90"}}><i className="fa fa-user profilce"></i></a>
                            </li>

                        </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;