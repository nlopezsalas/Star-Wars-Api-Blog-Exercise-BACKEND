import React from "react";
import "../../styles/home.css";
import "../../styles/lightsaber.css";



export const Lightsaber = () => {

    return (

    <div className="lightsaber">
        <div className="hilt">
            <div className="button-lightsaber"></div>
            <div className="button-lightsaber"></div>
            <div className="button-lightsaber"></div>
            <div className="handle">
                <div className="detail"></div>
                <div className="detail"></div>
                <div className="detail"></div>
            </div>
            <div className="blade"></div>
        </div>
    </div>
    
)}