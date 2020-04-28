import React from "react";
import "../../../myStyle/carStyle.css"

const SingleCar = (props) => {

    return(
        <div className="col-6 c6cas">
            <div className="row">
                <div className="col"><img src={props.single.imgLink} width="360px" height="320px" alt="tesla"/></div>
                <div className="col">
                    <h4 id="ho-kid"><b>{props.single.mark}</b></h4>
                    <p style={{marginBottom: "15px", textAlign: "center"}}><strong>Model:</strong> {props.single.model}
                    </p>
                    <p style={{margin: "0px"}}><strong>Plate: </strong>{props.single.plate}</p>
                    <p className="text-left" style={{margin: "0px"}}><strong>Color: </strong>{props.single.color}</p>
                    <p className="text-left" style={{marginBottom: "15px"}}><strong>Production year: </strong>{props.single.yearOfProduction}
                    </p>
                    <p className="text-left" style={{margin: "0px"}}><strong>Price: ${props.single.costPerDay}</strong></p>
                    <p className="text-left" style={{margin: "0px"}}><strong>Rating: {props.single.rating}</strong></p>
                    <div className="rating rating2">
                        <a href="#5" title="Give 5 stars">★</a>
                        <a href="#4" title="Give 4 stars">★</a>
                        <a href="#3" title="Give 3 stars">★</a>
                        <a href="#2" title="Give 2 stars">★</a>
                        <a href="#1" title="Give 1 star">★</a>
                    </div>
                    <button className="btn btn-info" onClick={() => props.onDetails(props.single.id, "details")} type="button" ><strong>Make reservation</strong></button>
                </div>
            </div>
        </div>
    );
};

export default SingleCar;