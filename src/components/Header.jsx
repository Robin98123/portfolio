import React from 'react'
import NavVar from './NavVar'
import "./styles/header.css"
import Banner from "../img/banners/banner-portfolio.png"

export default function Header (){
    return(
        <div className='header_container'>
        <NavVar/>
        <div className='Banner_container'>
        <img src={Banner} alt="principal banner" className='banner_principal' />
        <ul className='hability_list'>
            <li>WEB DEVELOPER</li>
            <li>DESING UX/UI</li>
            <li>MULTIMEDIA</li>
        </ul>
        </div>
        </div>
    )
};
