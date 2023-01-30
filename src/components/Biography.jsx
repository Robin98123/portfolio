import React from "react";
import Photo_main from "../img/banners/img-usiario.png"
import "./styles/biography.css"

export default function Biography (){
    return(
        <div className="main_photo">
            <img src={Photo_main} alt="foto main"/>
            <div className="information_main">
                <h1>Hello!, <br/>
                 I'm Robinson, Front End developer <br/>
                 Nice to meet you.</h1>
                <p>My introduction to the digital sector was through the world of design and multimedia, leading me to gradually work in the fields of web development where I wanted to integrate my knowledge in the design and user experience, developing fresh, fun and dynamic websites.
I work every day to polish my skills and give my best in each project.
</p>
            </div>
        </div>
    )
};