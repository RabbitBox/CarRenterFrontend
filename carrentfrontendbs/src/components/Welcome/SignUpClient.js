import React from "react";
import {useHistory} from "react-router-dom";

const SignUpClient = (props) => {

    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();

        const newClient = {
            "firstName": e.target.firstName.value,
            "lastName": e.target.lastName.value,
            "embg": e.target.embg.value,
            "age": e.target.age.value,
            "sex": e.target.sex.value,
            "driverLicenceNumber": e.target.driverLicenceNumber.value,
            "imgUrl": e.target.imgUrl.value,
            "crimeRecord": e.target.crimeRecord.checked,
        };
        props.onCreate(newClient);
    };

    const goBack = () => {
        history.push("/")
    };

    return(
        <div style={{margin: "60px"}}>
            <div className="container">
                <br/>
                <hr/>
                <div className="row">

                    <div className="col-md-3">
                        <div className="text-center">

                        </div>
                    </div>


                    <div className="col-md-9 personal-info">

                        <h3>To create account please enter you're personal info</h3>

                        <form onSubmit={onFormSubmit} className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="col-lg-3 control-label">First name:</label>
                                <div className="col-lg-8">
                                    <input  className="form-control" type="text" name={"firstName"} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Last name:</label>
                                <div className="col-lg-8">
                                    <input className="form-control"  type="text" name={"lastName"} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Embg:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text"  name={"embg"} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Age:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="number" name={"age"} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Gender:</label>
                                <div className="col-lg-8">
                                    <div className="ui-select">
                                        <select name={"sex"}  id="user_time_zone" className="form-control">
                                            <option value={"male"}>Male</option>
                                            <option value={"female"}>Female</option>
                                            <option value={"unoriented"}>Unoriented</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Driving Licence Number:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text"  name={"driverLicenceNumber"} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-3 control-label">Img URL:</label>
                                <div className="col-md-8">
                                    <input className="form-control"  type="text" name={"imgUrl"} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Crime Record:</label>
                                <div className="col-md-1">
                                    <input className="form-control" type="checkbox"  name={"crimeRecord"}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label"> </label>
                                <div className="col-md-8">
                                    <input type="submit" className="btn btn-warning" value="Save Changes"/>
                                    <span> </span>
                                    <input onClick={goBack} type="button" className="btn btn-dark" value="Cancel"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpClient;