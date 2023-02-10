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
            <a href="https://drive.google.com/file/d/1uxDBkuyM3YVSKdXM7ceyQlJpIMTf0ym5/view?usp=sharing" target="_blank"><li className="navvar_item">About us</li></a>
            <li className="navvar_item">Our service</li>
            <li className="navvar_item">Portfolio</li>
        </ul>

        <a href="https://linktr.ee/rtagcontact" target="_blank"><button className="contac_button">Contact</button></a>
        </div>
    )
};