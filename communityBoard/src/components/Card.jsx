import React from "react";

const Card = (props) => {
    return (
        <div className = "card">
            <p className="competition">{props.competition}</p>
            <a href={props.link} >
                <img src={props.oppLogo} className= "logo"/>
            </a>
            <h4>vs. {props.opponent}</h4>
            <p>Date: {props.date}</p>
            <p>Location: {props.location} </p>
        </div>
    )
    }
    
    export default Card;