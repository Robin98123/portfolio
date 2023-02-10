import React from "react";
import round_icon from "../img/icons/lestdoit_round.svg"
import "./styles/secondbanner.css"

export default function SecondBanner(){
    return(

        <div className="background-footer2">
            <div className="container_mensage">
            <h1>Interested in my work?<br/>Let's make it possible together</h1>
            
            <div className="container_round">
                <img src={round_icon} className="round_icon"/>
            </div>
            </div>
        </div>


    )
}