import React from "react";
import "./styles/navvar.css"
import logo_rtag from "../img/icons/logo-rtag.svg"
import menu_img from "../img/icons/menu_icon.svg"

export default function NavVar (){
    return(
        <div id="navvar_container" className="filter">
        <div className="Logo_container">
        <img src={logo_rtag} alt="logo rtag" />
        </div>
        <ul className="navvar_list">
            <li className="navvar_listmenu"><img src={menu_img}/></li>
            <li className="navvar_item">About us</li>
            <li className="navvar_item">Our service</li>
            <li className="navvar_item">Portfolio</li>
        </ul>

        <button className="contac_button">Contact</button>
        </div>
    )
};