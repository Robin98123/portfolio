import React from "react";
import adobe_skills from "../img/banners/adobe_skills.svg"
import adobe_ui from "../img/banners/adobe_skills_IU.svg"
import developer_skills1 from "../img/banners/developer_skills_1.svg"
import developer_skills2 from "../img/banners/developer_skills_2.svg"
import skills_icon from "../img/icons/skills_icono.svg"

import "./styles/biography.css"


export default function Skills (){
    return(
        <div className="container_skills">
            <div className="container_adobe-skills">
                <h1>Desing & multimedia</h1>
                <img src={adobe_skills}/>
            </div>
            <div className="container_hardware">
                <div className="adobe_uicontainer">
                <h1>Web Desing Developer</h1>
                <img src={adobe_ui}/>
                </div>
                <div className="developer_skillscontainer">
                <h1>Web Developer</h1>
                <img src={developer_skills1}/>
                <img src={developer_skills2}/>
                </div>
            </div>
            <div className="skills-round">
                <img src={skills_icon}/>
            </div>
        </div>
    )
};