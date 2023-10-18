import React, { useState } from "react";
import "./styles/navvar.scss"
import logo_rtag from "../assets/logo.svg"
import '../assets/fonts/icomoon-portfolio/style.css'

export default function NavVar (){

    const [menulateral, setmenuLateral] = useState(true);

    const togglemenuLateral = () => {
       setmenuLateral (!menulateral )
    }

    return(
        <div id="navvar_container" className="filter">

            <div className="Logo_container">
                <img src={logo_rtag} alt="logo rtag" />
            </div>

            <div className="navvar">
                    <a href="#Galery"><button >Mi trabajo</button></a>
                    <a href="https://linktr.ee/rtagcontact" target="blank"><button>Info</button></a>
            </div>

            <div className="links">
                <a href="https://www.linkedin.com/in/robinson-bernal-55b897ba/" target="_blank">Linkedin<span class="icon-flecha"></span></a>
                <a href="https://drive.google.com/file/d/1uxDBkuyM3YVSKdXM7ceyQlJpIMTf0ym5/view" target="_blank">CV<span class="icon-flecha"></span></a>
            </div>

            <div className='links-responsive'>
                    <span className="icon-th-list" onClick={togglemenuLateral}></span>

                    <div className={`lateral-menu ${ menulateral ? 'NoisActive' : ''}`}>
                    <a href="https://www.linkedin.com/in/robinson-bernal-55b897ba/" target="_blank">Linkedin<span class="icon-flecha"></span></a>
                    <a href="https://drive.google.com/file/d/1uxDBkuyM3YVSKdXM7ceyQlJpIMTf0ym5/view" target="_blank">CV<span class="icon-flecha"></span></a>
                    </div>
            </div>

        </div>
    )
};