import React from "react";
import "./styles/navvar.css"
import logo_rtag from "../img/icons/logo-rtag.svg"

export default function NavVar (){
    return(
        <div id="navvar_container" className="filter">
        <div className="Logo_container">
        <img src={logo_rtag} alt="logo rtag" />
        </div>
        <ul className="navvar_list">
            <li>About us</li>
            <li>Our service</li>
            <li>Portfolio</li>
            <li>Reviews</li>
        </ul>

        <button className="contac_button">Contact</button>
        </div>
    )
};