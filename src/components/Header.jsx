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
            <a href="https://github.com/Robin98123" target="_blank"><li>WEB DEVELOPER</li></a>
            <a href="https://www.behance.net/ryrinconmultimedia" target="_blank"><li>DESING UX/UI</li></a>
            <a href="https://www.behance.net/gallery/122225533/Reel-of-work" target="_blank"><li>MULTIMEDIA</li></a>
        </ul>
        </div>
        </div>
    )
};
